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
      designation: "Software Engineer",
      duration: "Dec 2022 - Present",
      responsibility: [
        "Enhanced the ticket searching feature with advanced filtering options for improved user experience.",
        "Created dynamic sliders for auto-scrolling headlines, offers, promos, and blogs.",
        "Integrated third-party APIs and revamped the UI for seamless integration.",
        "Conducted code refactoring and component reuse to optimize development efficiency.",
        "Ensured fast-loading performance of the website.",
      ],
    },

    {
      name: "Shellbeehaken",
      key: 1,
      designation: "Software Engineer",
      duration: "Jan 2022 - Nov 2022",
      responsibility: [
        "Implemented pre-rendering techniques with static generation and server-side rendering.",
        "Developed dynamic pagination, form validation, and animation features.",
        "Added Google Analytics for tracking website traffic and user behavior.",
        "Utilized Redux for efficient state management in Next.js projects.",
        "Enhanced SEO compatibility through dynamic metadata generation.",
      ],
    },

    {
      name: "Weabers",
      key: 2,
      designation: "Software Developer",
      duration: "Jan 2021 - Dec 2021",
      responsibility: [
        "Implemented a metronome feature to help musicians maintain steady time during practice sessions.",
        "Developed a Freebies service offering various resources such as blogs, videos, FAQs, and images.",
        "Integrated a feature-rich React video player to enhance the user experience.",
        "Successfully integrated the SSL Commerz payment gateway for seamless and secure transactions.",
        "Ensured codebase quality through diligent code reviewing.",
      ],
    },
  ];

  const companyDesignation = companyList[selectedCompany].designation;

  const companyName = companyList[selectedCompany].name;

  const jobDuration = companyList[selectedCompany].duration;

  const jobResponsibility = companyList[selectedCompany].responsibility;

  return (
    <ScrollAnimationWrapper>
      <motion.div
        className="w-11/12 sm:w-full md:w-10/12 mx-auto xl:min-h-20"
        variants={scrollAnimation}
      >
        <div className="text-xl lg:text-2xl xl:text-3xl font-medium text-black-600 leading-normal flex items-center justify-center py-10">
          <h1 className="font-bold 8-10 md:mb-8 lg:mb-10 text-3xl leading-10 md:text-4xl lg:text-5xl text-center text-primary">
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
                  className={`py-2 sm:py-3 px-6 sm:px-10 cursor-pointer hover:bg-thirdly font-bold md:font-semibold text-sm md:text-xl whitespace-nowrap mb-px transition-colors duration-300 text-secondary ${
                    company.key === selectedCompany && "bg-thirdly"
                  }`}
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
                  }% + ${selectedCompany}px))`,
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
                {companyDesignation}
                <a
                  className="text-primary"
                  href="https://welldev.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{companyName}
                </a>
              </h2>
              <h3 className="text-light-gray text-base md:text-lg mb-3">
                {jobDuration}
              </h3>
              <main className="text-base md:text-lg leading-9 md:leading-10">
                <ul>
                  {jobResponsibility.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="text-2xl mt-1 mr-2">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
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
