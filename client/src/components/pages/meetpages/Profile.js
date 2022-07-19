import React, { useContext, useState, useEffect } from "react"
import AudioPlayer from "../meetstructure/AudioPlayer"
import { useParams } from "react-router-dom"
import { UserContext } from "../../../UserContext"
import findUser from "../../../axios-api"
import io from "socket.io-client"
import BsCheckAll from "react-icons/bs"
import axios from "axios"


export default function Profile(){
    const [otherUser, setOtherUser] = useState(null)
    const [isFollowing, setIsFollowing] = useState(false)
    const [socketOn, setSocketOn] = useState(false)
    const [message, setMessage] = useState("")
    const [messageSent, setMessageSent] = useState(false)
    const [messageReceived, setMessageReceived] = useState("")
    const [room, setRoom] = useState("")
    
    const { id } = useParams()
    const user = useContext(UserContext)
    const email = user.email
    // const socket = io.connect("http://localhost:3001")
    const roomNum = id+user.id


    // const sendMessage = () => {
    //     setRoom(roomNum)
    //     console.log(room)

    //     socket.emit("send_message", {message})
    //     socket.emit("join_room", {room})
    //     if(message!=""){
    //         setMessageSent(true)
    //         console.log("message sent!")
    //     }
    //     setMessage("")
        
    // }
    // const receiveMessage = () => {
    //     socket.emit("receive_message", {data})
    // }


    useEffect(()=>{
        const timeId = setTimeout(()=>{
            setMessageSent(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, [message])

    // useEffect(()=>{
    //     socket.on("receive_message", (data) => {
    //         setMessageReceived(data.message)
    //         console.log(messageReceived)
    //     })
        
    // },[socket])


    const getUser = async() => {
        try{
            const response = await findUser.get(`/users/${id}`)
            const data = response.data
            setOtherUser(data)

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
  

    const HandleFollowButton = async () => {
        setIsFollowing(!isFollowing)
        try{
                await findUser.post('/users', {
                email: "mikedamadmanmadden11@yahoo.com",
                following: "jjjjjjjjjjjj"
            })
            console.log(user.email)

        
        } catch(e){
            console.log(e)
        }

    }


    return(
        
        <div>
            {otherUser && 
            <div className="profile-page">
                <div className="profile"> 
                <img src={otherUser.photo} className="profile-photo" alt=""/>
                <div className="user-info">
                    <h1>{otherUser.name}</h1>
                    <div className="profile-from-follow">
                        <p>From {otherUser.country=="US" ? "USA" : otherUser.country}</p>
                        {/* <div className="follow-chat-buttons">
                            <p className={isFollowing ? "follow-button-selected" : "follow-button"} onClick={HandleFollowButton}>{isFollowing ? "Following": "Follow"} </p>
                        </div> */}
                    </div>
                </div>
                </div>
                      <div className="profile-container">
                            <div className="track">
                            <h1>{otherUser.name}'s Top Song</h1>                        
                                    <img className="my-top-five-album-cover" src={otherUser.topTrack?.albumCover}/>
                                    <div className="song-info">
                                        <AudioPlayer 
                                        preview={otherUser.topTrack?.preview}
                                        songName={otherUser.topTrack?.song}
                                        artist={otherUser.topTrack?.artist}
                                        />
                                    </div>
                                </div>
                                <div className="top-artist">
                                    <h1>{otherUser.name}'s Top Artist</h1>
                                    <img className="my-top-five-album-cover" src={otherUser.artistImage}/>
                                    <li>{otherUser.artist}</li>
                                </div>
                                <div>
                                    <h1>{otherUser.name}'s Top Genres</h1> 
                                    <div className="genre-tag">{otherUser.genre[0]}</div>
                                    <div className="genre-tag">{otherUser.genre[1]}</div>
                                </div>
                    </div>
                    {/* <div className="profile-chat">
                        
                        <h1>Send {otherUser.name} a message</h1>
                        
                        <div>
                            <input placeholder="Recommend a song" value={message} onChange={(e) => {
                                setMessage(e.target.value)}}/>
                                <button onClick={sendMessage} className="send-button">Send</button>
                            
                        </div>
                        {messageSent &&
                            <h1>Message sent!</h1>}
                            <div>
                                {messageReceived}
                                </div>
                    
                        
                    </div> */}

             </div>
}
        </div>
    )
}