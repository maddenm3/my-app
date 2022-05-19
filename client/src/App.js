import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import { useEffect, useState, useContext, useRef } from "react"
import { UserContext } from "./UserContext"
import axios from "axios"
import { accessToken, getCurrentUserProfile, getUserTopTracks, getUserTopArtists, getCurrentlyPlaying } from "./spotify"
import { catchErrors } from "./utils"
import { BrowserRouter as Router} from "react-router-dom"
import LandingPage from "./components/pages/LandingPage"
import { ErrorBoundary } from "react-error-boundary"

export default function App(){
  const [firstName, setFirstName] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [country, setCountry] = useState("")
  const [topTrack, setTopTrack] = useState("")
  const [artist, setArtist] = useState("")
  const [artistImage, setArtistImage] = useState("")
  const [artistId, setArtistId] = useState("")
  const [genre, setGenre] = useState([])
  const [previewUrl, setPreviewUrl] = useState("")
  const [albumCover, setAlbumCover] = useState("")
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [topSongs, setTopSongs] = useState([{
    song: "",
    artist: "",
    albumCover: "",
    preview: ""
  }])

  const [similarArtists, setSimilarArtists] = useState(null)
  const [points, setPoints] = useState(2)
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [email, setEmail] = useState(null)
  const [token, setToken] = useState("")
  const [justLoggedIn, setJustLoggedIn] = useState(false)


  const componentIsMounted = useRef(true)

  // const navigate = useNavigate()

  // useEffect(() => {
  //   return() => {
  //     componentIsMounted.current = false
  //   }
  // })

  useEffect(()=>{
    window.history.pushState({}, null, "/")


  },[token])
  


  useEffect(() => {
    setToken(accessToken)
    setJustLoggedIn(true)

    let isCancelled = false

    const fetchData = async () => {
      try {
        if(!isCancelled){
          const { data } = await getCurrentUserProfile()
          const fullName = data.display_name
          const nameArray = fullName.split(' ')
          const firstName = nameArray[0]
          setFirstName(firstName)
          const profPic = data.images[0].url
          setProfilePhoto(profPic)
          const location = data.country
          setCountry(location)
          const userEmail = data.email
          setEmail(data.email)
        }
        
      } catch(e) {
        if(!isCancelled){
          console.error(e);
        }
      }
      

      try {
        if(!isCancelled){
            const {data} = await getUserTopTracks()
            const key = 0
              setTopSongs(data.items)
              const albumCover = data.items[key].album.images[0].url
              setAlbumCover(albumCover)
              const myTrack = data.items[key].name
              setTopTrack(myTrack)
              const myArtist = data.items[key].artists[0].name
              setArtist(myArtist)
              const preview = data.items[key].preview_url
              setPreviewUrl(preview)
              setTopTrack(
                {
                song: myTrack,
                artist: myArtist,
                albumCover: albumCover,
                preview: preview
              })      
            }
          }
      catch(e) {
        if(!isCancelled){
          console.error(e)
        }
      }

      try {
        if(!isCancelled){
            const {data} = await getUserTopArtists()
            setArtist(data.items[0].name)
            setGenre([data.items[0].genres[0], data.items[0].genres[1]])
            setArtistImage(data.items[0].images[0].url)
            setArtistId(data.items[0].id)

          }
        }
      catch(e) {
        if(!isCancelled){
          console.error(e)
        }
      }
      try {
        if(!isCancelled){
            const {data} = await getCurrentlyPlaying()
            setCurrentlyPlaying(data)
          }
        }

      catch(e) {
        if(!isCancelled){
          console.error(e)
        }
      }
    }

    catchErrors(fetchData())    

    return () => {
      isCancelled = true
    }

  }, []);

 
  useEffect(() => {

    let isCancelled = false

    const postData = async() => {
      try{ 
        if(!isCancelled){
        await axios.post("http://localhost:3001/users", {
        name: firstName,
        email: email,
        country: country,
        photo: profilePhoto,
        topTrack: topTrack,
        artist: artist,
        artistImage: artistImage,
        genre: genre
        })
      }
    } catch(error){
      if(!isCancelled){

        console.log(error)
      }
    }
    }
    postData()
    

  return () => {
    isCancelled = true
  }



  }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }



  const user = {
    token: token,
    firstName: firstName,
    profilePhoto: profilePhoto,
    country: country,
    topSongs: topSongs,
    topTrack: topTrack,
    artist: artist,
    artistImage: artistImage,
    artistId,
    genre: genre,
    preview: previewUrl,
    albumCover: albumCover,
    isPlaying: isPlaying,
    similarArtists: similarArtists,
    points: points
  }


  function ErrorHandler({error}){
    return(
      <div role="alert">
        <p>An error occured</p>
        <pre>{error.message}</pre>
      </div>
    )
  }


  return(
    !token ? 
      <LandingPage />
      :
    <Router>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
    <div className="wrapper">
    <UserContext.Provider value={user && user}>
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
      </ErrorBoundary>
    </Router>

  )
}