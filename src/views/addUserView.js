import React from "react";
import axios from "axios";

class AddUserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
    };
  }

  changeHandler = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  submitHandler = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3000/users", this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { fullname, username, email } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='fullname'
              value={fullname}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type='text'
              name='email'
              value={email}
              onChange={this.changeHandler}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserView;
