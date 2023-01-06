import { useEffect, useState } from "react";
import axios from "axios";
import { axiosUrl } from "../../../global/defaultAxiosUrl";
import { NewsEnum } from "../../../global/news.enum";

const GetNews = (field: NewsEnum | null, pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [field]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: axiosUrl + "/api/news",
      params: { field, page: pageNumber },
    })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setErrorStatus(e.status);
      });
  }, [field, pageNumber]);
  return { loading, error, errorStatus, data, hasMore };
};

export default GetNews;
