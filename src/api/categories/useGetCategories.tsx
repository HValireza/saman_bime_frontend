import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Category } from "../../models/category";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getCategories = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Category>>("/categories", {
    params,
  });
};

export const useGetCategories = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Category>>
) => {
  return useQuery(queryKeys().get("CATEGORIES")!, () => getCategories(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
