import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Content } from "../../models/content";

const getContent = (id: number) => {
  return axiosInstance.get<Content>(`/contents/${id}`);
};

export const useGetContent = (id: number) => {
  return useQuery(queryKeys({ id }).get("CONTENTS")!, () => getContent(id));
};
