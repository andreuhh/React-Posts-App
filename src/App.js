import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";

const App = () => {
  let limit = 10;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(posts);
  return (
    <div className="App">
      <h3>Assignment</h3>
      <br />
      <div>
        {posts.map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <button>Show More</button>
    </div>
  );
};

export default App;
