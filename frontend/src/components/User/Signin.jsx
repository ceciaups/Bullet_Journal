import Header from '../../components/Header'
import './User.css'

export default function Signin() {
  return (
    <div id="user">
      <Header />
      <main>
        <h1>Sign In</h1>
        <form action="#" id="form-signin" name="form-signin">
          <div className="form-input">
            <label>Email:</label>
            <input type="text" id="form-email" className="form-content" name="femail" placeholder="Email"></input>
          </div>
          <div className="form-input">
            <label>Password:</label>
            <input type="password" id="form-password" className="form-content" name="fpassword" placeholder="Password"></input>
          </div>
        </form>
      </main>
    </div>
  )
}