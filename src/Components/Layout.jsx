
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
     <div>
          <Outlet/>
     </div>
     <Footer/>
    </>
  )
}

export default Layout
