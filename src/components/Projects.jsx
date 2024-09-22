import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import nikeImg from '../assets/nikeImg.png'; 
import portImg from '../assets/portImg.png';
import hishamImg from '../assets/hishamImg.png';
import netflixImg from '../assets/netflixImg.png';

const projects = [
  {
    id: 1,
    title: "Nike Clone",
    description: "This is a description of a Nike Clone. It showcases a clean UI with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: nikeImg,
    link: "https://shaamilshan.github.io/Nike/", 
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "Personal portfolio website built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS","Bootstrap", "JavaScript"],
    img: portImg,
    link: "https://shaamilshan.github.io/Personal-website/",
  },
  {
    id: 3,
    title: "Hisham's Portfolio",
    description: "A portfolio showcasing projects, built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    img: hishamImg,
    link: "https://hisham-in.netlify.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Netflix clone built with React and Firebase for the frontend and backend.",
    tech: ["React", "CSS", "Firebase"],
    img: netflixImg,
    link: "https://clonendetflix.netlify.app/",
  },
];

const ProjectSection = () => {
  return (
    <div id='projects' className="mx-16 mb-16 flex flex-col gap-16">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-8`}
        >
          {/* Project Image */}
          <div className="lg:w-1/2">
            <img 
              src={project.img} 
              alt={project.title} 
              className="rounded-2xl object-cover w-full h-64 lg:h-80"
            />
          </div>

          {/* Project Description */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-lg my-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium shadow-md hover:bg-gray-300 transition-all transform hover:scale-105 hover:rotate-3"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Placeholder for Redirect */}
            <div className="mt-4">
  <a 
    href={project.link} 
    className="flex justify-center items-center border border-gray-400 text-black bg-white py-2 px-4 rounded-full hover:bg-gray-100 transition-all duration-300 w-full md:w-[30%] text-center text-sm md:text-base"
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
    <AiOutlineArrowRight className="ml-2" />
  </a>
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
