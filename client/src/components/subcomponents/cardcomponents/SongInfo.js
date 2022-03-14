import React, { useContext } from "react"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { UserContext } from "../../../UserContext"
import Button from "./Button"
import AudioPlayer from "./subcardcomponents/AudioPlayer"

export default function SongInfo(props){

    const user = useContext(UserContext)

    const [isPlaying, setIsPlaying] = React.useState(false)

    const cardHeader = (
        <div>
            {props.cardId===1 ? 
            <div>My Top Song</div> : 
            <div>{props.name}'s Top Song</div>}
        </div>
    )

    // const audioPlayer = React.useRef()

    // const togglePlayPause = () => {
    //     const prevValue = isPlaying
    //     setIsPlaying(!prevValue)
    //     if(!prevValue){
    //         audioPlayer.current.play()
    //     }
    //     else{
    //         audioPlayer.current.pause()
    //     }
    //     setTimeout(() => {
    //         console.log("time up!")
    //         setIsPlaying(false)
    //     }, 30000)

    // }





    return(
        <div>
            <div className="card-status"><h1>{cardHeader}</h1>
            </div>
                <div className="album-cover">
                    <img className="album-picture" src={user.albumCover} alt=""/>
                    <div className="user-display-album">
                        <div className="match-user-info">
                            <img className="match-user-pic" src={user.profilePhoto} alt=""/>
                            <div>{user.name}</div>
                        </div>
                    </div>

                
        </div>
        <div className="below-song">
            <div className="song-info">
                <AudioPlayer 
                preview={user.preview}
                />
                        <div className="top-track">
                            <li>{user.topTrack}</li>
                            <li className="top-track-artist">{user.artist}</li>
                        </div>
                    </div>
                    <Button 
                    handleClick={props.handleClick}/>
                </div>
        </div>
    )
}