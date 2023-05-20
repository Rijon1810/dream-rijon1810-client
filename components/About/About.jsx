import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const viewMyCV = () => {
    window.open(
      "https://drive.google.com/file/d/1-JmgqaHFmD9FH27dJUcqXCq02CEjCnvj/view?usp=sharing",
      "_blank"
    );
  };

  const skillList = [
    {
      name: "React JS",
      iconPath: "",
    },
    {
      name: "Next JS",
      iconPath: "",
    },
    {
      name: "Tailwind",
      iconPath: "",
    },
    {
      name: "Jest",
      iconPath: "",
    },
    {
      name: "Storybook",
      iconPath: "",
    },
    {
      name: "Sass",
      iconPath: "",
    },
    {
      name: "Git",
      iconPath: "",
    },
    {
      name: "Figma",
      iconPath: "",
    },
  ];

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Hi, I'm <strong>Rijon</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              I'm a <strong>Software Engineer</strong> at
              <strong>Jatri Service Limited</strong>, specializing in frontend
              web development. Currently, I'm focused on building a robust and
              flexible <strong>frontend component library</strong> and
              optimizing performance for our projects.
            </p>
            <ButtonPrimary callBack={viewMyCV}>See My CV</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/images/Rijon.jpg"
                alt="rijon"
                quality={100}
                width={100}
                height={100}
                layout="responsive"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          <div className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-600 leading-normal">
            <strong>I'm skilled at</strong>
          </div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        />
      </div>
    </div>
  );
};

export default About;
