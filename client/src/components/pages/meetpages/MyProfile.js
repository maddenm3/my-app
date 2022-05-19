import React, { useContext, useState, useRef } from "react"
import { logout } from "../../../spotify"
import { UserContext } from "../../../UserContext"
import AudioPlayer from "../meetstructure/AudioPlayer"
import { AiOutlineCheckCircle } from "react-icons/ai"


export default function MyProfile(){
    const user = useContext(UserContext)  

    const topSongs = user.topSongs

    const trackRef = useRef()

    const HandleSetSong = event => {
        const value = event.target.value
        alert("Set " + value + " as your favorite song?")
    }

    const displayTopSongs = 

    topSongs && 

        topSongs.map(song => {
            return(
                <div ref={trackRef} className="track" key={song.id}>
                        <img className="my-top-five-album-cover" src={song.album.images[0].url} alt=""/>
                        <div className="profile-track-info">
                            <div className="song-info">
                                <AudioPlayer 
                                preview={song.preview_url}
                                songName={song.name}
                                artist={song.artists[0].name}
                                />
                                
                            </div>
                            {/* <button
                            value={song.name}
                            onClick={HandleSetSong}
                            className={(user.topTrack.song === song.name) ? "top-track-selected" : "set-as-top-track"}>
                                ✓
                            </button> */}
                                
                        </div>
                    </div>
                
            
            )
        }
    )


    return(
        <div>
            {user.profilePhoto ? 
            <div className="profile-page">
                <div className="profile"> 
                    <img src={user.profilePhoto} className="profile-photo" alt=""/>
                    <div className="user-info">
                        <h1>{user.firstName}</h1>
                        <p>From {user.country==="US" ? "USA" : user.country}</p>
                    </div>
                </div>
                {user && 

            <div>
                <div className="profile-container">
                            <div className="track">
                            <h1>My Top Song Right Now</h1>                        
                                    <img className="my-top-five-album-cover" src={user.topTrack.albumCover} alt=""/>
                                    <div className="song-info">
                                        <AudioPlayer 
                                        preview={user.topTrack.preview}
                                        songName={user.topTrack.song}
                                        artist={user.topTrack.artist}
                                        />
                                    </div>
                                </div>
                                <div className="top-artist">
                                    <h1>My Top Artist</h1>
                                    <img className="my-top-five-album-cover" src={user.artistImage} alt=""/>
                                    <li>{user.artist}</li>
                                </div>
                                <div>
                                    <h1>My Top Genres</h1> 
                                    <div className="genre-tag">{user.genre[0]}</div>
                                    <div className="genre-tag">{user.genre[1]}</div>

                                </div>
                </div>
                <div className="top-songs-container">
                    <h1>My Top 5 Songs</h1>
                    <div className="top-songs">
                        {user && displayTopSongs}
                    </div>
                </div>
                </div>
                }
             <div className="logout-button" onClick={logout}>Logout</div>
             </div>
             :
             <div>
                 <p>Getting your info...</p>
                 </div>
                 }
        </div>
    )
}