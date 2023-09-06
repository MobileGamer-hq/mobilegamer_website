import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <section id='projects'>
        <h5>My recent works</h5>
        <h2>Projects</h2>

        <div className= "container project__container">
            <article className= "project__item">
                <h3>Academia</h3>
                <div className= "project__item-ctn">
                    <a href = "" className= "btn btn-primary" target = "_blank">Check out</a>
                    <a href = "https://github.com/MobileGamer-Studio/Academia.git" className= "btn" target = "_blank">Github</a>
                </div>
            </article>
            <article className= "project__item">
                <h3>N.E.B.U.L.A</h3>
                <div className= "project__item-ctn">
                    <a href = "" className= "btn btn-primary" target = "_blank">Check out</a>
                    <a href = "https://github.com/MobileGamer-hq/N.E.B.U.L.A.git" className= "btn" target = "_blank">Github</a>
                </div>
            </article>
            <article className= "project__item">
                <h3>Cartoon Mania</h3>
                <div className= "project__item-ctn">
                    <a href = "" className= "btn btn-primary" target = "_blank">Check out</a>
                    <a href = "" className= "btn" target = "_blank">Github</a>
                </div>
            </article>
            <article className= "project__item">
                <h3>Power Rush</h3>
                <div className= "project__item-ctn">
                    <a href = "" className= "btn btn-primary" target = "_blank">Check out</a>
                    <a href = "" className= "btn" target = "_blank">Github</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Projects
