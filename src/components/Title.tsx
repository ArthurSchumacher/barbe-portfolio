import React from "react";

interface TitleProps {
  label: string;
}

function Title({ label }: TitleProps) {
  return (
    <div className="flex items-center justify-center">
      <p className="sm:text-4xl text-2xl">{label}</p>
    </div>
  );
}

export default Title;
