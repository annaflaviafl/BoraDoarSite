import React, { useState, useEffect } from 'react';
import { getInstituicao, postUsuario } from '../../services/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  SegundaPagina, TextoInstituicoes, TextoDoacao, BotoesContainer, BotaoAlimentacao, BotaoHigienicos, BotaoRoupas, BotaoAgua,
  BotaoAnimais, BotaoRoupaCama, CardContainer, Card, CardCategoria, CardContent, CardBotao, BotaoNovaInstituicao,
  BotaoContainer, Modal, NavegacaoContainer, BotaoNavegacao, ModalOverlay // Importe ModalOverlay
} from './index.style';

const Doacoes = () => {
  const [selecionaCategoria, setSelecionaCategoria] = useState('Alimentação');
  const [instituicao, setInstituicao] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const cardsPorPagina = 3;

  const fetchInstituicao = () => {
    getInstituicao(
      (data) => setInstituicao(data),
      (error) => console.error('Erro ao buscar instituições:', error)
    );
  };

  useEffect(() => {
    fetchInstituicao();
  }, []);

  const manipularCliqueCategoria = (categoria) => {
    setSelecionaCategoria(categoria);
    setPaginaAtual(0); // Resetar para a primeira página ao mudar de categoria
  };

  const instituicaoFiltrada = instituicao.filter(inst => inst.categoria === selecionaCategoria);
  const inicioIndice = paginaAtual * cardsPorPagina;
  const fimIndice = inicioIndice + cardsPorPagina;
  const instituicoesExibidas = instituicaoFiltrada.slice(inicioIndice, fimIndice);

  const handleAbrirModal = () => {
    setMostrarModal(true);
  };

  const handleFecharModal = () => {
    setMostrarModal(false);
    setNome('');
    setCategoria('');
    setDescricao('');
    setErro('');
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const cadastrarNovaInstituicao = async (event) => {
    event.preventDefault();

    const modelRequest = {
      Nome: nome,
      Categoria: categoria,
      Descricao: descricao,
    };

    try {
      await postUsuario(
        modelRequest,
        (result) => {
          if (result && result.id) {
            setErro('');
            setNome('');
            setCategoria('');
            setDescricao('');
            fetchInstituicao();
            setMostrarModal(false);
          } else {
            setErro('Erro ao cadastrar Instituição');
          }
        },
        (error) => {
          console.error('Erro ao conectar ao servidor:', error);
          setErro('Erro ao conectar ao servidor');
        }
      );
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      setErro('Erro ao conectar ao servidor');
    }
  };

  const proximaPagina = () => {
    setSlideDirection('right');
    setPaginaAtual((prev) => prev + 1);
  };

  const paginaAnterior = () => {
    setSlideDirection('left');
    setPaginaAtual((prev) => prev - 1);
  };

  return (
    <SegundaPagina>
      <TextoInstituicoes>Para quem direcionar doações?</TextoInstituicoes>
      <TextoDoacao>
        Sua doação pode ser <span>direcionada</span> para aquilo que mais <span style={{ textDecoration: 'underline', color: '#000' }}>falta</span>
      </TextoDoacao>
      <BotoesContainer>
        <BotaoAlimentacao
          onClick={() => manipularCliqueCategoria('Alimentação')}
          ativo={selecionaCategoria === 'Alimentação'}
        >
          Alimentação
        </BotaoAlimentacao>
        <BotaoHigienicos
          onClick={() => manipularCliqueCategoria('Itens Higiênicos')}
          ativo={selecionaCategoria === 'Itens Higiênicos'}
        >
          Itens Higiênicos
        </BotaoHigienicos>
        <BotaoRoupas
          onClick={() => manipularCliqueCategoria('Roupas')}
          ativo={selecionaCategoria === 'Roupas'}
        >
          Roupas
        </BotaoRoupas>
        <BotaoAgua
          onClick={() => manipularCliqueCategoria('Água')}
          ativo={selecionaCategoria === 'Água'}
        >
          Água
        </BotaoAgua>
        <BotaoAnimais
          onClick={() => manipularCliqueCategoria('Itens para Animais')}
          ativo={selecionaCategoria === 'Itens para Animais'}
        >
          Itens para Animais
        </BotaoAnimais>
        <BotaoRoupaCama
          onClick={() => manipularCliqueCategoria('Roupas de cama')}
          ativo={selecionaCategoria === 'Roupas de cama'}
        >
          Roupas de cama
        </BotaoRoupaCama>
      </BotoesContainer>

      <NavegacaoContainer>
        {paginaAtual > 0 && (
          <BotaoNavegacao onClick={paginaAnterior}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </BotaoNavegacao>
        )}
        <CardContainer sliding={slideDirection !== null} direction={slideDirection}>
          {instituicoesExibidas.map(inst => (
            <Card key={inst.id}>
              <CardCategoria className={`card-categoria-${inst.categoria.replace(/ /g, '')}`}>
                {inst.categoria}
              </CardCategoria>
              <CardContent>
                <h3>{inst.nome}</h3>
                <p>{inst.descricao}</p>
              </CardContent>
              <CardBotao className={`card-botao-${inst.categoria.replace(/ /g, '')}`}>
                Quero doar
              </CardBotao>
            </Card>
          ))}
        </CardContainer>
        {fimIndice < instituicaoFiltrada.length && (
          <BotaoNavegacao onClick={proximaPagina}>
            <FontAwesomeIcon icon={faChevronRight} />
          </BotaoNavegacao>
        )}
      </NavegacaoContainer>

      <BotaoContainer>
        <BotaoNovaInstituicao onClick={handleAbrirModal}>Cadastre uma nova instituição</BotaoNovaInstituicao>
      </BotaoContainer>

      {mostrarModal && (
        <>
          <ModalOverlay onClick={handleFecharModal} />
          <Modal>
            <h2>Cadastrar Nova Instituição</h2>
            <form onSubmit={cadastrarNovaInstituicao}>
              <label>Nome da Instituição</label>
              <input type="text" value={nome} onChange={handleNomeChange} required />

              <label>Categoria</label>
              <select value={categoria} onChange={handleCategoriaChange} required>
                <option value="">Selecione a categoria</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Itens Higiênicos">Itens Higiênicos</option>
                <option value="Roupas">Roupas</option>
                <option value="Água">Água</option>
                <option value="Itens para Animais">Itens para Animais</option>
                <option value="Roupas de cama">Roupas de cama</option>
              </select>

              <label>Descrição</label>
              <textarea value={descricao} onChange={handleDescricaoChange} />

              {erro && <p style={{ color: 'red' }}>{erro}</p>}

              <div className="button-container">
                <button type="button" onClick={handleFecharModal}>Cancelar</button>
               
                <button type="submit">Confirmar</button>
              </div>
            </form>
          </Modal>
        </>
      )}
    </SegundaPagina>
  );
};

export default Doacoes;
