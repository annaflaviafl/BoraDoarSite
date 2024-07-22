import styled, { createGlobalStyle, keyframes, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100vw; 
    overflow-x: hidden; 
    font-family: "plus jakarta sans", sans-serif; 
  }
`

export const BarraNavegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: transparent;
  box-shadow: none;
  width: 100%;
  box-sizing: border-box;
`

export const ContainerLogo = styled.div`
  img {
    height: 35px;
    max-width: 100%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  justify-content: center;
`

export const LinkMenu = styled.a`
  font-weight: 550;
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #000;
  transition: color 0.3s;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    left: 50%;
    background: #5d74f1;
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover {
    color: #5d74f1;

    &::after {
      width: 100%;
      left: 0;
    }
  }
`

export const BotoesMenu = styled.div`
  display: flex;
`

export const BotaoLogin = styled.button`
  background-color: #fff;
  color: #5d74f1;
  border: 1px solid #ccd1d6;
  height: 34px;
  padding: 6px 16px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5d74f1;
    color: #fff;
  }
`

export const BotaoCadastro = styled.button`
  background-color: #5d74f1;
  color: white;
  height: 34px;
  border: none;
  padding: 8px 16px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #5d74f1;
    border: 1px solid #ccd1d6;
  }
`

export const ContainerImagem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  width: 100%;
  box-sizing: border-box; 

  img {
    max-width: 45%;
    height: auto;
    transform: translateX(-60px); 
  }
`

export const BotaoJuntese = styled.button`
  position: absolute;
  top: 60px;
  left: 94px;
  background-color: #fff;
  color: #5d74f1;
  border: 1px solid #ccd1d638;
  box-shadow: 1px 1px 1px #ccd1d6;
  width: 126px;
  height: 36px;
  padding: 4px 7px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
`

export const TextoJuntese = styled.p`
  position: absolute;
  top: 124px;
  left: 98px;
  color: #000;
  font-size: 42px;
  width: calc(100% - 200px); 
  max-width: 633px; 
  margin: 0;
  text-align: left;
  font-family: "plus jakarta sans", sans-serif;
  font-weight: 550;
  line-height: 1.4;

  span {
    color: #5d74f1;
  }
`

export const BotaoQueroDoar = styled.button`
  position: absolute;
  top: 330px;
  left: 94px;
  background-color: #5d74f1;
  color: #fff;
  border: 1px solid #5d74f1;
  width: 124px;
  height: 39px;
  padding: 6px 9px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #fff;
    color: #5d74f1;
  }
`

export const BotaoEscolha = styled.button`
  position: absolute;
  top: 330px;
  left: 242px;
  background-color: #fff;
  color: #5d74f1;
  border: 1px solid #5d74f1;
  width: 200px;
  height: 40px;
  padding: 6px 9px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #5d74f1;
    color: #fff;
  }
`

export const TextoTransforme = styled.p`
  position: absolute;
  top: 400px;
  left: 98px;
  color: #95969b;
  font-size: 18px;
  width: calc(100% - 200px); 
  max-width: 585px; 
  margin: 0;
  text-align: left;
  font-family: "plus jakarta sans", sans-serif;
  line-height: 1.5;
`

export const SegundaPagina = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`

export const TextoInstituicoes = styled.p`
  background-color: #fff;
  color: #5d74f1;
  border: 1px solid #ccd1d638;
  box-shadow: 2px 2px 2px #ccd1d6;
  width: 200px;
  padding: 6px;
  border-radius: 8px;
  font-size: 14px;
  margin-left: 94px;
  margin-top: 26px;
`

export const TextoDoacao = styled.p`
  margin-left: 94px;
  margin-top: 0px;
  color: #000;
  font-size: 28px;
  width: calc(100% - 188px); 
  text-align: left;
  font-family: "plus jakarta sans", sans-serif;
  font-weight: 550;
  line-height: 1.4; 
  span {
    color: #5d74f1;
  }
`

export const BotaoDoacao = styled.button`
  background-color: #ccc; 
  color: #000; 
  border: none;
  padding: 10px 20px;  
  border-radius: 55px; 
  cursor: pointer;
  font-size: 14px;
  margin-left: 94px;
`

export const BotoesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 94px;
  width: calc(100% - 188px);
  flex-wrap: wrap;

  button {
    border-radius: 55px;
    font-size: 12px;
    border: none;
    padding: 7px 15px;
    background-color: #f4f4f4;
    color: #000;
    cursor: pointer;
  }
`

export const BotaoAlimentacao = styled.button`
  background-color: ${props => props.ativo ? '#f77490' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#f77490' : '#f77490'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const BotaoHigienicos = styled.button`
  background-color: ${props => props.ativo ? '#f6b829' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#f6b829' : '#f6b829'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const BotaoRoupas = styled.button`
  background-color: ${props => props.ativo ? '#39934b' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#39934b' : '#39934b'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const BotaoAgua = styled.button`
  background-color: ${props => props.ativo ? '#94b2ff' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#94b2ff' : '#94b2ff'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const BotaoAnimais = styled.button`
  background-color: ${props => props.ativo ? '#f6a081' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#f6a081' : '#f6a081'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const BotaoRoupaCama = styled.button`
  background-color: ${props => props.ativo ? '#815ca5' : '#f4f4f4'} !important;
  color: ${props => props.ativo ? '#fff' : '#000'} !important;

  &:hover {
    background-color: ${props => props.ativo ? '#815ca5' : '#815ca5'} !important;
    color: ${props => props.ativo ? '#fff' : '#fff'} !important;
  }
`

export const NavegacaoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 165px;
`

export const BotaoNavegacao = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`

const slideIn = keyframes`
  from {
    transform: translateX(-20%);
  }
  to {
    transform: translateX(0%);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(20%);
  }
  to {
    transform: translateX(0%);
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  overflow-x: hidden; 
  transition: transform 0.9s ease; // Transição suave para o contêiner de cards
  ${({ sliding }) => sliding && css`
    animation: ${({ direction }) => direction === 'right' ? slideOut : slideIn} 0.9s forwards;
  `}
`

export const Card = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 24px;
  width: 300px;
  box-sizing: border-box;
  transition: transform 0.3s ease; 

  &:hover {
    transform: translateY(-5px);
  }
`

export const CardContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
`

export const CardCategoria = styled.h2`
  background-color: #f77490; 
  color: #fff; 
  margin-bottom: 10px;
  border-radius: 55px;
  font-size: 12px;
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  

  &.card-categoria-Alimentação {
    background-color: #f77490;
    color: #fff;
    width: 70px; 
  }

  &.card-categoria-ItensHigiênicos {
    background-color: #f6b829;
    color: #fff;
    width: 90px; 
  }

  &.card-categoria-Roupas {
    background-color: #39934b;
    color: #fff;
    width: 41px; 
  }

  &.card-categoria-Água {
    background-color: #94b2ff;
    color: #fff;
    width: 28px; 
  }

  &.card-categoria-ItensparaAnimais {
    background-color: #f6a081;
    color: #fff;
    width: 106px; 
  }

  &.card-categoria-Roupasdecama {
    background-color: #815ca5;
    color: #fff;
    width: 94px; 
  }
`

export const CardBotao = styled.button`
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  width: 114px;
  height: 36px;
  margin-left: 75px; 

  &.card-botao-Alimentação {
    background-color: #f77490;
    color: #fff;
  }

  &.card-botao-ItensHigiênicos{
    background-color: #f6b829;
    color: #fff;
  }

  &.card-botao-Roupas {
    background-color: #39934b;
    color: #fff;
  }

  &.card-botao-Água {
    background-color: #94b2ff;
    color: #fff;
  }

  &.card-botao-ItensparaAnimais {
    background-color: #f6a081;
    color: #fff;
  }

  &.card-botao-Roupasdecama {
    background-color: #815ca5;
    color: #fff;
  }
`

export const BotaoNovaInstituicao = styled.button`
  background-color: #5d74f1;
  color: #fff;
  border: 1px solid #5d74f1;
  width: 250px; 
  height: 45px;
  padding: 6px 9px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #fff;
    color: #5d74f1;
  }
`;


export const BotaoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  overflow-x: hidden; 
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 70%);
  z-index: 999; 
` 

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 70%;
  max-height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #999;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    label {
      color: #191d23;
      font-size: 16px;
      width: 100%;
      max-width: 370px;
      margin-bottom: 8px;
    }

    input,
    textarea,
    select {
      width: 100%;
      max-width: 370px;
      height: 42px;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 24px;
      border: 1px solid #ccc;
      margin-top: 5px;
      font-size: 14px;
      box-sizing: border-box;
    }

    textarea {
      height: 120px;
    }

    select {
      appearance: none;
      background-repeat: no-repeat;
      background-position-x: calc(100% - 10px);
      background-position-y: center;
      padding-right: 30px;
    }

    .button-container {
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      button {
        flex: 1;
        height: 42px;
        padding: 10px;
        background-color: #5d74f1;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #4562d0;
        }
      }

      button:first-child {
        margin-right: 10px;
      }
    }
  }
  `
  export const ModalDoacao = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 70%;
    max-height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 24px;
      color: #999;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 20px;
      color: #333;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
    }
  
    .cards-doacao {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 800px;
    }
  
    .card-doacao {
      flex: 1;
      margin: 0 10px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align: center;
    }
  
    .card-doacao img {
      display: block;
      margin: 10px auto;
      width: 50px;
      height: 50px;
    }
  
    .card-doacao button {
      margin-top: 20px;
      padding: 8px 20px;
      background-color: #5d74f1;
      color: #fff;
      border: 1px solid #5d74f1;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #fff;
        color: #5d74f1;
      }
    }
  
    .card-doacao input {
      width: 80%;
      padding: 8px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
    }

    .button-container {
      width: 100%;
      max-width:150px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

    button {
        flex: 1;
        height: 42px;
        background-color: #ED7161;
        color: #fff;
        border: 1px solid #ED7161;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #fff;
          color: #ED7161;
        }
      }
  `


  export const TerceiraPagina = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
  `;
  
  export const Grafico = styled.div`
    background-color: #E5E5E5;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 430px;
    margin: 0 auto; 
  `;
  
  export const ChartBox = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  `;
  
  export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  
    button {
      margin-bottom: 10px;
      background-color: #6E8DDC;
      color: #fff;
      border: 1px solid #6E8DDC;
      border-radius: 55px;
      cursor: pointer;
      font-size: 11px;
      padding: 6px 14px;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: #fff;
        color: #6E8DDC;
        border: 1px solid #6E8DDC;
      }
  
      &.active {
        background-color: #fff;
        color: #6E8DDC;
        border: 1px solid #6E8DDC;
      }
    }
  `;
  
  export const Chart = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 250px;
    margin-top: 20px;
  `;
  
  export const ChartBar = styled.div`
    width: 70px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  export const ChartBarInner = styled.div`
    width: 70px;
    background-color: ${({ color }) => color};
    height: 0;
    border-radius: 5px;
  `;
  
  export const ChartBarLabel = styled.div`
    font-size: 12px;
    color: #333;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
    width: 70px;
    text-align: left;
  `;
  
  export const ChartBarPercentage = styled.span`
    font-size: 17px;
    font-weight: bold;
    color: #000;
    position: absolute;
    left: 0px;
    transform: translateY(-100%);
  `;
  
  export const TextoItensDoados = styled.p`
    background-color: #fff;
    color: #5d74f1;
    border: 1px solid #ccd1d638;
    box-shadow: 2px 2px 2px #ccd1d6;
    width: 200px;
    padding: 6px;
    border-radius: 8px;
    font-size: 14px;
    margin-left: 94px;
    margin-top: 26px;
  `;
  
  export const TextoImpacto = styled.p`
    margin-left: 94px;
    margin-top: 0px;
    color: #000;
    font-size: 28px;
    width: calc(100% - 188px);
    text-align: left;
    font-family: "plus jakarta sans", sans-serif;
    font-weight: 550;
    line-height: 1.4;
    
    span {
      color: #5d74f1;
    }
  `;
  
  export const TextoLocais = styled.p`
    margin-left: 10px;
    color: #000;
    font-size: 24px;
    text-align: left;
    font-family: "plus jakarta sans", sans-serif;
    font-weight: 550;
    line-height: 1.0;
    margin-top: 0px;
  `;
  