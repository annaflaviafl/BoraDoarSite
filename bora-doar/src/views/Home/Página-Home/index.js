import React, { useState } from 'react';
import {
  BarraNavegacao, ContainerLogo, Menu, LinkMenu, BotoesMenu, BotaoLogin, BotaoCadastro, ContainerImagem,
  BotaoJuntese, TextoJuntese, BotaoQueroDoar, BotaoEscolha, TextoTransforme
} from '../index.style.js';

import Logo from '../assets/Logo.svg';
import ImageHome from '../assets/ImageHome.svg';
import Doacoes from '../Página-Doacoes/index.js';
import Impacto from '../Página-Impacto/index.js';
import '../index.style.js';

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <BarraNavegacao>
        <ContainerLogo>
          <img src={Logo} alt="Logo" />
        </ContainerLogo>
        <Menu>
          <LinkMenu href="#">Home</LinkMenu>
          <LinkMenu href="#">Doe</LinkMenu>
          <LinkMenu href="#">Impacto Causado</LinkMenu>
        </Menu>
        <BotoesMenu>
          {!isLoggedIn && <BotaoLogin>Login</BotaoLogin>}
          {!isLoggedIn && <BotaoCadastro>Cadastrar</BotaoCadastro>}
        </BotoesMenu>
      </BarraNavegacao>
      <ContainerImagem>
        <img src={ImageHome} alt="Imagem Home" />
        <BotaoJuntese>Junte-se a nós</BotaoJuntese>
        <TextoJuntese>
          Ajude de forma <span>simples</span>, <span>segura</span> e <span>eficaz</span> quem está enfrentando <span style={{ textDecoration: 'underline', color: '#000' }}>dificuldades</span>
        </TextoJuntese>
        <BotaoQueroDoar>Quero doar</BotaoQueroDoar>
        <BotaoEscolha>Escolha para quem doar</BotaoEscolha>
        <TextoTransforme>
          Transforme sua generosidade em esperança. Cada doação é uma semente de mudança, cultivando um mundo melhor para todos nós. Junte-se a nós e faça a diferença hoje mesmo!
        </TextoTransforme>
      </ContainerImagem>
      <Doacoes />
      <Impacto />
    </>
  );
};

export default Home;
