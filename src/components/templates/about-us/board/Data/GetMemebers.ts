import axios from "axios";
import { useEffect, useState } from "react";
import { axiosUrl } from "../../../../../global/defaultAxiosUrl";

export const GetBoardMembers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: axiosUrl + "/api/board-members",
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
  }, []);

  return { loading, data, error };
};

export const GetManagers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: axiosUrl + "/api/managers",
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
  }, []);

  return { loading, data, error };
};

export const GetBoardMember = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setData({});
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: axiosUrl + "/api/board-members/" + id,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [id]);
  return { loading, error, data };
};

export const GetManager = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    setData({});
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: axiosUrl + "/api/managers/" + id,
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [id]);
  return { loading, error, data };
};
