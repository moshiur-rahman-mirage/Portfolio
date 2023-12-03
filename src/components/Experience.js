import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-9 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;
          <a className="text-primary" target="_blank" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="text-dark/75 font-medium capitalize">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div  style={{scaleY:scrollYProgress}} className="absolute transition-transform h-full left-8 top-0 w-[4px] bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
         search engine, including improving the accuracy and relevance of search results and 
         developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
