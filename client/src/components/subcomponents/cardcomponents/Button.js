import { process_params } from "express/lib/router"
import React, { useContext } from "react"
import { UserContext } from "../../../UserContext"


export default function Button(props){

    const user = useContext(UserContext)

    return(
        <div>
            <button className="button"
                onClick={user.HandleChangeSong}
               >
                    Change Song
                </button>
        </div>

    )
}
