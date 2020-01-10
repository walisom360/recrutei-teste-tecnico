import React, { useEffect } from "react";

import { Container, Logo, Statistics, Field, DivUser } from "./styles";

import { signOut } from "../../store/modules/auth/actions";

import { getUser } from "../../store/modules/user/actions";

import { getAtualizedPostsRequest } from "../../store/modules/posts/actions";

import { useDispatch, useSelector } from "react-redux";

import { IoIosLogOut } from "react-icons/io";

export default function Header() {
  const dispatch = useDispatch();

  const name = useSelector(state => state.user.user.name);

  const { documents, meeting, tutorials, pages } = useSelector(
    state => state.posts.atualized
  );

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAtualizedPostsRequest());
  }, [dispatch]);

  function exit() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo>Wiki</Logo>
      <Statistics>
        <Field>
          <h2>{pages}</h2>
          <strong>Páginas</strong>
        </Field>
        <Field>
          <h2>{documents}</h2>
          <strong>Documentos</strong>
        </Field>
        <Field>
          <h2>{tutorials}</h2>
          <strong>Tutoriais</strong>
        </Field>
        <Field>
          <h2>{meeting}</h2>
          <strong>Reuniões</strong>
        </Field>
      </Statistics>
      <DivUser>
        <span>{name}</span>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
            marginRight: 10,
            border: "1px solid #fff",
            color: "#fff",
            background: "#353940"
          }}
          onClick={exit}
        >
          logout <IoIosLogOut color="#fff" size={20} />
        </button>
      </DivUser>
    </Container>
  );
}
