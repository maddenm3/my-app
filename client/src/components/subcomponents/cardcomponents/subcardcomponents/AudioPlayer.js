import React, { useContext } from "react"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { UserContext } from "../../../../UserContext"

export default function AudioPlayer(props){

    const [isPlaying, setIsPlaying] = React.useState(false)

    const user = useContext(UserContext)

    const audioPlayer = React.useRef()

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if(!prevValue){
            audioPlayer.current.play()
        }
        else{
            audioPlayer.current.pause()
        }
        setTimeout(() => {
            console.log("time up!")
            setIsPlaying(false)
        }, 30000)

    }


return(
    <div>
        <audio ref={audioPlayer} src={props.preview}>
        </audio>
            
        <div className="play-circle" onClick={togglePlayPause}>
            {isPlaying ? 
            
            <FaPause className="pause-button"/>
            : 
            
            <div className="play-button"><FaPlay /></div>}
        </div>
        <div className="top-track"></div>
    </div>
)
}
