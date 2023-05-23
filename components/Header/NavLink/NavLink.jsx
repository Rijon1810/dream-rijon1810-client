import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ to, children, activeLink, setActiveLink }) => (
  <LinkScroll
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    duration={1000}
    onSetActive={() => {
      setActiveLink(to);
    }}
    className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
      activeLink === to
        ? "text-orange-500 animation-active"
        : "text-black-500 hover:text-orange-500"
    }`}
  >
    {children}
  </LinkScroll>
);
export default NavLink;
