import axios from "axios"

export default axios.create({
    baseURL: process.env.REACT_APP_URL || "https://starfish-app-fyqbg.ondigitalocean.app",
    headers:{
        "Content-type": "application/json"
    }
})