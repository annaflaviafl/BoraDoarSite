import React, { useState, useEffect } from 'react';
import { getInstituicao, postInstituicao, postDoacao } from '../../../services/Home/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import iconDoar from '../assets/icon-doar.png';
import { Categorias } from '../../../enums/Categorias.ts'; 
import {
  SegundaPagina, TextoInstituicoes, TextoDoacao, BotoesContainer, BotaoAlimentacao, BotaoHigienicos, BotaoRoupas, BotaoAgua,
  BotaoAnimais, BotaoRoupaCama, CardContainer, Card, CardCategoria, CardContent, CardBotao, BotaoNovaInstituicao,
  BotaoContainer, Modal, ModalOverlay, NavegacaoContainer, BotaoNavegacao, ModalDoacao, ModalMensagem, ModalMensagemOverlay
} from '../index.style';

const Doacoes = () => {
  const [selecionaCategoria, setSelecionaCategoria] = useState(Categorias.ALIMENTACAO);
  const [instituicao, setInstituicao] = useState([]);
  const [mostrarModalDoacao, setMostrarModalDoacao] = useState(false);
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState(null);
  const [valorDoacao, setValorDoacao] = useState(0);
  const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [mostrarModalMensagem, setMostrarModalMensagem] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const cardsPorPagina = 3;

  const fetchInstituicao = () => {
    getInstituicao(
      (data) => setInstituicao(data),
      (error) => setErro('Erro ao buscar instituições. Tente novamente mais tarde.')
    );
  };  

  useEffect(() => {
    fetchInstituicao();
  }, []);

  const manipularCliqueCategoria = (categoria) => {
    setSelecionaCategoria(categoria);
    setPaginaAtual(0);
  };

  const instituicaoFiltrada = instituicao.filter(inst => inst.categoria === selecionaCategoria);
  const inicioIndice = paginaAtual * cardsPorPagina;
  const fimIndice = inicioIndice + cardsPorPagina;
  const instituicoesExibidas = instituicaoFiltrada.slice(inicioIndice, fimIndice);

  const handleAbrirModalDoacao = (inst) => {
    setInstituicaoSelecionada(inst);
    setMostrarModalDoacao(true);
  };

  const handleFecharModalDoacao = () => {
    setMostrarModalDoacao(false);
    setValorDoacao(0);
  };

  const handleAbrirModalCadastro = () => {
    setMostrarModalCadastro(true);
  };

  const handleFecharModalCadastro = () => {
    setMostrarModalCadastro(false);
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
  
      postInstituicao(
        modelRequest,
        (result) => {
          if (result && result.id) {
            setErro('');
            setNome('');
            setCategoria('');
            setDescricao('');
            fetchInstituicao();
            setMostrarModalCadastro(false);
          } else {
            setErro('Erro ao cadastrar Instituição');
          }
        },
      );
  };
  
  const proximaPagina = () => {
    setSlideDirection('right');
    setPaginaAtual((prev) => prev + 1);
  };

  const paginaAnterior = () => {
    setSlideDirection('left');
    setPaginaAtual((prev) => prev - 1);
  };

  const handleDoacao = async () => {
    const userId = localStorage.getItem('userId');
    const dadosDoacao = {
      usuarioId: userId,
      instituicaoId: instituicaoSelecionada.id,
      valor: valorDoacao,
    };
  
    postDoacao(
        dadosDoacao,
        (message) => {
          setMensagem(message);
          setMostrarModalMensagem(true);
          handleFecharModalDoacao();
        },
        (error) => {
          setErro('Erro ao fazer doação. Tente novamente mais tarde.');
          setMensagem('');
          setMostrarModalMensagem(true);
        }
      );
  };
  
  const handleFecharModalMensagem = () => {
    setMostrarModalMensagem(false);
    setMensagem('');
  };

  return (
    <SegundaPagina>
      <TextoInstituicoes>Para quem direcionar doações?</TextoInstituicoes>
      <TextoDoacao>
        Sua doação pode ser <span>direcionada</span> para aquilo que mais <span style={{ textDecoration: 'underline', color: '#000' }}>falta</span>
      </TextoDoacao>
      <BotoesContainer>
        <BotaoAlimentacao
          onClick={() => manipularCliqueCategoria(Categorias.ALIMENTACAO)}
          ativo={selecionaCategoria === Categorias.ALIMENTACAO}
        >
          {Categorias.ALIMENTACAO}
        </BotaoAlimentacao>
        <BotaoHigienicos
          onClick={() => manipularCliqueCategoria(Categorias.HIGIENICOS)}
          ativo={selecionaCategoria === Categorias.HIGIENICOS}
        >
          {Categorias.HIGIENICOS}
        </BotaoHigienicos>
        <BotaoRoupas
          onClick={() => manipularCliqueCategoria(Categorias.ROUPAS)}
          ativo={selecionaCategoria === Categorias.ROUPAS}
        >
          {Categorias.ROUPAS}
        </BotaoRoupas>
        <BotaoAgua
          onClick={() => manipularCliqueCategoria(Categorias.AGUA)}
          ativo={selecionaCategoria === Categorias.AGUA}
        >
          {Categorias.AGUA}
        </BotaoAgua>
        <BotaoAnimais
          onClick={() => manipularCliqueCategoria(Categorias.ANIMAIS)}
          ativo={selecionaCategoria === Categorias.ANIMAIS}
        >
          {Categorias.ANIMAIS}
        </BotaoAnimais>
        <BotaoRoupaCama
          onClick={() => manipularCliqueCategoria(Categorias.ROUPA_CAMA)}
          ativo={selecionaCategoria === Categorias.ROUPA_CAMA}
        >
          {Categorias.ROUPA_CAMA}
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
              <CardBotao className={`card-botao-${inst.categoria.replace(/ /g, '')}`} onClick={() => handleAbrirModalDoacao(inst)}>
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
        <BotaoNovaInstituicao onClick={handleAbrirModalCadastro}>Cadastre uma nova instituição</BotaoNovaInstituicao>
      </BotaoContainer>

      {mostrarModalDoacao && (
        <>
          <ModalOverlay onClick={handleFecharModalDoacao} />
          <ModalDoacao>
            <h2>Doação para a instituição:  {instituicaoSelecionada.nome}</h2>
            <div className="cards-doacao">
              <div className="card-doacao">
                <p>Doar R$100,00</p>
                <img src={iconDoar} alt="Ícone Doar" />
                <button onClick={() => handleDoacao(100)}>Doar</button>
              </div>
              <div className="card-doacao">
                <p>Doar R$50,00</p>
                <img src={iconDoar} alt="Ícone Doar" />
                <button onClick={() => handleDoacao(50)}>Doar</button>
              </div>
              <div className="card-doacao">
                <p>Valor livre</p>
                <img src={iconDoar} alt="Ícone Doar" />
                <input type="number" value={valorDoacao} onChange={(e) => setValorDoacao(Number(e.target.value))} />
                <button onClick={handleDoacao}>Doar</button>
              </div>
            </div>
            <div className="button-container">
              <button type="button" onClick={handleFecharModalDoacao}>Cancelar</button>
            </div>
          </ModalDoacao>
        </>
      )}

      {mostrarModalCadastro && (
        <>
          <ModalOverlay onClick={handleFecharModalCadastro} />
          <Modal>
            <h2>Cadastrar Nova Instituição</h2>
            <form onSubmit={cadastrarNovaInstituicao}>
              <label>Nome da Instituição</label>
              <input type="text" value={nome} onChange={handleNomeChange} required />

              <label>Categoria</label>
              <select value={categoria} onChange={handleCategoriaChange} required>
                <option value="">Selecione a categoria</option>
                <option value={Categorias.ALIMENTACAO}>{Categorias.ALIMENTACAO}</option>
                <option value={Categorias.HIGIENICOS}>{Categorias.HIGIENICOS}</option>
                <option value={Categorias.ROUPAS}>{Categorias.ROUPAS}</option>
                <option value={Categorias.AGUA}>{Categorias.AGUA}</option>
                <option value={Categorias.ANIMAIS}>{Categorias.ANIMAIS}</option>
                <option value={Categorias.ROUPA_CAMA}>{Categorias.ROUPA_CAMA}</option>
              </select>

              <label>Descrição</label>
              <textarea value={descricao} onChange={handleDescricaoChange} />

              {erro && <p style={{ color: 'red' }}>{erro}</p>}

              <div className="button-container">
                <button type="button" onClick={handleFecharModalCadastro}>Cancelar</button>
                <button type="submit">Confirmar</button>
              </div>
            </form>
          </Modal>
        </>
      )}

      {mostrarModalMensagem && (
        <>
          <ModalMensagemOverlay onClick={handleFecharModalMensagem} />
          <ModalMensagem>
            <p>{mensagem}</p>
            <button type="button" onClick={handleFecharModalMensagem}>Fechar</button>
          </ModalMensagem>
        </>
      )}
    </SegundaPagina>
  );
};

export default Doacoes;
