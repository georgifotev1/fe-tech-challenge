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
      .get("http://localhost:3000/users")
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
        <ul>
          {users.length
            ? users.map((user) => <li key={user.id}>{user.fullname}</li>)
            : null}
        </ul>
        <Link to='/adduser'>Add user</Link>
      </div>
    );
  }
}

export default UsersView;
