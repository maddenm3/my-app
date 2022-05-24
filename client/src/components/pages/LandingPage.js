import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"
import logo from "./../../tablogo2.svg"


export default function LandingPage(){


    return(
        <div className="landing-page">
                <img src={logo} className="logo" />
                <h1 className="text-logo">Melody<b>Meet</b></h1>
                <p>Meet your next favorite song</p>
                <a href="/login" className="connect-spotify">Login with Spotify</a>           

        </div>
    )
}