import { process_params } from "express/lib/router"
import React, { useContext, useState, useEffect } from "react"
import { UserContext, AllUsersContext } from "../../../UserContext"
import Card from "./matchstructure/Card"
import userData from "./../../subcomponents/userData"
import AudioPlayer from "../../pages/meetstructure/AudioPlayer"
import Button from "./matchstructure/Button"
import axios from "axios"
import {AiFillCloseCircle, AiFillHeart} from "react-icons/ai"


export default function Match(){

    const user = useContext(UserContext)
    
    const [userList, setUserList] = useState(null)
    const [myPlayButton, setMyPlayButton] = React.useState(true)
    const [theirPlayButton, setTheirPlayButton] = React.useState(true)
    const [userId, setUserId] = React.useState(0)
    const [key, setKey] = useState(0)
    const [id, setId] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const username = userData[userId].name
    const theirSongTitle = userData[userId].songTitle
    const theirSongArtist = userData[userId].songArtist
    const theirAlbumCover = userData[userId].albumCover



    // function handleNextButtonClick(){
    //     setNextClicked(true)
    //     setUserId(prevId => prevId+1)
       
    //  }


function HandleChangeSong(){
    setKey(prevKey => prevKey+1)
    (key===4 && setKey(0))
    setIsPlaying(false)
}


useEffect(() => {
    const getUsers = async () => {
      try{
          const response = await axios.get("http://localhost:3001/users")
          const data = await response.data
            setUserList(data)  

      }
      catch (error){
          console.log(error)
      }
  }

      getUsers()

  }, [])

    const HandleChangePerson = () => {
        setId(prevId => prevId+1)
        if(id===4){
            return(
                setId(0)
            )
        }
        console.log("clicked")
    }
    



    return(
        <div className="page">
            
            {userList ? 
        <div className="match-wrapper">
                      
                <div className="song-card">
                    <div className="user-tag">
                                <img className="meet-header-photo" src={userList[id].photo}/>
                                <div>
                                    {userList[id].name}
                                </div>
                            </div>
                        <img className="album-cover" src={userList[id].topTrack.albumCover}/>
                        <section>
                        <div className="song-info">
                            <AudioPlayer 
                            preview={userList[id].topTrack.preview}
                            songName={userList[id].topTrack.song}
                            artist={userList[id].topTrack.artist}
                            />

                        
                        </div>
                        
                        </section>
                
        </div>
        <div className="like-dislike">
            <AiFillCloseCircle className="dislike" onClick={HandleChangePerson}/>
            <AiFillHeart className="like" onClick={HandleChangePerson}/>
        </div>
        {/* <Button 
        handleClick={HandleChangePerson}
        buttonName="Next Person"
        /> */}
    </div>
    
    :


    <div className="song-card">
        <div className="user-tag-loading"></div>
            <div className="album-cover">
            </div>
            <div className="song-info">
                <li className="loading-tag"></li>
            </div>
            
    </div>
    

}
            
        </div>
    )
}