import { AxiosResponse } from "axios";

export type IQuerySuccess<T> = ((data: AxiosResponse<T, any>) => void) | undefined
export type IQueryError = ((err: unknown) => void) | undefined

export interface IQuerySuccessError<T> {
  onSuccess?: IQuerySuccess<T>;
  onError?: IQueryError;
}
