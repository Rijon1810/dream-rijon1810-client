import React from "react";

const FooterSection = ({ title, items, className }) => {
  return (
    <div className={`row-span-2 sm:col-span-2 flex flex-col ${className}`}>
      <p className="text-black-600 mb-4 font-medium text-lg">{title}</p>
      <ul className="text-black-500">
        {items.map((item, index) => (
          <li
            key={index}
            className="my-2 hover:text-orange-500 cursor-pointer transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
