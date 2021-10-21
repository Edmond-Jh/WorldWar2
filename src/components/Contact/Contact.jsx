import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>ارتباط با ما</h2>
              <hr />
              <p>برای ارتباط با تیم فنی ما از طریق فرم زیر اقدام کنید</p>
            </div>
            <div
              className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 contact-form wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <form action="#" method="post">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="6"
                ></textarea>
                <input
                  type="submit"
                  className="form-control"
                  value="SEND EMAIL"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
