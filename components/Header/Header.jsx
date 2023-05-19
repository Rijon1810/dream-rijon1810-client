import BrandImage from "@/components/BrandImage";
import ButtonOutline from "@/components/Button/ButtonOutline";
import NavLink from "@/components/Header/NavLink";
import MobileNavigation from "@/components/Header/MobileNavigation";
import SignIn from "@/components/SignIn";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <BrandImage className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <NavLink
              to="about"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              About
            </NavLink>
            <NavLink
              to="feature"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Feature
            </NavLink>
            <NavLink
              to="pricing"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Pricing
            </NavLink>
            <NavLink
              to="testimoni"
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            >
              Testimonial
            </NavLink>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <SignIn />
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
        </nav>
      </header>

      <MobileNavigation activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
};

export default Header;
