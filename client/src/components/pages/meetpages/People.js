import axios from "axios"
import React, { useEffect, useState } from "react"

export default function People(){

    const [userList, setUserList] = useState(null)


    useEffect(() => {
        const getUsers = async() => {
            try{
                const res = await axios.get("http://localhost:3001/users")            
                setUserList(res.data)
                console.log(userList)


            }
            catch(error){
                console.log(error)
            }
        }

      getUsers()
      }, [])




    const userDisplay = userList?.map(user => {
        <div>
            {user.country}
        </div>
    })

    return(
        <div>
            {userDisplay}
        </div>
    )
}