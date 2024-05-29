import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [reviews, setReviews] = useState()
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    console.log(reviews);
    return (
        <div className='container mx-auto my-16 md:my-28'>
            <h1 className="font-bold text-xl my-7 md:mb-5 md:text-2xl lg:text-3xl text-center">Our Reviews</h1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews?.map(review => <SwiperSlide key={review?.id}>
                    <div className='text-center flex flex-col gap-5 px-10'>
                        <p className='text-xl font-bold'>-{review?.username}-</p>
                        <p>{review?.textReview}</p>
                        <Rating className='max-w-[150px] mx-auto' value={review?.starReview} readOnly/>
                    </div>
                </SwiperSlide>)
            }
          </Swiper>
        </div>
    );
};

export default Review;