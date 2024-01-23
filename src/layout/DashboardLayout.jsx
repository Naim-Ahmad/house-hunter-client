import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "../pages/shared/DashboardSidebar";

export default function DashboardLayout() {

  return (
    <div className="md:flex">
      <div>
        <DashboardSidebar/>
      </div>

      <div className="flex-1 px-4">
      <Outlet/>
      </div>
    </div>
  )
}
