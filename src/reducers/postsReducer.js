const INITIAL_DATA = {
  posts: [],
  after: "",
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
        after: action.payload.after,
      };
    default:
      return state;
  }
};
