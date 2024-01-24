import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Spinner,
  Textarea,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axiosPublic from "../../config/aciosPublic";
import useToggle from "../../hooks/useToggle";
import useUser from "../../hooks/useUser";

const url = `https://api.imgbb.com/1/upload?key=36dfdb7fec95832dd24f20fc4cda3309`


export default function AddHouseModal({ open, handleOpen }) {

  const user = useUser()

  const queryClient = useQueryClient()

  const [loading, setLoading] = useToggle()

  const { mutateAsync } = useMutation({
    mutationKey: ['addHome'],
    mutationFn: async (houseInfo) => {
      const result = await axiosPublic.post('/api/addHouse', houseInfo)
      return result.data
    },
    onSuccess: () => queryClient.invalidateQueries(["myHouses"])
  })

  // console.log(user)

  const handleSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const address = e.target.address.value;
    const city = e.target.city.value;
    const bedrooms = e.target.bedrooms.value;
    const bathrooms = e.target.bathrooms.value;
    const roomSize = e.target.roomSize.value;
    const availabilityDate = e.target.availabilityDate.value;
    const rentPerMonth = e.target.rentPerMonth.value;
    const phoneNumber = e.target.phoneNumber.value;
    const description = e.target.description.value;
    const picture = e.target.picture.files[0];

    const houseInfo = {
      userId: user?._id,
      name,
      address,
      city,
      bedrooms,
      bathrooms,
      roomSize,
      availabilityDate,
      rentPerMonth,
      phoneNumber,
      description,
    }

    const formData = new FormData()
    formData.append('image', picture)

    // upload house picture
    setLoading()

    axiosPublic({
      headers: {
        "Content-Type": "multipart/form-data"
      },
      url: url,
      method: 'POST',
      data: formData
    })
      .then(async res => {
        // console.log('image uploaded Data', res.data)
        const url = res.data.data.url
        houseInfo.picture = url

        // console.log(houseInfo)
        mutateAsync(houseInfo)
        .then(res => {
            handleOpen()
            // console.log(res)
            setLoading()
            toast.success('Added home successfully!')

          })
          .catch(err => {
            setLoading()
            console.log(err)
            toast.error(err.message)
          })


      })
      .catch(err => {
        setLoading()
        console.log(err)
        toast.error(err.message)
      })

  }

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add A House</DialogHeader>

        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-3 sm:grid grid-cols-2 gap-x-2 gap-y-4">
            {/* houseName */}
            <div className="col-span-2">
              <Input required label="House Name" name="name" />
            </div>

            {/* houseAddress */}
            <div className="">
              <Input required label="House Address" name="address" />
            </div>

            {/* city */}
            <div>
              <Input required label="City" name="city" />
            </div>

            {/* bedroom */}
            <div>
              <Input required label="Bed Rooms" name="bedrooms" type="number" />
            </div>

            {/* bathrooms */}
            <div>
              <Input required label="Bath Rooms" name="bathrooms" type="number" />
            </div>

            {/* room size */}
            <div>
              <Input required label="Room Size (square feet)" name="roomSize" type="number" />
            </div>

            {/* availability date */}
            <div>
              <Input required label="Availability Date" name="availabilityDate" type="date" />
            </div>

            {/* rent per month */}
            <div>
              <Input required label="Rent Per Month" name="rentPerMonth" type="number" />
            </div>

            {/* phone number */}
            <div>
              <Input required label="Phone Number" name="phoneNumber" type="number" />
            </div>

            {/* description */}
            <div className="col-span-2">
              <Textarea required label="Description" name="description" />
            </div>

            {/* picture */}
            <div>
              <input required type="file" name="picture" />
            </div>
            <input id="submit" type="submit" value="" className="hidden" />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button onClick={() => document.getElementById('submit').click()} variant="gradient" type="submit">
            {loading ? <Spinner className="mx-auto" /> : <span>Add House</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}