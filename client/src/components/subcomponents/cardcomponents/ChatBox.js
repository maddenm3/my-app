import React from "react"
import ContactDisplay from "./subcardcomponents/ContactDisplay"
import '@splidejs/splide/dist/css/splide.min.css';
import InputBar from "./subcardcomponents/InputBar";
import FixedMessageSlider from "./subcardcomponents/FixedMessageSlider"
import DisplayMessages from "./subcardcomponents/DisplayMessages";


export default function ChatBox(props){
    const [messagesArray, setMessagesArray] = React.useState([])
    const [customMessage, setCustomMessage] = React.useState({message:""})

    function HandleSendFixedMessage(event){
        const clickedMessage = event.target.value
        setMessagesArray(prevArray => [...prevArray, clickedMessage])
       
    }

    function GetCustomMessage(event){
        setCustomMessage(event.target.value)
    }

    function HandleEnter(){
        (setMessagesArray(prevArray => [...prevArray, customMessage]))
    }

    function PressEnter(event){
        (customMessage!=="") && event.key === 'Enter' && (setMessagesArray(prevArray => [...prevArray, customMessage]))
        event.key === 'Enter' && (event.target.value="")
        setCustomMessage("")
    }


    const messagesRef = React.useRef(null)
    const scrollToBottom = () => {
        messagesRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    React.useEffect(()=>{
        scrollToBottom()
    }, [messagesArray])


    return( 
        <div>
            <div className="card-status">
                {props.cardId===1 ? <ContactDisplay 
                name={props.name}
                profilePhoto={props.profilePhoto}
                /> :
                <h1>{props.name}</h1>}
            </div>

            <div className="chat-box">
                <div className="chat-area">
                    <DisplayMessages
                    messagesArray={messagesArray}
                    />
                    <div ref={messagesRef} />
                </div>

                
                    <FixedMessageSlider
                    HandleSendFixedMessage={HandleSendFixedMessage}
                    />
                    {props.vipStatus ? 
                    <InputBar
                    GetCustomMessage={GetCustomMessage}
                    HandleEnter={HandleEnter}
                    PressEnter={PressEnter}
                    /> :
                    <p>Upgrade to VIP to send custom messages</p>
                    }
            
            </div>
        </div>
    )
}