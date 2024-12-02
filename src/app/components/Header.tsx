
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 outline border-black bg-blue-400 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <div className="logo">
            <Image src="/images/logo.png" alt="LOGO" height={100} width={100} />
          </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='http://localhost:3000/'>HOME</a>
      <a className="mr-5 hover:text-gray-900" href='http://localhost:3000/about'>ABOUT</a>
      <a className="mr-5 hover:text-gray-900" href='http://localhost:3000/portfolio'>PORTFOLIO</a>
      <a className="mr-5 hover:text-gray-900" href='http://localhost:3000/contact'>CONTACT</a>
    </nav>
    
  </div> 
</header>
</div>
  )}