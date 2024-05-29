// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const OurTeam = () => {
    return (
        <div className="container mx-auto px-5">
            {/* <div className="text-center mb-28 py-5 grid grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-5 gap-10 lg:grid-cols-4">
            <div >
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/4FjHVGf/m1.jpg" alt="img" />
                <h2 className="text-2xl mt-3 font-bold">Adrian</h2>
                <p className="font-semibold text-xl"><i>@adrian</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/QYq2S2s/m2.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">David</h2>
                <p className="font-semibold text-xl"><i>@david</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/Drv2ZBz/m3.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">harry</h2>
                <p className="font-semibold text-xl"><i>@harry</i></p>
            </div>
            <div>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/rwQWKhC/m4.jpg" alt="img" />
                <h2  className="text-2xl mt-3 font-bold">zayn</h2>
                <p className="font-semibold text-xl"><i>@zayn</i></p>
            </div>
        </div> */}
        <Swiper
        slidesPerView={2}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 9,
            },
          }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='text-center'>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/wSDR1xF/ad.jpg" alt="img" />
                <h2 className="text-lg md:text-2xl mt-3 font-bold">Adrian</h2>
                <p className="font-semibold text-xl"><i>@adrian</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/QYq2S2s/m2.jpg" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">David</h2>
                <p className="font-semibold text-xl"><i>@david</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/Drv2ZBz/m3.jpg" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">harry</h2>
                <p className="font-semibold text-xl"><i>@harry</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/rwQWKhC/m4.jpg" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">zayn</h2>
                <p className="font-semibold text-xl"><i>@zayn</i></p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default OurTeam;