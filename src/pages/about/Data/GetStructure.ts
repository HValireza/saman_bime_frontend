import axios from "axios";
import { useEffect, useState } from "react";
import { axiosUrl } from "../../../global/defaultAxiosUrl";

const GetStructure = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shareHolderStructure, setShareHolderStructure] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: axiosUrl + "/api/share-holder-structures",
    })
      .then((res) => {
        setShareHolderStructure(res.data.data[0]);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        console.log(e);
      });
  }, []);

  return { loading, shareHolderStructure, error };
};

export default GetStructure;
