import React, { useState } from "react";

function PortfolioItem({ title, imgUrl, stack, link}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-2 border-stone-900 rounded-md p-2 mb-4 sm:max-w-xs md:min-w-md lg:max-w-lg mx-auto bg-custom-beige px-4  shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer">        
        <img
          src={imgUrl}
          alt="Billede af portfolioprojekt"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <h3 className="tet-lg md:text-xl mb-2 md:mb-3 font-semibold text-custom-navy text-center">
        {title}
      </h3>
      <p className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center justify-center text-xs md:text-sm px-2">
        {" "}
        {stack.map((item, index) => (
          <span
            key={index}
            className="inline-block px-2 font-semibold border-2 border-stone-900 rounded-md text-custom-navy"
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default PortfolioItem;
