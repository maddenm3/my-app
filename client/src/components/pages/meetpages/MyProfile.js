import React, { useContext, useState } from "react"
import { logout } from "../../../spotify"
import { UserContext } from "../../../UserContext"
import AudioPlayer from "../meetstructure/AudioPlayer"


export default function MyProfile(){
    const user = useContext(UserContext)  
    const [topSongs, setTopSongs] = useState([user.topSongs])


    return(
        <div>
            <div className="profile-page">
                <div className="profile"> 
                    <img src={user.profilePhoto} className="profile-photo" alt=""/>
                    <div className="user-info">
                        <h1>{user.firstName}</h1>
                        <p>From {user.country=="US" ? "USA" : user.country}</p>
                    </div>
                </div>
                {user && 

                <div className="profile-container">
                            <div className="track">
                            <h1>My Top Song</h1>                        
                                    <img className="profile-album-cover" src={user.topTrack.albumCover}/>
                                    <div className="song-info">
                                        <AudioPlayer 
                                        preview={user.topTrack.preview}
                                        />
                        
                                        <div className="top-track">
                                            <li>{user.topTrack.song}</li>
                                            <li>{user.topTrack.artist}</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-artist">
                                    <h1>My Top Artist</h1>
                                    <img className="profile-album-cover" src={user.artistImage}/>
                                    <div className="profile-tag"><li>{user.artist}</li></div>
                                </div>
                                <div>
                                    <h1>My Top Genres</h1> 
                                    <div className="genre-tag">{user.genre[0]}</div>
                                    <div className="genre-tag">{user.genre[1]}</div>

                                </div>
                </div>
                }
             <div className="logout-button" onClick={logout}>Logout</div>
             </div>
        </div>
    )
}