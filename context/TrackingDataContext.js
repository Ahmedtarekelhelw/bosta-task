"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const TrackingDataContext = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (id) => {
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

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Context.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </Context.Provider>
  );
};

export default TrackingDataContext;

export const useTrackingData = () => useContext(Context);
