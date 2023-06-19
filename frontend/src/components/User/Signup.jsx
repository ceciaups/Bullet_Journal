import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import './User.css'

export default function Signup(props) {

  const navigate = useNavigate();

  async function userSignup(e) {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": e.target.femail.value,
        "password": e.target.fpassword.value
      })
    }

    // Find whether the user exists
    const res = await fetch("https://bullet-journal-db.ceciaups.com/user", option)
    const result = await resCheck.json();

    if (result.error) {
      // Create user if not exist
      const res = await fetch("https://bullet-journal-db.ceciaups.com/user/add", option)
      const result = await res.json();

      if (res.status === 200){
        props.setUser(result._id)
        navigate("/journal")
      }
      else {
        navigate("/error")
      }
    }
    else if (resCheck.status === 200) {
      console.log("existing")
    }
    else {
      navigate("/error")
    }

  }

  return (
    <div id="user">
      <Header />
      <main>
        <h2>Sign Up</h2>
        <form action="#" id="form-signup" name="form-signup" onSubmit={(e) => userSignup(e)}>
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