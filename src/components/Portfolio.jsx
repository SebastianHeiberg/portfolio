import React from "react";
import PortfolioItem from "./PortfolioItem.jsx";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <div className="flex flex-col md: flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {portfolio.map((project, index) => {
          return (
            <PortfolioItem
              key={index}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
