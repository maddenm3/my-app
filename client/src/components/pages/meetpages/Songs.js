import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../UserContext"
import {NavLink } from "react-router-dom"
import AudioPlayer from "../meetstructure/AudioPlayer"


export default function Songs(){

const user = useContext(UserContext)   
const [userList, setUserList] = useState(null) 




useEffect(() => {
    let isCancelled = false

    const getUsers = async () => {
      try{
          if(!isCancelled){
          const response = await axios.get("http://localhost:3001/users")
          const data = await response.data
            setUserList(data)  
          }
      }
      catch (error){
        if(!isCancelled){

          console.log(error)
      }
    }
  }

      getUsers()

      return () => {
          isCancelled = true
      }

  }, [])


const displaySongs = userList?.map((item) => {
    return(
    <div key={item._id}>
        <NavLink to={`/*/profile/${item._id}`} className="nav-link">
            <div className="user-tag">
                <img src={item.photo} className="meet-header-photo" alt=""/>
                {item.name}
            </div>
        </NavLink>

        <img className="my-top-five-album-cover" src={item.topTrack.albumCover} alt=""/>
            <div className="song-info">
                <AudioPlayer 
                preview={item.topTrack.preview}
                songName={item.topTrack.song}
                artist={item.topTrack.artist}
                />

                {/* <div className="top-track">
                    <li>{item.topTrack.song}</li>
                    <li>{item.topTrack.artist}</li>
                </div> */}

            </div>
    </div>
    )
}

)

const loadingDisplay = (
    <div className="display-container">
        {[0,1,2,3,4,5,6,7,8,9].map(i => {
            return(
                <div>
                    <li className="user-tag-loading"></li>
                    <img className="loading-album-cover"/>
                    <div className="top-track">
                        <li className="loading-tag"></li>
                    </div>
                </div>
            )
        }

        )
}
    </div>
)




return(
    <div className="page">
        <div className="general-container">
            <p>Meet the Community's Top Songs</p>
            <div className="display-container">
                {userList ? displaySongs : loadingDisplay}
            </div>
        </div>
    </div>
)}