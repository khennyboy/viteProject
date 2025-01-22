import './index.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import Memories from './components/memories'
import Comment from './components/comment'
import Audio from './components/audio'
import { useCallback, useRef, useState } from 'react'


const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleDoubleClick = useCallback(()=>{
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  },[isPlaying])
  
    // useEffect(()=>{
    //   if(audioRef.current){
    //     audioRef.current.play()
    //   }
    // },[])

  return (
    <div onDoubleClick={()=>handleDoubleClick()}>
      <Nav/>
      <div className='mt-12'>
        <Home/>
        <Memories/>
        <Comment/>
        <Footer/>
        <Audio title = {audioRef}/>
      </div>
    </div>
  )
}

export default App

