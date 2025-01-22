import React from "react";
import Image from "next/image";
import { Card, CardContent, Chip } from "@mui/material";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  onClick: () => void;
};

const ProjectCard = ({
  title,
  description,
  image,
  category,
  onClick,
}: ProjectCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        // maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <h6 className="text-lg font-semibold mb-2">{title}</h6>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2 overflow-hidden text-ellipsis">
          {description}
        </p>

        <Chip
          label={category === "web" ? "Web App" : "Mobile App"}
          color={category === "web" ? "primary" : "secondary"}
          size="small"
        />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
