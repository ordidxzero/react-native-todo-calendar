import React from 'react';
import { View, Text } from 'react-native';

type TestType = { title?: string };

function Test({ title }: TestType) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>Test Success!!!</Text>
    </View>
  );
}

export default Test;
