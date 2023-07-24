import Image from "next/image";
import bannerImg from '../../../../public/banner_protecao_animal.png'

const Banner = () => {
  return (
    <div>
        <Image src={bannerImg} alt='background' className='w-full' width={1000} height={1000} />
    </div>
  )
}

export default Banner