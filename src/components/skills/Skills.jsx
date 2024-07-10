import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills section" id="Skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div className="skills_content">
          <div className="skills_box">
            <div className="skills_group">
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">REACT</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">REACT NATIVE</h3>
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">TYPESCRIPT</h3>
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">FIREBASE</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
            </div>
            <div className="skills_group">
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">EXPRESS</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="250"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">NODE JS</h3>
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">MONGO DB</h3>
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="350"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">NO SQL</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
            </div>
            <div className="skills_group">
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">TAILWIND CSS</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="450"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">HTML</h3>
                  {/* <span className="skills_level">Expert</span> */}
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">CSS</h3>
                </div>
              </div>
              <div
                className="skills_data"
                data-aos="zoom-out"
                data-aos-offset="100"
                data-aos-delay="550"
                data-aos-duration="1000"
              >
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">JAVASCRIPT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
