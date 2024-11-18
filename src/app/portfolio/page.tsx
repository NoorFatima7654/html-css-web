import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    

<div className="flex flex-col py-4">
  <div className="flex flex-row items-start gap-4">
    <Image src="/images/portfolio.PNG" alt="Image 1" className=" ml-10"
    height={300}
    width={300} />
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
       <p><strong>Why it`s special:</strong> Robby incorporates an interactive experience into his portfolio.</p>
      <p className=""><strong>What it`s about:</strong> If you associate portfolios with a dry list of facts, this portfolio might surprise you. Robby found a novel way of displaying what was otherwise dry information. He let out his portfolio site as a video game that the visitor can actually play. This incredibly fun interactive design portfolio will make you scroll.</p>
      </div>
      </div>
      </div>
      <div className="flex flex-row items-start gap-4">
    <Image src="/images/portfolio.PNG" alt="Image 2" className="py-4  ml-10" 
     height={300}
     width={300} />

  
  
<div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
       <p><strong>Why it`s special:</strong> Robby incorporates an interactive experience into his portfolio.</p>
      <p className=""><strong>What it`s about:</strong> If you associate portfolios with a dry list of facts, this portfolio might surprise you. Robby found a novel way of displaying what was otherwise dry information. He let out his portfolio site as a video game that the visitor can actually play. This incredibly fun interactive design portfolio will make you scroll.</p>
      </div>
      </div>
  </div>
</div>

    
  )
}
