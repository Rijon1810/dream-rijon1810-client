import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

const ProjectList = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const projects = [
    {
      title: "Weabers",
      description:
        "Founded in 2015, Weabers has become a name of trust for improving the experience in business and human behavior-centric digital ecosystems. They are helping brands and startups with interactive designs, modern websites, and mobile apps.",
      liveLink: "https://weabers.com/",
      stacks: ["React", "Redux", "SCSS", "MERN"],
    },
    {
      title: "Leclair",
      description:
        "Leclair is a storefront to sell your items online. We are an online authentic luxury consignment store. We eliminate your typical buying and selling hassles with our secure platform. Generate cash and free up space by selling items you no longer needed.",
      liveLink: "https://leclair.co.jp/",
      stacks: ["Next", "Redux", "SCSS"],
    },
    {
      title: "Digital Ticketing",
      description:
        "Jatri is the fastest growing technology company in Bangladesh with a mission to bring reliable transport to everyone, everywhere at the touch of a button. You can buy your bus ticket online.",
      liveLink: "https://ticket.jatri.co/",
      stacks: ["Vue", "Tailwind"],
    },
  ];

  const redirectToLiveLink = (index) => {
    window.open(projects[index].liveLink, "_blank");
  };

  return (
    <div className="flex flex-col bg-white-500">
      <h1 className="font-bold my-6 mb:my-8 lg:my-10 text-3xl leading-10 md:text-4xl lg:text-5xl text-center text-primary">
        My Projects
      </h1>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
        {projects.map((project, index) => (
          <ScrollAnimationWrapper className="flex justify-center " key={index}>
            <motion.div
              variants={scrollAnimation}
              className="flex flex-col  items-start border-2 border-gray-500 rounded-xl  w-full p-4"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="w-full flex flex-row items-center justify-between mb-3">
                <h1 className="font-bold text-primary text-xl ">
                  {project.title}
                </h1>
                <Image
                  onClick={() => redirectToLiveLink(index)}
                  src="/assets/icon/external.png"
                  width={20}
                  height={20}
                  alt="Free Plan"
                  className="cursor-pointer"
                />
              </div>
              <div className="text-md leading-8 mb-8 min-h-[222px]">
                {project.description}
              </div>
              <div className="flex flex-wrap mt-auto">
                {project.stacks.map((stack, stackIndex) => (
                  <div
                    key={stackIndex}
                    className="inline-block py-1 px-3 bg-primary text-white text-xs rounded mb-2 mr-2"
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
