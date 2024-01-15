"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://tracking.bosta.co/shipments/track/${id}`
        );
        setData(res.data);
      } catch (error) {
        setError(error.response.data.error || "Invalid tracking number!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return { data, loading, error };
};

export default useFetch;
