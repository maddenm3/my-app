import React, { useContext } from "react"
import { UserContext } from "../../../UserContext"

export default function Songs(){

    const user = useContext(UserContext)

    return(
        <div>
            All!
        </div>
    )
}