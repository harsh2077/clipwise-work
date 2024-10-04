import React from "react";
import styles from "./Hero.module.css";
import wave from "../../images/wave1.png";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import product from "../../images/product.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  swipe: true,          
  draggable: true,       
  touchMove: true,      
};

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={wave} alt="wave" />
      </div>

      <div className={styles.smallContainer}>
        <img className={styles.logoImage} src={logo} alt="logo" />

        <div className={styles.right}>
          <div className={styles.first}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
          </div>

          <img src={cartIcon} alt="carticon" />
        </div>
      </div>

      {/* Main hero section */}
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <h2>Welcome to</h2>
          <h1>Pop Rock Crystal Shop!</h1>
          <p>
            Here you will find unique phone accessories, crystals, jewelry, and more.
            Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>

          <div className={styles.proxy}>
            <button>SHOP NOW</button>
            <button>About Us</button>
          </div>
        </div>

        <div >
          <Slider  className={styles.picture}{...settings}>
            <div className={styles.carousel}>
              <img src={product} alt="product" />
            </div>
            <div className={styles.carousel}>
              <img src={product} alt="product" />
            </div>
            <div className={styles.carousel}>
              <img src={product} alt="product" />
            </div>
            <div className={styles.carousel}>
              <img src={product} alt="product" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
