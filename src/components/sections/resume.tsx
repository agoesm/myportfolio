import React from "react";
import ExperienceSection from "./experience";
import EducationSection from "./education";
import DefaultButton from "../elements/button";
import SectionTitle from "../elements/section_title";

const Resume = () => {
  return (
    <div className="flex flex-col justify-center mx-10 lg:mx-auto mt-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="mb-20">
        <SectionTitle title="About Me" />
        <p className="text-sm md:text-base text-justify mb-4">
          I am a mobile and front-end developer with over 3 years of experience
          in developing user-friendly and responsive applications. I have
          expertise in various technologies and frameworks such as React Native,
          Flutter, and React.js, as well as experience working with
          cross-functional teams to deliver innovative and effective solutions.
          I constantly strive to stay updated with the latest technological
          advancements and implement them in my projects to ensure optimal
          quality and performance.
        </p>
        <DefaultButton
          title="Download CV"
          onClick={() => {
            console.log("Download CV COYYYYY");
          }}
        />
      </div>

      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default Resume;
