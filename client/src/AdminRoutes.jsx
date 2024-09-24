import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Topheader from './components/Topheader'
import Sidenav from './Pages/Admin/Adminsidebar'


function AdminRoutes() {
  

  return (
    <>
    <Sidenav />
    </>
  )
}

export default AdminRoutes
