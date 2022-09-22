import React from "react";
import axios from "axios";

class PostsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/georgifotev1/fe-tech-challenge/posts"
      )
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
            ? posts.map((post) => <li key={post.id}>{post.title}</li>)
            : null}
        </ul>
      </div>
    );
  }
}

export default PostsView;
