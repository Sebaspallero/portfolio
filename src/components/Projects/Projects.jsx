import React from 'react'
import portfolio from '../../assets/full-portfolio.png'
import patitas from '../../assets/patitas-layout.png'
import viajanding from '../../assets/viajanding.png'
import liceum from '../../assets/liceum.png'
import retibo from '../../assets/retibo.png'

import './styles.css'

const Projects = () => {
  return (
    <section className='projects-section'>
        <span id='projects' className='anchor-projects'></span>
        <div className='section-title-box'>
            <h2 className='section-title'>Projects</h2><span className='section-title-dot'></span>
        </div>
        <div className='projects-grid'>

          <div className='project-grid'>
            <div className='project-box'>
                <img className='project-img' src={portfolio} alt='Image showing the portfolio, the background is black and the text color white with yellowgreen accents.'/>
                <div className='project-link-grid'>
                  <div className='project-info-box'>
                    <h2 className='project-title'>Portfolio</h2>
                    <p className='project-description'>A portfolio made with React.js and Vite, showing my latest projects, skills, goals and contact information.</p>
                    <div className='stack-list-box'>
                      <p className='stack'>React.js</p>
                      <p className='stack'>Vite</p>
                      <p className='stack'>JS</p>
                      <p className='stack'>CSS</p>
                    </div>
                  </div>
                  <a href='https://github.com/Sebaspallero/portfolio.git' target="_blank" rel="noreferrer" className='repo-link'>View Code</a>
                </div>
            </div>
          </div>

          <div className='project-grid'>
            <div className='project-box'>
                <img className='project-img' src={patitas} alt='Image with multiple screenshots of a petshop e-commerce, there is a dog on the hero section, packs of dog food, and the colors are white and dark blue'/>
                <div className='project-link-grid'>
                  <div className='project-info-box'>
                    <h2 className='project-title'>Petshop e-commerce</h2>
                    <p className='project-description'>An e-commerce web site with a functional shopping-cart made with redux toolkit and firestore for the products and shopping orders.</p>
                    <div className='stack-list-box'>
                      <p className='stack'>React.js</p>
                      <p className='stack'>Vite</p>
                      <p className='stack'>Firebase</p>
                      <p className='stack'>Redux Toolkit</p>
                      <p className='stack'>Routing</p>
                    </div>
                  </div>
                  <a href='https://patitas-petshop-and-food.netlify.app/' target="_blank" rel="noreferrer" className='repo-link'>View Site</a>
                  <a href='https://github.com/Sebaspallero/React-Vite-Patitas.git' target="_blank" rel="noreferrer" className='repo-link'>View Code</a>
                </div>
            </div>
          </div>

          <div className='project-grid'>
            <div className='project-box'>
                <img className='project-img' src={retibo} alt='Image with multiple screenshots of a website, the main color is blue and white'/>
                <div className='project-link-grid'>
                  <div className='project-info-box'>
                    <h2 className='project-title'>Fullstack SaaS</h2>
                    <p className='project-description'>A software as a service web app, made with Next.js, the OpenAI API, Prisma(SQL) and PlanetScale for the backend, auth, customer service and Tailwind.</p>
                    <div className='stack-list-box'>
                      <p className='stack'>Next.js</p>
                      <p className='stack'>Tailwind</p>
                      <p className='stack'>Prisma</p>
                      <p className='stack'>SQL</p>
                      <p className='stack'>Clerk</p>
                    </div>
                  </div>
                  <a href='https://retibo.com.ar/' target="_blank" rel="noreferrer" className='repo-link'>View Site</a>
                  <a href='https://github.com/Sebaspallero/Ai-Saas' target="_blank" rel="noreferrer" className='repo-link'>View Code</a>
                </div>
            </div>
          </div>

          <div className='project-grid'>
            <div className='project-box'>
                <img className='project-img' src={liceum} alt='Image with multiple screenshots of a bootcamp website, showing the login section, the dashboard and courses; the colors are white, light grey and blue'/>
                <div className='project-link-grid'>
                  <div className='project-info-box'>
                    <h2 className='project-title'>Bootmcamp web site</h2>
                    <p className='project-description'>A dashboard app with admin and user interfaces made with Angular, authentication and a CRUD system for the courses and inscriptions.</p>
                    <div className='stack-list-box'>
                      <p className='stack'>Angular</p>
                      <p className='stack'>Vite</p>
                      <p className='stack'>Testing</p>
                      <p className='stack'>Guards</p>
                      <p className='stack'>Redux Toolkit</p>
                    </div>
                  </div>
                  <a href='https://github.com/Sebaspallero/Angular-Liceum.git' target="_blank" rel="noreferrer" className='repo-link'>View Code</a>
                </div>
            </div>
          </div>

          <h2 className='future-project-title'>What's next?</h2>
          <div className='project-grid'>
            <div className='project-box'>
                <img className='future-project-img' src={viajanding} alt='Image showing the hero section of a booking app, with an image of a plane wing, the background is white, the font black and the accent color yellow'/>
                <div className='project-link-grid'>
                  <div className='project-info-box'>
                    <h2 className='project-title'>Flight booking app</h2>
                    <p className='project-description'>A fully functional booking app, made with the Amadeus API, authentication for users and payment integration.</p>
                    <div className='stack-list-box'>
                      <p className='stack'>React.js</p>
                      <p className='stack'>React Query</p>
                      <p className='stack'>Firebase</p>
                      <p className='stack'>API Rest</p>
                    </div>
                  </div>
                  <a href='https://github.com/Sebaspallero/Angular-Liceum.git' target="_blank" rel="noreferrer" className='repo-link'>View Code</a>
                </div>
            </div>
          </div>
          <h2 className='future-project-title'>More projects coming soon...</h2>
        </div>
    </section>
  )
}

export default Projects