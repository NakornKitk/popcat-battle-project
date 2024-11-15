import React from 'react'




function FooterComponent(props) {
  const {toggleLeader, leader, leaders, handleButton} = props
  return (
    <div className="transition-all duration-500">
       {
            !toggleLeader && (
              <div className="w-[100%] sm:w-[60%] bg-white fixed bottom-0 mx-[auto] left-1/2 transform -translate-x-1/2 flex justify-between h-[60px] items-center sm:rounded-t-2xl cursor-pointer transition-all duration-500" onClick={() => handleButton()}>
                <div className="w-[50px] border-r border-r-gray-200">
                  <p className="text-center ">&#127942;</p>
                </div>

                <div className="flex justify-between w-[80%]">
                  {leader.map((user, index) => (
                    <div key={index}>
                      <span>#{index + 1} </span>
                      <span className="font-bold">{user.name} </span>
                      <span>{user.clicks}</span>
                    </div>
                  ))}
                </div>

                <div className="w-[50px] border-l border-l-gray-200">
                  <p className="text-center text-2xl text-gray-400">&#128314;</p>
                </div>
              </div>
            )
          }

          {
            toggleLeader && (
              <div className="w-[100%] h-[50vh] sm:w-[60%] bg-white fixed bottom-0 mx-[auto] left-1/2 transform -translate-x-1/2 justify-between sm:rounded-t-2xl cursor-pointer py-[20px] transition-all duration-500" onClick={() => handleButton()}>
                <div className="flex items-center justify-center pb-[5px] mx-[20px]">
                  <div className="w-[50px] border-r border-r-gray-200">
                    <p className="text-center ">&#127942;</p>
                  </div>

                  <div className="text-center w-[90%]">
                    <p>Leaderboard</p>
                  </div>

                  <div className="w-[50px] border-l border-l-gray-200">
                    <p className="text-center text-2xl">&#128315;</p>
                  </div>
                </div>

                <div className="overflow-y-auto max-h-[90%]">
                  {
                    leaders.map((users, index) => (
                      <div key={index} className="flex justify-center border-b border-b-gray-200 py-[5px] mx-[20px]">
                        <div className="w-[50px]">
                          <p className="text-center">{index + 1}</p>
                        </div>
                        <div className="w-[90%]">
                          <p>{users.name}</p>
                        </div>
                        <div className="w-[50px] ">
                          <p className="text-end">{users.clicks}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
    </div>
  )
}

export default FooterComponent