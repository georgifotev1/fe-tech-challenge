import React, { useState } from "react";
import {postData} from "../restService.jsx"

function AddUserView({closeModal}) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
  const submitHandler = (ev) => {
    ev.preventDefault();
    const blog = { fullname, username, email };
    if (fullname !== "" && username !== "" && email !== ""){
      postData("/users", blog)
    } else {
      alert("All fields must be filled in!")
    }
    closeModal(false);  
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input
            id='name'
            type='text'
            name='fullname'
            value={fullname}
            onChange={(ev) => setFullname(ev.target.value)}
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            id='username'
            type='text'
            name='username'
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            id='email'
            type='text'
            name='email'
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddUserView;
