import axios from "axios";
import { useEffect, useState } from "react";
import { axiosUrl } from "../../../global/defaultAxiosUrl";

const GetShareholders = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shareHolders, setShareHolders] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: axiosUrl + "/api/shareholders",
    })
      .then((res) => {
        setShareHolders(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  }, []);

  return { loading, shareHolders, error };
};

export default GetShareholders;
