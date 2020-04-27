import reddit from "../api/reddit";

export const fetchPosts = (after) => async (dispatch) => {
  const resp = await reddit.get(`/r/all/top.json?after=${after}&limit=10`);

  const posts = {
    after: resp.data.data.after,
    posts: resp.data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      url: `${reddit}/${post.data.permalink}`,
      preview: post.data.url,
      author: post.data.author,
      thumbnail: post.data.thumbnail,
      comments: post.data.num_comments,
      created: post.data.created_utc,
      selected: false,
      removed: false,
      read: false,
    })),
  };

  dispatch({
    type: "FETCH_POSTS",
    payload: posts,
  });
};
