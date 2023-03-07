import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Category } from "../../models/category";

const getCategory = (id: number) => {
  return axiosInstance.get<Category>(`/categories/${id}`);
};

export const useGetCategory = (id: number) => {
  return useQuery(queryKeys().get("CATEGORIES")!, () => getCategory(id));
};
