/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// shortcut-rafce
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate  } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  // state-variable name is menu and setter() name is setmenu
  const [menu, setMenu] = useState("Home");
  // const [menu,setMenu] =useState("Menu");
  // const [menu,setMenu] =useState("Mobile-app");
  // const [menu,setMenu] =useState("Contact Us");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo"></img>
      </Link>
      <ul className="navbar-menu">
        {/* when state is home active class will be active on li tag */}
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact-Us")}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt=""></img>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {/* if getTotalCartAmount is 0 in this case return empty string, or return dot class name */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
                <li>
                    <img src={assets.bag_icon} alt="" />
                    <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout} >
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                </li>
            </ul>
        </div>
        }
        {/* <button onClick={() => setShowLogin(true)}>Sign In</button> */}
      </div>
    </div>
  );
};

export default Navbar;
