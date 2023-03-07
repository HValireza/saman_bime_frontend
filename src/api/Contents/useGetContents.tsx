import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Content } from "../../models/content";
import { Page } from "../../models/page";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getContents = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Content>>("/contents", {
    params,
  });
};

export const useGetContents = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Content>>
) => {
  return useQuery(queryKeys().get("CONTENTS")!, () => getContents(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
