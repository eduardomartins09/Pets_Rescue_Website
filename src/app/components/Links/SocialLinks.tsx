import Link from 'next/link'

import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <ul className='flex gap-2 list-none items-center justify-center'>
      <li>
        <Link href="#">
          <AiFillTwitterCircle size={46} className='text-white p-2 hover:text-blue-400' />
        </Link>
      </li>
      <li>
        <Link href="#">
          <BsFacebook size={43} className='text-white p-2 hover:text-blue-800' />
        </Link>
      </li>
      <li>
        <Link href="#">
          <AiFillLinkedin size={46} className='text-white p-2 hover:text-blue-600' />
        </Link>
      </li>
    </ul>
  )
}

export default SocialLinks