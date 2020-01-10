export const getUser = () => ({
  type: "GET_USER"
});

export const getUserSuccess = data => ({
  type: "GET_USER_SUCCESS",
  payload: { data }
});

//CRIAR USUARIO
export const signUpUserRequest = (name, email, password) => ({
  type: "SIGN_UP_USER_REQUEST",
  payload: { name, email, password }
});

//apenas para o loading do botão de criação
//verdinho que criou
export const signUpUserSuccess = () => ({
  type: "SIGN_UP_USER_SUCCESS"
});
