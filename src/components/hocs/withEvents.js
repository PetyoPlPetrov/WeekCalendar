import { addDays, setDate } from "date-fns";
import { useEffect } from "react";
import { formatEventByDate } from "../../utils";

export const withEvents = (Component) => ({
  weekdays,
  loadNewEvents,
  currentDate,
  events,
  ...props
}) => {

  
  useEffect(() => {
    const allInCurrentMonth = currentDate.getDate() <7;
    const prevMonth = allInCurrentMonth ? addDays(currentDate, -8): currentDate

    const startDate = formatEventByDate(prevMonth, weekdays[1]);
    const endDate = formatEventByDate(
      currentDate,
      weekdays[weekdays.length - 1]
    );

    loadNewEvents({
      startDate,
      endDate
    });

  }, [weekdays, loadNewEvents, currentDate]);

  return <Component events={events} currentDate={currentDate} weekdays={weekdays} {...props} />;
};
