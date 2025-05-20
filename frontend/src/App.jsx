

import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './Screeens/LoginPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
