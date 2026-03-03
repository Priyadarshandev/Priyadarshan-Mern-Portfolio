import React from 'react';
import {
    SiReact, SiJavascript, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiJsonwebtokens,
    SiMongodb, SiMongoose, SiDocker, SiVercel, SiGithub,
    SiHtml5, SiCss3, SiGit, SiPostman
} from 'react-icons/si';

export const TECH_DATA = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
            { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
            { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
            { name: "Modern CSS", icon: <SiCss3 />, color: "#1572B6" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
            { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
            { name: "Authentication", icon: <SiJsonwebtokens />, color: "#FB015B" },
            { name: "API Design", icon: <SiPostman />, color: "#FF6C37" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
            { name: "Mongoose", icon: <SiMongoose />, color: "#880000" }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: <SiGit />, color: "#F05032" },
            { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
            { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
            { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" }
        ]
    }
];
