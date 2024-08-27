import React , {useContext} from 'react'
import laptopAnimation from "../../public/laptop.json"
import Lottie from 'lottie-react'
import {ThemeContext} from "../App"
function Hero() {
    const {theme} = useContext(ThemeContext) 
    return (
        <div className='container Hero pt-5 px-5'> 
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1 class={"my-3 " +  (theme === "light" ? "text-dark" : "text-white")}>Front End Developer</h1>
                    <p class={"mb-2 lh-lg " + (theme == "light" ? "text-dark" : "text-white" )}>
                        Hi, I'm Ayoub Ait Arab, a Front-End Developer based in Morocco. I specialize in creating innovative and user-centric web technologies that empower individuals to navigate and interact with the web on their own terms. My mission is to develop engaging, accessible, and responsive web solutions that enhance the online experience for everyone
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/AitArabAyoub" className="btn btn-dark  ">
                        <i className="bi bi-github"></i>
                    </a>
                </div>
                <div className="d-none d-lg-block col-6">
                    <Lottie animationData={laptopAnimation}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
