import React from "react"
import fixedMessages from "./fixedMessages"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

export default function fixedMessageSlider(props){
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

                {fixedMessages.map(message => (
                <SplideSlide
                key={message.id}>
                    <input 
                    onClick={props.HandleSendFixedMessage}
                    value={message.message}
                    class="fixed-message"
                    />
                </SplideSlide>

            
            ))}
            

        </Splide>

    )
}