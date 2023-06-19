import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import Error from './components/User/Error'
import Journal from './components/Journal/Journal'

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login/*' element={<Login setUser={setUser} setToken={setToken} />}></Route>
      <Route path='/signup/*' element={<Signup setUser={setUser} setToken={setToken} />}></Route>
      <Route path='/journal/*' element={<Journal />}></Route>
      <Route path='/error/*' element={<Error />}></Route>
    </Routes>
  )
}

export default App;
