import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/postsSlice";
import EditPostSection from "./editPostSection";
import Post from "./post";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  const posts = useSelector((state) => state.posts.items);

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={title}
          placeholder="Enter Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Enter Post Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            if (title === "" || description === "") {
              alert("please input the data");
            } else {
              dispatch(addPost({ id: posts.length + 1, title, description }));
              setTitle("");
              setDescription("");
            }
          }}
        >
          Add Post
        </button>
      </div>

      <div className="posts">
        {posts.length > 0
          ? posts.map((post) => (
              <div key={post.id} className="post">
                <Post post={post} setIsEdit={setIsEdit} setId={setId} />
                <br />

                {isEdit && id === post.id && (
                  <EditPostSection post={post} setIsEdit={setIsEdit} />
                )}
              </div>
            ))
          : `There's no posts`}
      </div>
    </div>
  );
};

export default Posts;
