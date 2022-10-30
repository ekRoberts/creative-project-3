import React from 'react';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';
import Footer from "./Footer";

const Shop = () => {
    return(
    <div class = "page" >
            <div class = "title">
                <p> Shop For:</p>
            </div>
            <p className = "instructions"> Click links to See Products!</p>
        <nav>
        <Link className = "shopLink" to="./Tote">Totes</Link>
        <Link className = "shopLink" to="./Stickers">Stickers</Link>
      </nav>
      <Outlet />
      <Footer/>
        </div>
        )
};

export default Shop;