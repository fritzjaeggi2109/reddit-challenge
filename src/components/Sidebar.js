import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchPosts } from "../actions";

import classes from "../css/sidebar.module.css";

import Post from "./Post";

class Sidebar extends React.Component {
  fetchData = () => {
    console.log("load more");
    this.props.fetchPosts(this.props.after);
  };

  buildPostList = (posts) => {
    return posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
  };

  render() {
    return (
      <div className={classes.sidebar}>
        {this.props.posts ? (
          <InfiniteScroll
            dataLength={this.props.posts.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.buildPostList(this.props.posts)}
          </InfiniteScroll>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    after: state.posts.after,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Sidebar);
