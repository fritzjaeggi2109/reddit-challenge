import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post }) => {
  return (
    <div className="postCard">
      <div className="postThumb">
        <img alt="" src="" />
      </div>
      <div className="postDetails">
        <span className="postTitle">{post.title}</span>
        <span>{post.author}</span>
        <span>{post.created_utc}</span>
        <span>{post.num_comments}</span>
      </div>
      <div className="postActions">
        <div>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
        <span className="postReadedStatus"></span>
      </div>
    </div>
  );
};

export default Post;
