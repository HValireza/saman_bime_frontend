import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Intro } from "../../models/intro";
import { Page } from "../../models/page";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getIntros = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Intro>>("/intros", {
    params,
  });
};

export const useGetIntros = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Intro>>
) => {
  return useQuery(queryKeys().get("INTROS")!, () => getIntros(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
