import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/logo_pets.png'

import { Bitter } from 'next/font/google'
import SocialLinks from '../Links/SocialLinks'
import PaginationLinks from '../Links/PaginationLinks'

const bitter = Bitter({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <header className={`${bitter.className} px-8 py-4 bg-black-transparent sticky top-0 z-50 `}>
        <nav className='text-white flex flex-col items-center sm:block'>
            <div className='flex flex-col items-center sm:justify-between sm:flex-row'>
                <Image src={logo} width={200} height={100} alt='logo-website' />
                <SocialLinks />
            </div>
            <div className='mt-4'>
                <ul className='grid grid-cols-2 items-center justify-end sm:flex sm:divide-x-2 sm:divide-gray-500'>
                    <PaginationLinks />
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar