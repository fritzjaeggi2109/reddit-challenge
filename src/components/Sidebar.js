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
      return <Post key={post.id} post={post} />;
    });
  };

  return (
    <div className={classes.sidebar}>
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
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Sidebar;
