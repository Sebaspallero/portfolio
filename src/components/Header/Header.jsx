import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import './styles.css'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='header-title-box'>
                <a href='#hero' className='header-title'>Sebastián</a><span className='header-title-dot'></span>
             </div>
             <ul className='nav-links'>
                <li><a className='nav-link' href='#about'>About</a></li>
                <li><a className='nav-link' href='#skills'>Skills</a></li>
                <li><a className='nav-link' href='#projects'>Projects</a></li>
                <li><a className='nav-link' href='#contact'>Contact</a></li>
             </ul>
             <HamburgerMenu/>
        </nav>
    </header>
  )
}

export default Header