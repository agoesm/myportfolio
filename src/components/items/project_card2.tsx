import Image from "next/image";
// import Link from "next/link";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  github: string | null;
  liveDemo: string | null;
  onClick: () => void;
};

const ProjectCard2 = ({
  title,
  description,
  techStack,
  image,
  // github,
  // liveDemo,
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      className="relative group w-80 h-64 overflow-hidden rounded-md shadow-lg"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-100"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex flex-col justify-center items-center text-center text-white p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-2 line-clamp-2 overflow-hidden text-ellipsis">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {techStack.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="py-1 px-3 rounded-md font-mono text-sm bg-black bg-opacity-25"
            >
              {item}
            </div>
          ))}
        </div>

        {/* <div className="flex flex-row gap-4 mt-4">
          {github && (
            <Link href={github} target="_blank">
              <FaGithub size={20} />
            </Link>
          )}
          {liveDemo && (
            <Link href={liveDemo} target="_blank">
              <FaExternalLinkAlt size={20} />
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard2;
