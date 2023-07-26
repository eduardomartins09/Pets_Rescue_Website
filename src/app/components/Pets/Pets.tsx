'use client'

import Image from "next/image"
import Link from "next/link"

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { petsformation } from "@/app/utils/utils"

const Pets = () => {
  return (
    <div className="p-8" id="pets">
      <h1 className="text-text-blue text-4xl mb-4 font-bold">Nossos Pets</h1>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 5
          },
          300: {
            slidesPerView: 1.1,
            spaceBetween: 5
          },
          350: {
            slidesPerView: 1.2,
            spaceBetween: 5
          },
          370: {
            slidesPerView: 1.3,
            spaceBetween: 5
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween: 5
          },
          430: {
            slidesPerView: 1.6,
            spaceBetween: 5
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 5
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          570: {
            slidesPerView: 2.2,
            spaceBetween: 5
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          840: {
            slidesPerView: 3.4,
            spaceBetween: 5
          },
          910: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          1100: {
            slidesPerView: 4.6,
            spaceBetween: 5
          },
          1220: {
            slidesPerView: 5,
            spaceBetween: 5
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 5
          },
          
          1900: {
            slidesPerView: 1.8,
            spaceBetween: 5
          }, 
        }} 
      >
        <div className="flex">  
          {petsformation.map((dog,idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white" >
                <div>
                  <Image src={dog.linkImage} width={250} height={300} alt="imagem-dog" className="sm:w-[100%] h-[200px]" />
                </div>
                <div className="p-2">
                  <h1 className="text-base font-bold text-center">Raça: <span className="font-semibold">{dog.breed}</span></h1>
                </div>
              </div>  
            </SwiperSlide>        
          ))}  
        </div>
      </Swiper>
    </div>
  )
}

export default Pets