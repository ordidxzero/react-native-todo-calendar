import React from "react";
import { View, Text } from "react-native";

// TODO: Sunday -> Red, Saturday -> Blue Color를 적용해야됨.
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function DayNames() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 5,
      }}
    >
      {dayNames.map((day, index) => (
        <View
          key={day}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={[
              {
                fontWeight: "600",
              },
              index === 0 && { color: "red" },
              index === 6 && { color: "blue" },
            ]}
          >
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default DayNames;
