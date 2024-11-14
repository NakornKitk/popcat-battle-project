import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './NavbarComponent'
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import { authenticate } from '../services/authorize';
import { getUser } from '../services/authorize';
import LeaderboardButton from './LeaderboardButton.js'

function LoginComponent() {
  const navigate = useNavigate();

  const [stateLogin, setStateLogin] = useState({
    name: "",
    password: ""
  })

  const [stateRegis, setStateRegis] = useState({
    name: "",
    password: ""
  })

  const inputLoginValue = name => event => {
    setStateLogin({ ...stateLogin, [name]: event.target.value });
  }

  const inputRegisValue = name => event => {
    setStateRegis({ ...stateRegis, [name]: event.target.value });
  }


  const submitLoginForm = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/login`, { name: stateLogin.name, password: stateLogin.password })
      .then(response => {
        authenticate(response,navigate(`/popcat-battle-project/getuser/${stateLogin.name}`))
        setStateLogin(
          {
            name: "",
            password: ""
          }
        )
      }).catch(
        err => {
          Swal.fire({
            title: "Login Failed",
            text: "Something wrong",
            icon: "error"
          });
        }
      )
  }

  const submitRegisForm = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/create`, { name: stateRegis.name, password: stateRegis.password })
      .then(response => {
        Swal.fire({
          title: "Register Successfully",
          text: "Please login to continue",
          icon: "success"
        });
        setStateRegis(
          {
            name: "",
            password: ""
          }
        )
      }).catch(err => {
        Swal.fire({
          title: "Register Failed",
          text: "This username is already taken",
          icon: "error"
        });
        setStateRegis(
          {
            name: "",
            password: ""
          }
        )
      }
      )
  }

  useEffect(() => {
    getUser() && navigate(`/popcat-battle-project/leaderboard`)
  },[])

  return (
    <div className="bg-image-3 h-[100vh] bg-center bg-cover">
      <Navbar />
      <LeaderboardButton/>
      <div className="font-montserrat flex sm:justify-center sm:items-center sm:mt-[20px] sm:h-[70%]">
        <div className="md:flex w-[100%] md:w-[768px] h-[480px] flex-row rounded-[10px] shadow-lg ">
          <div className="md:w-1/2 text-center px-6 py-[15%] md:rounded-bl-[10px] md:rounded-tl-[10px] justify-center bg-white">
            <h1 className="font-bold text-[32px] font-sans text-black">Sign in</h1>
            <span className="text-[14px] text-black">Use your username</span>
            <form onSubmit={submitLoginForm}>
              <input className="bg-[#eee] border-0 py-3 px-4 mt-4 mb-2 w-full" type="text" id="loginuser" name="username" placeholder="Username" required value={stateLogin.name} onChange={inputLoginValue("name")} /> <br />
              <input className="bg-[#eee] border-0 py-3 px-4 my-2 w-full" type="password" id="loginpassword" name="password" placeholder="Password" required value={stateLogin.password} onChange={inputLoginValue("password")} /> <br />
              <input className="rounded-[20px] border border-white text-white text-xs font-bold px-11 py-3 my-2 tracking-wider uppercase bg-[#524339] active:scale-95" type="submit" value="SIGN IN" />
            </form>
              <p className="text-[14px] text-[#A3A79E] underline cursor-pointer" onClick={() => navigate(`/popcat-battle-project/`)}>Sign in as a Guest</p>
          </div>
          <div className="md:w-1/2 text-center px-6 py-[15%] bg-[#524339] md:rounded-br-[10px] md:rounded-tr-[10px] justify-center">
            <h1 className="font-bold text-[25px] font-sans text-white">Still dont have an account?</h1>
            <span className="text-[14px] text-white">Register now</span>
            <form onSubmit={submitRegisForm}>
              <input className="bg-white border-0 py-3 px-4 mt-4 mb-2 w-full" type="text" id="username" name="regisname" pattern="^[a-zA-Z0-9]+$" maxlength="10" placeholder="Username (characters or number)" required value={stateRegis.name} onChange={inputRegisValue("name")} /> <br />
              <input className="bg-white border-0 py-3 px-4 my-2 w-full" type="password" id="password" name="regispassword" placeholder="Password (More than 4 digits)" required value={stateRegis.password} onChange={inputRegisValue("password")} minlength="4" /> <br />
              <input className="rounded-[20px] border border-white text-[#524339] text-xs font-bold px-11 py-3 my-2 tracking-wider uppercase bg-[#C9BEAC] active:scale-95" type="submit" value="REGISTER" />
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginComponent