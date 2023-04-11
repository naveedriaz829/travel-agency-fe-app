import beijing from "../../../../Assets/images/beijing.png";
import turkey from "../../../../Assets/images/turkey.png";
import pakistan from "../../../../Assets/images/pakistan.png";

export const Tours = () => {
  return (
    <>
      <div className="tours">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 text-center">
            <h2>
              <span>Check Our Best</span> Promotional Tour
            </h2>
            <p className="my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className="tours-card mt-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src={beijing} alt="error" className="img-fluid" />
                <div className="card-body">
                  <div className="card-title text-center my-md-0 my-3">
                    Beijing
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img src={turkey} alt="error" className="img-fluid" />
                <div className="card-body">
                  <div className="card-title text-center my-md-0 my-3">
                    Turkey
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
              <div className="card">
                <img src={pakistan} alt="error" className="img-fluid" />
                <div className="card-body">
                  <div className="card-title text-center my-md-0 my-3">
                    Pakistan
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
