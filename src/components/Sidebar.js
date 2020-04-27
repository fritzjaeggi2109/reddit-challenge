import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import classes from "../css/sidebar.module.css";

import Post from "./Post";

const Sidebar = (props) => {
  const fetchData = () => {
    console.log("load more");
  };

  const buildPostList = (posts) => {
    return posts.map((post) => {
      console.log(post);
      return <Post key={post.data.id} post={post.data} />;
    });
  };

  return (
    <div className={classes.sidebar}>
      <h1>Sidebar</h1>
      {props.posts ? (
        <InfiniteScroll
          dataLength={props.posts.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {buildPostList(props.posts)}
        </InfiniteScroll>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Sidebar;
