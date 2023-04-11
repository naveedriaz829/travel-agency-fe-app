import customer from "../../../../Assets/images/customer.png";
import arrow from '../../../../Assets/images/icons/arrow.png'
import rating from '../../../../Assets/images/icons/rating.png'

export const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="row align-items-center">
          <div className="col-12 col-md-5">
            <p>
              <span>Testimonial</span>
            </p>
            <h2>
              <span>What Customers Say?</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>Lorem Ipsum is simply dummy text of the</p>
            <button type="button" className="outline-btn">
              Start Trial today
              <span className="fa fa-long-arrow-right"><img className="icon-view" src={arrow} alt="arrow-icon" /></span>
            </button>
          </div>
          <div className="col-12 col-md-6 offset-md-1">
            <div className="image">
              <img src={customer} alt="error" className="img-fluid" />
              <div className="overlay">
                <div className="card">
                  <div className="card-body">
                    <div className="card-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <div className="card_footer d-flex justify-content-between align-items-center">
                        <div className="card-title">Kyiloria Danu</div>
                        <div className="rating d-flex justify-content-between align-items-center">
                        <img className="icon-view" src={rating} alt="rating-icon"  />
                        <img className="icon-view" src={rating} alt="rating-icon"  />
                        <img className="icon-view" src={rating} alt="rating-icon"  />
                        <img className="icon-view" src={rating} alt="rating-icon"  />
                        <img className="icon-view" src={rating} alt="rating-icon"  />
                          <p>12 Reviews</p>
                        </div>
                      </div>
                    </div>
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
