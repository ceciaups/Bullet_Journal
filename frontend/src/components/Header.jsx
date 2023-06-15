import logo from '/logo.png'

function Header() {
  return (
    <header>
      <div id="journal-nav">

      <a id="logo" href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      </div>
      <a id="logo" href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <nav>
      <a id="logo" href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
        <ul id="nav-bar" className="nav-bar">
          {/* <li key="nav-toggle" id="nav-toggle"><i className="fa-solid fa-bars"></i></li>
          <li className="nav-item"><a href="#sec-home">HOME</a></li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header