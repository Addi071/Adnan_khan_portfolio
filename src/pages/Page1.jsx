import React, { useRef, useState } from "react";
import Text from "../components/Text";
import { Pg1bottom } from "../components/Pg1bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page1 = () => {

    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const first = useRef(null);

  const mouseMove = (e) => {
    // console.log((e.clientY - first.current.getBoundingClientRect().y - first.current.getBoundingClientRect().height / 2)/20)
    setXVal((e.clientX - first.current.getBoundingClientRect().x - first.current.getBoundingClientRect().width / 2)/20);
    setYVal((e.clientY - first.current.getBoundingClientRect().y - first.current.getBoundingClientRect().height / 2)/10);

    ;
  };
  
  useGSAP(()=>{
    gsap.to(first.current, {
        transform : `rotateY(${xVal}deg) rotateX(${-yVal}deg)`,
        duration: 2,
        delay: .5})
  },[xVal,yVal])


  return (
    <div
      className="h-screen p-5 bg-white"
      onMouseMove={(e) => {
        mouseMove(e);
      }}
    >
      <div
        className="shadow-xl rounded-[20px] shadow-gray-700 h-full  bg-cover" id="first"
        
      >
        <Text text={first}></Text>

        

        <Pg1bottom></Pg1bottom>
      </div>
    </div>
  );
};

export default Page1;
