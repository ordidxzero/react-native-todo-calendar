import React from "react";
import { View, Text } from "react-native";

function Header({ title }: { title: string }) {
  return (
    <View style={{ alignItems: "center", marginVertical: 15 }}>
      <Text style={{ fontSize: 19, fontWeight: "300" }}>{title}</Text>
    </View>
  );
}

export default Header;
