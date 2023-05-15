import React, { useState, useEffect } from "react";
import logo from "../../asset/logo.webp";
import Netflixavatar from "../../asset/Netflix-avatar.png";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import "./Header.scss";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <div className={`header-container${isSticky ? " fixed-header" : ""}`}>
      <div className="logo-header">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav className="links-header">
        <ul>
          <li>
            <NavLink exact to="/home" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv" activeClassName="active-link">
              TV Progammes
            </NavLink>
          </li>
          <li>
            <NavLink to="/films" activeClassName="active-link">
              Films
            </NavLink>
          </li>
          <li>
            <NavLink to="/orginals" activeClassName="active-link">
              Orginals
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icon">
        <NavLink to="/search">
          <BiSearch className="icon-header" />
        </NavLink>
        <IoIosNotifications className="icon-header" />
        <img style={{ width: "30px" }} src={Netflixavatar} alt="avata" />
      </div>
    </div>
  );
};

export default Header;
