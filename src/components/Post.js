import React from "react";
import { formatDate } from "../utils/dateFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import classes from "../css/post.module.css";

const Post = ({ post }) => {
  return (
    <div className={classes.postCard}>
      <div className={classes.postThumb}>
        <img className={classes.thumb} alt="" src={post.thumbnail} />
      </div>
      <div className={classes.postDetails}>
        <span className={classes.postTitle}>{post.title}</span>
        <div className={classes.postAuthorDate}>
          <span className={classes.postAuthor}>{post.author}</span>
          <span className={classes.postDate}>
            {formatDate(post.created)} ago
          </span>
        </div>
        <span className={classes.postComment}>{post.comments} comments</span>
      </div>
      <div className="postActions">
        <div>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <span className="postReadedStatus"></span>
      </div>
    </div>
  );
};

export default Post;
