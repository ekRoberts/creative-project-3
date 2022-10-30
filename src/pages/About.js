import React from 'react';
import Footer from "./Footer";

const About = () => {
    return(<div class = "page">
          <p class = "title">Welcome to The Fruit Basket</p> 
            <div class = "text">
               <img class = "aboutFruit" src={require("./images/aboutFruitPicture.jpg")}/>
               <p class = "descriptionText"> My name is Emma and this is my little shop. I have always loved anything with a picture
               of fruit on it. However whenever I was looking for my wonderful fruit themed items they were very hard to find.
               I created this store for all the people like me who love fruit. I draw all of the designs myself and package each 
               order. My business is based in Provo, Utah and I ship all over the United States. Have a look around and enjoy The Fruit Basket.</p>
            </div>
            <div class = "endPictures">
            <img class = "picture" src={require("./images/circleAbout.jpg")}></img>
            <div class = "logo">
                <img class = "logoImage" src={require("./images/fruitbasketLogo.jpg")} />
            </div>
            </div>
            <Footer/>
        </div>
        );
};

export default About;