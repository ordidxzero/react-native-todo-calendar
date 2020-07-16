import React from "react";
import { View } from "react-native";
import { getCalendarBodyUtils } from "./dayjs";
import Week from "./Week";
import Day from "./Day";

function Body({ month }: { month: number }) {
  const { startWeek, endWeek, currentWeek } = getCalendarBodyUtils(month);
  const weeks = Array.from(
    { length: endWeek - startWeek + 1 },
    (_, i) => startWeek + i
  );
  return (
    <View>
      {weeks.map((week) => {
        const days = Array(7).fill(0);
        const weekUtil = currentWeek(week);
        return (
          <Week key={week}>
            {days.map((_, index) => {
              const dayProps = weekUtil(index);
              return <Day key={dayProps.currentDate} {...dayProps} />;
            })}
          </Week>
        );
      })}
    </View>
  );
}

export default Body;
