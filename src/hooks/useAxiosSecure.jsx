import axios from "axios"
import { baseURL } from "../config/aciosPublic"

export const axiosSecure = axios.create({
  baseURL: baseURL,
  withCredentials: true,
})

export default function useAxiosSecure() {

  return axiosSecure
}