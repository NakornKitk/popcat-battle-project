import Navbar from './components/navbar'
import {useState, useEffect} from 'react'
import useStore from './store/store.js'
import './input.css'
import sound from './sound/sound.wav'
import Loading from './components/loading.js'

 

function App() {
  let [count,setCount] = useState('')
  let {localCount,setlocalCount} = useStore()
  const [isImageOne, setIsImageOne] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // start loading

    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/get`, { method: 'GET' })
    .then(response => response.json())
    .then(result => {
      setCount(result.data.numCount);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      setLoading(false); // End loading 
    });
  },[])



  function playAudio(url) {
    new Audio(url).play();
  }


  const incrementClick = () =>{
      // setLoading(true);
      fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/add`,{method: 'PUT'})
      .then(response => response.json())
      .then(result => {
          // console.log(result)
          setCount(result.data.numCount)
          setlocalCount()
          setIsImageOne((prev) => !prev);
          playAudio(sound)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      // .finally(() => {
      //   setLoading(false); // End loading 
      // });
  }


  return (
    <div className={isImageOne ? 'bg-image-1 h-[100vh] bg-top bg-cover' : 'bg-image-2 h-[100vh] bg-top bg-cover'} onClick={incrementClick} >
      <Navbar/>
      {loading ? (<Loading />) : (
        <div>
          <div className="londrina-outline-regular h-[95%] w-[100%]">
            <p className="text-center text-[70px] md:text-[50px]">{localCount}</p>
          </div>
          <div className="text-4xl w-[100%] bg-white fixed bottom-0">
            <p className="text-center p-[10px] londrina-outline-regular">
              All time clicks: {count} times
            </p>
          </div>
        </div>
    )}
    </div>
  );
}

export default App;
