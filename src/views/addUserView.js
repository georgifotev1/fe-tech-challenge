import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// class AddUserView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: "",
//       username: "",
//       email: "",
//     };
//   }

//   changeHandler = (ev) => {
//     this.setState({ [ev.target.name]: ev.target.value });
//   };

//   submitHandler = (ev) => {
//     ev.preventDefault();
//     axios
//       .post("http://localhost:3030/users", this.state)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   };

//   render() {
//     const { fullname, username, email } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <label>Name:</label>
//             <input
//               type='text'
//               name='fullname'
//               value={fullname}
//               onChange={this.changeHandler}
//             />
//           </div>

//           <div>
//             <label>Username:</label>
//             <input
//               type='text'
//               name='username'
//               value={username}
//               onChange={this.changeHandler}
//             />
//           </div>

//           <div>
//             <label>Email:</label>
//             <input
//               type='text'
//               name='email'
//               value={email}
//               onChange={this.changeHandler}
//             />
//           </div>

//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

function AddUserView() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const submitHandler = (ev) => {
    ev.preventDefault();
    const blog = { fullname, username, email };

    axios
      .post("http://localhost:3030/users", blog)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/users");
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
