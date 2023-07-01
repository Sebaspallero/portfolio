import './styles.css'

const Header = () => {
  return (
    <header>
        <nav>
            <div className='header-title-box'>
                <p className='header-title'>Sebastián</p><span className='header-title-dot'></span>
             </div>
             <ul className='nav-links'>
                <li className='nav-link'>About</li>
                <li className='nav-link'>Skills</li>
                <li className='nav-link'>Projects</li>
                <li className='nav-link'>Contact</li>
             </ul>
        </nav>
    </header>
  )
}

export default Header