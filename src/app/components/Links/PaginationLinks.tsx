import Link from "next/link"
import { paginationLinks } from "@/app/utils/utils"

const PaginationLinks = () => {
  return (
    <ul className='flex flex-col px-4 py-2 text-gray-800'>
      {paginationLinks.map((link, idx) => (
        <li key={idx} className='border-b-2 text-gray-800'>
          <Link href={link.link} className='text-xl font-semibold py-2 flex cursor-pointer border-b-2 text-white hover:text-black'>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PaginationLinks