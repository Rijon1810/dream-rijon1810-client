import Hero from "@/components/About/Hero";
import Skill from "@/components/About/Skill";
import WorkPlace from "@/components/About/WorkPlace";
import Testimonial from "@/components/About/Testimonial";

const About = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <Hero />
      <Skill />
      <WorkPlace />
      <Testimonial />
    </div>
  );
};

export default About;
