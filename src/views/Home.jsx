import About from "../components/About/About"
import Hero from "../components/Hero.jsx/Hero"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import './styles.css'

const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </main>
  )
}

export default Home