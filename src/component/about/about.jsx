import React from 'react'
import "./About.css"
import {aboutMe} from "../../assets/data";
import Logo from "../../assets/LogoBlack.png"
 
var logo = Logo;

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className= "about__container">
        <div className= "profile">
            <img src = {logo} className= "image"/>
            <h3>Mobile Gamer</h3>
            <h5>Software Developer</h5>
        </div>
        <div className= "about__content">
          <div className='about__cards'>
              <article className="about__card">
                  <h5>Experience</h5>
                  <small>4+ Years of programming experience</small>

              </article>
              <article className="about__card">
                  <h5>Projects</h5>
                  <small>N.B.U.L.A, Cartoon Mania, Power Rush, Academia, etc.</small>

              </article>
          </div>
            <p>{aboutMe}</p>
            <a className= "btn btn-primary" href= "">Read more</a>
        </div>
      </div>
    </section>
  )
}

export default About;
