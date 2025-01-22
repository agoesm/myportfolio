import React from "react";

type EducationItemProps = {
  instantion: string;
  graduate: string;
  gpa: string;
  description: string;
  startDate: string;
  endDate: string;
};

const EducationItem = ({
  instantion,
  graduate,
  gpa,
  startDate,
  endDate,
  description,
}: EducationItemProps) => (
  <div className="w-full">
    <div className="p-1 mb-4 border-[1px] border-primary w-fit ">
      <p className="text-primary text-sm">
        {startDate} - {endDate}
      </p>
    </div>
    <h3 className="text-base md:text-lg font-semibold">{instantion}</h3>
    <h3 className="text-sm md:text-base mb-5">
      {graduate} {gpa}
    </h3>
    <p className="text-black text-sm md:text-base text-justify">
      {description}
    </p>
  </div>
);

export default EducationItem;
