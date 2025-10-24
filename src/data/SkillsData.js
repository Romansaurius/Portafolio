import { DiJavascript1, DiPython } from "react-icons/di";
import {
	FaCss3Alt,
	FaGithub,
	FaHtml5,
	FaReact,
} from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import {
	SiAdobephotoshop,
	SiFirebase,
	SiFramer,
	SiNextdotjs,
	SiRedux,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Gsap from "../vectors/gsap";
import { FaDatabase } from "react-icons/fa";
import { SiLinux } from "react-icons/si";

export const SkillsData = [
	{
		name: "PHP",
		icon: <DiJavascript1 />, // Using JS icon as placeholder, PHP doesn't have a direct icon
	},
	{
		name: "Python",
		icon: <DiPython />,
	},
	{
		name: "JavaScript",
		icon: <DiJavascript1 />,
	},
	{
		name: "HTML",
		icon: <FaHtml5 />,
	},
	{
		name: "CSS",
		icon: <FaCss3Alt />,
	},
	{
		name: "MySQL",
		icon: <FaDatabase />,
	},
	{
		name: "SQLite",
		icon: <FaDatabase />,
	},
	{
		name: "Git",
		icon: <FaGithub />,
	},
	{
		name: "GitHub",
		icon: <FaGithub />,
	},
	{
		name: "APIs REST",
		icon: <SiFirebase />, // Using Firebase as API placeholder
	},
	{
		name: "JSON",
		icon: <SiFirebase />, // Using Firebase as JSON placeholder
	},
	{
		name: "Bash Scripts",
		icon: <SiLinux />,
	},
	{
		name: "Linux",
		icon: <SiLinux />,
	},
	{
		name: "React Js",
		icon: <FaReact />,
	},
	{
		name: "Next Js",
		icon: <SiNextdotjs />,
	},
	{
		name: "Vue Js",
		icon: <RiVuejsLine />,
	},
	{
		name: "React Native",
		icon: <TbBrandReactNative />,
	},
	{
		name: "Redux",
		icon: <SiRedux />,
	},
	{
		name: "Firebase",
		icon: <SiFirebase />,
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss />,
	},
	{
		name: "Framer Motion",
		icon: <SiFramer />,
	},
	{
		name: "GSAP",
		icon: <Gsap />,
	},
];
