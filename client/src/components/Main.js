import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"
import Chat from "../components/pages/Chat"
import Cafe from "../components/pages/Cafe"
import Meet from "../components/pages/Meet"
import MyProfile from "../components/pages/meetpages/MyProfile"
import Match from "../components/pages/meetpages/Match"
import Songs from "../components/pages/meetpages/Songs"
import People from "../components/pages/meetpages/People"
import Home from "./pages/meetpages/Home"
import Recs from "../components/pages/meetpages/Recs"
import Search from "../components/pages/meetpages/Search"
import Profile from "../components/pages/meetpages/Profile"
import Culture from "../components/pages/meetpages/Culture"

import { UserContext } from "../UserContext"
import LandingPage from "./pages/LandingPage"


export default function Main(props){
    const [myPlayButton, setMyPlayButton] = React.useState(true)
    const user = useContext(UserContext)

    return(
        
        <Routes>

            {/* <Route path="/" element={<Home />} /> */}
            <Route index element={<Home />} />
            <Route path="/songs" element={<Songs />}/>
            <Route path="/people" element={<People />} />
            <Route path="/profile/:id" element={<Profile />}/>

                {/* <Route path="/" element={<Home />}/>
                <Route path="/songs" element={<Songs />}/>
                <Route path="/people" element={<People />}/>
                <Route path="/profile/:id" element={<Profile />}/>
                 */}

                {/* <Route path="/match" element={<Match />}/>
                <Route path="/recs" element={<Recs />}/>
                <Route path="/culture" element={<Culture />}/> */}

                


        {/* <Route path="/chat" element={<Chat />} /> */}
        {/* <Route path="/cafe" element={<Cafe />} /> */}
        <Route path="/my-profile" element={<MyProfile />}/>

    </Routes>
        
        
      
    )
}