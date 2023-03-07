import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { IPaginateQuery } from "../../models/paginateQuery";
import { IPaginateResponse } from "../../models/paginateResponse";
import { IQuerySuccessError } from "../../models/querySuccessError";
import { SamanService } from "../../models/samanService";

const getSamanServices = (params?: IPaginateQuery) => {
  return axiosInstance.get<IPaginateResponse<SamanService>>("/saman_services", {
    params,
  });
};

export const useGetSamanServices = (
  params?: IPaginateQuery,
  querySuccessError?: IQuerySuccessError<IPaginateResponse<SamanService>>
) => {
  return useQuery(
    queryKeys().get("SAMANSERVICES")!,
    () => getSamanServices(params),
    {
      onError: querySuccessError?.onError,
      onSuccess: querySuccessError?.onSuccess,
    }
  );
};
