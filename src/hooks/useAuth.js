import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";

export const useAuth = () => {
  const auth = useContext(UserContext);
  return auth;
};
