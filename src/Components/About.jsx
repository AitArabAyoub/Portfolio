import React, { useContext } from 'react'
import aboutAnimation from "../../public/about.json"
import Lottie from 'lottie-react'
import { ThemeContext } from '../App'
function About() {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="container px-5" id='about'>
            <h2 class={"text-center " + (theme == "light" ? "text-dark" :  "text-white")}>About Us</h2>
            <div className='row'>
                <div className="col-12 col-lg-6">
                    <h3 className={(theme == "light" ? "text-dark" :  "text-white")}>Hi I,m Ayoub</h3>
                    <p class={(theme == "light" ? "text-dark" :"text-white")}>
                    Hi, I am Ayoub Ait Arab, a dedicated Front-End Developer specializing in crafting responsive and visually stunning websites. My expertise lies in transforming complex concepts into intuitive and user-friendly interfaces. With a solid foundation in HTML5, CSS3, and JavaScript, and hands-on experience with React, Next.js, and TypeScript, I create seamless and dynamic web experiences. I also leverage tools like Redux Toolkit, React Router DOM, Bootstrap, and Tailwind to ensure high-performance and aesthetically pleasing results. My goal is to help businesses enhance their online presence and connect with more customers effectively
                    </p>
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <Lottie animationData={aboutAnimation} style={{height : "300px"}}/>
                </div>
            </div>
        </div>
    )
}

export default About
