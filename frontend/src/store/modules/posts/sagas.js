import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";

import {
  getAtualizedPostsSuccess,
  createPostSuccess,
  getPostsSuccess,
  updatePostSuccess,
  postsModalUpdateClose,
  postsModalRemoveClose,
  nextPageSuccess,
  prevPageSuccess
} from "./actions";

import api from "../../../services/api";

function* getPostsAtualized() {
  const { data } = yield call(api.get, "atualized");

  yield put(getAtualizedPostsSuccess(data));
}

function* getPosts({ type }) {
  const page = yield select(state => state.posts.page);

  const resp = yield call(api.get, `posts?page=${page}`);

  const { docs, ...postInformations } = resp.data;

  yield put(getPostsSuccess(docs, postInformations));
}

function* nextPage() {
  const { data } = yield call(api.get, "posts");

  const { pages } = data;

  const page = yield select(state => state.posts.page);

  if (page === pages) return;

  const pageAtual = page + 1;

  yield put(nextPageSuccess(pageAtual));
}

function* prevPage() {
  const page = yield select(state => state.posts.page);

  if (page === 1) return;

  const pageAtual = page - 1;

  yield put(prevPageSuccess(pageAtual));
}

function* createPost({ payload }) {
  try {
    const { data } = payload;

    const { title, content, type } = data;
    yield call(api.post, "posts", { title, content, type });

    yield put(createPostSuccess());

    yield put(
      toastrActions.add({
        type: "success",
        title: "Post Criado com sucesso",

        timeOut: 500
      })
    );
    yield toastrActions.add({});
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no login",
        message: "Verifique seu e-mail/senha!",
        timeOut: 500
      })
    );
  }
}

function* updatePost({ payload }) {
  try {
    const { id, title, content } = payload;

    yield call(api.put, `posts/${id}`, { title, content });

    yield put(updatePostSuccess());
    yield put(postsModalUpdateClose());
    yield put(
      toastrActions.add({
        type: "success",
        title: "Post Atualizado com sucesso",

        timeOut: 500
      })
    );
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Erro ao atualizar o post",

        timeOut: 500
      })
    );
  }
}

function* removePost({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `posts/${id}`);

    yield put(createPostSuccess());
    yield put(postsModalRemoveClose());
    yield put(
      toastrActions.add({
        type: "success",
        title: "Post Deletado",

        timeOut: 500
      })
    );
    yield toastrActions.add({});
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha ao excluir post",
        timeOut: 500
      })
    );
  }
}

export default all([
  takeLatest("GET_ATUALIZED_POSTS_REQUEST", getPostsAtualized),
  takeLatest("CREATE_POST_SUCCESS", getPostsAtualized),
  takeLatest("UPDATE_POST_SUCCESS", getPostsAtualized),
  takeLatest("UPDATE_POST_SUCCESS", getPosts),
  takeLatest("CREATE_POST_SUCCESS", getPosts),
  takeLatest("GET_POSTS_REQUEST", getPosts),
  takeLatest("CREATE_POST_REQUEST", createPost),
  takeLatest("UPDATE_POST_REQUEST", updatePost),
  takeLatest("REMOVE_POST_REQUEST", removePost),
  takeLatest("REMOVE_POST_SUCCESS", getPostsAtualized),
  takeLatest("NEXT_PAGE_REQUEST", nextPage),
  takeLatest("PREV_PAGE_REQUEST", prevPage),
  takeLatest("NEXT_PAGE_SUCCESS", getPosts),
  takeLatest("PREV_PAGE_SUCCESS", getPosts)
]);
