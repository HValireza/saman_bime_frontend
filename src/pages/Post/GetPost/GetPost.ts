import axios from "axios";
import { useEffect, useState } from "react";
import { axiosUrl } from "../../../global/defaultAxiosUrl";

const GetPost = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState(0);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setData({});
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: axiosUrl + "/api/news/" + id,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setErrorStatus(e.status);
      });
  }, [id]);
  return { loading, error, errorStatus, data };
};

export default GetPost;
