import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import PostsView from "./views/PostsView";
import UsersView from "./views/UsersView";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Simple app</h1>
          <ul className='header'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
          <div className='content'>
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/posts' element={<PostsView />} />
              <Route path='/users' element={<UsersView />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
