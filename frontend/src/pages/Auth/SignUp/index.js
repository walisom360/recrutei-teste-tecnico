import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Column } from "../styles";
import { Button } from "../../../styles/components/Button";

import { Link } from "react-router-dom";

import { signUpUserRequest } from "../../../store/modules/user/actions";

import { Form, Input } from "@rocketseat/unform";

import { Ring } from "react-awesome-spinners";

import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "O conteudo do Post deve conter no minimo 20 caracters")
    .required("O nome e Obrigatorio"),
  email: Yup.string()
    .min(4, "O titulo do Post deve conter no minimo 4 caracters")
    .required("O email e obrigatorio"),
  password: Yup.string()
    .min(4, "O titulo do Post deve conter no minimo 4 caracters")
    .required("A senha e obrigatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas não batem")

    .required("a confirmação e obrigatorio")
});

function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);

  function handleSubmit(data, { resetForm }) {
    const { name, email, password } = data;

    dispatch(signUpUserRequest(name, email, password));
    resetForm();
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <strong>NOME</strong>
        <Column>
          <Input name="name" placeholder="Digite seu nome" />
        </Column>
        <strong>E-MAIL</strong>
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

        <strong>CONFIRMAR SENHA</strong>
        <Column>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="digite a senha novamente"
          />
        </Column>

        <Button size="big" type="submit">
          {loading ? (
            <div style={{ marginLeft: 23 }}>
              <Ring size={30} color="#fff" />
            </div>
          ) : (
            "Cadastrar"
          )}
        </Button>
        <Link style={{ marginTop: 8, textAlign: "center" }} to="/signin">
          Já tenho conta
        </Link>
      </Form>
    </Container>
  );
}

export default SignUp;
