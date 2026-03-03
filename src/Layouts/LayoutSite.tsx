import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import OutBtn from "../components/OutBtn"

const LayoutSite = () => {
  return (
    <div className='min-h-screen bg-[#F4F8F7] relative'>
      <Header/>
      <OutBtn/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutSite
