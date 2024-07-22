import React, { useState, useEffect } from 'react';
import { getDoacao, PeriodoEnum } from '../../services/Home';
import { 
  ChartBox, ButtonContainer, Chart, ChartBar, ChartBarInner, ChartBarLabel, 
  ChartBarPercentage, TerceiraPagina, TextoItensDoados, TextoImpacto, Grafico, TextoLocais
} from './index.style';

const GraficoDoacao = () => {
  const [doacoes, setDoacoes] = useState([]); // Estado para armazenar as doações
  const [totalDoacoesGeral, setTotalDoacoesGeral] = useState(0); // Estado para armazenar o total geral de doações
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [periodo, setPeriodo] = useState(PeriodoEnum.TodoPeriodo); // Estado para armazenar o período selecionado
  const [activeButton, setActiveButton] = useState(PeriodoEnum.TodoPeriodo); // Estado para armazenar o botão ativo

  const MAX_HEIGHT = 210; // Altura máxima dos retângulos

  useEffect(() => {
    fetchDoacoes(periodo); // Busca as doações sempre que o período mudar
  }, [periodo, doacoes]);

  // Função para buscar doações do backend
  const fetchDoacoes = (selectedPeriodo) => {
    getDoacao(selectedPeriodo, (data) => {
      // Ordena as doações e pega as 4 categorias com mais doações
      const sortedData = data.sort((a, b) => b.totalDoacoes - a.totalDoacoes).slice(0, 4);
      setDoacoes(sortedData);

      // Define o total geral de doações se houver dados
      if (sortedData.length > 0) {
        setTotalDoacoesGeral(sortedData[0].totalDoacoesGeral);
      }
    }, (errorMessage) => {
      setError(errorMessage); // Define o estado de erro se houver um erro
    });
  };

  // Função para lidar com a mudança de período
  const handlePeriodoChange = (e) => {
    const selectedPeriodo = parseInt(e.target.value, 10);
    setPeriodo(selectedPeriodo);
    setActiveButton(selectedPeriodo); // Atualiza o botão ativo
  };

  // Função para calcular a porcentagem de doações
  const calculatePercentage = (totalDoacoes) => {
    return (totalDoacoes / totalDoacoesGeral) * 100;
  };

  // Função para calcular a altura do retângulo proporcionalmente ao valor máximo de doações
  const calculateHeight = (totalDoacoes, maxDoacoes) => {
    return (totalDoacoes / maxDoacoes) * MAX_HEIGHT;
  };

  const barColors = ['#5D74F1', '#6E8DDC', '#B6C6EE', '#D2DCF5']; // Cores para os retângulos

  // Valor máximo de doações das categorias exibidas
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
            <button 
              value={PeriodoEnum.TodoPeriodo} 
              onClick={handlePeriodoChange} 
              className={activeButton === PeriodoEnum.TodoPeriodo ? 'active' : ''}
            >
              Todo Período
            </button>
            <button 
              value={PeriodoEnum.UltimoAno} 
              onClick={handlePeriodoChange} 
              className={activeButton === PeriodoEnum.UltimoAno ? 'active' : ''}
            >
              Último Ano
            </button>
            <button 
              value={PeriodoEnum.UltimoMes} 
              onClick={handlePeriodoChange} 
              className={activeButton === PeriodoEnum.UltimoMes ? 'active' : ''}
            >
              Último Mês
            </button>
            <button 
              value={PeriodoEnum.UltimaSemana} 
              onClick={handlePeriodoChange} 
              className={activeButton === PeriodoEnum.UltimaSemana ? 'active' : ''}
            >
              Última Semana
            </button>
          </ButtonContainer>
          {error && <div className="error">{error}</div>} {/* Exibe erro se houver */}
          <Chart>
            {doacoes.map((doacao, index) => (
              <ChartBar key={index}>
                <ChartBarPercentage>
                  {calculatePercentage(doacao.totalDoacoes).toFixed(2)}% {/* Exibe a porcentagem de doações */}
                </ChartBarPercentage>
                <ChartBarLabel>{doacao.categoria}</ChartBarLabel> {/* Exibe a categoria */}
                <ChartBarInner style={{ height: `${calculateHeight(doacao.totalDoacoes, maxDoacoes)}px`, backgroundColor: barColors[index] }} /> {/* Define a altura do retângulo */}
              </ChartBar>
            ))}
          </Chart>
        </ChartBox>
      </Grafico>
    </TerceiraPagina>
  );
};

export default GraficoDoacao;
