import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/layouts/ScrollAnimationWrapper";
import getScrollAnimation from "@/utils/getScrollAnimation";
import ButtonPrimary from "@/components/Button/ButtonPrimary";

const Testimonial = ({
  listTestimoni = [
    {
      name: "Harris Osserman",
      image: "/assets/images/harris.jpg",
      designation: "Founder, Talk Hiring",
      rating: "5",
      testimoni:
        "Rijon has been amazing to work with. First of all, he is an incredibly motivated freelancer. He works so hard to get the features done, and as someone running a company, I am impressed by his work ethic. The quality of his code, especially on the frontend, is extremely high. He consistently writes modular, well-thought-out code. He works really well with designers/figma files, and can follow instructions clearly. I still work with him after hundreds of hours together, and plan to continue working together for a long time.",
    },
    {
      name: "Tanjin Alam",
      image: "/assets/images/piash.jpg",
      designation: "Blockchain Engineer@Anchor Block",
      rating: "4.5",
      testimoni:
        "I highly recommend Rokibul Hasan Rijon, a smart and talented individual with a competitive programming background and extensive experience in various areas of software development. Rijon's exceptional problem-solving skills, deep understanding of algorithms, and ability to find efficient solutions. He has demonstrated versatility by successfully exploring mobile app development, web development, and backend technologies. Rijon's commitment to continuous learning, excellent communication skills, and dedication to staying up to date with the latest industry trends make him a valuable asset to any team or project. Overall, Rijon's exceptional abilities and drive for excellence make him an ideal candidate for any software development opportunity.",
    },
    {
      name: "Sadique Ahmmod Rifat",
      image: "/assets/images/sadique.jpg",
      designation: "Software Developer@Red dot digital",
      rating: "4.5",
      testimoni:
        "While working with him, I found that he has some extraordinary problem solving skills which makes him a good software developer. He is also a quick learner, always tries to learn new things of his working stack, never wants to waste time on watching movies or films, rather he utilizes his leisure by watching different stack related tutorial. In a nutshell, he is a very passionate programmer and an honest hardworking guy.",
    },
    {
      name: "Harris Osserman",
      image: "/assets/images/harris.jpg",
      designation: "Founder, Talk Hiring",
      rating: "5",
      testimoni:
        "Rijon has been amazing to work with. First of all, he is an incredibly motivated freelancer. He works so hard to get the features done, and as someone running a company, I am impressed by his work ethic. The quality of his code, especially on the frontend, is extremely high. He consistently writes modular, well-thought-out code. He works really well with designers/figma files, and can follow instructions clearly. I still work with him after hundreds of hours together, and plan to continue working together for a long time.",
    },
    {
      name: "Tanjin Alam",
      image: "/assets/images/piash.jpg",
      designation: "Blockchain Engineer@Anchor Block",
      rating: "4.5",
      testimoni:
        "I highly recommend Rokibul Hasan Rijon, a smart and talented individual with a competitive programming background and extensive experience in various areas of software development. Rijon's exceptional problem-solving skills, deep understanding of algorithms, and ability to find efficient solutions. He has demonstrated versatility by successfully exploring mobile app development, web development, and backend technologies. Rijon's commitment to continuous learning, excellent communication skills, and dedication to staying up to date with the latest industry trends make him a valuable asset to any team or project. Overall, Rijon's exceptional abilities and drive for excellence make him an ideal candidate for any software development opportunity.",
    },
    {
      name: "Sadique Ahmmod Rifat",
      image: "/assets/images/sadique.jpg",
      designation: "Software Developer@Red dot digital",
      rating: "4.5",
      testimoni:
        "While working with him, I found that he has some extraordinary problem solving skills which makes him a good software developer. He is also a quick learner, always tries to learn new things of his working stack, never wants to waste time on watching movies or films, rather he utilizes his leisure by watching different stack related tutorial. In a nutshell, he is a very passionate programmer and an honest hardworking guy.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const recommendationLink =
    "https://www.linkedin.com/in/rijon1810/edit/forms/recommendation/write/?profileFormEntryPoint=PROFILE_SECTION&trackingId=P5TDL3IET0CRdYnGo9W2kA%3D%3D";

  const redirectToRecommendationLink = () => {
    window.open(recommendationLink, "_blank");
  };
  return (
    <div className="flex flex-col w-full my-4  bg-white-500">
      <h1 className="font-bold my-6 mb:my-8 lg:my-10 text-3xl leading-10 md:text-4xl lg:text-5xl text-center text-primary">
        Thoughts about me
      </h1>
      <ScrollAnimationWrapper className="w-full flex flex-col py-12">
        <motion.div variants={scrollAnimation}>
          <Slider
            {...settings}
            arrows={false}
            ref={setSliderRef}
            className="flex items-stretch justify-items-stretch"
          >
            {listTestimoni.map((listTestimonis, index) => (
              <div className="px-3 flex items-stretch" key={index}>
                <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                  <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                    <div className="flex order-2 xl:order-1">
                      <div>
                        <Image
                          src={listTestimonis.image}
                          height={50}
                          width={50}
                          alt="Icon People"
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col ml-5 text-left">
                        <p className="text-lg text-black-600 capitalize">
                          {listTestimonis.name}
                        </p>
                        <p className="text-sm text-black-500 capitalize">
                          {listTestimonis.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-5 text-left custom-scrollbar"
                    style={{ overflow: "auto", maxHeight: "150px" }}
                  >
                    <p>{listTestimonis.testimoni}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex w-full items-center justify-end">
            <div className="flex flex-none justify-between w-auto mt-14">
              <div
                className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickPrev}
              >
                <Image
                  src="/assets/icon/eva_arrow-back-fill.svg"
                  height={24}
                  width={24}
                  alt="back"
                />
              </div>
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickNext}
              >
                <Image
                  src="/assets/icon/eva_arrow-next-fill.svg"
                  height={24}
                  width={24}
                  alt="next"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
        <ButtonPrimary callBack={() => redirectToRecommendationLink()}>
          Send A Recommendation
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Testimonial;
