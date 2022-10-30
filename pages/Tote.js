import React from "react"
import Footer from "./Footer";

const Tote = () => {
    return(<div class = "page">
            <div class = "title">
                <p> Totes:</p>
            </div>
            <div class = "toteLinks">
            <div class = "itemLink">
                <a href = "totes.html"><img class = "productPicture" src={require("./images/lemontote.jpg")} alt="lemontote"/></a>
                <p class = "linkTitle"> Lemon Tote</p>
                <p class = "price">$20.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/blueberrytote.jpg")} alt="blueberrytote"/></a>
                <p class = "linkTitle">Blueberry Tote</p>
                <p class = "price">$20.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/strawberrytote.jpg")} alt="strawberrytote"/></a>
                <p class = "linkTitle">Strawberry Tote</p>
                <p class = "price">$20.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/peartote.jpg")} alt="peartote"/></a>
                <p class = "linkTitle">Pear Tote</p>
                <p class = "price">$20.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/peachtote.jpg")} alt="peachtote"/></a>
                <p class = "linkTitle">Peach Tote</p>
                <p class = "price">$20.00</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "productPicture" src={require("./images/watermelontote.jpg")} alt="watermelontote"/></a>
                <p class = "linkTitle">Watermelon Tote</p>
                <p class = "price">$20.00</p> 
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            </div>
            <Footer/>
        </div>);
    
};

export default Tote;