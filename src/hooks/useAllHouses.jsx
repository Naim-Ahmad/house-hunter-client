import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

export default function useAllHouses() {

  const axiosSecure  = useAxiosSecure()

  const {data, isLoading, refetch} = useQuery({
    queryKey: ["allHouses"],
    queryFn: async ()=> {
      const result = await axiosSecure.get(`/api/allHouses`)
      return result.data
    }
  })

  return {data, isLoading, refetch}
}