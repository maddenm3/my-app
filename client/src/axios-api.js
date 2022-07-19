import axios from "axios"

const db = process.env.REACT_APP_DB || "https://melodymeet.com"


export default axios.create({
    baseURL: "https://melodymeet.com",
    headers:{
        "Content-type": "application/json"
    }
})