import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-info flex justify-center items-center text-white"
    >
      <div className="container px-4 lg:px-8 mt-4">
        <div className="title">
          <h2 className="text-center text-4xl font-bold">ABOUT COMPONENT</h2>

          <div className="star-container mt-3 mb-3">
            <div className="star-line"></div>
            <i className="fa fa-solid fa-star"></i>
            <div className="star-line"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
