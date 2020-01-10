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
  ButtonNext
} from "./styles";

import Modal from "../../components/Modal";

import ModalRemove from "../../components/ModalRemove";

import {
  FormContainer,
  PostTitleForm,
  TypePost,
  ColumnSelect,
  ColumnInput,
  DivButton,
  Button
} from "../PostForm/styles";

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

  //const [edit, setEdit] = false;

  const [id, setIdRemove] = useState(null);

  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts.docs);

  //const atualized = useSelector(state => state.posts.docs);

  const page = useSelector(state => state.posts.page);
  const pages = useSelector(state => state.posts.postInformations.pages);

  const loadingUpdate = useSelector(state => state.posts.loadingUpdate);

  const modalViewOpen = useSelector(state => state.posts.postModalOpen);

  const modalRemoveOpen = useSelector(state => state.posts.postModalRemoveOpen);

  const modalUpdateOpen = useSelector(state => state.posts.postModalUpdateOpen);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  async function getPostsPaginate(page = 1) {
    const { data, ...postInfo } = await api.get(`/posts?page=${page}`);

    // setPosts(data);
    //setPostsInfo(postInfo);
  }

  function closeModalUpdate() {
    dispatch(postsModalUpdateClose());
    // setEdited(false);
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
    //dispatch abrindo modal de posts

    //função dentro do modal

    const { data } = await api.get(`/posts/${id}`);
    console.log(data);
    setPostVisualizate(data);
    dispatch(postsModalUpdateOpen());
  }

  function handleSubmit(data) {
    const { _id: id } = postVisualizate;

    const { title, content } = data;

    dispatch(updatePostRequest(id, title, content));

    //setPostVisualizate({});
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
          <h2>{postVisualizate.title}</h2>

          <h4>{postVisualizate.type.title}</h4>

          <p>{postVisualizate.content}</p>

          <button onClick={closeModalView}>Fechar</button>
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
                <Button onClick={() => {}}>
                  {false ? (
                    <div style={{ marginLeft: 23 }}>
                      <Ring size={30} color="#00bfff" />
                    </div>
                  ) : (
                    "Editar Post"
                  )}
                </Button>
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
              <Button onClick={closeModalUpdate}>cancelar</Button>
            </Form>
          </FormContainer>
        </Modal>
      )}
      {modalRemoveOpen && (
        <ModalRemove size="big">
          <h3 style={{ color: "black" }}>Deseja Realmente excluir esse Post</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button onClick={deletePost}>excluir</button>
            <button onClick={closeRemove}>cancelar</button>
          </div>
        </ModalRemove>
      )}
    </Container>
  );
}
