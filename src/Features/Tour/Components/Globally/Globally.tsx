import globally from "../../../../Assets/images/globally.png";
import trip from "../../../../Assets/images/trip.png";

export const Globally = () => {
  return (
    <>
      <div className="globally pt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 text-center">
            <h2>
              <span>Globally </span>Accepted
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className="global-cards">
          <div className="row justify-content-around">
            <div className="col-12 col-md-5">
              <div className="card d-flex justify-content-center align-items-center mb-3">
                <img src={globally} alt="error" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="card d-flex justify-content-center align-items-center mb-3">
                <img src={trip} alt="error" className="img-fluid" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center flex-column mb-3">
                  <h2>For International</h2>
                  <button type="button" className="outline-btn">
                    Start Trial today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
