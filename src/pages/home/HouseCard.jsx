import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
 
export default function HouseCard({data}) {
  // console.log(Object.keys(data).join(','))
  const {id,name,address,city,bedrooms,bathrooms,roomSize, picture, availabilityDate, rentPerMonth,phoneNumber,isBooked, description, userId} = data;

  console.log(rentPerMonth)
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={picture}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {name}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {address}, {city}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
        </Typography>

        <div className="grid grid-cols-2 gap-y-4 gap-x-5">
          <div>
            <span className="mr-2 font-semibold">Bedrooms:</span>
            <span>{bedrooms}</span>
          </div>
          <div>
            <span className="mr-2 font-semibold">Rent per month:</span>
            <span>${rentPerMonth}</span>
          </div>
          <div>
          <span className="mr-2 font-semibold">Bathrooms:</span>
            <span>{bathrooms}</span>
          </div>

          <div>
          <span className="mr-2 font-semibold">Room Size:</span>
            <span>{roomSize}</span>
          </div>

          <div>
          <span className="mr-2 font-semibold">Phone Number:</span>
            <span>{phoneNumber}</span>
          </div>

          
          
          <Button variant="outlined" className="flex items-center gap-2 ">
           Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
        
        
      </CardBody>
    </Card>
  );
}