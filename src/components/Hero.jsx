import React from "react";
import img1 from "../image/gap.png"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero_text">
            <h1>
              Making the most of the <br /> ever-growing <br />{" "}
              <span>Information Technology</span>
            </h1>
            <p>
              Managed by a team of professional experts with extensive <br />
              experience and impressive track records
            </p>
            <button>Read More</button>
          </div>
          <div className="hero_img">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
