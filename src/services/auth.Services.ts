import { authKey } from "@/constants/storageKey";
import { ITokenUser } from "@/types";
import { DecodedData } from "@/utils/jwt";
import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setIntoLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedUser = DecodedData(authToken);
    return decodedUser;
  }
  return "";
};

export const loggedIn = (): boolean => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    return true;
  } else {
    return false;
  }
};

export const logOut = () => {
  return localStorage.removeItem(authKey);
};
