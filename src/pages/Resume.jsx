import React from "react";
import resumePDF from "../assets/AndreaGonzalezResume.pdf";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="WorkExperience">
        <h2 className="subHead">Work Experience</h2>

        <div className="individual"><div className="card text-center">
          <div className="card-header">Mad Science</div>
          <div className="card-body">
            <h5 className="card-title">After School Science Instructo</h5>
            <p className="card-text">
              As an after-school instructor, I had the privilege of fostering a
              passion for learning in young minds. I designed engaging lesson
              plans, facilitated hands-on experiments, and created a supportive
              classNameroom environment. This experience allowed me to develop
              excellent communication and presentation skills, as well as the
              ability to adapt content to different age groups.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            December 2019 - March 2020
          </div>
        </div></div>
        
        <div className="individual"><div className="card text-center">
          <div className="card-header">IHOP</div>
          <div className="card-body">
            <h5 className="card-title">Server</h5>
            <p className="card-text">
              As an Overnight Waitress at IHOP during the challenging times of
              the pandemic in 2020, I demonstrated unwavering dedication,
              adaptability, and commitment to providing essential services while
              ensuring the safety and satisfaction of our valued patrons.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            June 2020 - September 2020
          </div>
        </div></div>
        
        <div className="individual"><div className="card text-center">
          <div className="card-header">Dallas Country Club</div>
          <div className="card-body">
            <h5 className="card-title">Server & Bartender</h5>
            <p className="card-text">
              In my current role at a prestigious country club, I have continued
              to build on my hospitality expertise. As a bartender and server, I
              have developed strong multitasking abilities, ensuring a seamless
              dining experience for members and their guests. My attention to
              detail, exceptional customer service, and ability to work under
              pressure have contributed to the club's reputation for excellence.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            September 2020 - Current
          </div>
        </div></div>
        
        <div className="individual"><div className="card text-center">
          <div className="card-header">Free Lancing</div>
          <div className="card-body">
            <h5 className="card-title"> Web Developer</h5>
            <p className="card-text">
              As a certified full stack web developer, I consult with clients to
              understand their requirements and ensure satisfaction throughout
              the development process. Leveraging a diverse skill set, I create
              dynamic and responsive web applications tailored to meet client
              needs. I enhance functionality and accessibility through the use
              of various technologies and tools, while maintaining efficient
              project management and deployment practices. With expertise in
              user authentication and the latest web development practices, I
              deliver scalable and feature-rich web solutions that exceed client
              expectations.
            </p>
          </div>
          <div className="card-footer text-body-secondary">
            Februrary 2024 - Current
          </div>
        </div></div>
        
      </div>

      <div className="downloadBtn">
        <a href={resumePDF} className="btn btn-primary btn-success" download={resumePDF}>
          Download Resume
        </a>
      </div>

      <div className="education">
        <h2 className="subHead">Education</h2>

<div className="individual"><div className="card text-center">
          <div className="card-header">Dallas College Eastfield</div>
          <div className="card-body">
            <h5 className="card-title">Associates of Science</h5>
          </div>
          <div className="card-footer text-body-secondary">
            August 2018-May 2022
          </div>
        </div></div>

        <div className="individual"> <div className="card text-center">
          <div className="card-header">Southern Methodist University</div>
          <div className="card-body">
            <h5 className="card-title">
              Certified Full Stack Developer (CFSD)
            </h5>
          </div>
          <div className="card-footer text-body-secondary">
            August 2023 - Februrary 2024
          </div>
        </div></div>

       
      </div>


      <div className="certifications">
        <h2 className="subHead">Certifications</h2>

        <div className="individual"><div className="card text-center">
          <div className="card-header">OSHA</div>
          <div className="card-body">
            <h5 className="card-title">OSHA 10-Hour General Industry</h5>
          </div>
          <div className="card-footer text-body-secondary">2017</div>
        </div></div>
        

        <div className="individual"><div className="card text-center">
          <div className="card-header">SMU Full Stack Coding Bootcamp</div>
          <div className="card-body">
            <h5 className="card-title">Full Stack Web Development</h5>
          </div>
          <div className="card-footer text-body-secondary">2024</div>
        </div></div>
        
      </div>

     
    </div>
  );
};

export default Resume;
