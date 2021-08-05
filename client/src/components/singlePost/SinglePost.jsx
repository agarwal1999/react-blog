import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import {Context} from "../../context/Context";
import "./singlePost.css"

const SinglePost = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  useEffect(()=>{
    const getPost = async ()=>{
      const response = await axios.get(`http://localhost:5000/api/posts/get/${id}`);
      setPost(response.data);
    }
    getPost();
  },[id]);

  const handleDelete = async ()=>{
    await axios.delete(`http://localhost:5000/api/posts/delete/${id}`, {data:{username:user.username}})
    .then(res=>window.location.replace("/"))
    .catch(err=>console.log(err))
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (<img src={PF + post.photo} alt="" className="singlePostImg" />)}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username===user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : 
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost
