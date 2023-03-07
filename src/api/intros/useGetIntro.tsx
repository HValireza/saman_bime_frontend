import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Intro } from "../../models/intro";

const getIntro = (id: number) => {
  return axiosInstance.get<Intro>(`/intros/${id}`);
};

export const useGetIntro = (id: number) => {
  return useQuery(queryKeys().get("INTROS")!, () => getIntro(id));
};
