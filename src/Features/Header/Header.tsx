import logo from "../../Assets/images/logo.png";
import banner from "../../Assets/images/banner.png";
import phone from "../../Assets/images/icons/phone.png"
import play from "../../Assets/images/icons/play.png"

export const Header = () => {
  return (
    <>
      <div className="warning-clr">
        <div className="container">
          <header className="header">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="error" className="img-fluid" />
              </a>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
              >
                <i className="fa fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="btn d-flex align-items-center justify-content-evenly">
                  <img className="icon-view" src={phone} alt="phone-icon" />+1 (000) 000 000
                </div>
              </div>
            </nav>
          </header>

          <div className="hero-sec">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6">
                <h2>
                  {" "}
                  <span> Life is a journey</span>, not a destination
                </h2>
                <p className="my-4 mb-md-5 w-75">
                  Let’s start your journey with us, your dream will come true..
                </p>
                <a href="#">
                  <div className="btns d-flex">
                    <button type="button" className="btn me-3">
                      Explore Destinations
                    </button>
                    <div className="play-btn d-flex align-items-center justify-content-between">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <img className="icon-view" src={play} alt="play-icon"  />
                      </div>
                      <span>Watch how it works</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6">
                <img src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
