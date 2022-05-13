import React, { useEffect, useRef, useState } from "react";

import "./DatePicker.css";

interface DatePickerProps {
  value: string;
  onValueChange?: (newValue: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value: initValue,
  onValueChange = (newValue) => null,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(initValue);
  const dateInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!dateInput.current) return;
    if (isOpen) {
      dateInput.current.focus();
      return;
    }
    dateInput.current.blur();
  }, [isOpen]);

  useEffect(() => {
    if (initValue === value) return;
    setValue(initValue);
  }, [initValue]);

  return (
    <div className="cl-date-picker_container">
      <input value={value} type="text" />
      <div className="cl-date-picker_date-picker-wrapper">
        <input
          className="cl-date-picker_date-picker"
          ref={dateInput}
          type="date"
          value={value}
          onChange={({ target }) => {
            setValue(target.value);
            onValueChange(target.value);
          }}
          onBlur={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default DatePicker;
