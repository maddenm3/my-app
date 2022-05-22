import React, { useContext } from "react"
import { UserContext } from "../../../UserContext"
import '@splidejs/splide/dist/css/splide.min.css';


export default function Home(){
    const user = useContext(UserContext)

    return(
      
        <div className="homepage">
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
