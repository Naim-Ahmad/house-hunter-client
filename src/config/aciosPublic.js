import axios from "axios";

export const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_BASEURL_PROD
  : import.meta.env.VITE_BASEURL_DEV;

// console.log(url);

const axiosPublic = axios.create({
  baseURL: baseURL,
});

export default axiosPublic;
