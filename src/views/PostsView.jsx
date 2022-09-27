import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getData} from "../restService.jsx"

function PostsView() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   getData('/posts' , setPosts)
  }, []);

  return (
    <div>
      <h2>List of posts:</h2>
      <ul>
        {posts.length
          ? posts.map((post) => (
              <li key={post.id}>
                <div> Title: {post.title} </div>
                <div>Content: {post.body}</div>
              </li>
            ))
          : null}
      </ul>
      <Link to='/addpost'>Add post</Link>
    </div>
  );
}

export default PostsView;
