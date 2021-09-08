import { useContext, useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
import {Context} from "../../context/Context";
import axios from "axios";
import { axiosInstance } from "../../config";

const Setting = () => {
  const PF = "https://tech-diary.herokuapp.com/images/"
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [success, setSuccess] = useState(false)

  const handleUpdate = async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"});
    let postData = {
      userId:user._id,
      username,
      email,
      password,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      postData.profilePic = filename;
      try {
        await axiosInstance.post("/upload", data)
      } catch (error) {
        console.log(error);
      }
    }
    const res = await axiosInstance.put("/users/update/"+user._id, postData)
    .then(res=>{
      setSuccess(true)
      dispatch({type:"UPDATE_SUCCESS", payload:res.data});
    })
    .catch(err=>{
      console.log(err)
      dispatch({type:"UPDATE_FAILURE"});
    })
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form onSubmit={handleUpdate} className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
              <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />
            </label>
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} />
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Setting
