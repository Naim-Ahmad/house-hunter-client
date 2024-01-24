import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useUser from "./useUser"

export default function useHouses() {

  const axiosSecure  = useAxiosSecure()
  const user = useUser()

  const {data, isLoading, refetch} = useQuery({
    queryKey: ["myHouses", user?._id],
    queryFn: async ()=> {
      const result = await axiosSecure.get(`/api/myHouses/${user?._id}`)
      return result.data
    }
  })

  return {data, isLoading, refetch}
}