import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="container flex-b">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="JoeysCoin Logo" />
            </Link>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex-b-g">
              <li onClick={() => setOpen(null)}>
                <NavLink className="active" to="/">Home</NavLink>
              </li>
              <li onClick={() => setOpen(null)}>
                <NavLink className="" to="/crypto">Crypto</NavLink>
              </li>
              <li onClick={() => setOpen(null)}>
                <NavLink className="" to="/portfolio">Porfolio</NavLink>
              </li>
              <li onClick={() => setOpen(null)}>
                <NavLink className="" to="/shop">shop</NavLink>
              </li>
              <li onClick={() => setOpen(null)}>
                <NavLink className="" to="/blog">blog</NavLink>
              </li>
            </ul>
          </nav>
          <div class="account flex-b-g">
            <button class="login-inactive">
                <BiShoppingBag size={22}/>
            </button>
            <Link className="account-dasboard" to="/dashboard" style={{display: "flex"}}>
              Dashboard
            </Link>
            <button class="open-menu" onClick={() => setOpen(!open)}>
                <HiOutlineMenuAlt1 />
            </button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;
