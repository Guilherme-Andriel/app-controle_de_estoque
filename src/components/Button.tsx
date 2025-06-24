import React from "react";

interface ButtonProps {
  texto: string;
  className?: string;
}

function Button({ texto, className }: ButtonProps) {
  return <button className={` ${className}`}>{texto}</button>;
}

export default Button;
