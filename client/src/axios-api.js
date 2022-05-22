import axios from "axios"

export default axios.create({
    baseURL: process.env.REACT_APP_URL || "http://localhost:3001/users",
    headers:{
        "Content-type": "application/json"
    }
})