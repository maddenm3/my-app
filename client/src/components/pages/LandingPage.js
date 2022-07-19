import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"
import logo from "./../../tablogo2.svg"
import url from "../../axios-api"
import { Link } from "react-router-dom"


export default function LandingPage(){


    const getLogin = async () => {
        try{
            await url.get('/login')
        }
        catch(e){
            console.log(e)
        }
    }

    const login = 'https://melodymeet.com/login'

    return(
        <div className="landing-page">
                <img src={logo} className="logo" />
                <h1 className="text-logo">Melody<b>Meet</b></h1>
                <p>Meet your next favorite song</p>
                <a href={login} className="connect-spotify">Login with Spotify</a>           
        </div>
    )
}