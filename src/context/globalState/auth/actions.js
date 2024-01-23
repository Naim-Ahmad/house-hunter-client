import { LOGINUSER, LOGOUT, SETUSER } from "./actionType";

export const setUser = (value) => {
  return {
    type: SETUSER,
    payload: value,
  };
};

export const logInUser = (value) => {
  return {
    type: LOGINUSER,
    payload: value,
  };
};

export const logOut = (value) => {
  return {
    type: LOGOUT,
    payload: value,
  };
};
