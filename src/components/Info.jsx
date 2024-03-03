import React from "react";
import png from "../image/home 1.png";

const Info = () => {
  return (
    <section id="info">
      <div className="container">
        <div className="info">
          <div className="info_img">
            <img src={png} alt="" />
          </div>
          <div className="info_txt">
            <h1>
              Welcome to{" "}
              <span>
                Dwidasa Samsara <br /> Indonesia (DSI)
              </span>
            </h1>
            <p>
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010{" "}
              <br /> by the founders, who each of them has a common end
              objective <br /> to innovate new creations by making the most of
              the <br /> ever-growing information technology through{" "}
              <span>DSI’s</span> distinct <br />
              front-end based application concept.
            </p>
            <p>
              Managed by a team of professional experts with extensive <br />
              experience and impressive track records, <span>DSI</span>believes that <br />
              continuous improvements and innovations assure your business to <br />
              run effectively and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
