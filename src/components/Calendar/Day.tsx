import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { getDayUtils } from "./dayjs";
import {
  useCalendarState,
  useCalendarDispatch,
} from "../../context/CalendarContext";

const color = {
  grey: { color: "grey" },
  sunday: { color: "red" },
  saturday: { color: "blue" },
  today: { color: "white", backgroundColor: "blue" },
  selectedDay: { color: "white", backgroundColor: "green" },
};

function Day({
  currentDate,
  isOverMonth,
}: {
  currentDate: string;
  isOverMonth: boolean;
}) {
  const { onPress, selectedDay } = useCalendarState();
  const dispatch = useCalendarDispatch();
  const { dayOfMonth, isToday, isSunday, isSaturday } = getDayUtils(
    currentDate
  );
  const isSelectedDay = currentDate === selectedDay;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => {
        dispatch({ type: "SET_SELECTED_DAY", selectedDay: currentDate });
        onPress(currentDate);
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            isSaturday && color.saturday,
            isSunday && color.sunday,
            isToday && color.today,
            isSelectedDay && color.selectedDay,
            isOverMonth && color.grey,
          ]}
        >
          {dayOfMonth}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Day;
