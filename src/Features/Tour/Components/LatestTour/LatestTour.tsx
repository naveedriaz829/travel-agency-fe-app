import tourPromotion from "../../../../Assets/images/tour-promotion.png";
import play from '../../../../Assets/images/icons/play.png';

export const LatestTour = () => {
  return (
    <>
      <div className="latest-tour">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 position-relative">
            <h2>
              <span>Watch,</span> our lattest tour
            </h2>
            <p className="py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="col-12 col-md-6 position-relative mt-5 mt-md-0">
            <div className="image">
              <img src={tourPromotion} alt="tour-promotion" className="img-fluid" />
              <div className="icon">
              <img className="icon-view" src={play} alt="play-icon"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
