const INITIAL_STATE = {
  signedIn: !!localStorage.getItem("@Omni:token"),
  token: localStorage.getItem("@Omni:token") || null
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return { ...state, token: action.payload.token, signedIn: true };
    case "SIGN_OUT":
      return { ...state, signedIn: false, token: null };
    default:
      return state;
  }
}

export default auth;
