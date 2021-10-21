import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h2 className="wow fadeIn" data-wow-delay="0.9s">
                Follow Us
              </h2>
              <ul className="social-icon">
                <li>
                  <a
                    href="#"
                    className="fa fa-facebook wow bounceIn"
                    data-wow-delay="0.3s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-twitter wow bounceIn"
                    data-wow-delay="0.6s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-behance wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-dribbble wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-github wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-android wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-phone wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-sm-12 copyright">
              <p>Copyright © 2022 Ulrich Team | All Right reversed.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
