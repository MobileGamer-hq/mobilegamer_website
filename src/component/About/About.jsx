import React from 'react'
import "./About.css"
import { aboutMe } from "../../assets/data";
import Logo from "../../assets/LogoBlack.png"

var logo = Logo;

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__container">
        <div className="profile">
          <img src={logo} className="image" />
          <h3>Mobile Gamer</h3>
          <h5>Software Developer</h5>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className="about__card">
              <h5>Experience</h5>
              <small>
                5 plus years in Python,
                5 plus years in Javascript,
                3 plus years in C#
              </small>

            </article>
            <article className="about__card">
              <h5>Projects</h5>
              <small>N.B.U.L.A, Cartoon Mania, Power Rush, Academia, etc.</small>

            </article>
          </div>
          <p>
            I am Duru Somtochukwu Philip, a highly motivated Electrical Engineering student at Covenant University with a strong passion for software development. Despite not having a formal computer science or software engineering degree, I have acquired substantial experience in the field. I've successfully created a variety of websites, mobile apps, and even 2D games, both independently and as part of a collaborative team.

            My programming skills include Python, JavaScript, and C#, and I have applied them to develop user-friendly websites using React, as well as games using Unity. Proficient in managing data with Firebase Firestore and deploying applications using Firebase Hosting, I'm well-versed in structuring data to suit a wide range of applications.

            As the Vice President of my secondary school's coding club and a co-founder of Inova Studio, a software development company I established with my classmates, I've demonstrated strong leadership and teamwork abilities. My goal is to secure an internship where I can further apply my technical skills, collaborate effectively within a team, and contribute to real-world projects.
          </p>
          <a className="btn btn-primary" href="">Read more</a>
        </div>
      </div>
    </section>
  )
}

export default About;
