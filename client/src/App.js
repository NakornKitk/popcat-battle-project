import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useStore from './store/store.js'
import Navbar from './components/NavbarComponent'
import Loading from './components/LoadingComponent.js'
import LeaderboardButton from './components/LeaderboardButton.js'
import sound from './sound/sound.wav'
import FooterComponent from './components/FooterComponent.js'



function App() {
  let { localCount, setlocalCount } = useStore();
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);
  const [toggleLeader, setToggleLeader] = useState(false);
  const [leader, setLeader] = useState([])
  const [leaders, setLeaders] = useState([])

  function playAudio(url) {
    new Audio(url).play();
  }

  const incrementClick = () => {
    setlocalCount()
    playAudio(sound)
    setIsImageOne(!isImageOne)
  }


  const fetchTop20Data = () => {
    axios.get(`${process.env.REACT_APP_API}/gettoptenleader`)
      .then(response => {
        setLeaders(response.data)
      })
      .catch(err => alert(err))
  }

  const fetchTop3Data = () => {
    axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
      .then(response => {
        setLeader(response.data)
      })
      .catch(err => alert(err))
      .finally(() => {
        setLoading(false); // End loading 
      });
  }


  useEffect(() => {
    setLoading(true); // start loading
    fetchTop20Data()
    fetchTop3Data()
  }, [])


  function handleButton() {
    setToggleLeader(!toggleLeader)
  }


  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'} >
      <Navbar />
      <button className="fixed bottom-[120px] right-[0px] h-[60px] w-[60px] bg-white rounded-l-lg  text-[40px]" onClick={()=>window.history.back()}>&#128281;</button>
      {loading ? (<Loading />) : (
        <>
          <div className="h-[80%]" onClick={incrementClick}>
            <div className="w-[100%] justify-between londrina-outline-regular">
              <div className="px-[20px]">
                <p className="text-start text-[30px] sm:text-[40px] w-[auto]">User: Guest</p>
              </div>
              <div className="">
                <p className="text-center text-[70px] pt-[30px]">{localCount}</p>
                <p className="text-center text-[25px] sm:text-[30px]">Please login to record the data..</p>
              </div>
            </div>
          </div>
          <FooterComponent leader={leader} leaders={leaders} handleButton={handleButton} toggleLeader={toggleLeader} />
        </>
      )}
    </div>
  );
}

export default App;
