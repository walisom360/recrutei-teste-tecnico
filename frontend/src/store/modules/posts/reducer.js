const INITIAL_STATE = {
  postModalUpdateOpen: false,
  postModalOpen: false,
  postModalRemoveOpen: false,
  atualized: {
    documents: 0,
    tutorials: 0,
    meeting: 0,
    pages: 0
  },
  loading: false,
  loadingUpdate: false,
  docs: [],
  page: 1,
  postInformations: {}
};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET__ATUALIZED_POSTS_SUCCESS":
      return { ...state, atualized: action.payload.atualized };
    case "CREATE_POST_REQUEST":
      return { ...state, loading: true };

    case "CREATE_POST_SUCCESS":
      return { ...state, loading: false };

    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        docs: action.payload.docs,
        postInformations: action.payload.postInformations
      };

    case "POST_MODAL_OPEN":
      return { ...state, postModalOpen: true };
    case "POST_MODAL_CLOSE":
      return { ...state, postModalOpen: false };

    case "POST_MODAL_UPDATE_OPEN":
      return { ...state, postModalUpdateOpen: true };
    case "POST_MODAL_UPDATE_CLOSE":
      return { ...state, postModalUpdateOpen: false };

    case "POST_MODAL_REMOVE_OPEN":
      return { ...state, postModalRemoveOpen: true };
    case "POST_MODAL_REMOVE_CLOSE":
      return { ...state, postModalRemoveOpen: false };

    case "UPDATE_POST_REQUEST":
      return { ...state, loadingUpdate: true };

    case "UPDATE_POST_SUCCESS":
      return { ...state, loadingUpdate: false };

    case "NEXT_PAGE_SUCCESS":
      return { ...state, page: action.payload.nextPage };

    case "PREV_PAGE_SUCCESS":
      return { ...state, page: action.payload.prevPage };

    default:
      return state;
  }
}
