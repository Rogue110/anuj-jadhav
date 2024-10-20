import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, Tailwind, MySql, Javascript, GenAI, LLM's, Python, llama, C/C++, ";

export const PROJECTS = [
  {
    id: 1,
    title: "SummarifyAI",
    description:
      "A full-featured Ai-summarizer website built with ReactJs using API",
    imgSrc: project1,
    link: "https://github.com/rogue110/summarifyAI",
  },
  {
    id: 2,
    title: "Breast Cancer Detection",
    description:
      "A Logistic Regression project which classify's the cell cluster benign or malicious.",
    imgSrc: project2,
    link: "https://github.com/rogue110",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://github.com/rogue110",
  },
  {
    id: 4,
    title: "AI-Agent",
    description:
      "A GenAI Agent which provides responses to the user questions on custom data.",
    imgSrc: project4,
    link: "https://github.com/rogue110",
  },
  {
    id: 5,
    title: "ATS AI",
    description: "GenAI Project which compares the resume and JD to provide a matching score.",
    imgSrc: project5,
    link: "https://github.com/rogue110",
  },
  {
    id: 6,
    title: "Online Product Website",
    description:
      "Built a Service website which displays the services the provide for a startup.",
    imgSrc: project6,
    link: "https://github.com/rogue110",
  },
  {
    id: 7,
    title: "Nike Landing Page",
    description: "A website for nike shoes built using ReactJs and TailwindCSS",
    imgSrc: project7,
    link: "https://github.com/rogue110",
  },
  {
    id: 8,
    title: "Multi Agent Framework",
    description: "An app which has multiples AI Agents which have a common motive to complete.",
    imgSrc: project8,
    link: "https://github.com/rogue110",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://github.com/rogue110",
  },
];

export const ABOUT =
  "As a dedicated Front-end Developer and AI Engineer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and GenAI technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in LLM's , Genrative AI solutions and various projects. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";

export const EXPERIENCES = [
  {
    company: "TechnoHacks EDU",
    role: "Web Developer Intern",
    year: "Nov 2023",
    description:
      "Built and improved the company website using various web technologies, developed frontend projects using HTML, CSS (TailwindCSS), JavaScript, and ReactJS, and acquired new skills from working with a team of experienced developers.",
  },
  {
    company: "Global Academy of Technology",
    role: "Magazine Editorial Team Member",
    year: "Aug 2024",
    description:
      " As a member of the college magazine editorial team, I collaborated on designing the magazine using Canva and Figma, creating cohesive and visually appealing layouts. I worked closely with the team to curate content and develop the publication, emphasizing teamwork and collaborative problem-solving.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/_anuuuuuj",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rogue110",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "anujjadhav4122@gmail.com",
  phone: "+91 8217085725",
};
