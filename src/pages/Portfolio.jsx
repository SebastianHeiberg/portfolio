import React from "react";
import ProjectItem from "../components/PortfolioItem.jsx";
import portfolio from "../data/portfolio.js";

function Portfolio() {
  return (
    <div className="flex flex-col md: flex-row items-center justify-center mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {portfolio.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
