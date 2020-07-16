import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(utc);
dayjs.extend(weekOfYear);

function monthFormatter(month: number): any {
  if (month >= 0) {
    return month;
  } else {
    return monthFormatter(12 + month);
  }
}

export const getCalendarBodyUtils = (month: number) => {
  const currentMonth = dayjs().month(month);
  const cloneCurrentMonth = () => currentMonth.clone();
  const currentWeek = (week: number) => (index: number) => {
    const currentDate = dayjs().week(week).startOf("week").add(index, "day"); // Calendar를 생성할 주의 생성할 날짜
    return {
      isOverMonth: currentDate.month() !== monthFormatter(month), // Calendar를 생성할 달을 넘었는 지
      currentDate: currentDate.format("YYYY-MM-DD"), // 현재 생성될 날짜
    };
  };
  return {
    startWeek: cloneCurrentMonth().startOf("month").week(), // Calendar를 생성할 달의 첫 주
    endWeek:
      cloneCurrentMonth().endOf("month").week() === 1
        ? 53
        : cloneCurrentMonth().endOf("month").week(), // Calendar를 생성할 달의 마지막 주
    currentWeek, // Calendar를 생성할 주
  };
};

export const getDayUtils = (date: string) => {
  const currentDate = dayjs(date);
  return {
    dayOfMonth: currentDate.format("D"), // 현재 생성될 날짜 (0 ~ 31 형식)
    isToday: date === dayjs().format("YYYY-MM-DD"), // 오늘인지
    isSunday: currentDate.day() === 0, // 일요일인지
    isSaturday: currentDate.day() === 6, // 토요일인지
  };
};

export default dayjs;
