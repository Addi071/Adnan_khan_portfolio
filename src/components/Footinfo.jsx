import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { TbFileCvFilled } from "react-icons/tb";

import { LuClock3 } from "react-icons/lu";

const Footinfo = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 overflow-hidden" id="hireMe">

      {/* MAIN Footinfo */}
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* LEFT AREA */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <div className="flex items-start gap-4">

              <div className="text-5xl leading-none">
                
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Adnan Khan
                </h1>

                <p className="text-white/60 mt-1 text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/65 leading-relaxed mt-10 max-w-md text-[1rem]">
              I build modern, fast and scalable digital products
              with clean code and thoughtful design.
            </p>

            {/* Orbit Decoration */}
            <div className="relative mt-12 w-[14rem] h-[8rem]">

              <div className="absolute inset-0 border border-white/10 rounded-full rotate-12"></div>

              <div className="absolute inset-4 border border-white/10 rounded-full -rotate-12"></div>

              <div className="absolute inset-8 border border-white/10 rounded-full rotate-6"></div>

              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="uppercase text-xl font-semibold mb-8">
              Contact
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4 text-white/70">
                <HiOutlineMail className="text-xl" />
                <span className="break-all">
                  khanadnanpathan186@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <HiOutlinePhone className="text-xl" />
                <span>+91 9405413450</span>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <HiOutlineLocationMarker className="text-xl" />
                <span>Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <LuClock3 className="text-xl" />
                <span>Available for work</span>
              </div>

            </div>
          </div>

          

          {/* SOCIALS */}
          <div>
            <h2 className="uppercase text-xl font-semibold mb-8">
              Socials
            </h2>

            <div className="flex flex-col gap-5 text-white/70">

              <a
                href="https://github.com/Addi071"
                className="flex items-center gap-3 hover:text-white transition-all"
                target="_blank"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/adnan-khan-khan-nazam-awes-khan-5621872ab"
                className="flex items-center gap-3 hover:text-white transition-all"
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>

              <a
                href="https://www.linkedin.com/in/adnan-khan-khan-nazam-awes-khan-5621872ab"
                className="flex items-center gap-3 hover:text-white transition-all"
                target="_blank"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>



              <a
                href="/Adnan_Khan_Resume.pdf"
                className="flex items-center gap-3 hover:text-white transition-all"
                target="_blank" download
              >
                <TbFileCvFilled className="text-xl" />
                Resume
              </a>

              

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-white/40 text-sm text-center lg:text-left">
            © Adnan.Khan 2026 | All rights reserved
          </p>

          <p className="text-white/40 uppercase tracking-[0.2em] text-sm text-center">
            Designed & Developed with ♡ and Passion
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            
              <FaGithub className="text-white/70 hover:text-white transition-all text-2xl" />
            

            
              <FaLinkedin className="text-white/70 hover:text-white transition-all text-2xl"/>
            

            
              <FaDribbble className="text-white/70 hover:text-white transition-all text-2xl" />
            

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footinfo;