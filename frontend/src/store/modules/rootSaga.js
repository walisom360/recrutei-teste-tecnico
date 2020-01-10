import { all } from "redux-saga/effects";

import auth from "../modules/auth/sagas";
import user from "../modules/user/sagas";
import posts from "../modules/posts/sagas";
// import members from "../modules/members/sagas";

export default function* rootSaga() {
  return yield all([auth, user, posts]);
}
