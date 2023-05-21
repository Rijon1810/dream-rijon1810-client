import React from "react";

const ExampleComponent = () => {
  return (
    <div className="w-11/12 sm:w-full md:w-10/12 mx-auto xl:min-h-20">
      <div className="w-full flex flex-col sm:flex-row">
        <div className="flex">
          <div className="flex flex-row sm:flex-col mb-8 sm:mb-0">
            <h1 className="py-2 sm:py-3 px-6 sm:px-10 cursor-pointer hover:bg-secondary-30 font-bold md:font-semibold text-sm md:text-xl whitespace-nowrap mb-px transition-colors duration-300 bg-secondary-30 text-primary">
              Welldev LTD
            </h1>
            <h1 className="py-2 sm:py-3 px-6 sm:px-10 cursor-pointer hover:bg-secondary-30 font-bold md:font-semibold text-sm md:text-xl whitespace-nowrap mb-px transition-colors duration-300 text-gray">
              Xbit Studio
            </h1>
          </div>
          <div className="hidden sm:block relative bg-blue-200 w-0.5 h-full">
            <div
              className="absolute top-0 left-0 w-full bg-black transform transition-transform duration-300 ease"
              style={{
                transform: "translateY(calc(0% + 0px))",
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
    </div>
  );
};

export default ExampleComponent;
