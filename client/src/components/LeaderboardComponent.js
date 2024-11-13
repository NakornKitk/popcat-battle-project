import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './NavbarComponent'
import {Link} from 'react-router-dom'

function LeaderboardComponent() {
  const [leaders, setLeaders] = useState([])

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API}/gettoptenleader`)
    .then(response=>{
      setLeaders(response.data)
    })
    .catch(err=>alert(err))
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='bg-image-1 h-[100vh] bg-top bg-cover'>
      <Navbar />
      <div className="m-[auto] font-montserrat sm:mt-[40px] bg-white w-[80%] h-[70%] rounded-xl overflow-auto">
        <h1 className="font-bold text-start px-[20px] sm:px-[40px] py-[24px] text-[24px] sm:text-[36px]">Leaderboard &#127942;</h1>
        <table className="w-[100%] sm:text-[24px] px-[40px] text-center ">
          <tr>
            <th>Place</th>
            <th>Username</th>
            <th>Clicks</th>
          </tr>
          {
            leaders.map((user,index) => (
              <tr className="">
                <td className="">{index+1}</td>
                <td className="">{user.name}</td>
                <td className="">{user.clicks}</td>
              </tr>
            ))
          }

        </table>
      </div>
    </div>
  )
}

export default LeaderboardComponent