import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "submit" | "button";
};

const DefaultButton = ({ title, onClick, type }: ButtonProps) => {
  return (
    <button
      className="bg-primary w-fit px-6 py-2 text-white text-sm md:text-base hover:bg-hoverDark transition-all duration-300"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default DefaultButton;
