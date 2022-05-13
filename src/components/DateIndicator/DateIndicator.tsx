import React from "react";
import { formatDate } from "../../app/utility/format.utility";
import CircularButton from "../buttons/CircularButton";
import DatePicker from "./DatePicker";

interface DateIndicatorProps {
  date: string | number;
  onNextDate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPreviousDate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDateChange?: (newDate: string) => void;
}

const DateIndicator: React.FC<DateIndicatorProps> = ({
  date,
  onNextDate = () => null,
  onPreviousDate = () => null,
  onDateChange = (newDate) => null,
}: DateIndicatorProps) => {
  return (
    <div className="flex align-items-center justify-content-center gap-2">
      <CircularButton text="<" onClick={onPreviousDate} />
      <div>
        <DatePicker value={formatDate(date)} onValueChange={(newValue) => onDateChange(newValue)} />
      </div>
      <CircularButton text=">" onClick={onNextDate} />
    </div>
  );
};

export default DateIndicator;
