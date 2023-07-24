import Link from "next/link"
import { paginationLinks } from "@/app/utils/utils"

const PaginationLinks = () => {
  return (
    <>
      {paginationLinks.map((link, idx) => (
        <li key={idx}>
          <Link href={link.link} className='text-lg font-semibold px-4 py-1 sm:hover:bg-orange-500 hover:text-black'>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  )
}

export default PaginationLinks