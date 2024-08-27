import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Header() {
    const {theme,setTheme} = useContext(ThemeContext)
    function toggleTheme() {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	}
    return (
        <nav class="navbar navbar-expand-lg pt-3">
            <div class="container px-5">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class={"navbar-nav  mb-2 mb-lg-0 mx-auto w-50 d-flex justify-content-around rounded-5 border shadow " + (theme === "light" ? "bg-white " : "bg-dark" )}>
                        <li class="nav-item text-center">
                            <a class={"nav-link " +(theme === "light" ? "text-dark"  : "text-white")} aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class={"nav-link " +(theme === "light" ? "text-dark"  : "text-white")} aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class={"nav-link " +(theme === "light" ? "text-dark"  : "text-white")} aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item text-center">
                            <a class={"nav-link " +(theme === "light" ? "text-dark"  : "text-white")} aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div class="" >
                    </div>
                </div>
                <button className=' rounded-5 py-2 px-3' onClick={toggleTheme}>
                    {
                        theme === "light"
                        ?
                            <i class="bi bi-moon-stars-fill"></i>
                        :
                            <i class="bi bi-sun"></i>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Header
