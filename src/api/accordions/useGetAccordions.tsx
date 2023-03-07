import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Accordion } from "../../models/accordion";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";

const getAccordions = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<Accordion>>("/accordions", {
    params,
  });
};

export const useGetAccordions = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<Accordion>>
) => {
  return useQuery(queryKeys().get("ACCORDIONS")!, () => getAccordions(params), {
    onError: querySuccessError?.onError,
    onSuccess: querySuccessError?.onSuccess,
  });
};
