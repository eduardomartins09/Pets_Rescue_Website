import Image from "next/image"
import cachorroGato from '../../../../public/cachorro-e-gato.png'

const Contato = () => {
  return (
    <div className="p-8">
      <h1 className="text-text-blue text-4xl mb-4 font-bold">Entre em contato conosco</h1>
      <div className="grid md:grid-cols-2 w-[100%]" id="contato">
        <form className="bg-background-form p-4 border-2 border-orange-500 rounded-lg">
          <h1 className="text-2xl text-text-blue font-bold mb-4">Contate-nos</h1>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold text-xl mb-1">Digite seu nome</label>
            <input type="text" name="name" id="name" placeholder="nome" className="p-2 border-2 border-blue-900 rounded-md mb-2 w-[100%]" autoComplete="on" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold text-xl mb-1">Digite seu email</label>
            <input type="email" name="email" id="email" placeholder="email" className="p-2 border-2 border-blue-900 rounded-md mb-2 w-[100%]" autoComplete="on" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="msg" className="font-bold text-xl mb-1">Digite sua mensagem</label>
            <textarea cols={22} rows={12} id="msg" placeholder="mensagem" className="p-2 border-2 border-blue-900 rounded-md mb-2" />
          </div>
        </form>
        <div className="md:flex flex-col items-center justify-center hidden">
          <Image src={cachorroGato} width={700} height={700} alt="cachorroGato" className="mx-auto" />
          <p className="break-words	text-center">Fonte Imagem: https://ezvet.com.br/</p>
        </div>
      </div>
    </div>
  )
}

export default Contato