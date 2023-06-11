import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Author } from "../../models/author";

const getAuthor = (id: number) => {
  return axiosInstance.get<Author>(`/authors/${id}`);
};

export const useGetAuthor = (id: number) => {
  return useQuery(queryKeys({ id }).get("AUTHORS")!, () => getAuthor(id));
};
