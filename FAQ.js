import React from 'react';

const FAQ = () => {
    return( <div class = "page">
            <p class = "FAQTitle">
                Frequently Asked Questions
            </p>
            <div class = "questions">
            <div class = "questionBlock">
                <p class = "question">
                    Do you offer refunds and returns?
                </p>
                <p class = "answer">
                   Yes! If you are dissatisfied with your product or it arrives damaged you 
                    can contact us and we will go through the return process with you. </p>
            </div>
            <div class = "questionBlock">
                <p class = "question">
                    How long will it take for my order to get here?
                </p>
                <p class = "answer">
                     Because we package each order ourselves and ship usig USPS the order will take average
                    of 2-3 weeks to get to you. This may be longer (or shorter) depending on your location.
                </p>
            </div>
            <div class = "questionBlock">
                <p class = "question">
                    How often you get new products in the shop?
                </p>
                <p class = "answer">
                    We try to add new products every month, but depending on how busy the shop is it may be more or less often.
                </p>
            </div>
            <div class = "questionBlock">
                <p class = "question">
                    Do offer anything other than fruit themed products?
                </p>
                <p class = "answer">
                    Fruit is our niche! Fruit products are what we are passionate about and so you will only find fruit themed products in our shop.
                    We try to offer a wide range of styles and fruits, but if you don't want a some piece of fruit this probably isnt the shop for you. But if you
                    know someone who does love fruit like show them our page!
                </p>
            </div>
            </div>
            <div class = "logo">
                <img class = "logoImage" src={require("./images/fruitbasketLogo.jpg")} />
            </div>
        </div>);
};

export default FAQ;