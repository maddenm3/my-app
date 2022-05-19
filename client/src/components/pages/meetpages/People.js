import axios from "axios"
import React, { useEffect, useState } from "react"
import {NavLink } from "react-router-dom"



export default function People(){

    const [userList, setUserList] = useState([])

    const getUsers = async () => {
        try{
            const response = await axios.get("http://localhost:3001/users")
            const data = response.data
            setUserList(data)

        }
        catch (error){
            console.log(error)
        }
    }


    useEffect(() => {

        let isCancelled=false
        if(!isCancelled){
            getUsers()
        }

        return ()=>{
            isCancelled=true
        }
        

    }, [])




    const userDisplay = userList?.map((user) => {
         
       return(
        user.email!=null &&
       <div key={user._id}>
           <img className="profile-photo" src={user.photo} alt=""/>
            <div className="user-name-country">
            <NavLink to={`/profile/${user._id}`} className="nav-link">
                <div className="user-tag">
                    <li>{user.name}</li></div>
                </NavLink>
            </div>

        </div>
       )
    })

    const loadingDisplay = (
        <div className="display-container">
            {[0,1,2,3,4,5,6,7,8,9].map((i, index) => {
                return(
                    <div key={index}>
                        <li className="user-tag-loading"></li>
                        <img className="loading-album-cover" alt=""/>
                        <div className="top-track">
                            <li className="loading-tag"></li>
                        </div>
                    </div>
                )
            }
    
            )
    }
        </div>
    )

    const loadingPeople = (
        <div className="display-container">
            {[0,1,2,3,4,5,6,7,8,9].map((i, index) => {
                return(
                    <div key={index}>
                        <img className="profile-photo"/>
                        <div className="user-name-country">
                            <li className="loading-tag"></li>
                        </div>
                    </div>
                )
            }
    
            )
    }
        </div>
    )
    
    return(
        <div className="page">
            <div className="general-container">
                <div className="general-container-title">
                    <p>Top People</p>
                </div>
                <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
                    {userList ? userDisplay : loadingPeople} 
                </div>
            </div>
        </div>
    )
}