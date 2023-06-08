import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { News } from "../../models/news";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getAllNews = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<News>>("/news", {
    params,
  });
};

export const useGetAllNews = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<News>>
) => {
  return useQuery(queryKeys(params).get("NEWS")!, () => getAllNews(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
