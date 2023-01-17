import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const time = (date) =>
  date.toLocaleString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>Today is {time(date)}</StyledClock>;
};

export default Clock;
