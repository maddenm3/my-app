import React, { useContext, useEffect, useState} from "react"
import { UserContext } from "../../../UserContext"
import AudioPlayer from "../meetstructure/AudioPlayer"
import axios from "axios"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { GrRefresh } from "react-icons/gr"
import {RiRefreshFill} from "react-icons/ri"
import {NavLink } from "react-router-dom"


export default function Home(){
    const user = useContext(UserContext)

    return(
      
        <div className="page">
            {user.profilePhoto ? 
            <div>
                <div className="welcome-tag"><img src={user.profilePhoto} className="meet-header-photo"/><h1>Hi, {user.firstName}!</h1></div>
                <p>Welcome to MelodyMeet</p>
                
            </div>:
            <div>
                <p>Getting your info...</p>

            </div>
            }
            

        </div>
    
    )
}

//     const user = useContext(UserContext)
//     const genre = user.genre[0]
//     const accessToken = user.token
//     const [similarSongs, setSimilarSongs] = useState(null)
//     const [similarArtists, setSimilarArtists] = useState(null)
//     const artistId = user.artistId
//     const topSongs = user.topSongs
//     const [recs, setRecs] = useState(null)
//     const [clicked, setClicked] = useState(false)
//     const [trackForRecs, setTrackForRecs] = useState(topSongs[0].id)

//     const [userList, setUserList] = useState(null)

//     const getUsers = async () => {
//         try{
//                 const response = await axios.get("http://localhost:3001/users/limit")
//                 const data = response.data
//                 setUserList(data)
            

//         }
//         catch (error){
//             console.log(error)
//         }
//     }


//     useEffect(() => {

//         getUsers()

//     }, [])


//     const getRecs = async() => {
//         try{
//                 const response = await axios.get(`/recommendations?limit=10&seed_tracks=${user && topSongs[0].id}`)
//                 setRecs(response.data)
            


//         } catch(error){
//             console.log(error)
//         }
//     }


//     // const getSimilarArtists = async() => {
//     //     try{
//     //         const response = await axios.get(`/artists/${artistId}/related-artists`)
//     //         setSimilarArtists(response.data)
            
    
//     //     } catch(error){
//     //         console.log(error)
//     //     }
//     // }

//     // const getSimilarSongs = async() => {
//     //     try{
//     //         const response = await axios.get(`/search?type=track&q=artist:${similarArtists.artists[0].name}&limit=5`)
//     //         setSimilarSongs(response.data)
//     //         console.log(similarArtists)

//     //     } catch(error){
//     //         console.log(error)
//     //     }
//     // }

//     useEffect(()=> {
//         let isCancelled = false

//         if (!isCancelled){
//             // getSimilarSongs()
//             getRecs()


//         }

        

//         return () => {
//             isCancelled = true
//         }

//     }, [])


//     // const HandleRefreshRecs = async() => {
//     //     try{
//     //         const response = await axios.get(`/recommendations?limit=5&seed_tracks=${user.topSongs[0].id}`)
//     //         setRecs(response.data)


//     //     } catch(error){
//     //         console.log(error)
//     //     }
        
//     // }




// // const topArtists = 

// // (similarArtists && 

// //     similarArtists.artists.slice(0,4).map((artist, index) => {
// //         return(
// //             <div className="artist" key={index}>
// //                 <img className="profile-album-cover" src={artist.images[0].url} alt=""/>
// //                 <li>{artist.name}</li>
// //                 <p className="genre-tag">{artist.genres[0]}</p>
// //             </div>


// //         )
// //     })


// // )


// const recommendations =

// (recs &&
//     recs.tracks.map((track, index) => {
//         return(

//             <div className="track" key={index}>
//                 <img className="my-top-five-album-cover" src={track.album.images[0].url} alt=""/>
//                 <div className="song-info">
//                     <AudioPlayer 
//                     preview={track.preview_url}
//                     songName={track.name}
//                     artist={track.artists[0].name}
//                     />
//                 </div>

//                 </div>


//         )
//     })
// )

// const userDisplay = userList?.map((user) => {
//     return(
//     <div key={user._id}>

//         <img className="profile-photo" src={user.photo} alt=""/>
//          <div className="user-name-country">
//          <NavLink to={`/profile/${user._id}`} className="nav-link">
//              <div className="user-tag">
//                  <li>{user.name}</li></div>
//              </NavLink>
//          </div>
//      </div>
//     )
//  })

// const loadingDisplay = (
//     <div className="display-container">
//         {[0,1,2,3,4,5,6,7,8,9].map(i => {
//             return(
//                 <div>
//                     <img className="loading-album-cover"/>
//                     <div className="top-track">
//                         <li className="loading-tag"></li>
//                     </div>
//                 </div>
//             )
//         }

//         )
// }
//     </div>
// )


// const loadingPeople = (
//     <div className="display-container">
//         {[0,1,2,3,4,5,6,7,8,9].map(i => {
//             return(
//                 <div>
//                     <img className="profile-photo"/>
//                     <div className="user-name-country">
//                         <li className="loading-tag"></li>
//                     </div>
//                 </div>
//             )
//         }

//         )
// }
//     </div>
// )

// // const displaySimilars = 

// // (
// //     similarSongs && 

// //     similarSongs.tracks.items.map((item,index) => {
// //         return(
// //             <div className="track" key={index}>
// //             <img className="my-top-five-album-cover" src={item.album.images[0].url}/>
// //             <div className="song-info">
// //                 <AudioPlayer 
// //                 preview={item.preview_url}
// //                 />
    
// //                 <div className="top-track">
// //                     <li>{item.name}</li>
// //                     <li>{item.artists[0].name}</li>
// //                 </div>
// //             </div>
    
// //         </div>

// //         )
// //     })
 


// // )

//     return(
//         <div className="page">
//             {/* <h1>Hi, {user.firstName}!</h1> */}
//                 {/* <div className="top-five-container">
//                     <p>My top five songs</p>
//                         {user && displayTopSongs}
//                 </div> */}


//                 <div className="general-container">
//                     <div className="title-refresh">
//                         <p>Recommendations for {topSongs[0].name}</p>
//                         <div className="refresh-icon" onClick={getRecs}>
//                             <RiRefreshFill className="icon"/>
//                         </div>
//                     </div>
//                     <div className="display-container">
//                         {recs ? recommendations : loadingDisplay}
//                     </div>
//                 </div>


//                 <div className="general-container">
//                     <p>Friend Recommendations</p>
//                     <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
//                         {userList ? userDisplay : loadingPeople} 
//                     </div>
//                 </div>
                

//             {/* <p>Here are some cool artists you might like</p>
//             <div className="top-tracks-container">
//                 {similarArtists && topArtists}
//             </div> */}
            


//         </div>
//     )
// }