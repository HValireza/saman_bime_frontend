import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { News } from "../../models/news";

const getOneNews = (id: number) => {
  return axiosInstance.get<News>(`/news/${id}`);
};

export const useGetOneNews = (id: number) => {
  return useQuery(queryKeys({ id }).get("NEWS")!, () => getOneNews(id));
};
