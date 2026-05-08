import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
    const menu = useRef(null)
    const handleMouseEnter = () => {
        gsap.to(menu.current, {
            rotate: 180,
            duration: 1,
            ease: "power3.out",
            
        })
    }

    const handleMouseLeave = () => {
        gsap.to(menu.current, {
            rotate: 0,
            duration: 1,
            ease: "power3.out"
        })
    }
    
  return (
    <div className='fixed w-full z-40 flex items-center justify-end lg:my-14 lg:px-16 my-10 px-6 md:my-20 md:px-12'>
        <a href="#hireMe">
        <button className='bg-[#1A1A1A] lg:px-6 lg:text-xl font-semibold lg:py-2 px-3 py-1 text-lg md:text-xl md:py-2 md:px-4 md:text-center rounded-full text-[#ffff] hover:bg-[#4A4A4A] border-4'>Hire me</button>
        </a>
        <CgMenuGridO className='text-5xl text-[#4A4A4A] hover:rotate-180 ml-2' ref={menu}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </div>
  )
}

export default Header