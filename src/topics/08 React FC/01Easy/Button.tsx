import React from "react";

interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: string[];
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  children,
}) => {
  const buttonStyle =
    variant === "secondary" ? "secondary-button" : "primary-button";

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
