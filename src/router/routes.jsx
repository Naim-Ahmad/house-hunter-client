import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import HomeRoot from "../pages/home/HomeRoot";
import Login from "../pages/login/Login";
import MyHouses from "../pages/myHouses/MyHouses";
import OwnerProfile from "../pages/ownerProfile/OwnerProfile";
import Register from "../pages/register/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <HomeRoot/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: 'myHouses',
        element: <MyHouses/>
      },
      {
        path: 'ownerProfile',
        element: <OwnerProfile/>
      },
    ]
  }
])

export default router;