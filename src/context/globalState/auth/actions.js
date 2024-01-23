import { CREATEUSER, LOGINUSER, LOGOUT } from "./actionType";

export const createUser = (value) => {
  return {
    type: CREATEUSER,
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
