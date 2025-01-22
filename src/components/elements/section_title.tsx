import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="text-xl font-bold mb-4 underline underline-offset-5 decoration-4 inline-block decoration-secondary">
      {title}
    </h1>
  );
};

export default SectionTitle;
