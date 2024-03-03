import React from "react";
import logo1 from "../image/DSI.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact_nav">
            <div className="contact_img">
              <img src={logo1} alt="" />
              <h6>
                DWIDASA <br />
                DWIDASA <br />
                DWIDASA
              </h6>
            </div>
            <h3>PT Dwidasa Samsara Indonesia</h3>
            <h4>
              Ruko Jalur Sutera 29A No. 53 <br /> Alam Sutera Serpong, Tangerang 15323
            </h4>
          </div>

          <div className="contact_pul">
            <h1>Contact</h1>
            <h3>
              Phone : +62.21.5314.1135 <br /> Fax : +62.21.5314.1135 <br />{" "}
              Email : community@dwidasa.com
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
