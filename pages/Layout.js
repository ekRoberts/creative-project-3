import React from 'react';

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className = "navContainer">
      <p class = "brandLabel"> The Fruit Basket</p>
        <ul className = "menuRoute">
          <li className = "menuElement">
            <Link className = "menuElement" to="/">Home</Link>
          </li>
          <li className = "menuElement">
            <Link className = "menuElement" to="/Stickers">Stickers</Link>
          </li>
           <li className = "menuElement">
            <Link className = "menuElement" to="/Tote">Totes</Link>
          </li>
          <li className = "menuElement">
            <Link className = "menuElement" to="/Shirts">Shirts</Link>
          </li>
          <li className = "menuElement">
            <Link className = "menuElement" to="/About">About</Link>
          </li>
          <li className = "menuElement">
            <Link className = "menuElement" to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;