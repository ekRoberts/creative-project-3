import React from 'react';
import Footer from "./Footer";

const Home = () => {
return (<div class = "page">
            <div class = "logo">
                <img className = "logoImage" src={require('./images/fruitbasketLogo.jpg')} />

            </div>
            <div className = "description">
                <p>
                    The Fruit Basket is dedicated to bringing you the cutest fruit products. 
                    Each of our designs is hand drawn and packaged in Provo, UT. 
                </p>
            </div>
            <div class = "shopNow">
                <div class = "title">
                  <p> Shop For:</p>
              </div>
              <div class = "shopLinks">
                 <div class = "itemLink">
                  <p class = "linkTitle"> Totes</p>
                <img class = "productPicture" src={require("./images/lemontote.jpg")}/>
              </div>
              <div class = "itemLink">
                  <p class = "linkTitle">Stickers</p>
                <img class = "productPicture" src={require("./images/peachSticker.jpg")}/>
              </div>
              <div class = "itemLink">
                  <p class = "linkTitle">Shirts</p>
                <img class = "productPicture" src={require("./images/strawberryShirt.png")}/>
              </div>
              </div>
            </div>
            <div class = "bestsellers">
              <p class = "titleBest">Our BestSellers:</p>
                <div class = "products">
                  <div class = "tote">
                  <a href = "stickers.html"><img class = "productPicture" src={require("./images/peartote.jpg")}/></a>
                  <p class = "linkTitle">Pear Tote</p>
                  <p class = "price">$20.00</p> 
                  <button type="button" class="cart"> Add To Cart</button>
                  </div>
                  <div class = "sticker">
                  <a href = "stickers.html"><img class = "productPicture" src={require("./images/groupLemonSticker.png")}/></a>
                  <p class = "linkTitle">Circle of Lemons</p>
                  <p class = "price">$1.50</p> 
                  <button type="button" class="cart"> Add To Cart</button>
                  </div>
                  <div class = "tote">
                  <a href = "stickers.html"><img class = "productPicture" src={require("./images/strawberrytote.jpg")}/></a>
                  <p class = "linkTitle">Strawberry Tote</p>
                  <p class = "price">$20.00</p> 
                  <button type="button" class="cart"> Add To Cart</button>
                  </div>
              </div>
            </div>
            <Footer/>
        </div>);
};

export default Home;