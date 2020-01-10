import React, { useEffect, useState } from "react";

import {
  Container,
  PostTitle,
  TypePost,
  ColumnSelect,
  ColumnInput,
  DivButton,
  Button
} from "./styles";

import { Form, Select, Input, Textarea } from "@rocketseat/unform";

import { useSelector, useDispatch } from "react-redux";

import { createPostRequest } from "../../store/modules/posts/actions";

import { Ring } from "react-awesome-spinners";

import api from "../../services/api";

import * as Yup from "yup";

const schema = Yup.object().shape({
  tech: Yup.string().required("O tipo do Post e Obrigatorio"),

  content: Yup.string()
    .min(4, "O conteudo do Post deve conter no minimo 20 caracters")
    .required("O conteudo do Post e Obrigatorio"),
  title: Yup.string()
    .min(4, "O titulo do Post deve conter no minimo 4 caracters")
    .required("O titulo do Post e obrigatorio")
});

export default function PostForm() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.posts.loading);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getTypes() {
      const { data } = await api.get("/types");

      const options = data.map(option => ({
        id: option._id,
        title: option.title
      }));

      console.log(options);

      setOptions(options);
    }

    getTypes();
  }, []);

  function handleSubmit(data, { resetForm }) {
    console.log(data);
    const { title, tech: type, content } = data;

    const post = { title, type, content };
    console.log(post);
    dispatch(createPostRequest(post));

    resetForm();
  }

  return (
    <Container>
      <PostTitle>Novo Post</PostTitle>
      <Form schema={schema} onSubmit={handleSubmit}>
        <TypePost>
          <ColumnSelect>
            <Select
              placeholder="Selecione o tipo do Post"
              name="tech"
              options={options}
            />
          </ColumnSelect>
          <ColumnInput>
            <Input name="title" placeholder="digite o titulo aqui" />
          </ColumnInput>
        </TypePost>
        <Textarea name="content" placeholder="Digite o conteúdo aqui" />

        <DivButton>
          <Button type="submit">
            {loading ? (
              <div style={{ marginLeft: 23 }}>
                <Ring size={30} color="#00bfff" />
              </div>
            ) : (
              "Salvar"
            )}
          </Button>
        </DivButton>
      </Form>
    </Container>
  );
}
