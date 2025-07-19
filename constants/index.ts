import { FaYoutube, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Redux",
  //   image: "redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Node.js",
  //   image: "node.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/jigyasumakkxr",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/jigyasumakkxr",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/jigyasumxkkxr",
  },
] as const;


export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "sql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NeonDB",
    image: "neon.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Amazon Web Services",
    image: "aws.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Google Cloud Platform",
    image: "gcp.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "NPM",
    image: "npm.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "PNPM",
    image: "pnpm.png",
    width: 60,
    height: 60,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Open AI",
    image: "openai.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Cloudflare",
    image: "cloudflare.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "One Platform - Infinite Opportunities",
    description:
      'CareerCatalyst is a comprehensive educational technology platform that bridges the gap between educational institutions, students, and industry partners. This innovative solution creates a three-way ecosystem designed to enhance educational outcomes, accelerate career development, and streamline talent acquisition.',
    image: "/projects/project-1.png",
    link: "https://careercatalystx.com/",
  },
  {
    title: "DevFlex",
    description:
      'DevFlex is a developer portfolio showcase platform designed to help programmers display their coding skills and achievements in a unified, shareable format. The platform integrates with popular coding platforms to create comprehensive developer profiles.',
    image: "/projects/project-2.png",
    link: "https://dev-flex.vercel.app/",
  },
  {
    title: "PageFlow",
    description:
      'PageFlow is a content-focused blogging platform that emphasizes the power of impactful storytelling and meaningful engagement. This platform serves as a dedicated space for writers and readers to connect through compelling narratives and thought-provoking content.',
    image: "/projects/project-3.png",
    link: "https://page-flow.vercel.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://www.youtube.com/@jigyasumakkxr",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/jigyasumxkkxr",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/jigyasumakkxr",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/jigyasumakkxr",
      },
      {
        name: "X (Formerly Twitter)",
        icon: FaXTwitter,
        link: "https://x.com/Jigyasu_20",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/jigyasumakkxr",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:support@jmkr.in",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

