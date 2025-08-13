import React from "react";

export default function Footer() {
  return (
    <footer className="text-white text-center pt-5 bg-primary">
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">LOCATION</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">AROUND THE WEB</h3>

            <div className="flex justify-center items-center space-x-2">
              <i className="social-icon fa-brands fa-facebook"></i>
              <i className="social-icon fa-brands fa-x-twitter"></i>
              <i className="social-icon fa-brands fa-linkedin-in"></i>
              <i className="social-icon fa-solid fa-globe"></i>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3 bg-secondary">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
