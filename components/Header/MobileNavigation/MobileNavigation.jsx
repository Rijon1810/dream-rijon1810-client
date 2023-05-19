import MobileNavLink from "@/components/Header/MobileNavLink";

const MobileNavigation = ({ activeLink, setActiveLink }) => (
  <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
    <div className="bg-white-500 sm:px-3">
      <ul className="flex w-full justify-between items-center text-black-500">
        <MobileNavLink
          to="about"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          About
        </MobileNavLink>
        <MobileNavLink
          to="feature"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Feature
        </MobileNavLink>
        <MobileNavLink
          to="pricing"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          Pricing
        </MobileNavLink>
        <MobileNavLink
          to="testimoni"
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
