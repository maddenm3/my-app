import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "./UserContext"
import axios from "axios"
import { accessToken, fetchData, logout, getCurrentUserProfile, getUserTopTracks } from "./spotify"
import { catchErrors } from "./utils"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Chat from "./components/pages/Chat"
import Cafe from "./components/pages/Cafe"
import Meet from "./components/pages/Meet"

export default function App(){
  const [profile, setProfile] = useState([])
  const [firstName, setFirstName] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [token, setToken] = useState("")
  const [country, setCountry] = useState("")
  const [topTrack, setTopTrack] = useState("")
  const [artist, setArtist] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const [albumCover, setAlbumCover] = useState("")
  const [genre, setGenre] = useState("")
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [topSongs, setTopSongs] = useState("")
  const [key, setKey] = useState(1)
  const [myFavoriteSong, setMyFavoriteSong] = useState("")
  const [userProfile, setUserProfile] = useState({
    id: "",
    firstName: "",
    profPic: "",
    country: "",
    topSongs: {}
  })
  // const [userDisplay, setUserDisplay] = useState({
  //   firstName: "",
  //   profPic: "",
  //   favoriteSongName: "",
  //   favoriteSongArtist: "",
  //   favoriteSongPreview: "",
  //   favoriteSongAlbumCover: ""
  // })

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile()
          const fullName = data.display_name
          const nameArray = fullName.split(' ')
          const firstName = nameArray[0]
          setFirstName(firstName)
          const profPic = data.images[0].url
          setProfilePhoto(profPic)
          const location = data.country
          setCountry(location)
          window.history.pushState({}, null, "/")
        
      } catch(e) {
        console.error(e);
      }

      try {
        const {data} = await getUserTopTracks()
            setTopSongs(data)
            const key = 0
            const myAlbumCover = data.items[key].album.images[0].url
            setAlbumCover(myAlbumCover)
            const myTrack = data.items[key].name
            setTopTrack(myTrack)
            const myArtist = data.items[key].artists[0].name
            setArtist(myArtist)
            const preview = data.items[key].preview_url
            setPreviewUrl(preview)
            setUserProfile(prevUser => ({...prevUser, topSongs: data})) 
      }
      catch(e) {
        console.error(e)
      }
    }

    catchErrors(fetchData())

  }, []);

  useEffect(() => {
    const postData = async() => {
      await axios.post("http://localhost:3001/users", {
      name: firstName,
      accessToken: accessToken,
      country: country,
      photo: profilePhoto,
      topSongs: topSongs
      })
    }
  postData()
  console.log("posted to")
  }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    function HandleChangeSong(){
      setTopTrack(topSongs.items[key].name)
      setArtist(topSongs.items[key].artists[0].name)
      setAlbumCover(topSongs.items[key].album.images[0].url)
      setPreviewUrl(topSongs.items[key].preview_url)
      setKey(prevKey => prevKey+1)
      (key===4 && setKey(0))
      setIsPlaying(false)
  }

  const user = {
    token: token,
    firstName: firstName,
    profilePhoto: profilePhoto,
    country: country,
    topSongs: topSongs,
    topTrack: topTrack,
    artist: artist,
    preview: previewUrl,
    albumCover: albumCover,
    isPlaying: isPlaying,
    HandleChangeSong: HandleChangeSong,
    isPlaying: isPlaying 
  }





  return(
    <Router>
    <div className="wrapper">
    <UserContext.Provider value={user}>
      <div>
        <Header 
        />
      </div>
      <div className="main">
        
          <Main 
            />
          </div>
          </UserContext.Provider>

      </div>
      
    </Router>

  )
}