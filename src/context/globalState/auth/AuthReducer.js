import axiosPublic from "../../../config/aciosPublic";
import { CREATEUSER } from "./actionType";

export const authInfo = {};

export default function AuthReducer(state, action) {
  const payload = action.payload;
  switch (action.type) {
    case CREATEUSER:
      axiosPublic.post("/api/register", payload);
      // .then(res=> res.status)
      break;
    default:
      return state;
  }
}
