import React from "react";
import "./qualification.css";

function Qualification() {
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            EDUCATION
          </div>
          {/* <div className="qualification_button button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            EDUCATION
          </div> */}
        </div>
        <div className="qualification_sections">
          <div className="qualification_content qualification_content-active">
            <div className="qualification_data">
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3 className="qualification_title">MEARN STACK DEVELOPER</h3>
                <span className="qualification_subtitle">
                  Luminar Technolab,kochi
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> jan 2023 - jul 2023
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <h3 className="qualification_title">
                  DIPLOMA IN ELECTRONICS ENGINEERING
                </h3>
                <span className="qualification_subtitle">
                  IPT AND GPTC, shoranur
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> -2022
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="250"
                data-aos-duration="1000"
              >
                <h3 className="qualification_title">BIOLOGY SCIENCE</h3>
                <span className="qualification_subtitle">
                  Arogyamatha Higher Secondary School, Kottathara
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>-2019
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="350"
                data-aos-duration="1000"
              >
                <h3 className="qualification_title">SSLC</h3>
                <span className="qualification_subtitle">Kokkampalayam</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>- 2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
