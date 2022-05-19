import React from "react"
import { useLocation } from "react-router-dom"

export default function Chat(props){

    let location = useLocation()
    console.log(location.search)

    return(
        <div className="chat-page">
            <div className="chat-wrapper">
                <div className="contact-container">
                    <div className="search-contacts">
                    </div>
                    <div className="contact-box">
                    
                    </div>
                </div>
                <div className="chat-container">
                    <div className="chat-header">

                    </div>
                    <div className="chat-body">

                    </div>
                    <div className="chat-input">

                    </div>
                </div>

            </div>
        </div>
    )
}