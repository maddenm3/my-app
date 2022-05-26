import React, { useContext, useState, useEffect } from "react"
import AudioPlayer from "../meetstructure/AudioPlayer"
import { useParams } from "react-router-dom"
import { UserContext } from "../../../UserContext"
import findUser from "../../../axios-api"

export default function Profile(){
    const [user, setUser] = useState(null)
    const [isFollowing, setIsFollowing] = useState(false)
    
    const { id } = useParams()

    const getUser = async() => {
        try{
            const response = await findUser.get(`/users/${id}`)
            const data = response.data
            setUser(data)

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{

        let isCancelled = false

        if(!isCancelled){
            getUser()
        }

        return () => {
            isCancelled = true
        }


    }, [])       
  

    // const HandleFollowButton = () => {
    //     setIsFollowing(!isFollowing)
    // }


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

             </div>
}
        </div>
    )
}