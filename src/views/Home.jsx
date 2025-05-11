import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"
import ProjectsSection from "../components/Projects/ProjectsSection"
import './styles.css'

const Home = () => {
  return (
    <main>
        <Hero/>
        <section className="divider-section">
          <About/>
          <Skills/>
          <ProjectsSection/>
        </section>
    </main>
  )
}

export default Home