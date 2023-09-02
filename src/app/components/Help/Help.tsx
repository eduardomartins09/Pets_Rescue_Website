import Image from "next/image"
import Link from "next/link"

import { helpInformation } from "@/app/utils/utils"

const Help = () => {
  return (
    <div className="p-8" id="ajude">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
            {helpInformation.map((help, idx) => (
                <div className="p-4 sm:h-[600px]">
                    <div>
                        <h2 className="text-center text-2xl font-bold">{help.text}</h2>
                        <Image src={help.image} width={300} height={150} alt="card-image" className="rounded-s-full rounded-e-full mx-auto my-4" />
                    </div>
                    <div>
                        <h2 className="text-center text-xl font-semibold mb-3">{help.subtext}</h2>
                        <p className="text-justify">{help.description}</p>
                     </div>
                </div>
            ))}         
        </div>
    </div>
  )
}

export default Help