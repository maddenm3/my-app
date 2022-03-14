import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import myContacts from "./myContacts"


export default function ContactDisplay(props){
    return(

        <Splide  
        options={{
            rewind: false,
            gap: '.5rem',
            width: 300,
            height: 80,
            padding: 50,
            autoWidth: true,
            pagination: false
        }}
        >
            {myContacts.map(contact => (
                <SplideSlide
                key={contact.id}>
            <div className="chat-contact">
                <div className="user-info">
                    <img className="user-pic" src={props.profilePhoto} alt=""/>
                    <div>{props.name}</div>
            </div>
            </div>
            </SplideSlide>
    
            ))}
            
        </Splide>
       
    )
}