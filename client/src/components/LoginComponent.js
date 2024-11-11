import React from 'react'
import Navbar from './NavbarComponent'

function LoginComponent() { 
  return (
    <div className="bg-image-1 h-[100vh] bg-top bg-cover">
    <Navbar />
    <div className="flex justify-center font-montserrat sm:mt-[40px]">
      <div className="md:flex w-[100%] md:w-[768px] h-[480px] flex-row rounded-[10px] shadow-lg ">
        <div className="md:w-1/2 text-center px-6 py-[15%] md:rounded-bl-[10px] md:rounded-tl-[10px] justify-center bg-white">
            <h1 className="font-bold text-[32px] font-sans text-black">Sign in</h1>
            <span className="text-[14px] text-black">Use your email</span>
            <form>
                <input className="bg-[#eee] border-0 py-3 px-4 my-2 w-full" type="" id="loginuser" name="username" placeholder="Username" required /> <br />
                <input className="bg-[#eee] border-0 py-3 px-4 my-2 w-full" type="password" id="loginpassword" name="password" placeholder="Password" required /> <br />
                <input className="rounded-[20px] border border-white text-white text-xs font-bold px-11 py-3 tracking-wider uppercase bg-[#FF4B2E] active:scale-95" type="submit" value="SIGN IN" />
            </form>
        </div>
        <div className="md:w-1/2 text-center px-6 py-[15%] bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] md:rounded-br-[10px] md:rounded-tr-[10px] justify-center">
            <h1 className="font-bold text-[25px] font-sans text-white">Still dont have an account?</h1>
            <span className="text-[14px] text-white">Register now</span>
            <form>
                <input className="bg-white border-0 py-3 px-4 my-2 w-full" type="" id="username" name="regisname" placeholder="Username" required /> <br />
                <input className="bg-ehite border-0 py-3 px-4 my-2 w-full" type="password" id="password" name="regispassword" placeholder="Password" required /> <br />
                <input className="rounded-[20px] border border-white text-white text-xs font-bold px-11 py-3 tracking-wider uppercase bg-[#FF4361] active:scale-95" type="submit" value="REGISTER" />
            </form>
        </div>
      </div>
    </div>

    </div>
  )
}

export default LoginComponent