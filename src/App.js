import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
//import Post from "./components/Post";
const Post = lazy(() => import('./components/Post'));

const App = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(10);

  const showMorePosts = () => {
    setVisible((prevValue) => prevValue + 10)
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default App;
