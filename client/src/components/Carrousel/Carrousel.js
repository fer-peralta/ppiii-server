// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import imgBeltran1 from '../../assets/images/beltran1.jpg'
import imgBeltran2 from '../../assets/images/beltran2.jpg'



// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrousel = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide className='imagenCarrousel'>
                <img className='imagenCarrousel'
                    src={imgBeltran1}
                    alt=' Beltrán '

                />
            </SwiperSlide>
            <SwiperSlide className='imagenCarrousel'>
                <img
                    src={imgBeltran2}
                    alt=' Beltrán '

                />
            </SwiperSlide>


        </Swiper>
    );
};


export default Carrousel;