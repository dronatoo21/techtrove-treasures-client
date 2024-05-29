import ban1 from "../../assets/brandAd/1.png"
import ban2 from "../../assets/brandAd/2.png"
import ban3 from "../../assets/brandAd/3.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={ban2} alt="issue" /></SwiperSlide>
        <SwiperSlide><img src={ban1} alt="issue" /></SwiperSlide>
        <SwiperSlide><img src={ban3} alt="issue" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;