import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class UsersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3030/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => alert(error.message));
  }

  render() {
    const { users } = this.state;
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
}

export default UsersView;
