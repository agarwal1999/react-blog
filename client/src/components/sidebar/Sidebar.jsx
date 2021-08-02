import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    const fetchCat = async ()=>{
      const response = await axios.get("http://localhost:5000/api/categories/get");
      setCategories(response.data);  
    }
    fetchCat();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ex quo, laboriosam doloremque veritatis repellendus aliquam non eveniet reiciendis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map(cat=>(
            <li className="sidebarListItem"><Link to={`/?cat=${cat.name}`} className="link">{cat.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
