import React, { useContext, useState } from "react"
import { logout } from "../../../spotify"
import {RiArrowGoBackFill} from "react-icons/ri"
import { UserContext } from "../../../UserContext"
import AudioPlayer from "../../subcomponents/cardcomponents/subcardcomponents/AudioPlayer"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

export default function MyProfile(){
    const user = useContext(UserContext)
    
    const [isPlaying, setIsPlaying] = React.useState(false)


    const displayTopSongs = user.topSongs.items?.map((song) => {
        return(
        <div className="track">
            <img className="profile-album-cover" src={song.album.images[0].url}/>
            <div className="song-info">
                <AudioPlayer 
                preview={song.preview_url}
                />

                <div className="top-track">
                    <li>{song.name}</li>
                    <li>{song.artists[0].name}</li>
                </div>
            </div>
        </div>
        )
    }
    )


    return(
        <div>
            <div className="profile-container">
                <div className="profile"> 
                <img src={user.profilePhoto} className="profile-photo" alt=""/>
                <div className="user-info">
                    <h1>{user.firstName}</h1>
                    <p>From {user.country=="US" ? "USA" : user.country}</p>
                </div>
                </div>
                <div className="top-tracks-container">
                    <h1>My Top Songs</h1>
                    <div className="track-list">
                        {displayTopSongs}
                    </div>
                </div>
             <div className="logout-button" onClick={logout}>Logout</div>
             </div>
        </div>
    )
}