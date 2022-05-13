import React, { useCallback, useState } from "react";
import useFetch from "../../app/hooks/useFetch";
import { eventServices } from "../../app/services/events.service";
import CalendarBody from "../../components/Calendar/CalendarBody";
import DateIndicator from "../../components/DateIndicator/DateIndicator";
import "./Calendar.css";

const Calendar: React.FC = () => {
  const [events, isLoading, errors] = useFetch(eventServices.getEvents, []);
  const [date, setDate] = useState<number | string>(Date.now());

  const nextDay = useCallback(() => {
    const currentDay = new Date(date);
    const nextDay = new Date(currentDay);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay.toISOString());
  }, [date]);

  const previousDay = useCallback(() => {
    const currentDay = new Date(date);
    const nextDay = new Date(currentDay);
    nextDay.setDate(nextDay.getDate() - 1);
    setDate(nextDay.toISOString());
  }, [date]);

  return (
    <div className="cl-calendar_container">
      <div className="cl-calendar_header">
        <DateIndicator
          date={date}
          onDateChange={(newDate) => setDate(newDate)}
          onNextDate={() => nextDay()}
          onPreviousDate={() => previousDay()}
        />
      </div>
      <CalendarBody events={events} />
    </div>
  );
};

export default Calendar;
