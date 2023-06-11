import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { SamanService } from "../../models/samanService";

const getSamanService = (id: number) => {
  return axiosInstance.get<SamanService>(`/saman_services/${id}`);
};

export const useGetSamanService = (id: number) => {
  return useQuery(queryKeys({ id }).get("SAMANSERVICES")!, () =>
    getSamanService(id)
  );
};
