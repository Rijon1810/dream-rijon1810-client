import React from "react";
import BrandImage from "@/components/BrandImage";
import SocialIcon from "@/components/SocialIcon";
import FooterSection from "@/components/Footer/FooterSection";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <FooterInfoSection />
        <FooterSection
          title="Links"
          items={[" It's Rijon", "Projects", "Blog", "Merchandies"]}
          className="sm:col-start-7 sm:col-end-9"
        />
        <FooterSection
          title="Engage"
          items={[
            "Rijon ?",
            "FAQ",
            "Tutorials",
            "About Us",
            "Privacy Policy",
            "Terms of Service",
          ]}
          className="sm:col-start-9 sm:col-end-11"
        />
        <FooterSection
          title="Earn Money"
          items={["Affiliate", "Become Partner"]}
          className=" sm:col-start-11 sm:col-end-13"
        />
      </div>
    </div>
  );
};

const FooterInfoSection = () => {
  return (
    <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
      <BrandImage className="h-8 w-auto mb-6" />
      <p className="mb-4">
        As a skilled Software Engineer, I craft secure and innovative software
        solutions.
      </p>
      <div className="flex w-full mt-2 mb-8 -mx-2">
        <SocialIcon src="facebook.svg" alt="facebook" />
        <SocialIcon src="twitter.svg" alt="twitter" />
        <SocialIcon src="linkedin.svg" alt="linkedin" />
        <SocialIcon src="whatsapp.svg" alt="whatsapp" />
      </div>
      <p className="text-gray-400">©{new Date().getFullYear()} - Rijon</p>
    </div>
  );
};

export default Footer;
