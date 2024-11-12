import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Navbar from './NavbarComponent'
import sound from '../sound/sound.wav'
import Loading from './LoadingComponent.js'



function Game(props) {
  let [user, setUser] = useState('')
  const [leader, setLeader] = useState('')
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);
  let params = useParams();


  useEffect(() => {
    setLoading(true); // start loading

    axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`)
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false); // End loading 
      });
  }, [])


  useEffect(() => {
    setLoading(true); // start loading

    axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
      .then(response => {
        setLeader(response.data)
        console.log(leader)
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
    axios.put(`${process.env.REACT_APP_API}/add/${params.slug}`)
      .then(result => {
        setIsImageOne((prev) => !prev);
        playAudio(sound)

        axios.get(`${process.env.REACT_APP_API}/getuser/${params.slug}`)
          .then(response => {
            setUser(response.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })

        axios.get(`${process.env.REACT_APP_API}/gethighestleader`)
          .then(response => {
            setLeader(response.data)
            console.log(leader)
          })
          .catch(err => alert(err))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }



  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'} onClick={incrementClick} >
      <Navbar />
      {loading ? (<Loading />) : (
        <div className="w-[100%] h-[65%] justify-between londrina-outline-regular">
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
