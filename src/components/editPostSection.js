import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/postsSlice";

function EditPostSection({ post, setIsEdit }) {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const dispatch = useDispatch();
  return (
    <Fragment>
      <input
        type="text"
        value={updatedTitle}
        placeholder="Updated Title"
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <input
        type="text"
        value={updatedDescription}
        placeholder="Updated Description"
        onChange={(e) => setUpdatedDescription(e.target.value)}
      />
      <button
        className="update"
        onClick={() => {
          if (updatedTitle === "" || updatedDescription === "") {
            alert("please input the data");
          } else {
            dispatch(
              updatePost({
                id: post.id,
                title: updatedTitle,
                description: updatedDescription,
              })
            );
            setIsEdit(false);
            setUpdatedTitle("");
            setUpdatedDescription("");
          }
        }}
      >
        update
      </button>
      <button className="esc" onClick={() => setIsEdit(false)}>
        X
      </button>
    </Fragment>
  );
}

export default EditPostSection;
