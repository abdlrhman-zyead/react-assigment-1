import React from "react";
import errorImg from "../../assets/imgs/Oops.svg";

export default function Error() {
  return (
    <section className="min-h-screen bg-info flex justify-center items-center">
      <div className="container text-center p-3 mt-5">
        <img src={errorImg} alt="Error" className="w-1/4 mx-auto" />
        <h1 className="text-white text-4xl font-bold mt-4">404 - Page Not Found</h1>
        
        <div className="star-container mt-3 mb-3">
          <div className="star-line"></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div className="star-line"></div>
        </div>

        <p className="text-white mb-4">
          The page you're looking for doesn't exist.
        </p>
        
        <a 
          href="/" 
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </section>
  );
} 