import { useEffect, useState } from "react";
import "./style.css"

const Clock = () => {
    const [date, setDate] = useState();

    useEffect(() => {
      setInterval(() => {
        const time = new Date();
        setDate(time.toLocaleString(undefined, {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute:"numeric",
          second:"numeric",
        }))
      });
    }, [date]);

    return(
        <p className="clock">
            Dzisiaj jest {date}
        </p>
    );
}

export default Clock;