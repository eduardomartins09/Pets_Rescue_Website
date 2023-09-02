'use client'

import { useState, useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import PaginationLinks from '../Links/PaginationLinks'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { paginationLinks } from '@/app/utils/utils'

import logo from '../../../../public/logo_pets.png'

import { Bitter } from 'next/font/google'
const bitter = Bitter({ subsets: ['latin'] })

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className={`${bitter.className} px-8 py-4 bg-black-transparent sticky top-0 z-50 w-full`}>
        <nav className='text-white flex flex-col  sm:block'>
            <div className='flex flex-col  sm:justify-between sm:flex-row'>
                <div className='flex items-center gap-4'>
                    <AiOutlineMenu size={30} onClick={() => setNavOpen(!navOpen)} className="cursor-pointer" />
                    <Link href="/">
                        <Image src={logo} width={150} height={100} alt='logo-website' />
                    </Link>
                </div>
            </div>         
        </nav>

        {/* Menu */}
        {navOpen ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        <div className={navOpen ? 'fixed top-0 left-0 w-[300px] h-screen bg-black-transparent z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-black-transparent z-10 duration-300'}>
            <AiOutlineClose 
                onClick={() => setNavOpen(!navOpen)}
                size={35}
                className='absolute right-4 top-4 cursor-pointer text-white'
            />
            <h2 className='text-3xl text-white p-4 font-bold'>
                Pet Rescue App
            </h2>
            <nav>  
                <div>
                    <h2 className="text-2xl font-semibold flex text-white px-4 mt-2">                               
                        Menu:                
                    </h2>
                    <PaginationLinks />                   
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar