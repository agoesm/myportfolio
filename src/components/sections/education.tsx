import React from "react";
import EducationItem from "../items/education_item";
import SectionTitle from "../elements/section_title";
import { educationData } from "@/utils/dummy";

const EducationSection = () => {
  return (
    <div className="mb-20">
      <SectionTitle title="Education" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-12">
        {educationData.map(
          (
            item: {
              instantion: string;
              graduate: string;
              gpa: string;
              startDate: string;
              endDate: string;
              description: string;
            },
            index: number
          ) => (
            <div className="flex-1 mb-6" key={index}>
              <EducationItem
                instantion={item.instantion}
                graduate={item.graduate}
                gpa={item.gpa}
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

export default EducationSection;
