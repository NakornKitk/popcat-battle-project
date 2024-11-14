import React from 'react'
import {Link} from 'react-router-dom'

function LeaderboardButton() {
  return (
    <div>
         <Link to="/leaderboard" className="z-10">
            <button className="fixed bottom-[120px] right-[0px] h-[60px] w-[60px] bg-white rounded-md text-[40px] font-bold">&#127942;</button>
        </Link>
    </div>
    
  )
}

export default LeaderboardButton