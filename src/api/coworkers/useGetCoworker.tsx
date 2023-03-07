import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Coworker } from "../../models/coworker";

const getCoworker = (id: number) => {
  return axiosInstance.get<Coworker>(`/coworkers/${id}`);
};

export const useGetCoworker = (id: number) => {
  return useQuery(queryKeys().get("COWORKERS")!, () => getCoworker(id));
};
