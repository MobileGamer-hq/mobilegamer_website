import React from 'react'
import { useState } from 'react'
import {HiHome} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaBookOpen} from 'react-icons/fa'
import {BiCode} from 'react-icons/bi'
import "./Navigation.css"

const Navigation = () => {

  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><HiHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className = {activeNav === "#about" ? "active" : ""}><BsFillPersonFill/></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaBookOpen/></a>
      <a href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><BiCode/></a>

    </nav>
  )
}

export default Navigation