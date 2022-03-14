import React from "react"
import {profile} from "./myData"

export default function DisplayMessages(props){
    return(
        <div>
            {props.messagesArray.map(message => (
                <div>
                <div className="chat-box-message">{message}</div>
                <div className="user-info-message">
                        <img className="user-pic-message" src={profile[0].userPic} alt=""/>
                        <div>{profile[0].name}</div>
                    </div>
                </div>
            ))}
        </div>

    )
}