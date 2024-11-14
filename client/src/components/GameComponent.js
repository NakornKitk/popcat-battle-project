import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Navbar from './NavbarComponent'
import sound from '../sound/sound.wav'
import Loading from './LoadingComponent.js'
import { getUser, getToken } from '../services/authorize.js';
import LeaderboardButton from './LeaderboardButton.js';



function Game() {
  let [user, setUser] = useState('')
  const [leader, setLeader] = useState('')
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);
  let params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    if (!getUser()) {
      navigate('/popcat-battle-project/')
    }

    setLoading(true); // start loading

    axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`,
      {
        headers:{
          authorization: `Bearer ${getToken()}`
        }
      }
    )
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })

    
    axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
      .then(response => {
        setLeader(response.data)
      })
      .catch(err => alert(err))
      .finally(() => {
        setLoading(false); // End loading 
      });
  }, [])


  function playAudio(url) {
    new Audio(url).play();
  }


  const incrementClick = () => {
    axios.put(`${process.env.REACT_APP_API}/add/${params.slug}`,{},
      {
        headers:{
          authorization: `Bearer ${getToken()}`
        }
      })
      .then(result => {
        setIsImageOne((prev) => !prev);
        playAudio(sound)

        axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`,
          {
            headers:{
              authorization: `Bearer ${getToken()}`
            }
          })
          .then(response => {
            setUser(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })

        axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
          .then(response => {
            setLeader(response.data)
          })
          .catch(err => alert(err))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }

  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'}>
      <Navbar />
      <LeaderboardButton/>
      {loading ? (<Loading />) : (
        <div className="w-[100%] h-[65%] justify-between londrina-outline-regular" onClick={() => incrementClick()} >
          <div className="px-[20px]">
            <p className="text-start text-[30px] sm:text-[40px] w-[auto]">UserName: {user.name}</p>
          </div>
          <div className="">
            <p className="text-center text-[70px] pt-[30px]">{user.clicks}</p>
          </div>
          <div className="text-3xl md:text-4xl w-[100%] bg-white fixed bottom-0">
            <p className="text-center p-[10px]"> Highest clicks: <span className="text-[#9f463e]">{leader[0].clicks}</span> times by <span className="text-[#9f463e]">{leader[0].name}</span> </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
