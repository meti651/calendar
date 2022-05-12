import React from 'react'
import { Event } from '../../app/models/Event'

interface CalendarBodyProps {
  events: Event[] 
}

const CalendarBody: React.FC<CalendarBodyProps> = ({events}: CalendarBodyProps) => {
  return (
    <div>CalendarBody</div>
  )
}

export default CalendarBody
