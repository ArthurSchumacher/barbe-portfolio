import React from "react";

interface TitleProps {
  label: string;
  id: string;
}

function Title({ label, id }: TitleProps) {
  return (
    <div className="flex items-center justify-center" id={`${id}`}>
      <p className="sm:text-4xl text-2xl">{label}</p>
    </div>
  );
}

export default Title;
