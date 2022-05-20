import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"
import MyProfile from "../components/pages/meetpages/MyProfile"
import Songs from "../components/pages/meetpages/Songs"
import People from "../components/pages/meetpages/People"
import Home from "./pages/meetpages/Home"
import Profile from "../components/pages/meetpages/Profile"

import { UserContext } from "../UserContext"
import LandingPage from "./pages/LandingPage"


export default function Main(props){
    const [myPlayButton, setMyPlayButton] = React.useState(true)
    const user = useContext(UserContext)

    return(
        
        <Routes>

            <Route index element={<Home />} />
            <Route path="/songs" element={<Songs />}/>
            <Route path="/people" element={<People />} />
            <Route path="/profile/:id" element={<Profile />}/>
            <Route path="/my-profile" element={<MyProfile />}/>

    </Routes>
        
        
      
    )
}