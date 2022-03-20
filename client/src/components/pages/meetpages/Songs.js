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


const displaySongs = userList?.map((item) => 
    <div className="song-card" key={item._id}>
        <NavLink to={`/*/profile/${item._id}`} className="user-tag">
    <div className="profile-tag">
        <img src={item.photo} className="meet-header-photo"/>
        <p className="user-tag">{item.name}</p>
    </div>
    </NavLink>

<img className="album-cover" src={item.topTrack.albumCover}/>
<section>
    <div className="song-info">
        <AudioPlayer 
        preview={item.topTrack.preview}
        />

        <div className="top-track">
            <li>{item.topTrack.song}</li>
            <li>{item.topTrack.artist}</li>
        </div>

    </div>

    </section>

</div>


)




return(
    <div className="song-page">
        <h1>Meet the Community's Top Songs</h1>
        <div className="song-container">
      {userList && displaySongs}
        </div>
    </div>
)}