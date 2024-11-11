import React from 'react'
import {Link} from 'react-router-dom'
import gitIcon from '../images/github-icon.png'
import LinkedinIcon from "../images/linkedin-square-icon.png";
import homeIcon from "../images/home-icon.svg";
import loginIcon from "../images/male-icon.svg";
import leaderIcon from "../images/leaderboard-icon.svg";

function Navbar() {
  return (
     <div className="static w-[100%] top-0 px-[20px] pt-[10px]">
        <div className="grid grid-cols-3">
            <div className="sm:flex justify-self-start aligns-center">
                <a className="mr-3" href="https://github.com/NakornKitk?tab=repositories">
                    <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                        <img className="w-16 pt-[7px] my-[10px]  mx-[auto] hover:scale-110 transform transition duration-2" src={gitIcon} alt="" />
                    </div>
                </a>
                <a className="hidden md:block" href="https://www.linkedin.com/in/nakorn-kitkancharoensin/">
                    <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                        <img className="w-12 pt-[15px] my-[10px] mx-[auto] hover:scale-110 transform transition duration-2" src={LinkedinIcon} alt="" />
                    </div>
                </a>
            </div>
            <div className="flex justify-self-center ">
                <p className="pt-[10px] md:pt-[0px] text-[50px] md:text-[70px] text-center text-black londrina-outline-regular">POPCAT</p>
            </div>
            <div className="flex justify-self-end">
                <div className="sm:flex">
                    <Link to="/" className="">
                    <div className="bg-white rounded-[100%] w-[80px] h-[80px] ">
                        <img className="w-14 pt-[10px] my-[10px]  mx-[auto] hover:scale-110 transform transition duration-2" src={homeIcon} alt="" />
                    </div>
                    </Link>
                    <Link to="/login" className="ml-3 hidden md:block">
                        <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                            <img className="w-14 pt-[7px] my-[10px] mx-[auto] hover:scale-110 transform transition duration-2" src={loginIcon} alt="" />
                        </div>
                    </Link>
                    <Link to="/leaderboard" className="ml-3 hidden md:block">
                        <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                            <img className="w-14 pt-[20px] my-[10px] mx-[auto] hover:scale-110 transform transition duration-2" src={leaderIcon} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar