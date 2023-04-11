import { Choosing } from "./Components/Choosing/Choosing";
import { Globally } from "./Components/Globally/Globally";
import { LatestTour } from "./Components/LatestTour/LatestTour";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { Tours } from "./Components/Tours/Tours";

export const Tour = () => {
  return (
    <>
      <div className="transparent-clr">
        <div className="container">
          <Tours />
          <Globally />
          <LatestTour />
          <Choosing />
          <Testimonial />
        </div>
      </div>
    </>
  );
};
