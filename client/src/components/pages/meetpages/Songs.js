import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../../../UserContext"
import {NavLink } from "react-router-dom"
import AudioPlayer from "../meetstructure/AudioPlayer"
import {RiRefreshFill} from "react-icons/ri"



export default function Songs(){

const user = useContext(UserContext)   
const [userList, setUserList] = useState(null) 

const genre = user.genre[0]
const accessToken = user.token
const [similarSongs, setSimilarSongs] = useState(null)
const [similarArtists, setSimilarArtists] = useState(null)
const artistId = user.artistId
const topSongs = user.topSongs
const [recs, setRecs] = useState(null)
const [clicked, setClicked] = useState(false)
const [trackForRecs, setTrackForRecs] = useState(user.topTrack.id)
const [id, setId] = useState(0)


const getUsers = async () => {
    try{
            axios.defaults.baseURL = process.env.REACT_APP_URL
            const response = await axios.get('/users/limit')
            const data = response.data
            setUserList(data)
        

    }
    catch (error){
        console.log(error)
    }
}


useEffect(() => {

    let isCancelled = false

    if (!isCancelled){
        // getUsers
        getUsers()
    }

    

    return () => {
        isCancelled = true
    }
}, [])


const getRecs = async() => {

    try{
            axios.defaults.baseURL = 'https://api.spotify.com/v1'
            const response = await axios.get(`/recommendations?limit=10&seed_tracks=${user && topSongs[id].id}`)
            setRecs(response.data)


    } catch(error){
        console.log(error)
    }
}

useEffect(()=> {
    let isCancelled = false

    if (!isCancelled){
        // getSimilarSongs()
        getRecs()


    }

    

    return () => {
        isCancelled = true
    }

}, [])




useEffect(() => {
    let isCancelled = false

    const getUsers = async () => {
      try{
          if(!isCancelled){
            axios.defaults.baseURL = process.env.REACT_APP_URL 
            const response = await axios.get('/users')
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


  
const recommendations =

(recs &&
    recs.tracks.map((track, index) => {
        return(

            <div className="track" key={index}>
                <img className="my-top-five-album-cover" src={track.album.images[0]?.url} alt=""/>
                <div className="song-info">
                    <AudioPlayer 
                    preview={track.preview_url}
                    songName={track.name}
                    artist={track.artists[0].name}
                    />
                    <div>

                    </div>
                </div>

                </div>


        )
    })
)


const displaySongs = 

(
    
    userList && userList.map((item) => {
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

)

const loadingDisplay = (
    <div className="display-container">
        {[0,1,2,3,4,5,6,7,8,9].map((i,index) => {
            return(
                <div key={index}>
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
                    <div className="general-container-title">
                        <p>Recommendations for {topSongs[id].name}</p>
                        <div className="refresh-icon" onClick={getRecs}>
                            <RiRefreshFill className="icon"/>
                        </div>
                    </div>
                    <div className="display-container">
                        {recs ? recommendations : loadingDisplay}
                    </div>
                </div>
        <div className="general-container">
            <div className="general-container-title">

                <p>Top Songs on MelodyMeet</p>
            </div>
            <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
                {userList ? displaySongs : loadingDisplay}
            </div>
        </div>
    </div>
)}