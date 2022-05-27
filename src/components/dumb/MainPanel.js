import { HOUR } from "../../constants";
import { formatByZone, formatEventByDate } from "../../utils";
import { GridContainer } from "../common/Grid";
import { Day } from "./Day";
import { Hour } from "./Hour";
import { withData } from "../hocs/withData";
import { withEvents } from "../hocs/withEvents";

const MainPanelInner = ({ weekdays, currentDate, events }) => {
  const startOfWeek = formatEventByDate(currentDate, weekdays[1]);

  return (
    <div className="calendar">
      <GridContainer>
        {weekdays.map((item, index) => {
          if (item === HOUR) {
            return <Hour key={item} />;
          }
          const formated = formatEventByDate(currentDate, item);
          const eventsPerDay = events[startOfWeek] !== undefined ?(events[startOfWeek][formated]||[]):[];
          
          return (
            <Day
              className={
                item ===
                parseInt(
                  formatByZone({ date: currentDate, formatStr: "dd" }),
                  10
                )
                  ? "today"
                  : ""
              }
              events={eventsPerDay}
              date={currentDate}
              key={item + index}
              day={item}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};

export const MainPanel = ( withData(withEvents(MainPanelInner)));
