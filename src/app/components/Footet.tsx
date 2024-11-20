import React from 'react'
import Link from 'next/link';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
      <span className="ml-3 text-xl">Alamy Fragnance</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Alamy Fragnance Powered by Shopify
  
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       <FaLinkedin  className='text-3xl hover:text-blue-700 text-black' />               
    </span>

    <span className="inline-flex sm:ml-5 sm:mt-0 mt-4 justify-center sm:justify-start">
      <FaSquareGithub className='text-3xl hover:text-blue-700 text-black' />
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer