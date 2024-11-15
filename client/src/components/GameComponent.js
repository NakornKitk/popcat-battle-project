import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Navbar from './NavbarComponent'
import sound from '../sound/sound.wav'
import Loading from './LoadingComponent.js'
import { getUser, getToken } from '../services/authorize.js';
import LeaderboardButton from './LeaderboardButton.js';
import FooterComponent from './FooterComponent.js';



function Game() {
  let params = useParams();
  const navigate = useNavigate();
  let [user, setUser] = useState('')
  const [leader, setLeader] = useState('')
  const [leaders, setLeaders] = useState([])
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);
  const [toggleLeader, setToggleLeader] = useState(false);


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
    if (!getUser()) {
      navigate('/')
    }

    setLoading(true); // start loading

    axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`,
      {
        headers: {
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

      fetchTop20Data()
      fetchTop3Data()
  }, [])


  function playAudio(url) {
    new Audio(url).play();
  }

  function handleButton() {
    setToggleLeader(!toggleLeader)
  }


  const incrementClick = () => {
    axios.put(`${process.env.REACT_APP_API}/add/${params.slug}`, {},
      {
        headers: {
          authorization: `Bearer ${getToken()}`
        }
      })
      .then(result => {
        setIsImageOne((prev) => !prev);
        playAudio(sound)
        axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`,
          {
            headers: {
              authorization: `Bearer ${getToken()}`
            }
          })
          .then(response => {
            setUser(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })

        fetchTop20Data()
        fetchTop3Data()
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }

  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'}>
      <Navbar />
      <button className="fixed bottom-[120px] right-[0px] h-[60px] w-[60px] bg-white rounded-l-lg  text-[40px]" onClick={()=>window.history.back()}>&#128281;</button>
      {loading ? (<Loading />) : (
        <>
          <div className="w-[100%] h-[80%] justify-between" onClick={() => incrementClick()} >
            <div className="px-[20px] londrina-outline-regular">
              <p className="text-start text-[30px] sm:text-[40px] w-[auto]">UserName: {user.name}</p>
            </div>
            <div className="londrina-outline-regular">
              <p className="text-center text-[70px] pt-[30px]">{user.clicks}</p>
            </div>
          </div>
          <FooterComponent leader={leader} leaders={leaders} handleButton={handleButton} toggleLeader={toggleLeader} />
        </>
      )}
    </div>
  );
}

export default Game;
