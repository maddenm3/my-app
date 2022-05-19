// import React, { useContext, useEffect, useState } from "react"
// import { UserContext } from "../../../UserContext"
// import { ImSearch } from "react-icons/im"
// import axios from "axios"
// import AudioPlayer from "../meetstructure/AudioPlayer"
// import {NavLink } from "react-router-dom"


// export default function Search(){
//     const [query, setQuery] = useState("")
//     const [results, setResults] = useState("")
//     const [peopleResults, setPeopleResults] = useState(null)
//     const [errorMessage, setErrorMessage] = useState(null)


//     const user = useContext(UserContext)
//     const searchStyle = {
//         color: "#FC3F93",
//         fontSize: "20px"
//     }
    

//     const HandleSearch = async() => {
//         try{
//             const response = await axios.get(`/search?q=${query}&type=artist,track`)
            
//             const peopleResponse = await axios.get('http://localhost:3001/users')
//             setPeopleResults(peopleResponse.data)
//             setResults(response.data)

//         } catch(error){
//             console.log(error)
//             setErrorMessage(error)

//         }
//     }

//     useEffect(() => {

//         let isCancelled = false
        
//         if(query && !isCancelled){
//             HandleSearch()
//         }

//         return () => {
//             isCancelled = true
//         }

    
//     }, [query])

//     const searchContainer = 
//     (
//         results &&
//         <div className="search-container">
//         <div className="search-results">
//             <img className="album-cover" src={results && results.artists.items[0].images[0].url} /> 
//             <div className="search-result-intro">
//                 <h1>{results && results.artists.items[0].name}</h1>
//                 <p>Popularity: {results && results.artists.items[0].popularity}/100</p>
//                 <div className="genres">
//                     {results && results.artists.items[0].genres?.map(genre => {
//                         return(
//                             <p className="genre-tag">{genre}</p>
//                         )
//                     })}
//                 </div>
//             </div>
//             </div>
// <div className="results-container">
//     <div className="track-results-container">
//         <div className="search-result-tracks">
//             <h4>Top Tracks by {results.artists.items[0].name}</h4>
//             {(results) && results.tracks.items?.map(track => {
//                 return(
//                     (results.artists.items[0].name == track.artists[0].name &&
//                     <div className="search-track-info">
//                         {track.preview_url &&
//                         <AudioPlayer 
//                         preview={track.preview_url}/>}
//                         <div className="search-track">
//                             <li>{track.name}</li>
//                             <li>{track.artists[0].name}</li>
//                         </div>
//                     </div>
//                     )
//                 )
//             })}
//         </div>
//         <div className="search-result-tracks">
//             <h4>Others</h4>
//             {(results) && results.tracks.items?.map(track => {
//                 return(
//                     ((results.artists.items[0].name != track.artists[0].name) &&
//                     <div className="search-track-info">
//                         {track.preview_url &&
//                         <AudioPlayer 
//                         preview={track.preview_url}/>}
//                        <div className="search-track">
//                             <li>{track.name}</li>
//                             <li>{track.artists[0].name}</li>
//                         </div>

//                     </div>
//                     )
//                 )
//             })}
//         </div>
//         </div>
//         <div className="people-results-container">
//             <h4>People on Melody Meet</h4>
//             {peopleResults && peopleResults.map((user, index) => {
//                 return(
//                 <NavLink to={`/*/profile/${user._id}`} key={index} className="user-tag">

//                     <div className="profile-tag">

//                         <img src={user.photo} className="meet-header-photo"/>
//                         <p className="user-tag">{user.name}</p>
//                     </div>
//                 </NavLink>
//             )})}


            
//         </div>

//     </div> 
//     </div>
//     )


//     return(
//         <div className="search-page">
//             <div className="search-bar">
//                 <input 
//                 type="text" 
//                 // value={query}
//                 onChange={e => setQuery(e.target.value)} 
//                 autoFocus 
//                 placeholder="Search songs, people, and more"
//                 />

//                 <button className="search-enter"><ImSearch style={searchStyle}/></button>
//             </div>
//             {errorMessage ? 
//             <h3>No results found</h3> :
//             <div>{searchContainer}</div>
//             }
 

//         </div>
//     )
// }