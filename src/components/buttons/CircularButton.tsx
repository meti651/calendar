import React from "react";

interface CircularButtonProps {
  text: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string
}

const CircularButton: React.FC<CircularButtonProps> = ({ text, onClick = () => null, style, className }: CircularButtonProps) => {
  return (
    <button type="button" onClick={onClick} style={style} className={className}>
      {text}
    </button>
  );
};

export default CircularButton;
