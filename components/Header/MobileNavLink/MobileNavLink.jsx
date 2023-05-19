import { Link as LinkScroll } from "react-scroll";

const MobileNavLink = ({ to, children, activeLink, setActiveLink }) => (
  <LinkScroll
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    onSetActive={() => {
      setActiveLink(to);
    }}
    className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ${
      activeLink === to
        ? "border-orange-500 text-orange-500"
        : "border-transparent"
    }`}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        Add the appropriate SVG path here based on the link's purpose
      */}
    </svg>
    {children}
  </LinkScroll>
);
export default MobileNavLink;
