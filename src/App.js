import { useState } from "react";
import "./styles.css";
import { useWeekDays } from "./utils";

import { ControlPanel } from "./components/dumb/Panel";
import { MainPanel } from "./components/dumb/MainPanel";

function Calendar() {
  const [date, setCDate] = useState(new Date());
  const [startOfWeek, setStartOfWeek] = useState(true);

  const weekdays = useWeekDays({ date, isMondayStart: startOfWeek });

  const isBetweenTwoMonthes =
    parseInt(weekdays[1], 10) > parseInt(weekdays[weekdays.length - 1], 10);

    return (
    <div className="app">
      <ControlPanel
        currentDate={date}
        isBetweenTwoMonthes={isBetweenTwoMonthes}
        onDateChange={setCDate}
        onStartOfTheWeekChange={setStartOfWeek}
      />
      <MainPanel weekdays={weekdays} currentDate={date} />
    </div>
  );
}

export default Calendar;
