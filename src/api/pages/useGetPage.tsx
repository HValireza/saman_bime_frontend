import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Page } from "../../models/page";

const getPage = (id: number) => {
  return axiosInstance.get<Page>(`/pages/${id}`);
};

export const useGetPage = (id: number) => {
  return useQuery(queryKeys().get("PAGES")!, () => getPage(id));
};
