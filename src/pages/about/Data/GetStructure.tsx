import axios from "axios";
import { useEffect, useState } from "react";
import { axiosUrl } from "../../../global/defaultAxiosUrl";

const GetStructure = () => {
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: axiosUrl + "/api/news",
      params: { page: 1, count: 4 },
    })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  },[]);

  return { loading, data, error };

};

export default GetStructure;
