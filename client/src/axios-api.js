import axios from "axios"

const db = process.env.REACT_APP_DB || "https://starfish-app-fyqbg.ondigitalocean.app"


export default axios.create({
    baseURL: "http://localhost:3001",
    headers:{
        "Content-type": "application/json"
    }
})