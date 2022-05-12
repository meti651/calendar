import React from "react";
import useFetch from "../../app/hooks/useFetch";
import { eventServices } from "../../app/services/events.service";
import CalendarBody from "../../components/Calendar/CalendarBody";
import DateIndicator from "../../components/DateIndicator/DateIndicator";

const Calendar: React.FC = () => {
  const [events, isLoading, errors] = useFetch(eventServices.getEvents, []);

  return (
    <div>
      <DateIndicator date={Date.now()} />
      <CalendarBody events={[]} />
    </div>
  );
};

export default Calendar;
