import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456789"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="123454321"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71mw9QPevUL._AC_UY436_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71smqRr0pmL._AC_UY436_QL65_.jpg"
            rating={3}
          />
          <Product
            id="123456789"
            title="Fullstar Vegetable Chopper - Spiralizer Vegetable Slicer - Onion Chopper with Container - Pro Food Chopper - Black Slicer Dicer Cutter - 4 Blades"
            price={24.97}
            image="https://m.media-amazon.com/images/I/81d9IpjoKLL._AC_UL640_QL65_.jpg"
            rating={5}
          />
          <Product
            id="123456789"
            title="SNAPTAIN SP650 Pro 2.7K Drone with Camera for Adults 2.7K HD Live Video Camera Drone for Beginners w/Voice Control, Gesture Control, Circle Fly, High-Speed Rotation, Altitude Hold, Headless Mode"
            price={119.99}
            image="https://m.media-amazon.com/images/I/71xH8icLdjL._AC_UL640_QL65_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456789"
            title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
            price={397.99}
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY436_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
