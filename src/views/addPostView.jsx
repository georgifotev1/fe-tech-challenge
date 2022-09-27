import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {postData} from "../restService.jsx"

function AddPostView() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const submitHandler = (ev) => {
    ev.preventDefault();
    const blog = { title, body };

    postData("/posts", blog)
    navigate("/posts");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title:</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            type='text'
            name='body'
            value={body}
            onChange={(ev) => setBody(ev.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddPostView;
