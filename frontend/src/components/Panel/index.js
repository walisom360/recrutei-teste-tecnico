import React, { useEffect, useState } from "react";

import {
  Container,
  Descriptions,
  DivId,
  DivType,
  DivTitle,
  DivActions,
  PanelContainer,
  PanelTable,
  Id,
  Type,
  Title,
  Actions,
  ButtonView,
  ButtonEdit,
  ButtonRemove,
  ContainerButtons,
  ButtonPrevious,
  ButtonNext,
  DivModalView,
  ButtonExit,
  ButtonCancel,
  FormContainer,
  PostTitleForm,
  TypePost,
  ColumnSelect,
  ColumnInput,
  DivButton,
  Button
} from "./styles";

import Modal from "../../components/Modal";

import ModalRemove from "../../components/ModalRemove";

import { useDispatch, useSelector } from "react-redux";

import {
  getPostsRequest,
  postsModalOpen,
  postsModalClose,
  postsModalUpdateOpen,
  postsModalUpdateClose,
  postsModalRemoveOpen,
  postsModalRemoveClose,
  updatePostRequest,
  removePostRequest,
  nextPageRequest,
  prevPageRequest
} from "../../store/modules/posts/actions";

import { Ring } from "react-awesome-spinners";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import api from "../../services/api";

import { Form, Select, Input, Textarea } from "@rocketseat/unform";

import { schema } from "../../schemas/update";

export default function Panel() {
  const [postVisualizate, setPostVisualizate] = useState({});

  const initialData = {
    id: postVisualizate.author || null,
    title: postVisualizate.title || null,
    content: postVisualizate.content || null
  };

  const options = [
    { id: "react", title: "ReactJS" },
    { id: "node", title: "NodeJS" },
    { id: "rn", title: "React Native" }
  ];

  const [id, setIdRemove] = useState(null);

  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.docs);

  const page = useSelector(state => state.posts.page);
  const pages = useSelector(state => state.posts.postInformations.pages);

  const loadingUpdate = useSelector(state => state.posts.loadingUpdate);

  const modalViewOpen = useSelector(state => state.posts.postModalOpen);

  const modalRemoveOpen = useSelector(state => state.posts.postModalRemoveOpen);

  const modalUpdateOpen = useSelector(state => state.posts.postModalUpdateOpen);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  function closeModalUpdate() {
    dispatch(postsModalUpdateClose());

    setPostVisualizate({});
  }

  function closeModalView() {
    dispatch(postsModalClose());
    setPostVisualizate({});
  }

  function closeRemove() {
    dispatch(postsModalRemoveClose());
    setIdRemove(null);
  }

  async function getPostIdAndUpdate(id) {
    const { data } = await api.get(`/posts/${id}`);

    setPostVisualizate(data);
    dispatch(postsModalUpdateOpen());
  }

  function handleSubmit(data) {
    const { _id: id } = postVisualizate;

    const { title, content } = data;

    dispatch(updatePostRequest(id, title, content));
  }

  async function getPostById(id) {
    const { data } = await api.get(`/posts/${id}`);
    setPostVisualizate(data);
    dispatch(postsModalOpen());
  }

  function OpenModalRemove(id) {
    setIdRemove(id);

    dispatch(postsModalRemoveOpen());
  }

  function deletePost() {
    dispatch(removePostRequest(id));
    setIdRemove(null);
  }

  function prevPage() {
    dispatch(prevPageRequest());
  }

  function nextPage() {
    dispatch(nextPageRequest());
  }

  return (
    <Container>
      <h2>Ultimos Posts</h2>
      <Descriptions>
        <DivId>
          <strong>Id</strong>
        </DivId>
        <DivType>
          <strong>Tipo</strong>
        </DivType>
        <DivTitle>
          <strong>Titulo</strong>
        </DivTitle>
        <DivActions>
          <strong>Ações</strong>
        </DivActions>
      </Descriptions>
      <PanelContainer>
        {posts.map(post => (
          <PanelTable>
            <Id>
              <strong>{post._id}</strong>
            </Id>
            <Type>
              <strong>{post.type.title}</strong>
            </Type>
            <Title>
              <strong>{post.title}</strong>
            </Title>
            <Actions>
              <ButtonView onClick={() => getPostById(post._id)}>Ver</ButtonView>

              <ButtonEdit onClick={() => getPostIdAndUpdate(post._id)}>
                Editar
              </ButtonEdit>
              <ButtonRemove onClick={() => OpenModalRemove(post._id)}>
                Excluir
              </ButtonRemove>
            </Actions>
          </PanelTable>
        ))}
      </PanelContainer>
      <ContainerButtons>
        <ButtonPrevious disabled={page === 1} onClick={prevPage}>
          <FaChevronLeft color="#fff" size={20} />
          <p>Anterior</p>
        </ButtonPrevious>
        <ButtonNext disabled={page === pages} onClick={nextPage}>
          <p>Proximo</p>
          <FaChevronRight color="#fff" size={20} />
        </ButtonNext>
      </ContainerButtons>
      {modalViewOpen && (
        <Modal size="big">
          <DivModalView>
            <div>
              <h2>{postVisualizate.title}</h2>

              <h4>{postVisualizate.type.title}</h4>

              <p>{postVisualizate.content}</p>
            </div>
            <button onClick={closeModalView}>Fechar</button>
          </DivModalView>
        </Modal>
      )}

      {modalUpdateOpen && (
        <Modal size="big">
          <FormContainer>
            <PostTitleForm>Atualizar Post</PostTitleForm>
            <Form
              schema={schema}
              onSubmit={handleSubmit}
              initialData={initialData}
            >
              <TypePost>
                <ColumnSelect>
                  <Select
                    disabled
                    name="tech"
                    options={options}
                    placeholder={`${postVisualizate.type.title}`}
                  />
                </ColumnSelect>
                <ColumnInput>
                  <Input name="title" placeholder="digite o titulo aqui" />
                </ColumnInput>
              </TypePost>
              <Textarea name="content" placeholder="Digite o conteúdo aqui" />

              <DivButton>
                <Button type="submit">
                  {loadingUpdate ? (
                    <div style={{ marginLeft: 23 }}>
                      <Ring size={30} color="#fff" />
                    </div>
                  ) : (
                    "Atualizar post"
                  )}
                </Button>
              </DivButton>
              <ButtonExit onClick={closeModalUpdate}>fechar</ButtonExit>
            </Form>
          </FormContainer>
        </Modal>
      )}
      {modalRemoveOpen && (
        <ModalRemove size="big">
          <h3 style={{ color: "black", textAlign: "center" }}>
            Excluir o Post
          </h3>
          <div
            style={{
              marginTop: 25,
              padding: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <ButtonCancel onClick={closeRemove}>cancelar</ButtonCancel>
            <ButtonExit onClick={deletePost}>excluir</ButtonExit>
          </div>
        </ModalRemove>
      )}
    </Container>
  );
}
