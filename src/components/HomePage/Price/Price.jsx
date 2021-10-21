import React from "react";

const Price = () => {
  return (
    <>
      <div id="price">
        <div className="container">
          <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
            <h2>Our Plans</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoree.
            </p>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="plan wow bounceIn" data-wow-delay="0.3s">
              <div className="plan_title">
                <h3>Basic</h3>
              </div>
              <div className="plan_sub_title">
                <h2>$ 25</h2>
                <small>Per month</small>{" "}
              </div>
              <ul>
                <li>5 ACCOUNTS</li>
                <li>20 GB SPACE</li>
                <li>20 BASIC THEMES</li>
              </ul>
              <button className="btn btn-warning">Get started</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="plan wow bounceIn" data-wow-delay="0.6s">
              <div className="plan_title">
                <h3>Business</h3>
              </div>
              <div className="plan_sub_title">
                <h2>$ 50</h2>
                <small>per month</small>{" "}
              </div>
              <ul>
                <li>10 ACCOUNTS</li>
                <li>50 GB SPACE</li>
                <li>30 PRO THEMES</li>
              </ul>
              <button className="btn btn-warning">Get started</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="plan wow bounceIn" data-wow-delay="0.9s">
              <div className="plan_title">
                <h3>Professional</h3>
              </div>
              <div className="plan_sub_title">
                <h2>$ 75</h2>
                <small>per month</small>{" "}
              </div>
              <ul>
                <li>20 ACCOUNTS</li>
                <li>100 GB SPACE</li>
                <li>60 PRO THEMES</li>
              </ul>
              <button className="btn btn-warning">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Price;
