import React, {useState} from 'react'

const page4 = () => {
  const projects = [
  {
    id: 1,
    title: "VOYAGE CAFE",
    image: "/voyage_cafe.png",
    description: "Modern aesthetic cafe experience.",
    tech: "Next • Node • Framer Motion",
    url:"https://github.com/Addi071/the-voyage-cafe",
  },
  {
    id: 2,
    title: "NEWS AGGREGATOR",
    image: "/news-aggregator.png",
    description: "ML-based fake news detection system.",
    tech: "React • Node • Python • Flask • OpenCV • Mongodb",
    url: "https://github.com/Addi071/Adnan_Khan_232_real-time_news_summarizer_and_sentiment_analyzer",
  },
  {
    id: 3,
    title: "SURVEY FORM BUILDER",
    image: "/form-maker.png",
    description: "Dynamic smart survey creation.",
    tech: "React • Node • Mongodb • Express",
    url:"https://github.com/Addi071/Form-maker",
  },
  {
    id: 4,
    title: "TALKSY CHAT APP",
    image: "/talsy.png",
    description: "Real-time seamless messaging platform.",
    tech: "React • Node • Socket.io • MongoDB",
    url: "https://github.com/Addi071/talkSy",
  },
];

const [openId, SetOpenId] = useState(null);

  return (
     <div className="min-h-content bg-white w-full px-5 py-12 mb-20">
      <div className="shadow-xl rounded-[20px] shadow-gray-700 bg-black h-full  ">
        <div className="lg:ml-12 ml-8 md:ml-12">
          <h1 className="lg:font-bold lg:text-[8rem] text-white font-[addy2] text-[3rem] leading-[4rem] font-bold pt-8 md:pt-12 md:text-[5rem] md:font-bold">
            SIGNATURE <span className="text-[#787a7a] lg:text-[5rem] md:text-[3rem]">WORK</span>
          </h1>
        </div>

        <div className="bg-black text-white px-10 py-10 rounded-b-[20px]">

      {projects.map((project) => (
        <div
          key={project.id}
          className="border-t border-white/20 py-8"
        >
          
          {/* CLICK AREA */}
          <div
            onClick={() =>
              SetOpenId(openId === project.id ? null : project.id)
            }
            className="cursor-pointer"
          >
            <h1 className="text-[2rem] lg:text-[3rem] font-bold uppercase leading-none">
              {project.title}
            </h1>
          </div>

          {/* OPEN CONTENT */}
          <div
            className={`grid transition-all duration-500 overflow-hidden ${
              openId === project.id
                ? "grid-rows-[1fr] opacity-100 mt-10"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">

              <div className="flex gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="w-1/2">
                  <img
                    src={project.image}
                    alt=""
                    className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 text-[2rem]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-1/2">

                  <p className="text-white/60 mb-4 uppercase tracking-widest lg:text-base text-xs leading-3">
                    {project.tech}
                  </p>

                  <p className="text-lg text-white/80  mb-6 text-base leading-4 lg:text-2xl">
                    {project.description}
                  </p>

                    <a href={project.url} target="_blank">
                  <button className="border border-white lg:px-6 lg:py-3 px-4 py-2 text-base rounded-full hover:bg-white hover:text-black transition-all lg:text-[2rem] lg:py-6 lg:px-12 lg:font-semibold">
                    View Project
                  </button>
                    </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      ))}
    </div>

        

      </div>
    </div>
  )
}

export default page4