import { format, setDate, startOfWeek } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { useMemo } from "react";
import { HOUR } from "../constants";

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const useWeekDays = ({ date, isMondayStart }) => {
  const memo = useMemo(() => {
    const allDaysinMonth = daysInMonth(date.getMonth(), 2022);

    const start = startOfWeek(date, { weekStartsOn: isMondayStart ? 1 : 0 });

    const res = [HOUR].concat(
      Array(7)
        .fill(parseInt(format(start, "dd"), 10))
        .map((e, index) => {
          if (e + index <= allDaysinMonth) {
            return e + index;
          }
          return undefined;
        })
    );
    const overLap = res.filter(Boolean).length;
    return res.map((e, index) => (e ? e : index + 1 - overLap));
  }, [date, isMondayStart]);

  return memo;
};

export const formatByZone = ({ date, formatStr = "yyyy-MM-dd HH:mm:ss" }) => {
  // return formatInTimeZone(date, "Europe/Paris", formatStr);
  return format(date, formatStr);

};

export const formatEventByDate = (currentDate, numberOfDayInMonth) => {
  const cellDate = setDate(currentDate, numberOfDayInMonth);
  const formated = formatByZone({
    date: cellDate,
    formatStr: "yyyy-MM-dd"
  });

  return formated;
};
