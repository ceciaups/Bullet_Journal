import logo from '/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {

  const menu = <FontAwesomeIcon icon={faBars} size="2x"/>

  return (
    <header>
      <div id="journal-nav" className="header-icon">

      </div>
      <Link to="/" id="logo">
        <img src={logo} className="header-icon" alt="logo" />
      </Link>
      <nav id="nav-bar" className="nav-bar">
        <div className="header-icon">{menu}</div>
        <ul>
          {/* <li key="nav-toggle" id="nav-toggle"><i className="fa-solid fa-bars"></i></li>
          <li className="nav-item"><a href="#sec-home">HOME</a></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header