import jwtDecode from "jwt-decode";

export const DecodedData = (token: string) => {
  return jwtDecode(token);
};
