import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-start items-center gap-5 bg-base-200 p-4 mt-6">
      <p className="text-base-200 bg-secondary p-3">Latest</p>
      <Marquee pauseOnHover={true} speed={50}>
        <div className="flex items-center gap-20">
          <p className="font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, commodi!
          </p>
          <p className="font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, commodi!
          </p>
          <p className="font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, commodi!
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
