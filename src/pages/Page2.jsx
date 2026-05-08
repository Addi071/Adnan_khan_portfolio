import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";    
import { ScrollTrigger } from "gsap/all";
// import Earth from "../components/Earth";
const Page2 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{

        const mm = gsap.matchMedia();


          mm.add("(max-width: 767px)", () => {
    gsap.from(".rotateText", {
      transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText",
                    markers: false,
                    start: "top 70%",
                    end: "top -20%",
                    scrub: 2,
                }
    });
  });

        mm.add("(min-width: 768px) and (max-width: 1023px)",()=>{
            gsap.from(".rotateText",{
                transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText",
                    markers: false,
                    start: "top 70%",
                    end: "top -50%",
                    scrub: 2,
                }
            })
        })

        mm.add("(min-width: 1024px)",()=>{
            gsap.from(".rotateText",{
                transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText",
                    markers: false,
                    start: "top 70%",
                    end: "top -200%",
                    scrub: 2,
                }
            })
        })

        // gsap.from(".rotateText",{
        //    transform : "rotateX(30deg)",
        //     duration: 1.5,
        //     ease: "power3.out",
        //     opacity: 0,
        //     stagger:1,
        //     scrollTrigger:{
        //         trigger:".rotateText",
        //         markers: false,
        //         start: "top 50%",
        //          end: "top -150%",
        //         scrub: 2,
        //     }
        // })
    })

  return (
    <div className="bg-white relative text-center p-8 text-black overflow-x-hidden" id="second">
      <h3 className="text-gray-500 font-semibold font-[addy]  lg:text-xl md:text-xl text-[1rem]">
        © Adnan.Khan 2026 | designed and developed
      </h3>

      <div className="rotateText font-[addy2] font-bold text-center" >
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] leading-[6rem] md:text-[9rem] md:leading-[11rem]">IMPACTFUL</h1>
      </div>
      <div className="rotateText font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] leading-[6rem] md:text-[9rem] md:leading-[11rem]">DESIGN</h1>
      </div>
      <div className="rotateText font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] md:text-[9rem] md:leading-[11rem] leading-[6rem]">IS THE</h1>
      </div>
      <div className="rotateText font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] md:text-[9rem] md:leading-[11rem] text-[4rem] leading-[6rem]">DESIGN</h1>
      </div>
      <div className="rotateText font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] md:text-[9rem] md:leading-[11rem] lg:leading-[17rem] text-[4rem] leading-[6rem]">THAT</h1>
      </div>
      <div className="rotateText font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] md:text-[9rem] md:leading-[11rem] leading-[6rem]">WORKS!</h1>
      </div>

        <div> 
        <div className="flex items-center justify-center gap-4  lg:gap-8 mt-12">
            <FaReact className="lg:text-5xl text-3xl  md:text-5xl"></FaReact>
            <FaNode className="lg:text-5xl text-3xl  md:text-5xl"></FaNode>
            <SiExpress className="lg:text-5xl text-3xl  md:text-5xl"></SiExpress>
            <SiMongodb className="lg:text-5xl text-3xl  md:text-5xl"></SiMongodb>
            <RiNextjsLine className="lg:text-5xl text-3xl  md:text-5xl"></RiNextjsLine>
            <SiTailwindcss className="lg:text-5xl text-3xl md:text-5xl"></SiTailwindcss>
        </div>

            <div className="h-[0.2rem] lg:w-1/4 relative w-1/2 md:w-1/3 left-1/2 -translate-x-1/2 mt-3 bg-black/50"></div>
      
        </div>

        
    </div>
  );
};

export default Page2;
