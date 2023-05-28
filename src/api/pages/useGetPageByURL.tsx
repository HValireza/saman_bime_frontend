import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Page } from "../../models/page";
import { API_BASE_URL } from "../../global/constans";

const getPageByURL = (url: string) => {
  const uri = decodeURI(url.substring(1));
  return axiosInstance.get<Page>(`${API_BASE_URL}/pages`, {
    params: { url: uri },
  });
};
export const useGetPageByURL = (url: string) => {
  return useQuery(queryKeys(url).get("PAGES")!, () => getPageByURL(url));
};
