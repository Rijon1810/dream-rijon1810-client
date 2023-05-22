import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";

const ExampleComponent = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [selectedCompany, setSelectedCompany] = useState(0);

  const handleCompanySelect = (key) => {
    setSelectedCompany(key);
  };

  const companyList = [
    {
      name: "Jatri",
      key: 0,
    },

    {
      name: "Shellbeehaken",
      key: 1,
    },

    {
      name: "MethodMelody",
      key: 2,
    },
  ];
  return (
    <ScrollAnimationWrapper>
      <motion.div
        className="w-11/12 sm:w-full md:w-10/12 mx-auto xl:min-h-20"
        variants={scrollAnimation}
      >
        <div className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-600 leading-normal flex items-center justify-center py-10">
          <h1 className="font-bold mb-10 md:mb-12 lg:mb-16 text-3xl leading-10 md:text-4xl lg:text-5xl text-center text-primary">
            Where I've Worked
          </h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="flex">
            <div className="flex flex-row sm:flex-col mb-8 sm:mb-0">
              {companyList.map((company) => (
                <h1
                  key={company.key}
                  onClick={() => handleCompanySelect(company.key)}
                  className="py-2 sm:py-3 px-6 sm:px-10 cursor-pointer hover:bg-thirdly font-bold md:font-semibold text-sm md:text-xl whitespace-nowrap mb-px transition-colors duration-300 text-secondary"
                >
                  {company.name}
                </h1>
              ))}
            </div>
            <div className="hidden sm:block relative bg-[#D0DCF2] w-0.5 h-full">
              <div
                className="absolute top-0 left-0 w-full bg-secondary transform transition-transform duration-300 ease"
                style={{
                  transform: `translateY(calc(${
                    selectedCompany * 100
                  }% + 0px))`,
                  height: "52px",
                }}
              ></div>
            </div>
          </div>
          <div className="flex-grow">
            <div
              className="p-0 sm:pl-8 sm:py-3 transition-opacity duration-200"
              style={{
                transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
                opacity: 1,
              }}
            >
              <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-9 mb-1">
                Software Engineer (Deputy Team Lead)
                <a
                  className="text-primary"
                  href="https://welldev.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Welldev LTD
                </a>
              </h2>
              <h3 className="text-light-gray text-base md:text-lg mb-3">
                March, 2020 - Present
              </h3>
              <main className="text-base md:text-lg leading-9 md:leading-10">
                <ul>
                  <li className="flex">
                    <span className="text-2xl mt-1 mr-2">▸</span>
                    <span>
                      Write performant code for different client and internal
                      libraries
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-2xl mt-1 mr-2">▸</span>
                    <span>Build feasible component in React JS and SCSS</span>
                  </li>
                  <li className="flex">
                    <span className="text-2xl mt-1 mr-2">▸</span>
                    <span>Write tests for React Components</span>
                  </li>
                  <li className="flex">
                    <span className="text-2xl mt-1 mr-2">▸</span>
                    <span>
                      Investigate performance issues of React component and
                      optimize them
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-2xl mt-1 mr-2">▸</span>
                    <span>
                      Mentor trainee engineers and help other engineers in
                      front-end tasks
                    </span>
                  </li>
                </ul>
              </main>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default ExampleComponent;
