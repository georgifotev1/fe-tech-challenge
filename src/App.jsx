import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import PostsView from "./views/PostsView";
import UsersView from "./views/UsersView";
import NavBar from "./views/NavBar";
import "./App.css";


function App() {


  return (
    <BrowserRouter>
      <div className='App'>
        <h1>My simple app</h1>
        <NavBar />
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
