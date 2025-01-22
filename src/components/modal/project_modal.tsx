import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import GeneralModal from "./general_modal";

type ProjectDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    client: string;
    category: string;
    techStack: string[];
  };
};

const ProjectModal = ({ open, onClose, project }: ProjectDetailsModalProps) => {
  return (
    <GeneralModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          my: 3,
        }}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          //   objectFit="cover"
          style={{ borderRadius: 8 }}
        />
      </Box>

      <h2
        id="project-details-modal"
        className="text-2xl font-bold font-mono mb-2"
      >
        {project.title}
      </h2>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((item, index) => (
          <div
            className="bg-secondary py-1 px-3 rounded-full font-mono"
            key={index}
          >
            <p className="text-sm items-center">{item}</p>
          </div>
        ))}
      </div>

      <p className="text-base font-mono text-justify mb-5">
        {project.description}
      </p>

      <p className="text-base font-mono mb-5">
        <span className="font-semibold">Client:</span> {project.client}
      </p>

      <p className="text-base font-mono mb-5">
        <span className="font-semibold">Category:</span>{" "}
        {project.category === "web" ? "Web App" : "Mobile App"}
      </p>

      {/* <p className="text-base font-semibold font-mono mb-2">Tech Stack:</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((item, index) => (
          <div
            className="bg-secondary py-1 px-3 rounded-full font-mono"
            key={index}
          >
            <p className="items-center">{item}</p>
          </div>
        ))}
      </div> */}
    </GeneralModal>
  );
};

export default ProjectModal;
