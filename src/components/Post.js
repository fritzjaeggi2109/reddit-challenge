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
        <p className="postTitle">{post.title}</p>
        <p>{post.author}</p>
        <p>{post.created_utc}</p>
        <p>{post.num_comments}</p>
      </div>
      <div className="postActions">
        <div>
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
        <p className="postReadedStatus"></p>
      </div>
    </div>
  );
};

export default Post;
