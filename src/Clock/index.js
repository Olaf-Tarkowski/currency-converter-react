import { useEffect, useState } from "react";
import {StyledClock} from "./styled"

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
        <StyledClock>
            Today is {time(date)}
        </StyledClock>
    );
}

export default Clock;