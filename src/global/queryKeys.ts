import { QueryKey } from "react-query"
import { enumKeys } from "../helpers/enumKeys"
import { IPaginateQuery } from "../models/paginateQuery";

enum queries {
  CATEGORIES,
  PAGES,
  ACCORDIONS,
  AUTHORS,
  CARDS,
  CONTENTS,
  COWORKERS,
  INTROS,
  NEWS,
  SAMANGOALS,
  SAMANSERVICES,
  PAGEROUTE,
}

interface IQueryIdVariable {
  id: number;
}

type QueryVariables = IPaginateQuery | IQueryIdVariable | string | undefined; 

const _queryKeys = new Map<keyof typeof queries, QueryKey>()

const getQueryKeyFn = (key: string, variables?: QueryVariables): QueryKey => {
  return variables === undefined
    ? [key]
    : [key, variables]
}

export const queryKeys = (variables?: QueryVariables) => {
  for (const q of enumKeys(queries)) {
    _queryKeys.set(q, getQueryKeyFn(q, variables))
  }

  return _queryKeys
} 
