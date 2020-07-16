import React from "react";
import { View } from "react-native";

function Week({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 7,
      }}
    >
      {children}
    </View>
  );
}

export default Week;
