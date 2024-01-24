
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

export default function HouseRow(props) {

  const {
    picture,
    name,
    isBooked,
    status,
    index,
    TABLE_ROWS,
    city,
    rentPerMonth,
    address
    _id
  } = props


  const handleDelete = ()=>{

  }

  const isLast = index === TABLE_ROWS.length - 1;
  const classes = isLast
    ? "p-4"
    : "p-4 border-b border-blue-gray-50";

  return (
    <tr>
      {/* name */}
      <td className={classes}>
        <div className="flex items-center gap-3">
          <Avatar src={picture} alt={name} size="sm" />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {name}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {address}, {city}
            </Typography>
          </div>
        </div>
      </td>

        {/* amount */ }
  <td className={classes}>
    <Typography
      variant="small"
      color="blue-gray"
      className="font-normal"
    >
      ${rentPerMonth}
    </Typography>
  </td>

  {/* status */ }
  <td className={classes}>
    <div className="w-max">
      <Chip
        size="sm"
        variant="ghost"
        value={isBooked ? 'Booked': 'Available'}
        color={
          !isBooked
            ? "green"
            : status === "pending"
              ? "amber"
              : "red"
        }
      />
    </div>
  </td>

  {/* actions */ }
  <td className={classes}>
    <Tooltip content="View Details">
      <IconButton variant="text">
        <EyeIcon className="h-4 w-4" />
      </IconButton>
    </Tooltip>

    <Tooltip content="Edit House">
      <IconButton variant="text">
        <PencilIcon className="h-4 w-4" />
      </IconButton>
    </Tooltip>

    <Tooltip content="Delete House">
      <IconButton variant="text">
        <TrashIcon className="h-4 w-4" />
      </IconButton>
    </Tooltip>
  </td>
      </tr >
    );
}