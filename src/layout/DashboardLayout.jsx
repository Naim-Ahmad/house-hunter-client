import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { DashboardSidebar } from "../pages/shared/DashboardSidebar";

export default function DashboardLayout() {

  const [isDrawerOpen, openDrawer] = useToggle(true)

  return (
    <div className="md:flex pt-6">
      {/* toggler icon */}
      <div className="absolute md:hidden top-0 bg-gray-200 min-w-full z-10">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      </div>

      {/* sidebar */}
      <div className={isDrawerOpen ? "block": 'hidden'}>
      {/* <Bars3Icon className="h-8 w-8 stroke-2 md:hidden" /> */}
        <DashboardSidebar />
      </div>


      {/* main */}
      <div className="flex-1 px-4">
        <Outlet />
      </div>
    </div>
  )
}
