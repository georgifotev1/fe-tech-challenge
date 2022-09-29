import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import PostsView from "./views/PostsView";
import UsersView from "./views/UsersView";
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


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
