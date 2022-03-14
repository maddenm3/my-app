import React from "react"
import Card from "../subcomponents/Card"
import userData from "../subcomponents/userData"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Match from "./meetpages/Match"
import MeetBody from "./meetstructure/MeetBody"
import MeetHeader from "./meetstructure/MeetHeader"

export default function Meet(){

    return(
        <div>
            <div>
                <MeetHeader 
                    />
            </div>
            <div>
                <MeetBody />
            </div>
        </div>
    )
}