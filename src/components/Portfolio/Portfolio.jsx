import React from "react";

export default function Portfolio() {
  function previewImg(src) {
    document.querySelector("#img-preview").setAttribute("src", src);
    document.querySelector(".preview-img").classList.remove("hidden");
    document.querySelector(".preview-img").classList.add("flex");
  }

  function closeImg() {
    document.querySelector(".preview-img").classList.remove("flex");
    document.querySelector(".preview-img").classList.add("hidden");
  }

  return (
    <section
      id="portfolio"
      className="min-h-screen flex justify-center items-center mt-3 mb-5"
    >
      <div className="container mt-5">
        <div className="title mt-5">
          <h1 className="text-center text-4xl font-bold text-primary">
            PORTFOLIO COMPONENT
          </h1>

          <div className="star-container mt-3 mb-3">
            <div className="star-line-dark"></div>
            <i className="fa fa-solid fa-star text-primary"></i>
            <div className="star-line-dark"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() =>
              previewImg(require("../../assets/imgs/poert1.png"))
            }
          >
            <img
              src={require("../../assets/imgs/poert1.png")}
              className="w-full h-auto"
              alt="poert1"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>

          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() => previewImg(require("../../assets/imgs/port2.png"))}
          >
            <img
              src={require("../../assets/imgs/port2.png")}
              className="w-full h-auto"
              alt="port2"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>

          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() => previewImg(require("../../assets/imgs/port3.png"))}
          >
            <img
              src={require("../../assets/imgs/port3.png")}
              className="w-full h-auto"
              alt="port3"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>

          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() =>
              previewImg(require("../../assets/imgs/poert1.png"))
            }
          >
            <img
              src={require("../../assets/imgs/poert1.png")}
              className="w-full h-auto"
              alt="poert1"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>

          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() => previewImg(require("../../assets/imgs/port2.png"))}
          >
            <img
              src={require("../../assets/imgs/port2.png")}
              className="w-full h-auto"
              alt="port2"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>

          <div
            className="portfolio-card overflow-hidden rounded-lg relative"
            onClick={() => previewImg(require("../../assets/imgs/port3.png"))}
          >
            <img
              src={require("../../assets/imgs/port3.png")}
              className="w-full h-auto"
              alt="port3"
            />

            <div className="portfolio-overlay">
              <i className="fa fa-solid fa-plus text-5xl text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className="preview-img fixed inset-0 w-full h-screen bg-info/25 hidden justify-center items-center z-50"
        onClick={closeImg}
      >
        <img
          id="img-preview"
          alt="preview img"
          className="w-1/2 mt-5 rounded-lg"
        />
      </div>
    </section>
  );
}
