import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProjectListPage = () => {
  const projects = [
    {
      title: "Reaction Tester",
      description: "A simple reaction tester game",
      link: "/projects/reaction-tester",
    },
    {
      title: "Memory Blitz",
      description: "A simple memory game",
      link: "/projects/memory-blitz",
    },
    {
      title: "Tic Tac Toe",
      description: "A simple neon tic tac toe game",
      link: "/projects/tic-tac-toe",
    },
  ];

  const router = useRouter();

  const redirect = (link) => {
    router.push(link);
  }
  return (
    <div className="flex flex-col items-start h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold w-full text-center my-4 sm:mx-0">Fun Projects</h1>
      <div className="flex flex-col items-center sm:items-start w-full">
        {projects.map((project) => (
          <div
            onClick={() => redirect(project.link)}
            key={project.title}
            className="m-4 p-4 border border-gray-300 rounded-lg"
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">
              View project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
