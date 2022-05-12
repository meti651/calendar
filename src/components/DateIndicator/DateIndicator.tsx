import React from "react";
import { formatDate } from "../../app/utility/format.utility";
import CircularButton from "../buttons/CircularButton";

interface DateIndicatorProps {
  date: string | number;
  onNextDate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPreviousDate?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DateIndicator: React.FC<DateIndicatorProps> = ({
  date,
  onNextDate = () => null,
  onPreviousDate = () => null,
}: DateIndicatorProps) => {
  return (
    <div className="flex align-items-center gap-2">
      <CircularButton text="<" onClick={onPreviousDate} />
      <button type="button">{formatDate(date)}</button>
      <CircularButton text=">" onClick={onNextDate} />
    </div>
  );
};

export default DateIndicator;
