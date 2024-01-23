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
import { Link } from "react-router-dom";

export function DashboardSidebar() {
  return (
    <Card className="min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Link to="/dashboard/ownerProfile">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Profile
          </ListItem>
        </Link>

        <Link to="/dashboard/myHouses">
          <ListItem>
            <ListItemPrefix>
              <HomeModernIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Houses
          </ListItem>
        </Link>

        <hr className="my-2 border-blue-gray-50" />

        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

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