import React, { useState } from "react";
import axios from "axios";

function HomeView() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const submitHandler = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Welcome to my simple app!</h2>
        <p>Search:</p>
        <input
          type='text'
          name='search'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <select>
          <option>Post</option>
          <option>User</option>
        </select>
        <button type='submit'>Search</button>
        <div className='searchContent'></div>
      </div>
    </form>
  );
}

export default HomeView;
