import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastr } from "react-redux-toastr";

import auth from "./auth/reducer";
import user from "./user/reducer";
import posts from "./posts/reducer";

export default history =>
  combineReducers({
    auth,
    toastr,
    user,
    posts,
    router: connectRouter(history)
  });
