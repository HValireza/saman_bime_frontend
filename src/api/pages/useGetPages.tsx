import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Page } from "../../models/page";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getPages = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Page>>("/pages", {
    params,
  });
};

export const useGetPages = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Page>>
) => {
  return useQuery(queryKeys().get("PAGES")!, () => getPages(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
