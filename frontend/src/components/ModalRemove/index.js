import React from "react";

import { Container, Content } from "./styles";

const ModalRemove = ({ children, size }) => (
  <Container>
    <Content size={size}>{children}</Content>
  </Container>
);

export default ModalRemove;
