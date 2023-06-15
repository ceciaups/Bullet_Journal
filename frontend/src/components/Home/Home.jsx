import './Home.css'

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-image">
          <h1>Bullet Journal</h1>
          <div>
            <a href="/login" className="button">Log In</a>
            <a href="/signin" className="button">Sign In</a>
          </div>
        </div>
      </main>
    </>
  )
}