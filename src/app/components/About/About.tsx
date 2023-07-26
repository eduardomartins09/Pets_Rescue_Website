'use client'

import Image from "next/image"
import Link from "next/link"

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ongsInformation } from "@/app/utils/utils"

import { Bitter } from 'next/font/google'
const bitter = Bitter({ subsets: ['latin'] })

const About = () => {
  return (
    <div className={bitter.className} id="sobre">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        {ongsInformation.map((ong, idx) => (
          <SwiperSlide>
            <div className="p-8">
              <div>
                <Image src={ong.image} width={900} height={900} alt="abrigo-imagem" className="w-[75%] rounded-2xl mx-auto my-2" />
                <p className="text-center break-words text-xs sm:text-lg">Fonte Imagem: {ong.fontImg}</p>
              </div>
              <div className="my-4">
                <h3 className="text-red-600 uppercase text-lg font-bold">Um pouco sobre a gente</h3>
                <h2 className="text-text-blue uppercase text-3xl mt-4 font-bold">Nosso abrigo</h2>
                <p className="text-gray-500 font-bold">{ong.textDescriptionOne}</p>
                <p className="text-gray-600 font-bold">{ong.textDescriptionTwo}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default About