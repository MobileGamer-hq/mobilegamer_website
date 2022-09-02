import React from 'react'
import "./Experience.css"

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What I Got</h5>
        <h2>My Experience</h2>

        <div className= "container experience__container">
            <div className= "experience__Games">
                <h3>Game Development and 3D Modeling</h3>
                <div className= "experience__content">
                    <article className= "experience__details">
                        <div>
                            <h4>Unity Engine</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                    <article className= "experience__details">
                        <div>
                            <h4>Cocos Creator</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                    <article className= "experience__details">
                        <div>
                            <h4>Blender</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className= "experience__Web">
                <h3>Web Development</h3>
                <div className= "experience__content">
                    <article className= "experience__details">
                        <div>
                            <h4>React</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                    <article className= "experience__details">
                        <div>
                            <h4>Django</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className= "experience__Mobile">
                <h3>Mobile App Development</h3>
                <div className= "experience__content">
                    <article className= "experience__details">
                        <div>
                            <h4>React Native, </h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                    <article className= "experience__details">
                        <div>
                            <h4>Flutter</h4>
                            <small className= "text-light">Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
