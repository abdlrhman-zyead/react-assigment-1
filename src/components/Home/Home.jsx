import React from "react";
import avatar from "../../assets/imgs/avataaars.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-info flex justify-center items-center"
    >
      <div className="container text-center p-3 mt-5">
        <img src={avatar} alt="avatar" className="w-1/5 mx-auto" />
        <h1 className="text-white text-4xl font-bold mt-4">START FRAMEWORK</h1>

        <div className="star-container mt-3 mb-3">
          <div className="star-line"></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div className="star-line"></div>
        </div>

        <p className="text-white mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
