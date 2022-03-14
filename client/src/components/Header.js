import React, { useContext } from "react"
import { logout } from "../spotify"
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import { FaRegHandshake } from "react-icons/fa"
import { BsChat } from "react-icons/bs"
import { MdOutlineLocalCafe } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"
import logo from "./subcomponents/Logo.jpg"
import { UserContext } from "../UserContext"
 
export default function Header(props){

    const user = useContext(UserContext)

    const style = { color:"FC3F93", marginRight:"8px"}

    return(
        <div className="header">
            <img src={logo} className="logo" alt="" />
            {!user.token ? 
                <a href="http://localhost:3001/login" className="connect-spotify">Login with Spotify</a>
            : 
            <div className="sidebar">
                        <div><NavLink to="/*" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><FaRegHandshake  style={style}/>Meet</NavLink></div>
                        <div><NavLink to="/chat" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><BsChat style={style}/>Chat</NavLink></div>
                        <div><NavLink to="/cafe" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><MdOutlineLocalCafe style={style}/>Cafe</NavLink></div>
                        
            </div>}
                
        </div>
    )
}
