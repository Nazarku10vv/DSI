import React from "react";
import box1 from "../image/product-description 1.svg";
import box2 from "../image/verified 1.svg"
import box3 from "../image/cogwheel 1.svg"

const Box = () => {
  return (
    <section id="box">
      <div className="container">
        <div className="box">
          <h1>Product and Service</h1>
          <div className="box_nav">
            <div className="box_card">
              <img src={box1} alt="" />
              <h3>Our Product</h3>
              <p>
                Our product is made on the base of our <br /> team’s careful research
                and analyses, <br /> ranging from internet based <br /> application.
              </p>
              <button>Read More</button>
            </div>
            <div className="box_card">
              <img src={box2} alt="" />
              <h3>Our Service</h3>
              <p>
                Our product is made on the base of our <br /> team’s careful research
                and analyses, <br /> ranging from internet based <br /> application.
              </p>
              <button>Read More</button>
            </div>
            <div className="box_card">
              <img src={box3} alt="" />
              <h3>Our Technology</h3>
              <p>
                Our product is made on the base of our <br /> team’s careful research
                and analyses, <br /> ranging from internet based <br /> application.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
