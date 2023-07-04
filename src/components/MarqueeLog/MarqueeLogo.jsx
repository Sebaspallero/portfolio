import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import redux from '../../assets/redux.svg'
import next from '../../assets/nextjs.svg'
import ts from '../../assets/ts.svg'
import tailwind from '../../assets/tailwind.svg'
import firebase from '../../assets/firebase.svg'
import sql from '../../assets/sql.svg'
import { faHtml5, faCss3Alt, faSass, faReact, faAngular, faJs } from '@fortawesome/free-brands-svg-icons'
import './styles.css'

const MarqueeLogo = () => {
  return (
    <div className='section-marquee'>
      <div className="wrapper">
        <div className="marquee">
          <div className="marquee_group">
                <img className='img-marquee' src={redux}/>
                <img className='img-marquee' src={firebase}/>
                <img className='img-marquee' src={next}/>
                <img className='img-marquee' src={sql}/>
                <img className='img-marquee' src={ts}/>
                <img className='img-marquee-t' src={tailwind}/>
          </div>
          <div aria-hidden="true" className="marquee_group">
                <FontAwesomeIcon  className='fa' icon={faHtml5}/>
                <FontAwesomeIcon  className='fa' icon={faCss3Alt}/>
                <FontAwesomeIcon  className='fa' icon={faSass}/>
                <FontAwesomeIcon  className='fa' icon={faJs}/>
                <FontAwesomeIcon  className='fa' icon={faReact}/>
                <FontAwesomeIcon  className='fa' icon={faAngular}/>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarqueeLogo