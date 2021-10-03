import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    clearInterval(intervalId);
  }, []);

  return date;
};