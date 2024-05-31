import styled from 'styled-components';
import backgroundImage from './assets/Background.svg';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: contain; /* Mantém a resolução original da imagem */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
  background-position: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 118px;
`

export const InputContainer = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const InputField = styled.input`
  width: 370px;
  height: 24px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 24px;
  border: 1px solid #ccc;
  margin-top: 5px;
`

export const SubmitButton = styled.button`
  width: 400px;
  height: 42px;
  padding: 10px;
  background-color: #5D74F1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;
`

export const RegisterButton = styled.button`
  background: none;
  border: none;
  color: ${({ registroClicado }) => registroClicado ? "#fff" : "#5D74F1"};
  background-color: ${({ registroClicado }) => registroClicado ? "#5D74F1" : "none"};
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  width: 390px;
  height: 46px;
  padding: 10px;
  border-radius: 4px;
`


export const SenhaContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const EyeIcone = styled.div`
margin-top: -15px;
position: absolute;
right: 15px;
cursor: pointer;
`
export const InputLabel = styled.div`
color: #191D23;
font-size: 16px;
width: 380px;
`
