import React, { useContext } from "react"
import Card from "./subcomponents/Card"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Chat from "../components/pages/Chat"
import Cafe from "../components/pages/Cafe"
import Meet from "../components/pages/Meet"
import MyProfile from "../components/pages/meetpages/MyProfile"
import Match from "../components/pages/meetpages/Match"
import Songs from "../components/pages/meetpages/Songs"
import People from "../components/pages/meetpages/People"
import All from "../components/pages/meetpages/All"
import Recs from "../components/pages/meetpages/Recs"
import { UserContext } from "../UserContext"


export default function Main(props){
    const [myPlayButton, setMyPlayButton] = React.useState(true)
    const msg = useContext(UserContext)

    return(
        <Routes>
            <Route path="/*" element={<Meet />} >
                <Route path="*/" element={<All />}/>
                <Route path="*/songs" element={<Songs />}/>
                <Route path="*/people" element={<People />}/>
                <Route path="*/match" element={<Match />}/>
                <Route path="*/recs" element={<Recs />}/>
                <Route path="*/my-profile" element={<MyProfile />}/>


            </Route>
            <Route path="/chat" element={<Chat />} />
            <Route path="/cafe" element={<Cafe />} />

        </Routes>
      
    )
}