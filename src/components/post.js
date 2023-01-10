import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/postsSlice";

function Post({ post, setIsEdit, setId }) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button
        className="update"
        onClick={() => {
          setIsEdit(true);
          setId(post.id);
        }}
      >
        Edit Post
      </button>
      <button onClick={() => dispatch(deletePost(post.id))}>Delete Post</button>
    </Fragment>
  );
}

export default Post;
