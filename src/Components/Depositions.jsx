import React from "react";
import DepositionCard from "./DepositionCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import database from "../depositions.json";

function Depositions({ type }) {
  let card;

  if (type === 1) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    card = (
      <div className="flex flex-col items-center mt-[5%] justify-center">
        <h1 className="z-20 text-xl md:text-4xl text-white md:mb-10 md:mt-0 mt-10 mb-0 text-center">
          DEPOIMENTOS DOS CLIENTES
        </h1>
        <div className="md:w-[60%] w-[80%]  m-auto h-[600px] flex justify-center items-center">
          <div className="h-[80%] w-[100%] flex items-center">
            <Slider {...settings} className="w-full">
              {database.Depositions.map((depositionData) => (
                <DepositionCard key={depositionData.id} {...depositionData} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }

  return <>{card}</>;
}

export default Depositions;
