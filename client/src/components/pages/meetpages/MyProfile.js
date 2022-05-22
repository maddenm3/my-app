import React, { useContext } from "react"
import { logout } from "../../../spotify"
import { UserContext } from "../../../UserContext"
import AudioPlayer from "../meetstructure/AudioPlayer"


export default function MyProfile(){
    const user = useContext(UserContext)  

    // const topSongs = user.topSongs

    // const trackRef = useRef()

    // const displayTopSongs = 

    // topSongs && 

    //     topSongs.map(song => {
    //         return(
    //             <div ref={trackRef} className="track" key={song.id}>
    //                     <img className="my-top-five-album-cover" src={song.album.images[0].url} alt=""/>
    //                     <div className="profile-track-info">
    //                         <div className="song-info">
    //                             <AudioPlayer 
    //                             preview={song.preview_url}
    //                             songName={song.name}
    //                             artist={song.artists[0].name}
    //                             />
                                
    //                         </div>                                
    //                     </div>
    //                 </div>
                
            
    //         )
    //     }
    // )


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
                                <div className="track">
                                    <h1>Listening Now</h1>                        
                                    <img className="my-top-five-album-cover" src={user.currentlyPlaying.album.images[0].url} alt=""/>
                                    <div className="song-info">
                                        <AudioPlayer 
                                        preview={user.currentlyPlaying.preview_url}
                                        songName={user.currentlyPlaying.name}
                                        artist={user.currentlyPlaying.artists[0].name}
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
                {/* <div className="top-songs-container">
                    <h1>My Top 5 Songs</h1>
                    <div className="top-songs">
                        {user && displayTopSongs}
                    </div>
                </div> */}
                </div>
                }
             <div className="logout-button" onClick={logout}>Logout</div>
             </div>
             :
             <div className="page">
                 <p>Getting your info...</p>
                </div>
                 }
        </div>
    )
}