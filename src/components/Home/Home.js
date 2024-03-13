import React from "react";

import CarouselInterval from "./Carousel";
import News from './News'
import Schedule from "./Schedule"
import Sponsors from "./Sponsors"
import Bio from "./Bio"

const Home = () => {
  return (
    <div className="main--container px-5">
    <div className="col-lg-12">
        <div className="row main-row">
            <CarouselInterval />
            <News />
        </div>
        <div className="row">
            <Schedule />
        </div>
        <div className="row">
          <Bio />
        </div>
        <div className="row">
            <Sponsors />
        </div>

        
    </div>

     
    </div>
  );
};

export default Home;
