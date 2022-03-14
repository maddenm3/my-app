import React from "react"

export default function InputBar(props){
    return(
    <div className="input-bar">
        <input 
        type ="text" 
        placeholder="Type something" 
        className="text-input-bar" 
        onChange={props.GetCustomMessage}
        onKeyPress={props.PressEnter} 
        ></input>
        <div className="send-button" onClick={props.HandleEnter}>Send</div>
    </div>

    )
}