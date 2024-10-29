import React, { useContext, useState } from 'react'
import Templates from '../Data/Templates'
import Card from './Card'
import { ThemeContext } from '../App'

function Main() {
    const [Tech,setTech] = useState("all")
    const [Temps,setTemps] = useState(Templates)
    const {theme} = useContext(ThemeContext)
    const handleClick = (arg)=>{
        if(arg !== "all"){
            setTemps(Templates.filter(el => el.tech === arg))
        }else{
            setTemps(Templates)
        }
        setTech(arg)
    }
    return (
        <div className='Main container px-5' id='projects'>
            <h2 class={"text-center " + (theme == "light" ? "text-dark" :  "text-white")}>Projects</h2>
            <div className="row">
                <div className="col-12 col-md-4">
                    <button 
                        className={'btn d-block mb-2 ' + (theme === "light" ? "btn-outline-dark" : " btn-outline-light " ) + (Tech === "all" ? " active" : "" )}
                        onClick = {()=>{handleClick("all")}}
                    >All Projects</button>
                    <button 
                        className={'btn d-block mb-2 ' + (theme === "light" ? "btn-outline-dark" : " btn-outline-light " ) + (Tech === "rc" ? " active" : "" )}
                        onClick = {()=>{handleClick("rc")}}
                        >React</button>
                    <button 
                        className={'btn d-block mb-2 ' + (theme === "light" ? "btn-outline-dark" : " btn-outline-light " ) + (Tech === "ts" ? " active" : "" )}
                        onClick = {()=>{handleClick("ts")}}
                        >React & TypeScript</button>
                    <button 
                        className={'btn d-block ' + (theme === "light" ? "btn-outline-dark" : " btn-outline-light " ) + (Tech === "nx" ? " active" : "" )}
                        onClick = {()=>{handleClick("nx")}}
                        >Next & TypeScript</button>
                </div>
                <div className="col-12 col-md-8">
                    <div className="row">
                    {
                        Temps.map(el =>{
                            return <Card project={el}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
