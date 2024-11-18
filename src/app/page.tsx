
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
    
{/*hero section*/}
<section>
  <Image
  src={'/images/home.PNG'}
  alt='picture'
  width={750}
  height={2000}
  className='object-cover w-full h-full'/>
  <p className=' text-1xl mt-2'>STC is an innovator in the digital world,we help our clients identify new oppurtunities,lead change, and
    differentiate their brand. Our process is driven by data analysis coupled with adeep understanding
    of the customer experience.whether clients need digital marketing services or consultingthey come to us to present
    themseleves effectively in the digital arena 
  </p>
</section>

    </div>
  )
}
