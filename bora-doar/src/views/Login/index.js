import { Background, LogoContainer } from "./index.style";
import Logo from './assets/Logo.svg';

const Login = () => {
  return (
    <Background>
      <LogoContainer>
        <img src={Logo} alt="Logo"/>
      </LogoContainer>
    </Background>
  );
}

export default Login;