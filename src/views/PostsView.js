import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3030/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((error) => alert(error.message));
  }

  render() {
    const { posts } = this.state;
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
}

export default PostsView;
