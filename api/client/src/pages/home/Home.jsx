import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios";
import { useLocation } from "react-router-dom"
import { axiosInstance } from "../../config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  console.log(search)

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axiosInstance.get("/posts/get"+search);
      setPosts(response.data);
    }
    fetchData();
  },[search])
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
