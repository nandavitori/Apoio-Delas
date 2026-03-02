import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LayoutSite = () => {
  return (
    <div className='min-h-screen bg-[#F4F8F7] relative'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutSite
