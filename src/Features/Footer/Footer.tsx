import logoFt from "../../Assets/images/logo-ft.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5">
              <div className="footer-logo d-flex justify-content-around align-items-center">
                <img src={logoFt} alt="error" className="img-fluid" />
                <h2>Domestic International Tours</h2>
              </div>
              <div className="subscribe">
                <h2>Subscribe to get our Newsletter</h2>

                <form className="form d-flex justify-content-between">
                  <input
                    type="emai"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  <button type="submit" className="btn ms-3">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="conditions d-flex justify-content-around">
                <a href="#">
                  <p>Careeers</p>
                </a>
                <a href="#">
                  <p>Privacy Policy</p>
                </a>
                <a href="#">
                  <p>Terms & Conditions</p>
                </a>
              </div>
              <div className="copyright text-center">
                <p>© 2022 Tourism Department. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
