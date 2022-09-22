import React from "react";
import axios from "axios";
class UsersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/georgifotev1/fe-tech-challenge/users"
      )
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
            ? users.map((user) => <li key={user.id}>{user.name}</li>)
            : null}
        </ul>
      </div>
    );
  }
}

export default UsersView;
