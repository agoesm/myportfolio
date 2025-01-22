import React from "react";

type ExperienceItemProps = {
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
};

const ExperienceItem = ({
  company,
  role,
  startDate,
  endDate,
  description,
}: ExperienceItemProps) => (
  <div className="w-full">
    <div className="p-1 mb-4 border-[1px] border-primary w-fit ">
      <p className="text-primary text-sm">
        {startDate} - {endDate}
      </p>
    </div>
    <h3 className="text-base md:text-lg font-semibold">{company}</h3>
    <h3 className="text-sm md:text-base mb-5">{role}</h3>
    <p className="text-black text-sm md:text-base text-justify">
      {description}
    </p>
  </div>
);

export default ExperienceItem;
