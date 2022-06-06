import axios from "axios"

export default axios.create({
    baseURL: "https://starfish-app-fyqbg.ondigitalocean.app",
    headers:{
        "Content-type": "application/json"
    }
})