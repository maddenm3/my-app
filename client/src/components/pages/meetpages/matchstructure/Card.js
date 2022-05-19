import React, { useContext } from "react"
import { UserContext } from "../../../../UserContext"
import Button from "./Button"
import SongInfo from "./SongInfo"


export default function Card(props){

    const user = useContext(UserContext)

    

    return(
        <div className="song-card">
                    <SongInfo 
                    name={props.name}
                    cardId={props.cardId}
                    profilePhoto={props.profilePhoto}
                    albumCover={props.albumCover}
                    playButton={props.playButton}
                    topTrack={props.topTrack}
                    artist={props.artist}
                    preview={props.preview}
                    handlePlay={props.handlePlay}
                    />
                
        </div>
    )
}