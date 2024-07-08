import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden p-2">
        <img 
            src={imgUrl} 
            alt="Billede af portfolioprojekt"
            className="w-full h-36 md:h-48 object-cover cursor-pointer" 
        />
        <h3 className="tet-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item, index) => (
                <span key={index} className="inline-block px-2 font-semibold border-2 border-stone-900 rounded-md">
                    {item}
                </span>
            ))}
        </p>
    </div>
    );
}

export default PortfolioItem;