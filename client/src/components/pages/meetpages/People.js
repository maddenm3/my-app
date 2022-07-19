import React, { useEffect, useState } from "react"
import {NavLink } from "react-router-dom"
import findUser from "../../../axios-api"
import axios from "axios"
import AudioPlayer from "../meetstructure/AudioPlayer"


export default function People(){

    const [userList, setUserList] = useState(null)

    const getUsers = async () => {
        try{
            const response = await axios.get('/users')
            const data = response.data
            setUserList(data)

        }
        catch (error){
            console.log(error)
        }
    }


    useEffect(() => {

        let isCancelled=false
        if(!isCancelled){
            getUsers()
            console.log("users got")
        }

        return ()=>{
            isCancelled=true
        }
        

    }, [])




    const userDisplay = userList?.map((user) => {
         
       return(
        user.email!=null &&
       <div key={user._id}>
           <img className="profile-photo" src={user.photo} alt=""/>
            <div className="user-name-country">
            <NavLink to={`/profile/${user._id}`} className="nav-link">
                <div className="user-tag">
                    <li>{user.name}</li></div>
                </NavLink>
            </div>

        </div>
       )
    }
    )


    const displaySongs = 

    (
    
    userList ? userList.map((item) => {
    return(
        item.email!=null &&

        <div key={item._id}>
            <NavLink to={`/profile/${item._id}`} className="nav-link">
                <div className="user-tag">
                    <img src={item.photo} className="meet-header-photo" alt=""/>
                    {item.name}
                </div>
            </NavLink>

            <div className="track">
                <img className="my-top-five-album-cover" src={item.topTrack?.albumCover} alt=""/>
                    <div className="song-info">
                        <AudioPlayer 
                        preview={item.topTrack?.preview}
                        songName={item.topTrack?.song}
                        artist={item.topTrack?.artist}
                        />
                        <div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

)
:
<div>
    Loading...
</div>

)

    const loadingPeople = (
        <div className="display-container">
            {[0,1,2,3,4,5,6,7,8,9].map((i, index) => {
                return(
                    <div key={index}>
                        <img className="profile-photo"/>
                        <div className="user-name-country">
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
                <div className="general-container-title">
                    <p>Top People</p>
                </div>
                <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
                    {userList ? userDisplay : loadingPeople} 
                </div>
            </div>
            <div className="general-container">
            <div className="general-container-title">

                <p>Top Songs on MelodyMeet</p>
            </div>
            <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
                {userList ? displaySongs : loadingPeople}
            </div>
        </div>
        </div>
    )
}