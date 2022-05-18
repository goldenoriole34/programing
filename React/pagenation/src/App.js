import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  /*                 */

  return (
    <div className="App">
      <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
    </div>
  );
}

export default App;