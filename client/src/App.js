import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useStore from './store/store.js'
import Navbar from './components/NavbarComponent'
import Loading from './components/LoadingComponent.js'
import LeaderboardButton from './components/LeaderboardButton.js'
import sound from './sound/sound.wav'



function App() {
  let { localCount, setlocalCount } = useStore();
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);

  function playAudio(url) {
    new Audio(url).play();
  }

  const incrementClick = () => {
    setlocalCount()
    playAudio(sound)
    setIsImageOne(!isImageOne)
  }


  const [leader, setLeader] = useState([])

  useEffect(() => {
    setLoading(true); // start loading

    axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
      .then(response => {
        setLeader(response.data)
      })
      .catch(err => alert(err))
      .finally(() => {
        setLoading(false); // End loading 
      });
  }, [])

  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'} >
      <Navbar />
      <LeaderboardButton/>
      {loading ? (<Loading />) : (
        <div className="w-[100%] h-[65%] justify-between londrina-outline-regular" onClick={incrementClick}>
          <div className="px-[20px]">
            <p className="text-start text-[30px] sm:text-[40px] w-[auto]">User: Guest</p>
          </div>
          <div className="">
            <p className="text-center text-[70px] pt-[30px]">{localCount}</p>
            <p className="text-center text-[25px] sm:text-[30px]">Please login to record the data..</p>
          </div>
          <div className="text-3xl md:text-4xl w-[100%] bg-white fixed bottom-0">
            <p className="text-center p-[10px]"> Highest clicks: <span className="text-[#9f463e]">{leader[0].clicks}</span> times by <span className="text-[#9f463e]">{leader[0].name}</span> </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
