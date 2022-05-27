import { format, setDate, isValid } from "date-fns";
import { FlexContainer } from "../common/Flex";

export const Day = ({ day, date, className, events = [] }) => {
  const d = setDate(date, day);
  const clas = "day  " + className;
  if (!isValid(d)) {
    return;
  }

  return (
    <div className={clas}>
      <div>
        <span className={"header-day_number "}>{day}</span>
        {day !== " " && (
          <span className="header-day_name">{format(d, "EEEE")}</span>
        )}
      </div>
      <FlexContainer
        flexDirection={events.length === 1 ? "row" : "column"}
        justifyContent={events.length > 1 ? "space-around" : ""}
        gap={"3px"}
        height="100%"
      >
        {events.map((e) => (
          <div key={e.name} className={"event-" + e.type}>{e.name}</div>
        ))}
      </FlexContainer>
    </div>
  );
};
