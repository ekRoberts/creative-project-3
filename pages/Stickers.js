import React from "react";
import GroupLemonSticker from "./images/groupLemonSticker.png"
import Footer from "./Footer";

const Stickers = () => {
    return(<div class = "page">
            <div class = "title">
                <p> Stickers:</p>
            </div>
            <div class = "toteLinks" >
            <div class = "itemLink">
                <img class = "LemonGroup" src={GroupLemonSticker}/>
                <p class = "linkTitle"> Circle of Lemons</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            <div class = "itemLink">
                <a href = "stickers.html"><img class = "Lemon" src={require("./images/lemonSticker.jpg")}/></a>
                <p class = "linkTitle">Lemon</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "StrawberryGroup" src={require("./images/groupStrawberrySticker.jpg")}/></a>
                <p class = "linkTitle">Group of Strawberries</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "Pear" src={require("./images/pearSticker.jpg")}/></a>
                <p class = "linkTitle">Pear</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "Peach" src={require("./images/peachSticker.jpg")}/></a>
                <p class = "linkTitle">Peach</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
             <div class = "itemLink">
                <a href = "stickers.html"><img class = "Watermelon" src={require("./images/watermelonSticker.jpg")}/></a>
                <p class = "linkTitle">Watermelon</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            <div class = "itemLink">
                <a href = "stickers.html"><img class = "Blueberries" src={require("./images/blueberrySticker.jpg")}/></a>
                <p class = "linkTitle">Blueberries</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            <div class = "itemLink">
                <a href = "stickers.html"><img class = "Peach" src={require("./images/strawberrySticker.jpg")}/></a>
                <p class = "linkTitle">Strawberry</p>
                <p class = "price">$1.50</p>
                <button type="button" class="cart"> Add To Cart</button>
            </div>
            </div>
            <Footer/>
        </div>);
    
};

export default Stickers