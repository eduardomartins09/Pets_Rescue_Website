import Image from "next/image"
import { helpInformation } from "@/app/utils/utils"
import Link from "next/link"

const Help = () => {
  return (
    <div className="p-8" id="ajude">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
            {helpInformation.map((help, idx) => (
                <div className="p-4">
                    <div>
                        <h2 className="text-center text-3xl font-bold">{help.text}</h2>
                        <Image src={help.image} width={300} height={150} alt="card-image" className="rounded-s-full rounded-e-full mx-auto my-4" />
                    </div>
                    <div>
                        <p className="text-justify mb-4">{help.description}</p>
                        <Link href="/" className="bg-red-600 p-2 rounded-lg text-white font-semibold hover:bg-red-900">Ler mais...</Link>
                     </div>
                </div>
            ))}         
        </div>
    </div>
  )
}

export default Help