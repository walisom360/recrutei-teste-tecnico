const INITIAL_STATE = {
  loading: false,
  user: {}
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return { ...state, user: action.payload.data };

    case "SIGN_UP_USER_REQUEST":
      return { ...state, loading: true };

    case "SIGN_UP_USER_SUCCESS":
      return { ...state, loading: false };

    default:
      return state;
  }
}
