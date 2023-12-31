import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useColleges = () => {
  const { loading } = useAuth();
  const { data: colleges = [], refetch } = useQuery({
    queryKey: ["colleges"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_LINK}/colleges`);
      return res.data;
    },
  });
  return [colleges, refetch];
};

export default useColleges;

// export const useCandidates = ()=>{
//   const {data: candidate = [], refetch}=useQuery({
//     queryKey: ['candidates'],
//     enabled: !loading,
//     queryFn: async () =>{
//       const res = await axios.get(`${import.meta.env.VITE_API_LINK}/candidates`)
//       return res.data
//     }
//   })
//   return [candidates, refetch]
// }
