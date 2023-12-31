import React from "react";
import Colcaloa from "../../assets/cocacola.svg";
import Redbul from "../../assets/redbul.svg";
import Shark from "../../assets/Shark.svg";
import Sunkist from "../../assets/Sunkist.png";
import Fire from "../../assets/fire.svg";
import Burn from "../../assets/Burn.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const brands = [
  {
    id: "cocaloa",
    brandsImg: Colcaloa,
  },
  {
    id: "redbul",
    brandsImg: Redbul,
  },
  {
    id: "shark",
    brandsImg: Shark,
  },
  {
    id: "sunkist",
    brandsImg: Sunkist,
  },
  {
    id: "fire",
    brandsImg: Fire,
  },
  {
    id: "burn",
    brandsImg: Burn,
  },
];

const BrandLogo = () => {
  return (
    <div className=" mb-[60px]">
      <div className=" container mx-auto  md:py-10">
        <h3 className="p-head mb-12">Partener Brands </h3>
        {/* Brands logo img */}
        <Swiper
          spaceBetween={20} // Adjust the space between slides
          slidesPerView={3} // Number of slides per view
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          noSwiping={true}
          breakpoints={{
            // Define responsive breakpoints
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <img
                src={brand.brandsImg}
                alt={brand.id}
                className=" w-20 h-20 md:w-28 mx-auto shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandLogo;
