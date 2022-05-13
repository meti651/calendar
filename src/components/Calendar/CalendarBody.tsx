import React, { useRef } from "react";
import { Event } from "../../app/models/Event";
import './CalendarBody.css';

interface CalendarBodyProps {
  events: Event[];
}

const CalendarBody: React.FC<CalendarBodyProps> = ({ events }: CalendarBodyProps) => {
  const { current: hours } = useRef(Array.from(Array(24), (_, i) => `${i.toString().padStart(2, "0")}:00`));

  return (
    <div className="cl-calendar_body">
      <ul>
        {hours.map((hour) => (
          <li>{hour}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarBody;
