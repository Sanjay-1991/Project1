import { Myaxios } from "./helper";

export const signup = (user) => {
  return Myaxios.post("/api/users/register").then(
    (response) => response.json
  );
};
