import { useQuery } from "react-query";
import { queryKeys } from "../../global/queryKeys";
import { axiosInstance } from "../../helpers/axios";
import { Accordion } from "../../models/accordion";

const getAccordion = (id: number) => {
  return axiosInstance.get<Accordion>(`/accordions/${id}`);
};

export const useGetAccordion = (id: number) => {
  return useQuery(queryKeys().get("ACCORDIONS")!, () => getAccordion(id));
};
