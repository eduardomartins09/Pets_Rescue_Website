import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../../public/logo_pets.png'

import { Bitter } from 'next/font/google'

import PaginationLinks from '../Links/PaginationLinks'

const bitter = Bitter({ subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className={`${bitter.className} p-8 bg-black-transparent text-white`} id='footer'>
      <div className='flex flex-col items-center gap-3'>
        <Image src={logo} width="200" height="100" alt='logo-website' />
        <div className='text-center'>
          <h2 className='text-3xl font-semibold mb-2'>Website desenvolvido por:</h2>
          <p>EDUARDO MARTINS SANTOS - (RU: 3991806)</p>
          <p>JAILSON SANTOS DAMACENO - (RU: 3934826)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer