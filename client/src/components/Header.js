import React, { useContext } from "react"
import { logout } from "../spotify"
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import { FaRegHandshake } from "react-icons/fa"
import { BsChat } from "react-icons/bs"
import { MdOutlineLocalCafe } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"
import logo from "./subcomponents/Logo.jpg"
import { UserContext } from "../UserContext"
import Logo from "./../../public"

export default function Header(props){

    const user = useContext(UserContext)


    return(
        <div className="header">
            <h6>Melody<b>Meet</b></h6>
            {/* <img src={logo} className="logo" alt="" /> */}
        
            <div className="sidebar">
                        <div><NavLink to="/*" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><FaRegHandshake/></NavLink></div>
                        <div><NavLink to="/chat" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><BsChat/></NavLink></div>
                        {/* <div><NavLink to="/cafe" className={({isActive}) => isActive ? "sidenav-selected" : "sidenav" }><MdOutlineLocalCafe/></NavLink></div> */}
                        <div> 
        <NavLink to="/my-profile" className={({isActive}) => isActive ? "profile-tag-selected" : "profile-tag"}>
            <img className="header-profile" src={user.profilePhoto} alt=""/>
        </NavLink>
        </div>
            </div>

            <h6 className="text-logo">About</h6>

                
        </div>
    )
}
