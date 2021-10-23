import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";

const App = () => {
  let limit = 10;
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(10);

  const showMorePosts = () => {
    setVisible((prevValue) => prevValue + 10)
  }

  useEffect(() => {
    fetchData();
  }, []);

  // https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}
  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Assignment</h1>
      <br />
      <div>
        {posts.slice(0, visible).map((post) => (
          <Post
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
      <button className="showMore" onClick={showMorePosts}>Show More</button>
    </div>
  );
};

export default App;
