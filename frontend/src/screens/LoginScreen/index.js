import { Button } from "../../components/Button";
import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Link } from "../../components/Link/style";
import { Logo } from "../../components/Logo";
import { Title } from "../../components/Title/style";
import { LinkCommandText } from "./components/linkCommandText";
import { LinkContainer } from "./components/linkContainer";

export const LoginScreen = ({ navigator }) => {
  return (
    <Container>
      <Title>Bem vindo</Title>
      <Logo />
      <Input placeholder="E-mail ou usuário..." />
      <Input placeholder="Senha..." />
      <Link>Esqueceu sua senha?</Link>
      <Button title="Login" />
      <LinkContainer>
        <LinkCommandText>Não tem uma conta?</LinkCommandText>
        <Link>Cadastre-se</Link>
      </LinkContainer>
    </Container>
  );
};
