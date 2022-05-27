import { addDays, endOfDay } from "date-fns";
import { formatByZone } from "../../utils";
import { FlexContainer } from "../common/Flex";

const ControlPanelInner = ({
  onStartOfTheWeekChange,
  onDateChange,
  currentDate,
  isBetweenTwoMonthes
}) => {
  const prevMonth = addDays(currentDate,-10);

  return (
    <FlexContainer
      minWidth="900px"
      justifyContent="flex-start"
      alignItems="center"
      margin='0.5em'
      gap='0.5em'
      border='1px solid #f0f0f0'
    >
      <div>
        <label htmlFor="start">Start week Sunday</label>
        <input
          onClick={() => {
            onStartOfTheWeekChange((e) => !e);
          }}
          id="start"
          type="checkbox"
        ></input>
      </div>
      <button
        className="btn"
        onClick={() => {
          onDateChange(new Date());
        }}
      >
        Today
      </button>
      <button
        className="btn"
        onClick={() => {
          onDateChange(addDays(currentDate, -7));
        }}
      >
        Prev
      </button>
      <button
        className="btn"
        onClick={() => {
          onDateChange(addDays(currentDate, 7));
        }}
      >
        Next
      </button>

      <div>
        {isBetweenTwoMonthes ? (
          <FlexContainer>
            {formatByZone({
              date: endOfDay(prevMonth),
              formatStr: "yyyy-MM"
            })}
            ~{formatByZone({ date: currentDate, formatStr: "yyyy-MM" })}
          </FlexContainer>
        ) : (
          formatByZone({ date: endOfDay(currentDate), formatStr: "yyyy-MM" })
        )}
      </div>
    </FlexContainer>
  );
};

export const ControlPanel = ControlPanelInner;
