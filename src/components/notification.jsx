import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";


export default function Notify(){
    const [showNotify, setShowNotify]  = useState(false)
    const notifyRef = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            console.log('home')
            setShowNotify(true)
        }, 3000)
        setTimeout(()=>{
            console.log('cook')
            setShowNotify(false)
        }, 10000) 
    },[])
    return createPortal(
        <div ref={notifyRef} className={`fixed bottom-8 right-8 rounded-lg bg-orange-500 text-white max-w-sm p-8 text-lg leading-snug transition-all transform duration-200 ease-linear overflow-hidden ${showNotify? 'scale-100': 'scale-0'}`}>
            <p>
                Dear user, kindly double click on the website to play the birthday song and
                also double click to pause the music.
            </p>
            <button className="absolute top-3 right-4" onClick={()=>setShowNotify(false)} 
                >
                <IoCloseSharp className="size-6"/>
            </button>
        </div>,document.body
    )
}