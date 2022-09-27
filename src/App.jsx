import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import AddPostView from "./views/addPostView";
import HomeView from "./views/HomeView";
import PostsView from "./views/PostsView";
import UsersView from "./views/UsersView";
import AddUserView from "./views/addUserView";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>My simple app</h1>
        <nav>
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
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/posts' element={<PostsView />} />
            <Route path='/users' element={<UsersView />} />
            <Route path='/addpost' element={<AddPostView />} />
            <Route path='/adduser' element={<AddUserView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;