import React from 'react'
import Link from 'next/link'
import Image
 from 'next/image'

const Product = () => {
  return (
    <div id='Product'>
    <section className="text-black body-font bg-pink-100 mb-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
        My Products
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/*projects*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/image1.webp')} height={300}
            alt="perfume1"
    
          />
        </div>
        <div className='bg-pink-100' >
                        <span >800RS</span>
                  
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>




         <div className=" lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/image 2.jpg')} height={400}
            alt="perfume2"
            
            
          />
        </div>
        <div   className='bg-pink-100' >
                        <span>800RS</span>
                        
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/image3.webp')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-pink-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/image4...webp')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-pink-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/iamge5.webp')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-pink-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>

         <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
          src={require('../../../public/image6.webp')} height={400} 
            alt="perfume1"
    
          />
        </div>
        <div className='bg-pink-100'>
                        <span>800RS</span>
                  
                    </div>
                    <button className='bg-pink-100'>Add to Cart</button>
         </div>

         
      </div>

     
      


      
</div>
</section>
</div>
  )
}

export default Product
