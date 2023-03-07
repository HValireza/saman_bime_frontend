import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";
import { SamanGoals } from "../../models/samanGoals";

const getSamanGoals = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<SamanGoals>>("/saman_goals", {
    params,
  });
};

export const useGetSamanGoals = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<SamanGoals>>
) => {
  return useQuery(queryKeys().get("SAMANGOALS")!, () => getSamanGoals(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
