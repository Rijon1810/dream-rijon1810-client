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
      name: "Educhain.io",
      key: 0,
      designation: "Senior Frontend engineer - Ontario, Canada (Remote)",
      duration: "Dec 2023 - Present",
      responsibility: [
        "Led the frontend development of a credential management platform, improving performance and scalability.",
        "Developed 'The Publisher' using Next.js and Ant Design, enhancing content management and user adoption.",
        "Built 'The Academic Passport' with Next.js and Docker, reducing credential verification time by 40% and increasing user trust.",
        "Added test functions using Jest for all components in both 'The Publisher' and 'The Academic Passport,' enhancing code reliability and maintainability.",
        "Redesigned UI components with Ant Design, improving user engagement and reducing bounce rates.",
        // "Implemented RabbitMQ for real-time communication in the frontend, improving the responsiveness and scalability of both 'The Publisher' and 'The Academic Passport.'",
        // "Redesigned the Credential Viewer page with tabbed navigation, status tracking, and hover interactions.",
        "Integrated and optimized various third-party APIs, including identity verification systems.",
        "Developed reusable UI components for faster development across multiple projects.",
        "Ensured high-quality user experience by enhancing accessibility and implementing responsive design.",
      ],
    },
    {
      name: "Hire Rewards (Talk Hiring)",
      key: 1,
      designation: "Senior Fullstack engineer - NewYork, NY (Remote)",
      duration: "May 2023 - Jun 2024",
      responsibility: [
        "Developed complex job search components for small and large devices and improved job search performance, resulting in over a 2x increase in revenue for the product.",
        "Redesigned 13 job filters with custom range sliders, multi-selects, and reset functionality, managing complex states.",
        "Enhanced job seeker onboarding flow with user-friendly components, resulting in a 3x increase in onboarding completion.",
        "Conducted code refactoring, eliminating unused code and promoting modular-based development.",
        "Maintained a top-rated status on Upwork with consistent 5-star client ratings.",
      ],
    },
    {
      name: "Jatri Service Limited",
      key: 2,
      designation: "Frontend engineer - Gulshan - 2, Bangladesh (Onsite)",
      duration: "Dec 2022 - Nov 2023",
      responsibility: [
        "Developed a dynamic website for multiple vendors that increased website traffic by 1.5x.",
        "The improved user experience by 20% with advanced ticket-searching features.",
        "Created dynamic sliders for auto-scrolling headlines, offers, promos, form validation, and blogs.",
        "Reduced development time by 30% with seamless integration of third-party APIs and revamped UI.",
        "Developed complex seat view components for Bus and Launch service.",
        "Built an admin panel from scratch to manage Bus and Launch services.",
        "Played a key role in code review, code merge, and deployment via Termius to the server.",
      ],
    },
    {
      name: "Shellbeehaken Limited",
      key: 3,
      designation: "Software engineer - Mirpur, Bangladesh (Onsite)",
      duration: "Jan 2022 - Nov 2022",
      responsibility: [
        "Led the development of a virtual company management platform, including company creation flow, Stripe integration, and plan-based template access.",
        "Implemented pre-rendering techniques with static generation and server-side rendering.",
        "Enhanced SEO compatibility through dynamic metadata generation.",
        "Developed dynamic pagination, form validation, and animation features.",
        "Utilized Redux for efficient state management in Next.js projects.",
      ],
    },
    {
      name: "Weabers",
      key: 4,
      designation: "Software Developer - Bhatara, Bangladesh (Onsite)",
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
    <ScrollAnimationWrapper id="experiences">
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
            <div className="flex flex-row sm:flex-col mb-8 sm:mb-0 overflow-x-auto">
              {companyList.map((company) => (
                <h1
                  key={company.name}
                  onClick={() => handleCompanySelect(company.key)}
                  className={`py-2 sm:py-3 px-6 sm:px-10 cursor-pointer hover:bg-thirdly font-bold md:font-semibold text-sm md:text-xl whitespace-nowrap mb-px transition-colors duration-300 text-secondary ${
                    company.key === selectedCompany ? "bg-thirdly" : ""
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
