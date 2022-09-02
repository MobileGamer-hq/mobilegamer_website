import React from 'react'
import {BsYoutube, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#" className="footer__logo">Mobile Gamer</a>

            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>


            <div className="footer__socials">
                <a href="https://www.instagram.com/somto2007/"><BsInstagram/></a>
                <a href="https://twitter.com/SomtochukwuDuru"><BsTwitter/></a>
                <a href="https://www.youtube.com/channel/UCvSMyEi2iMOkz10ae9kaY7Q"><BsYoutube/></a>
            </div>
        </footer>
    )
}

export default Footer
