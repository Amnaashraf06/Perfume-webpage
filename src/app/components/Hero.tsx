import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
      <section className="text-black body-font bg-pink-100 bg-fixed ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
        Explore a World of Fragrance
      </h1>
      
      <p className="mb-8 leading-relaxed font-serif italic">
      Find the perfect fragrance in our diverse range of perfume collections.
      </p>
      <div className="flex justify-center">
      <Link href={"#contact"}>
  
        </Link>
      </div>
    </div>
    {/* <div className="lg:max-w-lg lg:w-80 md:w-1/2 w-5/6"> */}
  <Image className='object-cover object-center rounded w-2/4 h-72 '
  alt='Hero'
  src={require("../../../public/image.jpg")}

  />
    </div>
  {/* </div> */}
</section>
  )
}

export default Hero
