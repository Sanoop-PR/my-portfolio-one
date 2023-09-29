import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section
      className="skills section"
      id="Skills"
      data-aos="zoom-out"
      data-aos-offset="300"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <div className="skills_content">
          <h3 className="skills_title">Frontend Developer</h3>
          <div className="skills_box">
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_level">Expert</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">JAVASCRIPT</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">BOOTSTRAP</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">ANGULAR</h3>
                  <span className="skills_level">Advanced</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">NODE JS</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
            </div>
            <div className="skills_group">
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">EXPRESS</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">REACT</h3>
                  <span className="skills_level">Intermediate</span>
                </div>
              </div>
              <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">GIT</h3>
                  <span className="skills_level">Advanced</span>
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
