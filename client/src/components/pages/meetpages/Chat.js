import React, { useEffect, useState } from "react"
import { UserContext } from "../../../UserContext"
import {NavLink } from "react-router-dom"
import findUser from "../../../axios-api"
import { is } from "express/lib/request"
import inbox from "../../../axios-api"

export default function Chat(){
    
    const [contacts, setContacts] = useState("")
    
    const [userList, setUserList] = useState(null)

    const getUsers = async () => {
        try{
            const response = await findUser.get('/users')
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
       <div key={user._id} className="chat-contact">
           <img className="chat-photo" src={user.photo} alt=""/>
            <div className="user-name-country">
            {/* <NavLink to={`/profile/${user._id}`} className="nav-link"> */}
                    <li>{user.name}</li></div>
                {/* </NavLink> */}

        </div>
       )
    }
    )



    // const getInbox = async () => {
    //     const response = await inbox.get('/inbox')
    //     const data = response.data
    //     console.log(data)
    //     setContacts(data)
    // }

    // useEffect(() => {

    //     let isTrue = true

    //     if(isTrue){
    //         getInbox()
    //     }

    //     return () => {
    //         isTrue = false
    //     }
    // })

    return(
        <div className="page">
            <div className="general-container">
                <div className="general-container-title">
                    <p>Online Now</p>
                </div>
                <div className={(userList && userList.length<5) ? "left-container" : "display-container"}>
                    {userList ? userDisplay : "Loading"} 
                </div>
            </div>
        </div>
    )
}