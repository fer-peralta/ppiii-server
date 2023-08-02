// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'swiper/modules'

import imgBeltran1 from '../../assets/images/home-swiper/beltran1.jpg'
import imgBeltran2 from '../../assets/images/home-swiper/beltran2.jpg'

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='swiper-image'>
        <img className='swiper-image' src={imgBeltran1} alt=' Beltrán ' />
      </SwiperSlide>
      <SwiperSlide className='swiper-image'>
        <img src={imgBeltran2} alt=' Beltrán ' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
