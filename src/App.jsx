import React from 'react'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Navigation from './component/Navigation/Navigation'
import Projects from './component/Projects/Projects'


const App = () => {
    return (
        <>
            <Home/>
            <Navigation/>
            <About/>
            <Experience/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App
