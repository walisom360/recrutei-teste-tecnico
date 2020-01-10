import { call, put, all, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../../services/api";

import { signInSuccess } from "./actions";

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(api.post, "sessions", { email, password });

    const { token } = res.data;

    console.log(token);
    localStorage.setItem("@Omni:token", token);

    yield put(signInSuccess(token));
    yield put(push("/"));
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

function* signOut() {
  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");

  yield put(push("/signin"));
}

export default all([
  takeLatest("SIGN_IN_REQUEST", signIn),
  takeLatest("SIGN_OUT", signOut)
]);
