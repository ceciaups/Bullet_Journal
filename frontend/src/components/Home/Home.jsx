import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-image">
          <h1>Bullet Journal</h1>
          <div>
            <Link to="login" className="button">Log In</Link>
            <Link to="signin" className="button">Sign In</Link>
          </div>
        </div>
      </main>
    </>
  )
}