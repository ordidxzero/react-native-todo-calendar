// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer, useContext, Dispatch } from 'react';

type CalendarState = {
  selectedDay?: string;
  onPress: any;
};

type Action =
  | { type: 'SET_SELECTED_DAY'; selectedDay?: string }
  | { type: 'SET_ON_PRESS'; onPress: any };

type CalendarDispatch = Dispatch<Action>;

const CalendarStateContext = createContext<CalendarState | undefined>(
  undefined,
);

const CalendarDispatchContext = createContext<CalendarDispatch | undefined>(
  undefined,
);

function calendarReducer(state: CalendarState, action: Action): CalendarState {
  switch (action.type) {
    case 'SET_SELECTED_DAY':
      return { ...state, selectedDay: action.selectedDay };
    case 'SET_ON_PRESS':
      return { ...state, onPress: action.onPress };
    default:
      throw new Error('Unhandled action');
  }
}

export default function CalendarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, dispatch] = useReducer(calendarReducer, {
    selectedDay: undefined,
    onPress: null,
  });

  return (
    <CalendarDispatchContext.Provider value={dispatch}>
      <CalendarStateContext.Provider value={data}>
        {children}
      </CalendarStateContext.Provider>
    </CalendarDispatchContext.Provider>
  );
}

export function useCalendarState() {
  const state = useContext(CalendarStateContext);
  if (!state) throw new Error('CalendarContextProvider not found');
  return state;
}

export function useCalendarDispatch() {
  const dispatch = useContext(CalendarDispatchContext);
  if (!dispatch) throw new Error('CalendarContextProvider not found');
  return dispatch;
}
