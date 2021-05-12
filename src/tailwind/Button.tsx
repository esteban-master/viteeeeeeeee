import React from "react";

type Props = {
  label: string;
  color?: "purple" | "red" | "normal";
  icon?: JSX.Element;
  uppercase?: boolean;
};

const bgColor = {
  purple: {
    normal: "bg-purple-500",
    hover: "hover:bg-purple-600",
  },
  red: {
    normal: "bg-red-500",
    hover: "hover:bg-red-600",
  },
  normal: {
    normal: "bg-blue-500",
    hover: "hover:bg-blue-600",
  },
};

export const Button = ({
  color = "normal",
  label,
  icon,
  uppercase = false,
}: Props) => {
  return (
    <button
      className={`${bgColor[color].normal} ${bgColor[color].hover} ${
        uppercase && "uppercase"
      } py-2 px-8 text-sm text-white font-bold tracking-wide rounded-md focus:outline-none flex items-center justify-center`}
    >
      <div className={`${icon ? "block" : "hidden"} mr-1`}>{icon}</div> {label}
    </button>
  );
};
