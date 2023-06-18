import './User.css'

export default function Login() {
  return (
    <>
      <main>
        <h1>Log In</h1>
        <form action="#" id="form-login" name="form-login">
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
    </>
  )
}