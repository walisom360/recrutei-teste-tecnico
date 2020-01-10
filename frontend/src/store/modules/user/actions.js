export const getUser = () => ({
  type: "GET_USER"
});

export const getUserSuccess = data => ({
  type: "GET_USER_SUCCESS",
  payload: { data }
});

export const signUpUserRequest = (name, email, password) => ({
  type: "SIGN_UP_USER_REQUEST",
  payload: { name, email, password }
});

export const signUpUserSuccess = () => ({
  type: "SIGN_UP_USER_SUCCESS"
});
