import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
import Header from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="bg-[#F5EFEB] min-h-screen flex">
            <div className="flex flex-row flex-1">
                {/* <Footer/> */}
                <div className="flex-1 p-4">
                    <Header />
                    <Outlet />
                    {/* <Footer/> */}
                </div>
            </div>
        </div>
    )
}