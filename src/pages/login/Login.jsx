
import {
  Button,
  Card,
  Input,
  Spinner,
  Typography
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../context/globalState/auth/actions";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useDispatch from "../../hooks/useDispatch";
import useToggle from "../../hooks/useToggle";

export default function Login() {

  const [loading, setLoading] = useToggle()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(document.cookie)

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate form data
    if ( !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading()

    // Prepare user data
    const userData = {
      email,
      password,
    };
   
    try {
      const response = await axiosSecure.post('/api/auth/login', userData)
      const responseData = response.data
      // console.log("response", response)
      // console.log("responseData", responseData)

      if (responseData?._id) {
        toast.success('Login successful!')
        dispatch(setUser(responseData))
        
        response.role === 'House Renter' ? navigate('/dashboard/renterProfile', { replace: true }) : navigate('/dashboard/ownerProfile', { replace: true })
      }
      setLoading()

    } catch (error) {
      setLoading()
      console.dir(error);
      toast.error(error.message);
    }
  };

  return (
      <div className="flex justify-center min-h-screen items-center">
        <Card className="mx-auto p-4 rounded-t-lg" color="transparent">
          <Typography variant="h4" color="blue-gray">
            Sign in
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to sign in.
          </Typography>
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">

              {/* email */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                name="email"
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
                name="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
            {
              loading ? <Spinner className="mx-auto" /> : "sign in"
            }
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