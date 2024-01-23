import { SETUSER } from "./actionType";

export const authInfo = {};

export default function AuthReducer(state, action) {
  const payload = action.payload;
  switch (action.type) {
    case SETUSER:
      return payload;
    default:
      return state;
  }
}
