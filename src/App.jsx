import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/Header'
import Hero from './Components/Hero';
import { createContext, useEffect, useState } from 'react';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
export const ThemeContext = createContext(null)
function App() {
  // localStorage.clear()
  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	})
  function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}
  useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);
  useEffect(()=>{
    if(theme === "light"){
      document.body.classList.remove("bodydark")
      document.body.classList.add("bodylight")
    }else{
      document.body.classList.remove("bodylight")
      document.body.classList.add("bodydark")
    }
  },[theme])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={' container p-0 ' + (theme === "light" ? "light" : "dark")}>
        <Header/>
        <Hero/>
        <div className="divider my-3"></div>
        <Main/>
        <div className="divider my-3"></div>
        <About/>
        <div className="divider my-3"></div>
        <Contact/>
        <div className="divider my-3"></div>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
