import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container/style";
import Gradient from "../../components/Gradient";
import { Input } from "../../components/Input/style";
import { Link } from "../../components/Link/style";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { LinkCommandText } from "./components/linkCommandText";
import { LinkContainer } from "./components/linkContainer";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(){

    navigation.navigate("Home")
  }
  
  return (
    <Gradient>
      <Container>
        <Logo marginTop={'20%'}/>
        <Title marginTop={'11%'}>Bem vindo</Title>  
        <Input marginTop={'9%'} placeholder="E-mail ou usuário..." value={email} onChangeText={setEmail}/>
        <Input marginTop={'5%'} placeholder="Senha..." value={password} onChangeText={setPassword}/>
        <Link onPress={() => navigation.navigate("RecoverPasswordScreen")} textAlign={'right'} marginTop={'5%'}>Esqueceu sua senha ?</Link>
        <Button marginTop={'35%'} title="Login" handleClickFn={handleLogin}/>
        <LinkContainer marginTop={'7%'}>
          <LinkCommandText>Não tem uma conta?</LinkCommandText>
          <Link onPress={() => navigation.navigate("NameRegisterScreen")}>Cadastre-se</Link>
        </LinkContainer>
      </Container>
    </Gradient>
  );
};
