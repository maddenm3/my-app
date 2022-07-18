import React, { useContext } from "react"
import { logout } from "../spotify"
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import { FaRegHandshake } from "react-icons/fa"
import { BsChat } from "react-icons/bs"
import { MdOutlineLocalCafe } from "react-icons/md"
import { MdLibraryMusic } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {FiHeadphones} from "react-icons/fi"
import {IoIosPeople } from "react-icons/io"
import {HiChatAlt} from "react-icons/hi"
import { UserContext } from "../UserContext"
import logo from "./../logo3.svg"

export default function Header(props){

    const user = useContext(UserContext)


    return(
        <div className="header">
            <div className="header-logo">
            <div><NavLink to="/"><img src={logo} className="logo"/></NavLink></div>
        
            </div>
            <div className="sidebar">
                        {/* <div><NavLink to="/" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><MdLibraryMusic/></NavLink></div> */}
                        {/* <div><NavLink to="/songs" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav"}><MdLibraryMusic /><p>Songs</p></NavLink></div> */}
                        <div><NavLink to="/discover" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav"}><IoIosPeople /><p>Discover</p></NavLink></div>
                        {/* <div><NavLink to="/chat" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav"}><HiChatAlt /><p>Chat</p></NavLink></div> */}

                        {/* <div><NavLink to="/cafe" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><MdOutlineLocalCafe/></NavLink></div> */}
                        <div> 
                        <NavLink to="/my-profile" className={({isActive}) => isActive ? "profile-tag-selected" : "profile-tag"}>
                            {user.profilePhoto ? <img className="header-profile" src={user.profilePhoto} alt=""/> : <CgProfile/>}
                            <p>Profile</p>
                        </NavLink>
                        </div>
            </div>  
        </div>
    )
}
