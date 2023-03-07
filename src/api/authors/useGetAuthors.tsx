import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Author } from "../../models/author";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getAuthors = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Author>>("/authors", {
    params,
  });
};

export const useGetAuthors = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Author>>
) => {
  return useQuery(queryKeys().get("AUTHORS")!, () => getAuthors(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
