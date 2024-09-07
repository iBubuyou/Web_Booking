import React from "react";
import "../../App.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card-container">
      <Slider {...settings}>
        <div>
        <img src={require("../../assets/pet1.jpg")} style={{ width: '600', height: '300' }} ></img>
        </div>
        <div>
        <img src={require("../../assets/pet2.jpg")} style={{ width: '600', height: '300' }} ></img>
        </div>
        <div>
        <img src={require("../../assets/pet3.jpg")} style={{ width: '600', height: '300' }} ></img>
        </div>
        <div>
        <img src={require("../../assets/pet4.jpg")} style={{ width: '600', height: '300' }} ></img>
        </div>
        <div>
        <img src={require("../../assets/pet5.jpg")} style={{ width: '600', height: '300' }} ></img>
        </div>
        {/* เพิ่มรูปภาพตามต้องการ */}
      </Slider>
    </div>
  );
};

const BodyContent = () => {
  return (
    <div>
      <h3>!!! ข่าวสารใหม่ และ โปรโมชั่น !!!</h3>
      {/* Render the Card component here */}
      <Card />
      <br></br><br></br>
    </div>
  );
};

export default BodyContent;
