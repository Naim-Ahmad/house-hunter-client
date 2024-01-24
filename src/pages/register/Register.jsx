import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Spinner,
  Typography
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../context/globalState/auth/actions";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useDispatch from "../../hooks/useDispatch";
import useToggle from "../../hooks/useToggle";


export default function Register() {
  const [role, setRole] = useState('House Renter')
  const [loading, setLoading] = useToggle()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(dispatch)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const phoneNumber = e.target.number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(!fullName, !role, !phoneNumber, !email, !password);
    // Validate form data
    if (!fullName || !role || !phoneNumber || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading()

    // Prepare user data
    const userData = {
      fullName,
      role,
      phoneNumber,
      email,
      password,
    };
    // Send registration request to backend server (replace with your API endpoint)
    try {
      const response = await axiosSecure.post('/api/auth/register', userData)
      const responseData = response.data
      // console.log("response", response)
      // console.log("responseData", responseData)

      if (responseData?._id) {
        toast.success('Registration successful!')
        dispatch(setUser(responseData))
        response.role === 'House Renter' ? navigate('/dashboard/renterProfile', { replace: true }) : navigate('/dashboard/ownerProfile', { replace: true })
        localStorage.setItem('isLoggedIn', true)
      }
      setLoading()

    } catch (error) {
      setLoading()
      console.dir(error);
      toast.error(error.message || "Something wrong!");
    }
  };

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
              name="fullName"
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
              name="email"
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
                  name="number"
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
              name="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            {
              loading ? <Spinner className="mx-auto" /> : "sign up"
            }

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