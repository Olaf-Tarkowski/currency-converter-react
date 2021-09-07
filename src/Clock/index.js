import { useEffect, useState } from "react";
import "./style.css"

const time = (date) => date.toLocaleString("en-UK", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute:"numeric",
  second:"numeric",
})

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
        setDate(new Date());
      });
    }, []);

    return(
        <p className="clock">
            Today is {time(date)}
        </p>
    );
}

export default Clock;