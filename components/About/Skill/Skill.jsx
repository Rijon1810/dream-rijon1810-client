import SkillCard from "@/components/About/Skill/SkillCard";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Skill = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const skillList = [
    {
      name: "React JS",
      iconPath: "/assets/icon/react.png",
    },
    {
      name: "Next JS",
      iconPath: "/assets/icon/next.png",
    },
    {
      name: "Tailwind CSS",
      iconPath: "/assets/icon/tailwindcss.png",
    },
    {
      name: "Jest",
      iconPath: "/assets/icon/jest.png",
    },
    {
      name: "Storybook",
      iconPath: "/assets/icon/storybook.png",
    },
    {
      name: "Sass",
      iconPath: "/assets/icon/sass.png",
    },
    {
      name: "Git",
      iconPath: "/assets/icon/git.png",
    },
    {
      name: "Figma",
      iconPath: "/assets/icon/figma.png",
    },
  ];

  return (
    <div className="relative w-full flex">
      <ScrollAnimationWrapper className="rounded-lg w-full  py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
        <div className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-600 leading-normal">
          <strong>I'm skilled at</strong>
          <div className="grid  gap-4 grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-4 pt-6">
            {skillList.map((skill, index) => (
              <motion.div key={index} variants={scrollAnimation}>
                <SkillCard name={skill.name} iconPath={skill.iconPath} />
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>
      <div
        className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
        style={{ filter: "blur(114px)" }}
      />
    </div>
  );
};

export default Skill;
