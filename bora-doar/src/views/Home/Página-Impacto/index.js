import React, { useState, useEffect } from 'react';
import { getDoacao, PeriodoEnum } from '../../../services/Home/index';
import { 
  ChartBox, Chart, ChartBar, ChartBarInner, ChartBarLabel, 
  ChartBarPercentage, TerceiraPagina, TextoItensDoados, TextoImpacto, Grafico, TextoLocais, Button, ButtonContainer
} from '../index.style';

const GraficoDoacao = () => {
  const [doacoes, setDoacoes] = useState([]);
  const [totalDoacoesGeral, setTotalDoacoesGeral] = useState(0);
  const [error, setError] = useState(null);
  const [periodo, setPeriodo] = useState(PeriodoEnum.TodoPeriodo);
  const [activeButton, setActiveButton] = useState(PeriodoEnum.TodoPeriodo);

  const MAX_HEIGHT = 210;

  useEffect(() => {
    fetchDoacoes(periodo);
  }, [periodo]);

  const fetchDoacoes = (selectedPeriodo) => {
    getDoacao(selectedPeriodo, (data) => {
      const sortedData = data.sort((a, b) => b.totalDoacoes - a.totalDoacoes).slice(0, 4);
      setDoacoes(sortedData);

      if (sortedData.length > 0) {
        setTotalDoacoesGeral(sortedData[0].totalDoacoesGeral);
      }
    }, (errorMessage) => {
      setError(errorMessage);
    });
  };

  const handlePeriodoChange = (e) => {
    const selectedPeriodo = parseInt(e.target.value, 10);
    setPeriodo(selectedPeriodo);
    setActiveButton(selectedPeriodo);
  };

  const calculatePercentage = (totalDoacoes) => {
    return (totalDoacoes / totalDoacoesGeral) * 100;
  };

  const calculateHeight = (totalDoacoes, maxDoacoes) => {
    return (totalDoacoes / maxDoacoes) * MAX_HEIGHT;
  };

  const barColors = ['#5D74F1', '#6E8DDC', '#B6C6EE', '#D2DCF5'];

  const maxDoacoes = doacoes.length > 0 ? doacoes[0].totalDoacoes : 1;

  return (
    <TerceiraPagina>
      <TextoItensDoados>Quais são os itens mais doados?</TextoItensDoados>
      <TextoImpacto>
        Veja onde as doações estão causando <span>impacto</span>
      </TextoImpacto>
      <Grafico>
        <TextoLocais>
          Para quais locais as <br /> doações foram alocadas
        </TextoLocais>
        <ChartBox>
          <ButtonContainer>
            <Button
              onClick={handlePeriodoChange}
              active={activeButton === PeriodoEnum.TodoPeriodo}
              value={PeriodoEnum.TodoPeriodo}
            >
              Todo Período
            </Button>
            <Button
              onClick={handlePeriodoChange}
              active={activeButton === PeriodoEnum.UltimoAno}
              value={PeriodoEnum.UltimoAno}
            >
              Último Ano
            </Button>
            <Button
              onClick={handlePeriodoChange}
              active={activeButton === PeriodoEnum.UltimoMes}
              value={PeriodoEnum.UltimoMes}
            >
              Último Mês
            </Button>
            <Button
              onClick={handlePeriodoChange}
              active={activeButton === PeriodoEnum.UltimaSemana}
              value={PeriodoEnum.UltimaSemana}
            >
              Última Semana
            </Button>
          </ButtonContainer>
          {error && <div className="error">{error}</div>}
          <Chart>
            {doacoes.map((doacao, index) => (
              <ChartBar key={index}>
                <ChartBarPercentage>
                  {calculatePercentage(doacao.totalDoacoes).toFixed(2)}%
                </ChartBarPercentage>
                <ChartBarLabel>{doacao.categoria}</ChartBarLabel>
                <ChartBarInner
                  style={{
                    height: `${calculateHeight(doacao.totalDoacoes, maxDoacoes)}px`,
                    backgroundColor: barColors[index],
                  }}
                />
              </ChartBar>
            ))}
          </Chart>
        </ChartBox>
      </Grafico>
    </TerceiraPagina>
  );
};



export default GraficoDoacao;
