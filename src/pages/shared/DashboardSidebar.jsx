import {
  HomeIcon,
  HomeModernIcon,
  PowerIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser";

export function DashboardSidebar() {
  const user = useUser()

  return (
    <Card className="min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Hi {user?.fullName}
        </Typography>
      </div>
      <List>
        
        <NavLink to="/dashboard/ownerProfile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Profile
          </ListItem>
        </NavLink>

        {
          user.role === 'House Owner' ? <NavLink to="/dashboard/myHouses">
          <ListItem>
            <ListItemPrefix>
              <HomeModernIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Houses
          </ListItem>
        </NavLink> : <NavLink to="/dashboard/myBooked">
          <ListItem>
            <ListItemPrefix>
              <HomeModernIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Booked
          </ListItem>
        </NavLink>
        }

        <hr className="my-2 border-blue-gray-50" />

        <NavLink to="/">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </NavLink>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}