import './Journal.css'

export default function Journal() {
  return (
    <>
      <main className="journal">
        <div className="hero-image">
          <h1>Journal</h1>
          <div>
            <a href="/login" className="button">Log In</a>
            <a href="/signin" className="button">Sign In</a>
          </div>
        </div>
      </main>
    </>
  )
}