import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import MainNavbar from "../pages/shared/MainNavbar";

export default function MainLayout() {

  return (
    <div className=" max-h-[768px]">
      <MainNavbar />

      <div className="mx-auto max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <Outlet />
      </div>

      <Footer/>
    </div>
  )
}