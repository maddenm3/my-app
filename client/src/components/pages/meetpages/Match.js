import { process_params } from "express/lib/router"
import React, { useContext } from "react"
import { UserContext } from "../../../UserContext"
import Card from "./../../subcomponents/Card"
import userData from "./../../subcomponents/userData"

export default function Match(){

    const user = useContext(UserContext)
    
    const [myPlayButton, setMyPlayButton] = React.useState(true)
    const [theirPlayButton, setTheirPlayButton] = React.useState(true)
    const [userId, setUserId] = React.useState(0)
    const [vipStatus, setVipStatus] = React.useState(true)
    const [changeSong, setChangeSong] = React.useState(false)
    const [nextClicked, setNextClicked] = React.useState(false)


    const username = userData[userId].name
    const theirSongTitle = userData[userId].songTitle
    const theirSongArtist = userData[userId].songArtist
    const theirAlbumCover = userData[userId].albumCover



    function handleNextButtonClick(){
        setNextClicked(true)
        setUserId(prevId => prevId+1)
       
     }

    const mySong =
             <div className="song-title">
                <h4>{user.topTrack}</h4>
                <h6>{user.artist}</h6>
            </div>
        
    const theirSong =
        <div className="song-title">
           <h4>{theirSongTitle}</h4>
           <h6>{theirSongArtist}</h6>
       </div>

    return(
        <div>
        <div className="match-page">
            <Card 
            cardId={1}
            // topTrack={props.topTrack}
            // artist={props.artist}
            // albumCover={props.albumCover}
            // profilePhoto={props.profilePhoto}
            // preview={props.preview}
            // playButton={myPlayButton}
            // name={props.name}
            // userPic={props.profilePhoto}           
            // buttonTwo="Change Song"
            // handleClick={props.handleClick}
            // vipStatus={vipStatus}
            />

            <Card 
            cardId={2}
            topTrack={theirSongTitle}
            artist={theirSongArtist}
            albumCover={theirAlbumCover}
            playButton={theirPlayButton}
            name={username}
            // userPic={props.profilePhoto}
            buttonTwo={userId===3 ? "Upgrade" : "Next"}
            handleClick={handleNextButtonClick}
            />
        </div>
        </div>
    )
}