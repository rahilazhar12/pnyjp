import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Topheader from './components/Topheader'


function App() {
  

  return (
    <>
   
        <Topheader />
        <Navbar />
        <Outlet />
    </>
  )
}

export default App
