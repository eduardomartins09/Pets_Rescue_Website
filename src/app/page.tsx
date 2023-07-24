import Image from 'next/image'

import logo from '../../public/banner_protecao_animal.png'

import Banner from './components/Banner/Banner'
import Help from './components/Help/Help'
import About from './components/About/About'
import Pets from './components/Pets/Pets'
import Contato from './components/Contato/Contato'

export default async function Home() {
    
  return (
    <main>
      <Banner />
      <hr />
      <Help />
      <hr />
      <About />
      <hr />
      <Pets />
      <hr />
      <Contato />
    </main>
  )
}
