import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid text-center ">
      <div className="row d-flex">
        <div className="col-9  gx-0">
          {/* home main image */}
          <div className="container-fluid gx-0">
            <div className="container py-5 ps-5 my-5 gx-0	home text-center shadow-lg  rounded">
              <h2 className=" fw-bold">Welcome to My Website</h2>
              <p className="text-warning lead">
                This is the Home page of your website. Explore our site to learn
                more about what we offer.
              </p>
            </div>
          </div>

          {/* home-description with features*/}
          <div className="container g-5 p-5 my-5 home-description shadow-lg  rounded text-start lead bg-body-tertiary">
            <h2 className="fw-bold mb-2">
              Karnali Jalashrot Limited - An Alternative Development Model
            </h2>
            <p className="text-primary   ">
              A Public Limited Company based on mass participation, Believing in
              Development for the people by the people, Financed by Crowd
              Funding, and Devoted to people-centric Water Resources Development
              mobilizing their full potential in the fields of
              <br></br>
              <Link className="dropdown-item" to="/about">
                About Us
              </Link>
            </p>

            {/* features */}
            <div class="row">
              {/* drinking water column */}
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              {/* electricity column */}
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* news column */}
        <div className="col-3 border-start border-3 gx-0">
          <div class="container text  mt-5 d-flex justify-content-between align-items-center">
            <h2>
              <img
                src="images/home/news.svg"
                class="rounded w-25 me-4"
                alt="..."
              ></img>
              <span></span>
              Latest News :
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
