import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-black font-semibold body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
      <span className="ml-3 text-xl">Alamy Fragnance</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link  href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link  href={"#About"}className="mr-5 hover:text-white">About</Link>
      <Link href={"#Product"}className="mr-5 hover:text-white">Products</Link>
      <Link href={"#Contact"}className="mr-5 hover:text-white">Contacts</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar