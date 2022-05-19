import React, { useContext } from "react"
import {Link, NavLink } from "react-router-dom"
import { UserContext } from "../../../UserContext"
import { RiDashboardLine } from "react-icons/ri"
import {FiHeadphones} from "react-icons/fi"
import {IoIosPeople } from "react-icons/io"
import {RiEqualizerLine} from "react-icons/ri"
import {MdRecommend } from "react-icons/md"
import {BiWorld} from "react-icons/bi"



export default function MeetHeader(props){

    const user = useContext(UserContext)

    const searchStyle = {
        marginLeft: "10px",
        color: "#FC3F93"

    }

    return(
        <div className="meet-header">
            {
            /* <div> 
                <NavLink to="/*search" className={({isActive}) => isActive ? "search-selected" : "search"}>
                Search
                <ImSearch style={searchStyle}/>
                </NavLink>
            </div> */
            }

            <div className="meet-selections">
                <div className="nav"><NavLink to="/*" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"} end><RiDashboardLine />Home</NavLink></div>
                <div className="nav"><NavLink to="/*/songs" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><FiHeadphones />Songs</NavLink></div>
                <div className="nav"><NavLink to="/*/people" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><IoIosPeople />People</NavLink></div>
                {/* <div className="nav"><NavLink to="/match" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><RiEqualizerLine />Match</NavLink></div>
                <div className="nav"><NavLink to="/recs" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><MdRecommend />Recs</NavLink></div>
                <div className="nav"><NavLink to="/culture" className={({isActive}) => isActive ? "link-meet-selected" : "link-meet"}><BiWorld />Culture</NavLink></div> */}


        </div>
        </div>
    )
}