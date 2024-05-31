import React, { useState } from 'react';
// Importa os estilos do arquivo style (css)
import { Background, LogoContainer, InputContainer, InputField, SubmitButton, RegisterButton, SenhaContainer, EyeIcone, InputLabel } from "./index.style";
// Importa a imagem da logo
import Logo from './assets/Logo.svg'; 
// Importa o icone Eye
import EyeIconeSvg from './assets/Eye.svg'; 

const Login = () => {
  // Estados para controlar o email, senha. Visibilidade da senha, do nome e do botão de login. Mudar style do botão de criar conta.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarInputNome, setMostrarInputNome] = useState(false);
  const [botãoLoginVisivel, setBotãoLoginVisivel] = useState(true);
  const [registroClicado, setRegistroClicado] = useState(false);

  // Função para lidar com o clique no botão de Registro
  const registroClick = () => {
    // Mostra o input nome
    setMostrarInputNome(true); 
    // Esconde o botão de login
    setBotãoLoginVisivel(false); 
    // Marca o botão como clicado
    setRegistroClicado(true);
  }

  return (
    <Background>
      {/* Logo */}
      <LogoContainer>
        <img src={Logo} alt="Logo"/>
      </LogoContainer>
      {/* Container de Entradas  */}
      <InputContainer>
        {/* Exibe o input nome se (mostrarInputNome) for (true) */}
        {mostrarInputNome && (
          <>
            <InputLabel>Nome</InputLabel>
            <InputField
              type="text"
              placeholder="Nome teste"
              required
            />
          </>
        )}
        {/* Input email */}
        <InputLabel>Email</InputLabel>
        <InputField
          type="email"
          placeholder="teste@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Input senha */}
        <InputLabel>Senha</InputLabel>
        <SenhaContainer>
          <InputField
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* icone eye para mostrar/esconder senha */}
          <EyeIcone onClick={() => setMostrarSenha(!mostrarSenha)}>
            <img src={EyeIconeSvg} alt="Mostrar/esconder senha" />
          </EyeIcone>
        </SenhaContainer>
        {/* Botão de login visível se (botãoLoginVisivel) for (true) */}
        {botãoLoginVisivel && (
          <SubmitButton type="submit">Entrar</SubmitButton>
        )}
        {/* Botão para criar uma nova conta */}
        <RegisterButton type="button" onClick={registroClick} registroClicado={registroClicado}> Crie uma nova conta </RegisterButton>

      </InputContainer>
    </Background>
  );
}

export default Login;
