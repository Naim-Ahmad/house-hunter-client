
import {
  Button,
  Card,
  Input,
  Typography
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Login() {

  return (
      <div className="flex justify-center min-h-screen items-center">
        <Card className="mx-auto p-4 rounded-t-lg" color="transparent">
          <Typography variant="h4" color="blue-gray">
            Sign in
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to sign in.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">


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
              Sign in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-medium text-gray-900">
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    
  )
}