import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircle} from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const HamburgerMenu = () => {

    const [toggle, setToggle] = useState(false)

    const toggleMenu = () =>{
        setToggle(!toggle)
    }

  return (
    <div className='menu-section'>
        <FontAwesomeIcon className='menu-icon' icon={faBars} onClick={toggleMenu}/>
        {
            toggle ?  <div className='menu-box'>
            <ul className='nav-links-list'>
                <li>
                    <a className='nav-link-ham' href='#about' onClick={toggleMenu}>About<FontAwesomeIcon className='nav-link-dot' icon={faCircle}/></a>
                </li>
                <li>
                    <a className='nav-link-ham' href='#skills' onClick={toggleMenu}>Skills<FontAwesomeIcon className='nav-link-dot' icon={faCircle}/></a>
                </li>
                <li>
                    <a className='nav-link-ham' href='#projects' onClick={toggleMenu}>Projects<FontAwesomeIcon className='nav-link-dot' icon={faCircle}/></a>
                </li>
                <li>
                    <a className='nav-link-ham' href='#contact' onClick={toggleMenu}>Contact<FontAwesomeIcon className='nav-link-dot' icon={faCircle}/></a>
                </li>
             </ul>
        </div> : null
        }
    </div>
  )
}

export default HamburgerMenu