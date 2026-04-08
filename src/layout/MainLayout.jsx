import { Outlet } from "react-router-dom"
import Navbar from "../component/home/Navbar"
import Footer from "../component/home/Footer"


const MainLayout = () => {
    return (
        <div className="bg-[#091409] min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout