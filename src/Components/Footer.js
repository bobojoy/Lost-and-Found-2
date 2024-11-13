import '../Footer.css';

export default function Footer() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Contact Us</h2>
                <a
                  href="https://maps.app.goo.gl/eSJBmQkyKMg9cxs36"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <i className="fa fa-map-marker-alt"></i>Ngong Lane, Ngong
                    Lane Plaza, 1st Floor,
                  </p>
                </a>
                <p> Nairobi, Kenya</p>
                <a href="tel:+254711082146">
                  <p>
                    <i className="fa fa-phone"></i>+254711082146 (General
                    Enquiries)
                  </p>
                </a>
                <a href="tel:+254712293878">
                  <p>
                    <i className="fa fa-phone"></i>+254712293898 (Whatsapp)
                  </p>
                </a>
                <a href="mailto:mohamedbashirduale@gmail.com">
                  <p>
                    <i className="fa fa-envelope"></i>
                    moringalostandfound@gmail.com
                  </p>
                </a>
                <div className="footer-social">
                  <a
                    className="btn btn-custom"
                    href="https://twitter.com/Sosoyo2019"
                  >
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a
                    className="btn btn-custom"
                    href="https://www.facebook.com/profile.php?id=61556971701370"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-custom"
                    href="https://instagram.com/sosoyo19"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form name="NewsLetter">
                  <input
                    name="subscribe"
                    className="form-control"
                    placeholder="Email goes here"
                    autoComplete="email"
                    required
                  />
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <p>
              &copy; <a href="#">THE Lost and Found</a> | 2024, All Right
              Reserved.
            </p>
          </div>
        </div>
      </div>
    );
}