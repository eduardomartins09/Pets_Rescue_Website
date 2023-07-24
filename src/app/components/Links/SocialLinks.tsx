import Link from 'next/link'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <ul className='flex gap-2'>
      <li>
        <Link href="#">
          <AiFillTwitterCircle size={51} className='text-white p-2' />
        </Link>
      </li>
      <li>
        <Link href="#">
          <BsFacebook size={47} className='text-white p-2' />
        </Link>
      </li>
      <li>
        <Link href="#">
          <AiFillLinkedin size={51} className='text-white p-2' />
        </Link>
      </li>
    </ul>
  )
}

export default SocialLinks