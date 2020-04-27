const INITIAL_DATA = {
  posts: [],
};

export default (state = INITIAL_DATA, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: [...state.posts, ...action.payload.posts] };
    default:
      return state;
  }
};
