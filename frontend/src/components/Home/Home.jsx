import Header from '../../components/Header'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id="home">
      <Header />
      <main className="hero">
        <div className="hero-image">
          <h1>Bullet Journal</h1>
          <p>- A digital tool to help you oranize -</p>
          <p>- The future depends on what you do today -</p>
          <div>
            <Link to="signup" className="button" id="hero-signup">Sign Up</Link>
            <Link to="login" className="button" id="hero-login">Log In</Link>
          </div>
        </div>
      </main>
    </div>
  )
}