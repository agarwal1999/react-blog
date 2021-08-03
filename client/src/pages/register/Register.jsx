import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();            // if we don't write this line it will refresh the page when we click on the button
    setError(false);
    let postData = {
      username:username,
      email:email,
      password:password
    }
    await axios.post("http://localhost:5000/api/auth/register", postData)
    .then(res=>{
      res.data && window.location.replace("/login");
    })
    .catch(err=>{
      console.log(err)
      setError(true);
    });
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Enter your username..." 
          onChange={(e)=>setUsername(e.target.value)} 
        />
        <label>Email</label>
        <input 
          type="text" 
          className="registerInput" 
          placeholder="Enter your email..." 
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
          type="password" 
          className="registerInput" 
          placeholder="Enter your password..." 
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something Went Wrong!</span>}
    </div>
  )
}

export default Register
