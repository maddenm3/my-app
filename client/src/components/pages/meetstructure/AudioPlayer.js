import React, { useContext, useState, useEffect, useRef } from "react"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { UserContext } from "../../../UserContext"

export default function AudioPlayer(props){

    const [isPlaying, setIsPlaying] = useState(false)
    const [newAudioPlaying, setNewAudioPlaying] = useState(false)

    const user = useContext(UserContext)

    const audioPlayer = useRef()

    const togglePlayPause = () => {
        audioPlayer.current.play()
        // const prevValue = isPlaying
        // setIsPlaying(!prevValue)
        // if(!prevValue){
        //     audioPlayer.current.play()
        // }
        // else{
        //     audioPlayer.current.pause()

        // }
        // setTimeout(() => {
        //     console.log("time up!")
        //     setIsPlaying(false)
        // }, 30000)

    }

    const togglePause = () => {
        audioPlayer.current.pause()
    }

    useEffect(()=>{

    

    }, [isPlaying])


return(
    <div>
        <audio ref={audioPlayer} src={props.preview}>
        </audio>
            
        <div className="play-circle">

        </div>
        <div className="top-track" onMouseOver={togglePlayPause} onMouseOut={togglePause}>
        <li>{props.songName}</li>
        <li>{props.artist}</li>
        </div>
    </div>
)
}
