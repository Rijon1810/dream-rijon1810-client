import { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ButtonOutline from "@/components/Button/ButtonOutline";
import Image from "next/image";

const ProjectList = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="flex flex-col bg-white-500">
      <h1 className="font-bold my-6 mb:my-8 lg:my-10 text-3xl leading-10 md:text-4xl lg:text-5xl text-center text-primary">
        My Projects
      </h1>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  w-full"
            // whileHover={{
            //   scale: 1.1,
            //   transition: {
            //     duration: 0.2,
            //   },
            // }}
          >
            <div className="w-full">
              <Image
                src="/assets/images/project/methodmelody/1.png"
                width={145}
                height={165}
                alt="Free Plan"
                className="w-full"
              />
            </div>
            <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                Unlimited Bandwitch
              </li>
              <li className="relative check custom-list my-2">
                Encrypted Connection
              </li>
              <li className="relative check custom-list my-2">
                No Traffic Logs
              </li>
              <li className="relative check custom-list my-2">
                Works on All Devices
              </li>
            </ul>
            <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12 px-6">
              <ButtonOutline>Select</ButtonOutline>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  w-full"
            // whileHover={{
            //   scale: 1.1,
            //   transition: {
            //     duration: 0.2,
            //   },
            // }}
          >
            <div className="w-full">
              <Image
                src="/assets/images/project/methodmelody/1.png"
                width={145}
                height={165}
                alt="Free Plan"
                className="w-full"
              />
            </div>
            <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                Unlimited Bandwitch
              </li>
              <li className="relative check custom-list my-2">
                Encrypted Connection
              </li>
              <li className="relative check custom-list my-2">
                No Traffic Logs
              </li>
              <li className="relative check custom-list my-2">
                Works on All Devices
              </li>
            </ul>
            <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12 px-6">
              <ButtonOutline>Select</ButtonOutline>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center">
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl  w-full"
            // whileHover={{
            //   scale: 1.1,
            //   transition: {
            //     duration: 0.2,
            //   },
            // }}
          >
            <div className="w-full">
              <Image
                src="/assets/images/project/methodmelody/1.png"
                width={145}
                height={165}
                alt="Free Plan"
                className="w-full"
              />
            </div>
            <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                Unlimited Bandwitch
              </li>
              <li className="relative check custom-list my-2">
                Encrypted Connection
              </li>
              <li className="relative check custom-list my-2">
                No Traffic Logs
              </li>
              <li className="relative check custom-list my-2">
                Works on All Devices
              </li>
            </ul>
            <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12 px-6">
              <ButtonOutline>Select</ButtonOutline>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ProjectList;
