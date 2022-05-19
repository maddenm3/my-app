import React, { useContext, useState } from "react"
import { UserContext } from "../../../UserContext"

export default function Recs(){

    const user = useContext(UserContext)
    const [meActive, setMeActive] = useState(true)
    const [othersActive, setOthersActive] = useState(false)



    const HandleMeClick = () => {
        if(!meActive){
            setMeActive(true)
            setOthersActive(false)
        }
    }

    const HandleOthersClick = () => {
            setOthersActive(true)
            setMeActive(false)
        
    }


    return(
        <div className="rec-page">
            {/* <div className="rec-selections">
                <h3 className={meActive ? "rec-tag-active" : "rec-tag"} onClick={HandleMeClick}>Me</h3>
                <h3 className={othersActive ? "rec-tag-active" : "rec-tag"} onClick={HandleOthersClick}>Others</h3>
            </div> */}
            <div className="rec-body">

            {meActive ? 
                <div className="my-rec-request">
                    <div className="name-tag">
                        <img className="meet-header-photo" src={user.profilePhoto} alt=""/>
                        <div>{user.firstName}</div>
                    </div><br></br>
                    <div>I am really into <b className="genre-tag not-bold">{user.genre[0]}</b> lately.<br></br>
                    My #1 song right now is <b>{user.topTrack.song}</b> by <b>{user.topTrack.artist}</b>. <br></br>
                    Can you recommend a new song for me? </div>
                </div>
                :
                <div>
                    Others
                </div>
            }
            </div>
        </div>
    )
}