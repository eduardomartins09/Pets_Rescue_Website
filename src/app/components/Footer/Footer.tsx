import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../../public/logo_pets.png'

import { Bitter } from 'next/font/google'

import SocialLinks from '../Links/SocialLinks'
import PaginationLinks from '../Links/PaginationLinks'

const bitter = Bitter({ subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className={`${bitter.className} p-8 bg-black-transparent text-white`} id='footer'>
      <div className='flex flex-col items-center gap-3'>
        <Image src={logo} width="200" height="100" alt='logo-website' />
        <SocialLinks />
        <ul className='grid grid-cols-2 items-center justify-start sm:flex sm:divide-x-2 sm:divide-gray-500'>
          <PaginationLinks />
        </ul>
      </div>
    </footer>
  )
}

export default Footer