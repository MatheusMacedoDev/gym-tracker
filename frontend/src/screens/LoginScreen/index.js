import { Button } from "../../components/Button";
import { Container, Gradient } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Link } from "../../components/Link/style";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { LinkCommandText } from "./components/linkCommandText";
import { LinkContainer } from "./components/linkContainer";

export const LoginScreen = ({ navigator }) => {
  return (
    <Gradient>
      <Container>
        <Logo marginTop={30}/>
        <Title marginTop={37}>Bem vindo</Title>  
        <Input marginTop={31} placeholder="E-mail ou usuário..."/>
        <Input marginTop={20} placeholder="Senha..." />
        <Link marginTop={20} marginLeft={48} >Esqueceu sua senha?</Link>
        <Button marginTop={135} title="Login" />
        <LinkContainer marginTop={10}>
          <LinkCommandText>Não tem uma conta?</LinkCommandText>
          <Link>Cadastre-se</Link>
        </LinkContainer>
      </Container>
    </Gradient>
  );
};
