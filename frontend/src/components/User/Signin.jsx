import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import './User.css'

export default function Signin() {

  const navigate = useNavigate();

  async function userSignin(e) {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": e.target.femail.value,
        "password": e.target.fpassword.value
      })
    }

    const res = await fetch("https://bullet-journal-db.ceciaups.com/user/add", option)

    if (res.status === 200)
      navigate("/journal")
  }

  return (
    <div id="user">
      <Header />
      <main>
        <h2>Sign In</h2>
        <form action="#" id="form-signin" name="form-signin" onSubmit={(e) => userSignin(e)}>
          <div className="form-input">
            <label>Email:</label>
            <input type="text" id="form-email" className="form-content" name="femail" placeholder="Email"></input>
            <label>Password:</label>
            <input type="password" id="form-password" className="form-content" name="fpassword" placeholder="Password"></input>
          </div>
          <button type="submit" className="button">Sign In</button>
        </form>
      </main>
    </div>
  )
}