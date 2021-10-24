import { useState, useEffect } from "react";

export const useRatesData = () => {
  const base_url = "https://api.exchangerate.host/latest?base=PLN"
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(base_url);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const { rates, date } = await response.json();
        setRatesData({ state: "success", rates, date });

      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchApi, 2_000);
  }, []);
  return ratesData;
};