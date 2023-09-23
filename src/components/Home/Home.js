import React,{ Fragment, useContext } from 'react';
import { FoodContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import pizzaVideo from '../videos/Pizza - Promo Video.mp4';
import './Home.css';
import InfiniteSwiper from '../Swiper/Swiper';
import about_us_image from '../../components/images/about_us.jpg';
import about_us_bg from '../../components/images/about_us_bg.jpeg';

import icon_1 from '../../components/images/icon_images/pic_1.jpg'
import icon_2 from '../../components/images/icon_images/pic-2.jpg'
import icon_3 from '../../components/images/icon_images/pic-3.jpg'
import icon_4 from '../../components/images/icon_images/pic-4.jpg'

function Home() {

  const context = useContext(FoodContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="video_container">
        <video src={pizzaVideo} alt={about_us_bg} autoPlay muted loop />
        <div className="text_container">
          <h1>
            fresh dough for fresh <span>pizza</span>
          </h1>
          <p>we ensure quality on your every bite</p>
          <button onClick={() => navigate("/Pizza")}>order online</button>
        </div>
      </div>
      <section className="offer_info">
        <InfiniteSwiper />
      </section>

      <section className="card">
        <div className="card__container">
          {context.data.map((data, i) => {
            let imageUrl = data.image;
            return (
              <Fragment key={i}>
                <div className="card__wrapper">
                  <img src={imageUrl} alt="pizza" />
                  <div className="card__content">
                    <h3>{data.name}</h3>
                    <p onClick={() => navigate("/" + data.name)}>Order Now</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>

      <section className="about_us">
        <div className="about_us__container">
          <div className="about_us__wrapper">
            <div className="about_us__image">
              <img src={about_us_image} alt="about_us" />
            </div>
            <div className="about_us__content">
              <h3>welcome to pizza and burgers</h3>
              <p>
                Pizza And Burgers is all about quality you can trust. Our sole
                mission is making the freshest, tastiest and funnest Pizza
                around. Our classic pan pizza will always be a fan favourite,
                with a soft and chewy crust perfectly balancing out the healthy
                tomato puree and mozzarella - cheddar blended cheese.
              </p>
              <p>
                Our authentic Italian crust for those who would prefer a light
                and airy crust to more fully enjoy the toppings. Thin, light and
                delicious. Our newest addition of Puree sauces will blow your
                mind. Chose between a spicy buffalo, sweet bbq, tangy chipotle
                can creamy makhni to perfectly compliment your toppings and
                crust. Our suggestions of combinations might be helpful but
                ultimately the power lies with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="icon_images">
        <h4>we assure</h4>
        <div className="icon_images__container">
          <div className="icon_images__wrapper">
            <img src={icon_1} alt="icon_image_1" />
          </div>
          <div className="icon_images__wrapper">
            <img src={icon_2} alt="icon_image_2" />
          </div>
          <div className="icon_images__wrapper">
            <img src={icon_3} alt="icon_image_3" />
          </div>
          <div className="icon_images__wrapper">
            <img src={icon_4} alt="icon_image_4" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home