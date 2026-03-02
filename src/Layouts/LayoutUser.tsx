import { Outlet, useNavigate } from "react-router-dom"
import HeaderAdmin from "../components/HeaderAdmin"
import Footer from "../components/Footer"


const LayoutUser = () => {
    const navigate = useNavigate()

    const handleLogOut = () =>{
        localStorage.removeItem('user')
        navigate('/')
    }
  return (
    <div className='min-h-screen bg-[#F4F8F7] relative'>
      <HeaderAdmin  username={localStorage.getItem("user") || "Usuário"}
  role="Usuário"
  onLogOut={handleLogOut}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutUser
