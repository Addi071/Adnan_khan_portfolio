import React from 'react'

const Text = (props) => {
  return (
   <div className=" absolute text-[#fff] mt-[21rem] lg:mt-28 lg:ml-24 md:mt-64 md:ml-14  ml-4  w-fit " ref={props.text} id="text">
          <h1 className="lg:text-6xl font-[addy2]  font-semibold md:text-5xl text-2xl ">
            I AM <span className="lg:text-[#3B3D3C] text-black">FULL STACK</span>
          </h1>
          <h1 className="lg:text-8xl md:text-7xl text-4xl font-[addy2]  font-semibold">DEVELOPER</h1>
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-[addy2]  font-semibold">TO HIRE</h1>
        </div>
  )
}

export default Text