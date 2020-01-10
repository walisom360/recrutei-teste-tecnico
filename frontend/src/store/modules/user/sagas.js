import { all, put, call, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../../services/api";

import {
  getUserSuccess,
  signUpUserSuccess,
  signUpUserFailure
} from "../user/actions";

function* getUser() {
  const { data } = yield call(api.get, "users");

  yield put(getUserSuccess(data));
}

function* signUpUser({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", { name, email, password });

    yield put(
      toastrActions.add({
        type: "success",
        title: "Bem vindo",
        message: "Usuario Criado com Sucesso!",
        timeOut: 500
      })
    );
    yield put(signUpUserSuccess());
    yield put(push("/signin"));
  } catch (err) {
    yield put(signUpUserFailure());
    yield put(
      toastrActions.add({
        type: "error",
        title: "Este Email ja possui cadastro",
        message: "Verifique seu e-mail!",
        timeOut: 500
      })
    );
  }
}

export default all([
  takeLatest("GET_USER", getUser),
  takeLatest("SIGN_UP_USER_REQUEST", signUpUser)
]);
