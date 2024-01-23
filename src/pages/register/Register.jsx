import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [role, setRole] = useState('House Renter')

  const handleSubmit = (e) => {
    e.preventDefault()


  }

  return (
    <div className="flex justify-center py-6 min-h-screen items-center">
      <Card className="mx-auto p-4" color="transparent">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2  max-w-screen-lg">
          <div className="mb-1 flex flex-col gap-6">

            {/* full name */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Full Name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="John doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            {/* email */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <div className="flex flex-col sm:flex-row gap-2">

              {/* Phone */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Your Phone Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="+88016********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>



              {/* role */}

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Register as
                </Typography>
                <Select onChange={(value) => setRole(value)} value="House Renter" size="lg">
                  <Option value="House Owner">House Owner</Option>
                  <Option value="House Renter">House Renter</Option>
                </Select>
              </div>
            </div>

            {/* password */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}