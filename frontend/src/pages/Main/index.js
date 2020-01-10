import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import PostForm from "../../components/PostForm";
import Panel from "../../components/Panel";

export default function Main() {
  return (
    <Container>
      <Header />
      <PostForm />
      <Panel />
    </Container>
  );
}
