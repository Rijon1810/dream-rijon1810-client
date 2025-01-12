import MobileNavLink from "@/components/Header/MobileNavLink";

const MobileNavigation = ({ activeLink, setActiveLink }) => (
  <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
    <div className="bg-white-500 sm:px-3">
      <ul className="flex w-full justify-between items-center text-black-500 overflow-x-auto">
        <MobileNavLink
          to="about"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          About
        </MobileNavLink>
        <MobileNavLink
          to="skills"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Skills
        </MobileNavLink>
        <MobileNavLink
          to="experiences"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Experiences
        </MobileNavLink>
        <MobileNavLink
          to="projects"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Projects
        </MobileNavLink>
        <MobileNavLink
          to="testimonial"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Testimonial
        </MobileNavLink>
      </ul>
    </div>
  </nav>
);

export default MobileNavigation;
