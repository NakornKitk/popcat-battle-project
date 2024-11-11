import React from 'react'
import Navbar from './NavbarComponent'

function LeaderboardComponent() {
  return (
    <div className='bg-image-1 h-[100vh] bg-top bg-cover'>
      <Navbar />
      <div className="m-[auto] font-montserrat sm:mt-[40px] bg-white w-[80%] h-[70%] rounded-xl">
        <h1 className="font-bold text-start px-[40px] py-[24px] text-[36px]">Leaderboard &#127942;</h1>
        <table className="w-[100%] text-[24px] px-[40px] text-center ">
          <tr>
            <th>Place</th>
            <th>Username</th>
            <th>Clicks</th>
          </tr>
          <tr className="">
            <td className="text-[36px] py-[10px]">&#129351;</td>
            <td className="">time</td>
            <td className="">200</td>
          </tr>
          <tr>
            <td className="text-[36px] py-[10px]">&#129352;</td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr>
            <td className="text-[36px] py-[10px]">&#129353;</td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr>
            <td className="my-[10px] py-[10px]">4</td>
            <td className=""></td>
            <td className=""></td>
          </tr>
          <tr>
            <td className="my-[10px] py-[10px]">5</td>
            <td className=""></td>
            <td className=""></td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default LeaderboardComponent