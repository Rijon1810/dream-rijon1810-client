import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const viewMyCV = () => {
    window.open(
      "https://drive.google.com/file/d/1-JmgqaHFmD9FH27dJUcqXCq02CEjCnvj/view?usp=sharing",
      "_blank"
    );
  };

  return (
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
            <strong>Jatri Service Limited</strong>, specializing in frontend web
            development. Currently, I'm focused on building a robust and
            flexible <strong>frontend component library</strong> and optimizing
            performance for our projects.
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
  );
};

export default Hero;
