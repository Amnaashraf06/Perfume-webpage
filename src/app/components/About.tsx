import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id='About'>
      <section className="text-black body-font -mb-[5rem bg-pink-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <Image
        className="object-cover object-center rounded w-full h-80 -ml-12"
        alt="Profile"
        src={require("../../../public/perfume.jpeg")}
       
       
      />
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center text-black mt-5">

     About Us
      </h1 >
      <p className="mb-5 leading-relaxed ">
      The Perfume Brand was established with a simple yet powerful goal: to make premium fragrances accessible to everyone. As passionate fragrance lovers, we couldn't ignore the high prices often attached to designer perfumes due to factors like celebrity endorsements, high profit margins and extravagant packaging.
       We saw that perfumes were being sold for much more than they cost to produce, and we wanted to change that
      </p>
   
    </div>
  </div>
</section>

    </div>
  )
}

export default About