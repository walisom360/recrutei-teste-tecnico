import React from "react";
import { useDispatch } from "react-redux";
import { Container, Column } from "../styles";
import { Button } from "../../../styles/components/Button";

import { Link } from "react-router-dom";

import { signInRequest } from "../../../store/modules/auth/actions";

import { Form, Input } from "@rocketseat/unform";

//import { Ring } from "react-awesome-spinners";

import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .min(4, "O conteudo do Post deve conter no minimo 20 caracters")
    .required("O Email e Obrigatorio"),
  password: Yup.string()
    .min(4, "O titulo do Post deve conter no minimo 4 caracters")
    .required("A senha e obrigatoria")
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;

    dispatch(signInRequest(email, password));
    console.log(1);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <strong>EMAIL</strong>
        <Column>
          <Input name="email" placeholder="Digite seu email" />
        </Column>

        <strong>SENHA</strong>
        <Column>
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </Column>

        <Button size="big" type="submit">
          Entrar
        </Button>
        <Link style={{ marginTop: 8, textAlign: "center" }} to="/signup">
          Cadastre-se
        </Link>
      </Form>
    </Container>
  );
}

export default SignIn;
