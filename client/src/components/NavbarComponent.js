import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import gitIcon from '../images/github-icon.png'
import LinkedinIcon from "../images/linkedin-square-icon.png";
import logoutIcon from "../images/sign-out-icon.svg";
import loginIcon from "../images/log-in-icon.svg";
import { getUser, logout } from '../services/authorize';

function Navbar() {
    const navigate = useNavigate();

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
                    <Link to="/leaderboard" className="mr-3 hidden md:block">
                        <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                            <p className="my-[10px] mx-[auto] hover:scale-110 transform transition duration-2 text-center text-[50px]">&#127942;</p>
                        </div>
                    </Link>
                    {
                        getUser() && (
                            <Link to="/" className="">
                                <div className="bg-white rounded-[100%] w-[80px] h-[80px]" onClick={() => logout(navigate("/"))}>
                                    <img className="w-10 pt-[12px] my-[10px] mx-[auto] hover:scale-110 transform transition duration-2" src={logoutIcon} alt="" />
                                </div>
                            </Link>
                        )
                    }
                    {
                        !getUser() && (
                            <Link to="/login" className="">
                                <div className="bg-white rounded-[100%] w-[80px] h-[80px]">
                                    <img className="w-10 pt-[12px] my-[10px] mx-[auto] hover:scale-110 transform transition duration-2" src={loginIcon} alt="" />
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar