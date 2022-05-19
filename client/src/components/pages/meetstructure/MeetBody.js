import React from "react"

import { Outlet } from "react-router-dom"

export default function MeetBody(){
    return(
        <div>
            <Outlet />
        </div>
    )
}