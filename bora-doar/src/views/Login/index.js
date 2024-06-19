import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, LogoContainer, InputContainer, InputField, SubmitButton, RegisterButton, SenhaContainer, EyeIcone, InputLabel } from "./index.style";
import Logo from './assets/Logo.svg'; 
import EyeIconeSvg from './assets/Eye.svg'; 
import { getUsuario, postUsuario } from '../../services/Login'; // Importando postUsuario

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarInputNome, setMostrarInputNome] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const buscarUsuario = async () => {
    try {
      await getUsuario(
        { email, senha: password },
        (result) => {
          if (result && result.mensagem === 'usuário autorizado') {
            setIsLoggedIn(true);
            navigate('/home');
          } else if (result && result.mensagem === 'usuário não autorizado') {
            setErro('Email ou senha incorretos');
          } else {
            setErro('Erro desconhecido');
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

  const cadastrarClick = () => {
    setMostrarInputNome(true);
  };

  const cadastrarNovoUsuario = async () => {
    const modelRequest = {
      nome: nome,
      email: email,
      senha: password,
    };

    try {
      await postUsuario(
        modelRequest,
        (result) => {
          if (result && result.id) {
            setErro('');
            setNome('');
            setEmail('');
            setPassword('');
            setMostrarInputNome(false);
            setErro(`Usuário cadastrado com sucesso.`);
          } else {
            setErro('Erro ao cadastrar usuário');
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

  return (
    <Background>
      <LogoContainer>
        <img src={Logo} alt="Logo"/>
      </LogoContainer>
      <InputContainer>
        {mostrarInputNome && (
          <>
            <InputLabel>Nome</InputLabel>
            <InputField
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </>
        )}
        <InputLabel>Email</InputLabel>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputLabel>Senha</InputLabel>
        <SenhaContainer>
          <InputField
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <EyeIcone onClick={() => setMostrarSenha(!mostrarSenha)}>
            <img src={EyeIconeSvg} alt="Mostrar/esconder senha" />
          </EyeIcone>
        </SenhaContainer>
        {mostrarInputNome ? (
          <SubmitButton type="button" onClick={cadastrarNovoUsuario}>Crie uma nova conta</SubmitButton>
        ) : (
          <>
            <SubmitButton type="button" onClick={buscarUsuario}>Entrar</SubmitButton>
            <RegisterButton type="button" onClick={cadastrarClick} style={{ backgroundColor: mostrarInputNome ? '#5D74F1' : 'transparent' }}>
              Crie uma nova conta
            </RegisterButton>
          </>
        )}
        {erro && <p>{erro}</p>}
      </InputContainer>
    </Background>
  );
};

export default Login;
