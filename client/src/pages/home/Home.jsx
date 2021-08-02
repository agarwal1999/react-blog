import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get("http://localhost:5000/api/posts/get");
      setPosts(response.data);
    }
    fetchData();
  },[])
  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar/>
      </div>
    </>
  )
}

export default Home
