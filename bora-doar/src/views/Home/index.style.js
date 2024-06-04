import styled from 'styled-components';

export const BarraNavegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 84px;
  background-color: transparent;
  box-shadow: none;
`

export const ContainerLogo = styled.div`
  img {
    height: 35px;
    width: 150px;
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
    background: #5D74F1;
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover {
    color: #5D74F1;

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
  color: #5D74F1;
  border: 1px solid #CCD1D6;
  width: 84px;
  height: 34px;
  padding: 6px 16px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5D74F1;
    color: #fff;
  }
`

export const BotaoCadastro = styled.button`
  background-color: #5D74F1;
  color: white;
  width: 104px;
  height: 34px;
  border: none;
  padding: 8px 16px;
  margin-left: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #5D74F1;
    border: 1px solid #CCD1D6;
  }
`

export const ContainerImagem = styled.div`
  position: relative; 
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  img {
    max-width: 45%;
    height: auto;
    margin-right: 55px;
  }
`

export const BotaoJuntese = styled.button`
    position: absolute;
    top: 60px;
    left: 94px;
    background-color: #fff;
    color: #5D74F1;
    border: 1px solid #ccd1d638;
    box-shadow: 1px 1px 1px #CCD1D6;
    width: 126px;
    height: 36px;
    padding: 4px 7px;
    margin-left: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
  &:hover {
    background-color: #5D74F1;
    color: #fff;
  }
`

export const TextoJuntese = styled.p`
position: absolute;
top: 124px;
left: 98px;
color: #000;
font-size: 42px;
width: 633px;
margin: 0;
text-align: left;
font-family: "plus jakarta sans", sans-serif;
font-weight: 550;
line-height: 1.4;
  span {
    color: #5D74F1;
  }
`

export const BotaoQueroDoar = styled.button`
    position: absolute;
    top: 330px;
    left: 94px;
    background-color: #5D74F1;
    color: #fff;
    border: 1px solid #5D74F1;
    width: 124px;
    height: 39px;
    padding: 6px 9px;
    margin-left: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
  &:hover {
    background-color: #fff;
    color: #5D74F1;
  }
`

export const BotaoEscolha = styled.button`
position: absolute;
top: 330px;
left: 242px;
background-color: #fff;
color: #5D74F1;
border: 1px solid #5D74F1;
width: 200px;
height: 40px;
padding: 6px 9px;
margin-left: 10px;
border-radius: 8px;
cursor: pointer;
font-size: 14px;
  &:hover {
    background-color: #5D74F1;
    color: #fff;
  }
`
export const TextoTransforme = styled.p`
    position: absolute;
    top: 400px;
    left: 98px;
    color: #95969B;
    font-size: 18px;
    width: 585px;
    margin: 0;
    text-align: left;
    font-family: "plus jakarta sans", sans-serif;
    line-height: 1.5
`