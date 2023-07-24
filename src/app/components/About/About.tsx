import Image from "next/image"
import abrigo from '../../../../public/abrigo.jpg'

import { Bitter } from 'next/font/google'

const bitter = Bitter({ subsets: ['latin'] })

const About = () => {
  return (
    <div className={`${bitter.className} p-8`} id="sobre">
      <div className="mb-4">
        <h3 className="text-red-600 uppercase text-lg font-bold">Um pouco sobre a gente</h3>
        <h2 className="text-text-blue uppercase text-3xl mt-4 font-bold">Nosso abrigo</h2>
        <p className="text-gray-500 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint eveniet iusto modi earum perferendis non minus? Architecto placeat reprehenderit necessitatibus fugiat, nesciunt quibusdam deleniti officia doloribus vel. Illum totam odit ad quisquam doloribus quam. Sint animi corporis assumenda voluptas autem quod ea similique illo iure ratione quam minima, modi dolores maiores sequi ut minus magnam aliquid, consectetur alias a praesentium iusto sapiente voluptatem? Blanditiis deleniti veritatis tempore modi numquam at totam mollitia asperiores tempora repellat nisi a pariatur quaerat quasi, voluptatibus iste sed? Sunt velit nemo totam at maiores, ipsum necessitatibus molestias hic quasi. Expedita, cumque ratione. Ducimus, esse!</p>
        <p className="text-gray-600 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellat quae temporibus assumenda velit sint voluptatem sit omnis magnam aliquid cum impedit, similique, accusamus itaque porro error praesentium repudiandae perferendis numquam vel. Deleniti, recusandae. Assumenda, explicabo alias earum laborum aperiam consequuntur repellat doloribus dicta minima fuga tempora nostrum quia ea.</p>
      </div>    
      <div>
        <Image src={abrigo} width={900} height={900} alt="abrigo-imagem" className="w-screen rounded-2xl mx-auto my-2" />
        <p className="break-words">Fonte Imagem: https://www.nationalgeographicbrasil.com/animais/2021/09/abrigos-de-animais-enfrentam-nova-crise</p>
      </div>
    </div>
  )
}

export default About