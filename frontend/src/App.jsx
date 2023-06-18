import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import Login from './components/User/Login'
import Signin from './components/User/Signin'
import Journal from './components/Journal/Journal'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
