import './index.css'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
// import Memories from './components/memories'
import Comment from './components/comment'
import Audio from './components/audio'
import React, { useCallback, useRef, useState } from 'react'
import Notify from './components/notification'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const SectionsRef = React.createContext()

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const galleryRef = useRef(null)
  const wishesRef = useRef(null)

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
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
 
  return (
    <QueryClientProvider client={queryClient}>
    <SectionsRef.Provider value={{galleryRef, wishesRef}}>
    <div onDoubleClick={()=>handleDoubleClick()}>
      <Nav/>
      <div className='mt-28 md:mt-36 lg:mt-40 px-3 md:px-8 lg:px-20 xl:px-32'>
        <Home/>
        {/* <Memories/> */}
        <Comment/>
        <Audio title = {audioRef}/>
      </div>
      <Footer/>
    </div>
    <Notify/>
    </SectionsRef.Provider>
    </QueryClientProvider>
  )
}

export default App



