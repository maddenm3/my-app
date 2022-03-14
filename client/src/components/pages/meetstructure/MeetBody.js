import React from "react"
import Match from "../meetpages/Match"
import Songs from "../meetpages/Songs"
import People from "../meetpages/People"
import All from "../meetpages/All"
import Recs from "../meetpages/Recs"
import MyProfile from "../meetpages/MyProfile"
import { Outlet } from "react-router-dom"

export default function MeetBody(){
    return(
        <div>
            <Outlet />
        </div>
    )
}