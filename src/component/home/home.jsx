import React from 'react'
import "./Home.css"
import Logo from "../../assets/LogoBlack.png"
import {BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"


const Connect = () => {
  return (
    <div className='header__connect'>
      <a href = "https://github.com/MobileGamer-hq" className='btn'>Github</a>
      <a href = "https://stackoverflow.com/users/14579401/mobilegamer" className='btn btn-primary'>StackOverflow</a>
    </div>
  )
}

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.instagram.com/somto2007/' target= "_blank"><BsInstagram/></a>
      <a href='https://twitter.com/SomtochukwuDuru' target= "_blank"><BsTwitter/></a>
      <a href='https://www.youtube.com/channel/UCvSMyEi2iMOkz10ae9kaY7Q' target= "_blank"><BsYoutube/></a>
    </div>
  )
}


const Home = () => {
  return (
      <header>
        <div className= "container header__container">
          <h5>Hello I'm</h5>
          <h1>Somto Duru</h1>
          <h5 className= "text-light">Software Developer</h5>

          <Connect/>
          <Socials/>

            <div className="profile-image">
                <img src = {Logo} className= "image"/>
            </div>

          <a href='#projects' className='scroll__down'>Scroll Down</a>

        </div>
      </header>
  )
}

export default Home
