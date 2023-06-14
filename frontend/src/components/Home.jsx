import logo from '/logo.png'
import hero from '/home/hero.jpg'
import './Home.css'

function Home() {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </header>
      <div className="hero">
        <div className="hero-image">
          <h1>Bullet Journal</h1>
          <div>
            <a href="/login" className="button">Log In</a>
            <a href="/signin" className="button">Sign In</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home