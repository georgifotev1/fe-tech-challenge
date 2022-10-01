import React, { useState } from "react";
import {getData} from "../restService.jsx"

function HomeView() {
  const [choise, setChoise] = useState("users");
  let [data, setData] = useState([]);
  const path = "/" + choise;
  let matches = [];

  const submitHandler = (ev) => {
    ev.preventDefault();
    const searchFor = document.querySelector("input").value;
    getData(path, (response) => {
      for (let token of response) {
        if (choise === "posts") {
          if (token.title.includes(searchFor)) {
            matches.push(token.title);
          }
        } else {
          if (token.username.includes(searchFor)) {
            matches.push(token.username);
          }
        }
      }
        setData(matches);
        document.querySelector("input").value = "";
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Welcome to my simple app!</h2>
        <p>Search:</p>
        <input type='text' placeholder='username or title' />
        <select value={choise} onChange={(ev) => setChoise(ev.target.value)}>
          <option value='posts'>Post title</option>
          <option value='users'>Username</option>
        </select>
        <button type='submit'>Search</button>
        <div className='searchContent'>
          <ul>
            {data.length
              ? data.map((input) => <li key={input}>{input}</li>)
              : null}
          </ul>
        </div>
      </div>
    </form>
  );
}

export default HomeView;
