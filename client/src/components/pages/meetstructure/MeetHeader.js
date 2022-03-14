import React, { useContext } from "react"
import {Link, NavLink } from "react-router-dom"
import { UserContext } from "../../../UserContext"
import { RiDashboardLine } from "react-icons/ri"
import {FiHeadphones} from "react-icons/fi"
import {IoIosPeople } from "react-icons/io"
import {RiEqualizerLine} from "react-icons/ri"
import {MdRecommend } from "react-icons/md"
import {ImSearch} from "react-icons/im"


export default function MeetHeader(props){

    const user = useContext(UserContext)

    const searchStyle = {
        marginLeft: "-30px",
        color: "#FC3F93"

    }

    return(
        <div className="meet-header">
        {/* <div className="welcome-tag">
                <img className="meet-header-photo" src={props.profilePhoto} alt=""/>{props.name}
            </div> */}
            <div className="search"> 
                <input placeholder="Search" type="text"/>
                <ImSearch style={searchStyle}/>
            </div>

            <div className="meet-selections">
                <div className="nav"><NavLink to="/*" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"} end><RiDashboardLine />Home</NavLink></div>
                <div className="nav"><NavLink to="/*/songs" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><FiHeadphones />Songs</NavLink></div>
                <div className="nav"><NavLink to="/*/people" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><IoIosPeople />People</NavLink></div>
                <div className="nav"><NavLink to="/*/match" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><RiEqualizerLine />Match</NavLink></div>
                <div className="nav"><NavLink to="/*/recs" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><MdRecommend />Recs</NavLink></div>

        </div>
        <div> 
        <NavLink to="/*/my-profile" className={({isActive}) => isActive ? "welcome-tag-selected" : "welcome-tag"}>
            <img className="meet-header-photo" src={user.profilePhoto} alt=""/>{user.firstName}
        </NavLink>
        </div>
        </div>
    )
}