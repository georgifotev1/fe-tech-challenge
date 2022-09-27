import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getData} from "../restService.jsx"

function UsersView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData("/users", setUsers)
  }, []);

  return (
    <div>
      <h2>All users:</h2>
      <ol>
        {users.length
          ? users.map((user) => (
              <li key={user.id}>
                <div>User name: {user.username}</div>
                <div>Full name: {user.fullname}</div>
                <div>Email: {user.email}</div>
              </li>
            ))
          : null}
      </ol>
      <Link to='/adduser'>Add user</Link>
    </div>
  );
}

export default UsersView;
