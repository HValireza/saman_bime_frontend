interface DeepArray<T> extends Array<T | DeepArray<T>> {}
type Deep<T> = T | DeepArray<T>;

export const deepFlat = <T>(arr: Deep<T>): T[] => {
  if (!Array.isArray(arr)) return [arr];
  return arr.reduce(
    (r: T[], e) => (Array.isArray(e) ? r.push(...deepFlat(e)) : r.push(e), r),
    []
  ) as T[];
};
