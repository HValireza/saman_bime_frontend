import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Card } from "../../models/card";

const getCard = (id: number) => {
  return axiosInstance.get<Card>(`/cards/${id}`);
};

export const useGetCard = (id: number) => {
  return useQuery(queryKeys().get("CARDS")!, () => getCard(id));
};
