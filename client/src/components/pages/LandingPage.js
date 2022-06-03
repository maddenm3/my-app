import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"
import logo from "./../../tablogo2.svg"
import url from "../../axios-api"


export default function LandingPage(){


    const getLogin = async () => {
        try{
            await url.get('/login')
        }
        catch(e){
            console.log(e)
        }
    }

    return(
        <div className="landing-page">
                <img src={logo} className="logo" />
                <h1 className="text-logo">Melody<b>Meet</b></h1>
                <p>Meet your next favorite song</p>
                <a href='https://starfish-app-fyqbg.ondigitalocean.app/login' className="connect-spotify">Login with Spotify</a>           
        </div>
    )
}