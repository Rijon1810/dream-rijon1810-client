import Hero from "@/components/About/Hero";
import Skill from "@/components/About/Skill";
import WorkPlace from "./WorkPlace";

const About = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <Hero />
      <Skill />
      <WorkPlace />
    </div>
  );
};

export default About;
