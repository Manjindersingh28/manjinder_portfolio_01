import React from "react";
import profilePic from "./assets/manjinder.png";

function HeroSection() {
  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row align-items-center">
        {/* LEFT TEXT */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold">Hi, I’m Manjinder Singh 👋</h1>
          <p className="lead">Frontend Developer based in Australia 🇦🇺</p>
          <p className="text-muted">
            I build fast, responsive, user-focused interfaces for modern web
            apps.
          </p>
          <a href="#projects" className="btn btn-primary px-4 py-2 mt-3">
            View Projects
          </a>
          <div className="mt-4">
            <a
              href="https://github.com/Manjindersingh28"
              target="_blank"
              className="me-3 fs-4 text-dark"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="fs-4 text-primary"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={profilePic}
            alt="Hero"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
