import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useColleges = () => {
  const { loading } = useAuth();
  const { data: colleges = [], refetch } = useQuery({
    queryKey: [],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_LINK}/colleges`);
      return res.data;
    },
  });
  return [colleges, refetch];
};

export default useColleges;
