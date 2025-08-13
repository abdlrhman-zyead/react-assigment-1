import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="container">
        <div className="title">
          <h1 className="text-center text-4xl font-bold text-primary">
            CONTACT SECTION
          </h1>

          <div className="star-container mt-3 mb-3">
            <div className="star-line-dark"></div>
            <i className="fa fa-solid fa-star text-primary"></i>
            <div className="star-line-dark"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto">
          <div className="input-container">
            <input
              id="uName"
              type="text"
              className="form-input mt-5 mb-5"
              placeholder="User Name"
            />
            <label htmlFor="uName" className="input-label">
              User Name
            </label>
          </div>

          <div className="input-container">
            <input
              id="uAge"
              type="number"
              className="form-input mb-5"
              placeholder="User Age"
            />
            <label htmlFor="uAge" className="input-label">
              User Age
            </label>
          </div>

          <div className="input-container">
            <input
              id="uEmail"
              type="email"
              className="form-input mb-5"
              placeholder="User Email"
            />
            <label htmlFor="uEmail" className="input-label">
              User Email
            </label>
          </div>

          <div className="input-container">
            <input
              id="uPass"
              type="password"
              className="form-input mb-4"
              placeholder="User Password"
            />
            <label htmlFor="uPass" className="input-label">
              User Password
            </label>
          </div>

          <button className="btn border border-accent text-accent px-5 py-2 rounded hover:bg-accent hover:text-white transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
