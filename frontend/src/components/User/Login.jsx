import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import './User.css'

export default function Login(props) {

  const navigate = useNavigate();

  async function userLogin(e) {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": e.target.femail.value,
        "password": e.target.fpassword.value
      })
    }

    const res = await fetch("https://bullet-journal-db.ceciaups.com/user/check", option)

    if (res.status === 200) {
      const result = await res.json();
      
      if (Object.keys(result).length) {
        props.setUser(result._id)
        navigate("/journal")
      }
    }
    else {
      navigate("/error")
    }
  }

  return (
    <div id="user">
      <Header />
      <main>
        <h2>Log In</h2>
        <form action="#" id="form-login" name="form-login" onSubmit={(e) => userLogin(e)}>
          <div className="form-input">
            <label>Email:</label>
            <input type="text" id="form-email" className="form-content" name="femail" placeholder="Email"></input>
            <label>Password:</label>
            <input type="password" id="form-password" className="form-content" name="fpassword" placeholder="Password"></input>
          </div>
          <button type="submit" className="button">Log In</button>
        </form>
      </main>
    </div>
  )
}