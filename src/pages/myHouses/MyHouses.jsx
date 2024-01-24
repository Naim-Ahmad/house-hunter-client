

import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Typography
} from "@material-tailwind/react";
import MySpinner from "../../components/MySpinner";
import useHouses from "../../hooks/useHouses";
import useToggle from "../../hooks/useToggle";
import AddHouseModal from "./AddHouseModal";
import HouseRow from "./HouseRow";

const TABLE_HEAD = ["Name", "Amount", "Status", "Actions"];



export default function MyHouses() {
  const [open, openHandler] = useToggle()

  const {data, isLoading} = useHouses()
  // console.log(data)

  if(isLoading) return <MySpinner/>

  return (
    <div className="py-6">
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                My All Houses
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about of My all houses
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row w-full shrink-0 gap-2 md:w-max">
              <div className="w-full flex-1 md:w-60">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button onClick={openHandler} className="flex  mx-auto items-center gap-3" size="sm">
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Home
              </Button>
              <AddHouseModal open={open} handleOpen={openHandler}/>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-auto px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((tableRow, ind) => <HouseRow 
              key={tableRow._id} 
              index={ind} 
              TABLE_ROWS={data} 
              {...tableRow} />)}
            </tbody>
          </table>
        </CardBody>

        <CardFooter className="flex hidden items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>

    </div>

  );
}