import React from 'react'
import gitIcon from '../images/github-icon.png'
import LinkedinIcon from "../images/linkedin-square-icon.png";

function navbar() {
  return (
     <div className="static bottom-0 px-[20px] py-[20px]">
        <div className="flex justify-between">
            <a className="bg-white rounded-[100%] w-[70px] h-[70px] md:w-[80px] md:h-[80px]" href="https://github.com/NakornKitk?tab=repositories">
                <img className="w-12 my-[10px] md:w-16 md:my-[7px] mx-[auto]  hover:scale-110 transform transition duration-2" src={gitIcon} alt="" />
            </a>
            <p className="text-[50px] md:text-[70px] text-center text-black londrina-outline-regular ">POPCAT</p>
            <a className="bg-white rounded-[100%] w-[70px] h-[70px] md:w-[80px] md:h-[80px]" href="https://www.linkedin.com/in/nakorn-kitkancharoensin/">
                <img className="w-12 my-[11px] md:w-12 md:my-[15px] mx-[auto]  hover:scale-110 transform transition duration-2" src={LinkedinIcon} alt="" />
            </a>
        </div>
      </div>
  )
}

export default navbar