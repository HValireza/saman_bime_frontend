import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { IQuerySuccessError } from "../../models/querySuccessError";

interface IPageRouteResult {
  route: string;
}

const getPageRoute = (id: number) => {
  return axiosInstance.get<IPageRouteResult>(`/pages/${id}/route`);
};

export const useGetFindePageRoute = (
  id: number,
  querySuccessError?: IQuerySuccessError<IPageRouteResult>
) => {
  return useQuery(queryKeys({ id }).get("PAGEROUTE")!, () => getPageRoute(id), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
    enabled: false,
  });
};
