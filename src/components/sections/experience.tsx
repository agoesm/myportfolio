import React from "react";
import ExperienceItem from "../items/experience_item";
import { experienceData } from "@/utils/dummy";
import SectionTitle from "../elements/section_title";

const ExperienceSection = () => {
  return (
    <div className="mb-10">
      <SectionTitle title="Experience" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-11">
        {experienceData.map(
          (
            item: {
              company: string;
              role: string;
              startDate: string;
              endDate: string;
              description: string;
            },
            index: number
          ) => (
            <div className="flex-1" key={index}>
              <ExperienceItem
                company={item.company}
                role={item.role}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
