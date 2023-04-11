import star from '../../../../Assets/images/icons/star.png'
import world from '../../../../Assets/images/icons/world.png'
import like from '../../../../Assets/images/icons/like.png'

export const Choosing = () => {
  return (
    <>
      <div className="choosing">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-center">
            <h2>
              <span>Why</span> Choose Us
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>

        <div className="choosing-cards">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card mb-5 mb-md-0">
                <div className="icon">
                <img className="icon-view" src={star} alt="star-icon"  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mt-3">Handpicked Hotels</div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card mb-5 mb-md-0">
                <div className="icon">
                <img className="icon-view" src={world} alt="world-icon"  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mt-3">World Class Service</div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0 mt-md-5 mt-lg-0">
              <div className="card mb-5 mb-md-0">
                <div className="icon">
                <img className="icon-view" src={like} alt="like-icon"  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mt-3">Best Price Guarantee</div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
