import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Card } from "../../models/card";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getCards = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Card>>("/cards", {
    params,
  });
};

export const useGetCards = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Card>>
) => {
  return useQuery(queryKeys().get("CARDS")!, () => getCards(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
