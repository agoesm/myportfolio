import {
  FaAndroid,
  FaApple,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import {
  SiDart,
  SiGetx,
  SiGithub,
  SiGitlab,
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";

export const experienceData = [
  {
    // company: "PT. InfoPedia Terpadu",
    company: "PT. Infosys Solusi Terpadu",
    role: "Front End Developer & Mobile Developer",
    startDate: "October 2021",
    endDate: "Present",
    description:
      "Developed a web and mobile application for a banking apps, fixing issue/bugs, collaborate with other stakeholders (PM, BA, QA, and Dev) to make product requirements more clear and closer to what the user needs.",
  },
  {
    // company: "CV. Sinergi Bersama",
    company: "CV. Sinergi Spasial Indonesia",
    role: "Front End Developer (Internship)",
    startDate: "July 2020",
    endDate: "November 2020",
    description: "Developed and design a web for a client.",
  },
];
export const educationData = [
  {
    instantion: "Brawijaya University",
    graduate: "Associate of Information System",
    gpa: "(GPA: 3.79)",
    startDate: "Agustus 2018",
    endDate: "September 2021",
    description:
      "Wrote final project in Associate Degree with title The Design and Development of Mobile Based Disaster Management Information System for BPBD Malang Regency.",
  },
];

export const skillData = [
  { name: "React", color: "#61dafb", icon: <FaReact /> },
  { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
  { name: "React Native", color: "#61dafb", icon: <FaReact /> },
  { name: "Flutter", color: "#02569b", icon: <FaFlutter /> },
  { name: "JavaScript", color: "#f7df1e", icon: <FaJs /> },
  { name: "TypeScript", color: "#007acc", icon: <SiTypescript /> },
  { name: "Dart", color: "#00b4ab", icon: <SiDart /> },
  { name: "Html", color: "#e34c26", icon: <FaHtml5 /> },
  { name: "Css", color: "#264de4", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", color: "#38bdf8", icon: <SiTailwindcss /> },
  { name: "Redux", color: "#764abc", icon: <SiRedux /> },
  { name: "GetX", color: "#08b6f9", icon: <SiGetx /> },
];
export const skillData2 = [
  { name: "Android", color: "#3ddc84", icon: <FaAndroid /> },
  { name: "iOS", color: "#000000", icon: <FaApple /> },
  { name: "Firebase", color: "#ffca28", icon: <RiFirebaseFill /> },
  { name: "Github", color: "#181717", icon: <SiGithub /> },
  { name: "Gitlab", color: "#fca121", icon: <SiGitlab /> },
  { name: "Figma", color: "#a259ff", icon: <FaFigma /> },
  { name: "Jest", color: "#c21325", icon: <SiJest /> },
  {
    name: "React Testing Library",
    color: "#e33332",
    icon: <SiTestinglibrary />,
  },
];

export const portfolioData = [
  {
    title: "Merchant Business Information System",
    description:
      "Merupakan sebuah website sistem informasi yang digunakan untuk mendukung pengguna internal CIMB Niaga dalam mengelola dan menyajikan informasi secara efektif yang berfokus pada mesin EDC dan E-Commerce. Website ini juga memiliki fitur seperti analisis, pelaporan, pemeliharaan serta beberapa fitur yang lain, dimana pengguna dapat mencapai tujuan bisnis mereka, meningkatkan efisiensi operasional, dan memberikan pengalaman pengguna yang lebih baik.",
    image: "/images/project1.png",
    client: "CIMB NIAGA",
    category: "web",
    techStack: [
      "React Js",
      "React Query",
      "Material UI",
      "Jest",
      "React Testing Library",
    ],
    github: null,
    liveDemo: null,
  },
  {
    title: "ATM Business Information System",
    description:
      "Merupakan sebuah website sistem informasi yang digunakan untuk mendukung pengguna internal CIMB Niaga dalam mengelola dan menyajikan informasi secara efektif yang berfokus pada mesin ATM. Website ini juga memiliki fitur seperti analisis, pelaporan, pemeliharaan, penambahan lokasi mesin ATM serta beberapa fitur yang lain, dimana pengguna dapat mencapai tujuan bisnis mereka, meningkatkan efisiensi operasional, dan memberikan pengalaman pengguna yang lebih baik.",
    image: "/images/project2.png",
    client: "CIMB NIAGA",
    category: "web",
    techStack: ["React Js", "Material UI", "Jest", "React Testing Library"],
    github: null,
    liveDemo: null,
  },
  {
    title: "ATM Business Mobile",
    description:
      "Merupakan sebuah aplikasi berbasis mobile yang digunakan untuk melakukan pelaporan oleh pihak vendor yang memiliki tugas pemeliharaan dan perbaikan jika terjadi kendala pada mesin ATM. Aplikasi ini juga terintegrasi dengan website ATM Business Information System.",
    image: "/images/project3.png",
    client: "CIMB NIAGA",
    category: "mobile",
    techStack: [
      "React Native",
      "Redux",
      "React Native Papper",
      "AsyncStorage",
      "Firebase",
      "Jest",
      "React Native Testing Library",
    ],
    github: null,
    liveDemo: null,
  },
  {
    title: "Al-Quran App",
    description:
      "Aplikasi Al-Quran ini merupakan hasil eksplorasi saya dan dibuat menggunakan Flutter, apliksi ini menggunakan API dari equran.id ",
    image: "/images/project4.png",
    client: "Personal",
    category: "mobile",
    techStack: ["Flutter", "Dio", "GetX"],
    github: "https://github.com/agoesm/Al-Quran",
    liveDemo: null,
  },
  {
    title: "Agus's Portfolio",
    description: "Ini merupakan portfolio website",
    image: "/images/project5.jpeg",
    client: "Personal",
    category: "web",
    techStack: ["Next.Js", "Tailwind CSS", "Material UI"],
    github: "https://github.com/agoesm/myportfolio",
    liveDemo: "https://agoesm.vercel.app/",
  },
];
