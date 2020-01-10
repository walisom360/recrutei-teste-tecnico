export const getAtualizedPostsRequest = () => ({
  type: "GET_ATUALIZED_POSTS_REQUEST"
});

export const getAtualizedPostsSuccess = atualized => ({
  type: "GET__ATUALIZED_POSTS_SUCCESS",
  payload: { atualized }
});

export const createPostRequest = data => ({
  type: "CREATE_POST_REQUEST",
  payload: { data }
});

export const createPostSuccess = () => ({
  type: "CREATE_POST_SUCCESS"
});

export const updatePostRequest = (id, title, content) => ({
  type: "UPDATE_POST_REQUEST",
  payload: { id, title, content }
});

export const updatePostSuccess = () => ({
  type: "UPDATE_POST_SUCCESS"
});

export const removePostRequest = id => ({
  type: "REMOVE_POST_REQUEST",
  payload: { id }
});

export const removePostSuccess = () => ({
  type: "REMOVE_POST_SUCCESS"
});

export const getPostsRequest = () => ({
  type: "GET_POSTS_REQUEST"
});

export const getPostsSuccess = (docs, postInformations) => ({
  type: "GET_POSTS_SUCCESS",
  payload: { docs, postInformations }
});

export const postsModalOpen = () => ({
  type: "POST_MODAL_OPEN"
});

export const postsModalClose = () => ({
  type: "POST_MODAL_CLOSE"
});

export const postsModalUpdateOpen = () => ({
  type: "POST_MODAL_UPDATE_OPEN"
});

export const postsModalUpdateClose = () => ({
  type: "POST_MODAL_UPDATE_CLOSE"
});

export const postsModalRemoveOpen = () => ({
  type: "POST_MODAL_REMOVE_OPEN"
});

export const postsModalRemoveClose = () => ({
  type: "POST_MODAL_REMOVE_CLOSE"
});

export const nextPageRequest = () => ({
  type: "NEXT_PAGE_REQUEST"
});

export const nextPageSuccess = nextPage => ({
  type: "NEXT_PAGE_SUCCESS",
  payload: { nextPage }
});

export const prevPageRequest = () => ({
  type: "PREV_PAGE_REQUEST"
});

export const prevPageSuccess = prevPage => ({
  type: "PREV_PAGE_SUCCESS",
  payload: { prevPage }
});
