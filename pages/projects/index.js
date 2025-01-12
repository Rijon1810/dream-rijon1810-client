import Link from "next/link";
import React from "react";

const ProjectListPage = () => {
  const projects = [
    {
      title: "Reaction Tester",
      description: "A simple reaction tester game",
      link: "/projects/reaction-tester",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold w-full text-center mt-4">Fun Projects</h1>
      <div className="flex flex-col items-center">
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.title}
            className="m-4 p-4 border border-gray-300 rounded-lg"
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">
              View project
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
