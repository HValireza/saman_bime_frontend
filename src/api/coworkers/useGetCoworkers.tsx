import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Coworker } from "../../models/coworker";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getCoworkers = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Coworker>>("/coworkers", {
    params,
  });
};

export const useGetCoworkers = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Coworker>>
) => {
  return useQuery(queryKeys().get("COWORKERS")!, () => getCoworkers(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
