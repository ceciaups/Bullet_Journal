import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/User/Login'
import Signin from './components/User/Signin'
import Journal from './components/Journal/Journal'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login/*' element={<Login />}></Route>
      <Route path='/signin/*' element={<Signin />}></Route>
      <Route path='/journal/*' element={<Journal />}></Route>
    </Routes>
  )
}

export default App;
