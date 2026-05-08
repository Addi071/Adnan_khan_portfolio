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
const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{

        const mm = gsap.matchMedia();


          mm.add("(max-width: 767px)", () => {
    gsap.from(".rotateText2", {
      transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText2",
                    markers: false,
                    start: "top 70%",
                    end: "top -20%",
                    scrub: 2,
                }
    });
  });

        mm.add("(min-width: 768px) and (max-width: 1023px)",()=>{
            gsap.from(".rotateText2",{
                transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText2",
                    markers: false,
                    start: "top 70%",
                    end: "top -50%",
                    scrub: 2,
                }
            })
        })

        mm.add("(min-width: 1024px)",()=>{
            gsap.from(".rotateText2",{
                transform : "rotateX(30deg)",
                duration: 1.5,
                ease: "power3.out",
                opacity: 0,
                stagger:1,
                scrollTrigger:{
                    trigger:".rotateText2",
                    markers: false,
                    start: "top 70%",
                    end: "top -200%",
                    scrub: 2,
                }
            })
        })

  
    })

  return (
    <div className="bg-white relative text-center p-8 text-black overflow-x-hidden overflow-y-hidden" id="second">
      

      <div className="rotateText2 font-[addy2] font-bold text-center" >
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] leading-[6rem] md:text-[9rem] md:leading-[11rem]">BUILDING</h1>
      </div>
      <div className="rotateText2 font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] leading-[6rem] md:text-[9rem] md:leading-[11rem]">DIGITAL</h1>
      </div>
      <div className="rotateText2 font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] md:text-[9rem] md:leading-[11rem] leading-[6rem]">EXPERIENCE</h1>
      </div>
      <div className="rotateText2 font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] md:text-[9rem] md:leading-[11rem] text-[4rem] leading-[6rem]">THAT</h1>
      </div>
      <div className="rotateText2 font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] md:text-[9rem] md:leading-[11rem] lg:leading-[17rem] text-[4rem] leading-[6rem]">CREATE</h1>
      </div>
      <div className="rotateText2 font-[addy2] font-bold text-center">
        <h1 className="lg:text-[15rem] lg:leading-[17rem] text-[4rem] md:text-[9rem] md:leading-[11rem] leading-[6rem]">IMPACT</h1>
      </div>
        
    </div>
  );
};

export default Page5;
