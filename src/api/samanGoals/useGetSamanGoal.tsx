import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { SamanGoals } from "../../models/samanGoals";

const getSamanGoal = (id: number) => {
  return axiosInstance.get<SamanGoals>(`/saman_goals/${id}`);
};

export const useGetSamanGoal = (id: number) => {
  return useQuery(queryKeys().get("SAMANGOALS")!, () => getSamanGoal(id));
};
