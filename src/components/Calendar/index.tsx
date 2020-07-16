import React from 'react';
import { View, Dimensions } from 'react-native';
import DayNames from './DayNames';
import Header from './Header';
import dayjs from './dayjs';
import Body from './Body';
import CalendarContextProvider, {
  useCalendarDispatch,
} from '../../context/CalendarContext';

const { width } = Dimensions.get('window');

function Calendar({
  month,
  onPress,
  selectedDay,
}: {
  month: number;
  onPress: any;
  selectedDay?: string;
}) {
  const dispatch = useCalendarDispatch();
  const header = dayjs().month(month).format('MMMM YYYY');
  dispatch({ type: 'SET_ON_PRESS', onPress });
  dispatch({ type: 'SET_SELECTED_DAY', selectedDay });
  return (
    <View style={{ width }}>
      <Header title={header} />
      <DayNames />
      <Body month={month} />
    </View>
  );
}

function CalendarWrapper(props: {
  month: number;
  onPress: any;
  selectedDay?: string;
}) {
  return (
    <CalendarContextProvider>
      <Calendar {...props} />
    </CalendarContextProvider>
  );
}

export default CalendarWrapper;
