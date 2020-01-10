export const signInRequest = (email, password) => {
  console.log(email, password);
  return {
    type: "SIGN_IN_REQUEST",
    payload: { email, password }
  };
};

export const signInSuccess = token => ({
  type: "SIGN_IN_SUCCESS",
  payload: { token }
});

export const signOut = () => ({
  type: "SIGN_OUT"
});
