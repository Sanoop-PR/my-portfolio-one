import React from "react";

function Social() {
  return (
    <div className="home_social">
      <a
        data-aos="zoom-out"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        href="https://www.instagram.com/sanoop287"
        className="home_social-icon"
        target="blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="800"
        data-aos-duration="1000"
        href="https://www.linkedin.com/in/sanoop-pr"
        className="home_social-icon"
        target="blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        data-aos="zoom-out"
        data-aos-offset="250"
        data-aos-delay="1000"
        data-aos-duration="1000"
        href="https://github.com/Sanoop-PR"
        className="home_social-icon"
        target="blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
