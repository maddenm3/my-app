import React, { useContext } from "react"
import { UserContext } from "../../../UserContext"

export default function Recs(){

    const user = useContext(UserContext)

    return(
        <div>
            Recs!
        </div>
    )
}