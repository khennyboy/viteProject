import './index.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import Memories from './components/memories'
import Comment from './components/comment'
import Audio from './components/audio'
import { useRef, useState } from 'react'




const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const handleDoubleClick = () => {
    console.log('hello')
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
  return (
    <div onDoubleClick={()=>handleDoubleClick()}>
      <Nav/>
      <Home/>
      <Memories/>
      <Comment/>
      <Footer/>
      <Audio title = {audioRef}/>
    </div>
  )
}

export default App

