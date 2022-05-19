import axios from "axios"
import React, {useRef, useState, useEffect} from "react"
import Playlist from "./../learnpages/Playlists"

export default function Culture(){
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(null)
    const [playlist, setPlaylist] = useState(null)

    const langRef = useRef()

    const HandleClick = (e) => {
        const val = e.target.value
        setActive(true)
        setValue(val)
        console.log(value)
    }

    const getPlaylist = async() => {
        try{
            const data = await axios.get(`/playlists/${(Playlist.id == value) && Playlist.p1.id}`)
            setPlaylist(data.data.tracks.items)
        }
        catch(e){
            console.log(e)
        }

    }

    useEffect(() => {

        let isCancelled = false

        if (!isCancelled){
            getPlaylist()
        }

        return () => {
            isCancelled = true
        }


    }, [value])



    return(
        <div className="learn-page">
                <div className="language-selections">
                    <button value="English" className={active ? "language-tag-selected" : "language-tag"} onClick={HandleClick}>USA</button> 
                    <button value="Chinese" className="language-tag" onClick={HandleClick}>China</button> 
                    <button value="French" className="language-tag" onClick={HandleClick}>France</button> 
                    <button value="Spanish" className="language-tag" onClick={HandleClick}>Spain</button> 
                    <button value="English" className="language-tag" onClick={HandleClick}>English</button> 
                    <button value="Chinese" className="language-tag" onClick={HandleClick}>Chinese</button> 
                    <button value="French" className="language-tag" onClick={HandleClick}>French</button> 
                    <button value="Spanish" className="language-tag" onClick={HandleClick}>Spanish</button> 
                    <button value="English" className="language-tag" onClick={HandleClick}>English</button> 
                    <button value="Chinese" className="language-tag" onClick={HandleClick}>Chinese</button> 
                    <button value="French" className="language-tag" onClick={HandleClick}>French</button> 
                    <button value="Spanish" className="language-tag" onClick={HandleClick}>Spanish</button> 
                </div>

            <div className="playlist-wrapper">
                {Playlist.map((language, index) => {
                    return(
                        <div key={index}>
                        {(language.id == value) &&
                        <div className="language-container">
                            <div className="playlist-container">
                                <h4>{language.p1.name}</h4>
                                {language.p1.id}
                                </div>
                                <div className="playlist-container">
                                <h4>{language.p2.name}</h4>
                                {language.p2.id}
                                <p>{playlist && playlist.name}</p>
                                {playlist && (playlist.splice(0,5).map((song,index) => {
                                    return(
                                        <div key={index}>
                                        {song.track.name}
                                        </div>
                                    )
                                }))}

                                </div>
                        </div>
                        }
                        </div>
                    )
                })}

            </div>

            <div className="centering-div">
            </div>

        </div>
    )
}