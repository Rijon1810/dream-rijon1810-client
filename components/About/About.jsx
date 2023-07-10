import Hero from "@/components/About/Hero";
import Skill from "@/components/About/Skill";
import WorkPlace from "@/components/About/WorkPlace";
import Testimonial from "@/components/About/Testimonial";
import ProjectList from "@/components/Projects/ProjectList";

const About = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto"
      id="about"
    >
      <Hero />
      <Skill />
      <WorkPlace />
      <ProjectList />
      <Testimonial />
    </div>
  );
};

export default About;
