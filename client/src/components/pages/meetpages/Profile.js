import React, { useContext, useState, useEffect } from "react"
import AudioPlayer from "../meetstructure/AudioPlayer"
import { useParams } from "react-router-dom"
import axios from "axios"
import {BsCheckAll} from "react-icons/bs"
import { UserContext } from "../../../UserContext"
import { NavLink } from "react-router-dom"

export default function Profile(){
    const [user, setUser] = useState(null)
    const [isFollowing, setIsFollowing] = useState(false)

    const myInfo = useContext(UserContext)
    
    const { id } = useParams()

    const getUser = async() => {
        try{
            const response = await axios.get(`http://localhost:3001/users/${id}`)
            const data = response.data
            setUser(data)

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{

        getUser()


    }, [])       
  

    const HandleFollowButton = () => {
        setIsFollowing(!isFollowing)
    }


    return(
        
        <div>
            {user && 
            <div className="profile-page">
                <div className="profile"> 
                <img src={user.photo} className="profile-photo" alt=""/>
                <div className="user-info">
                    <h1>{user.name}</h1>
                    <div className="profile-from-follow">
                        <p>From {user.country=="US" ? "USA" : user.country}</p>
                        {/* <div className="follow-chat-buttons">
                            <p className={isFollowing ? "follow-button-selected" : "follow-button"} onClick={HandleFollowButton}>{isFollowing ? "Following": "Follow"} {isFollowing && <BsCheckAll/>}</p>
                        </div> */}
                    </div>
                </div>
                </div>
                      <div className="profile-container">
                            <div className="track">
                            <h1>{user.name}'s Top Song</h1>                        
                                    <img className="my-top-five-album-cover" src={user.topTrack.albumCover}/>
                                    <div className="song-info">
                                        <AudioPlayer 
                                        preview={user.topTrack.preview}
                                        songName={user.topTrack.song}
                                        artist={user.topTrack.artist}
                                        />
                                    </div>
                                </div>
                                <div className="top-artist">
                                    <h1>{user.name}'s Top Artist</h1>
                                    <img className="my-top-five-album-cover" src={user.artistImage}/>
                                    <li>{user.artist}</li>
                                </div>
                                <div>
                                    <h1>{user.name}'s Top Genres</h1> 
                                    <div className="genre-tag">{user.genre[0]}</div>
                                    <div className="genre-tag">{user.genre[1]}</div>
                                </div>
                </div>
                {/* <div className="profile-chat-area">
                    {(myInfo.points < 2) ? 
                    
                    <div>
                        <p>To chat with {user.name}, you need to have at least 10 Melody Points</p>
                        <p>Current Melody Points: {myInfo.points}</p>
                        <p className="follow-button">Get Points</p>
                        
                    </div> 

                    :
                    <div className="chat-info">
                        <h3>Chat Rules</h3>
                        <p>Your first message to {user.name} must be a book recommendation or an educational Youtube video link that you think they will like.</p>
                        <NavLink to={{pathname:"/chat", state: {name: user.name}}} className="chat-button"><p>OK, Chat with {user.name}</p></NavLink>
                    </div>
                    }
                </div> */}
             </div>
}
        </div>
    )
}