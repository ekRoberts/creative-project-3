import React from "react"
import Footer from "./Footer";

const Shirts = () => {
    return(<div class = "page">
            <div class = "title">
                <p> Shirts:</p>
            </div>
            <div class = "toteLinks">
            <div class = "itemLink">
                <a href = "totes.html"><img class = "productPicture" src={require("./images/pearShirt.png")} alt="lemontote"/></a>
                <p class = "linkTitle"> Pear Shirt</p>
                <p class = "price">$25.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/strawberryShirt.png")} alt="blueberrytote"/></a>
                <p class = "linkTitle">Strawberry Shirt</p>
                <p class = "price">$25.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/blueberryShirt.png")} alt="strawberrytote"/></a>
                <p class = "linkTitle">Blueberry Shirt</p>
                <p class = "price">$25.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/lemonShirt.png")} alt="peartote"/></a>
                <p class = "linkTitle">Lemon Shirt</p>
                <p class = "price">$25.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            </div>
            <Footer/>
        </div>);
    
};

export default Shirts;