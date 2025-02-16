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
                Read More
              </Link>
            </p>

            {/* features */}
            <div class="row">
              {/* drinking water column */}
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card px-4">
                  <div class="card-body">
                    <h5 class="card-title">Drinking Water</h5>
                    <p class="card-text">
                      Providing clean and safe drinking water to communities,
                      ensuring access to this basic necessity for all ...
                    </p>
                    <img
                      src="images/home/drinkingWater.jpg"
                      class="rounded w-100 me-4"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
              {/* electricity column */}
              <div class="col-sm-6">
                <div class="card px-4">
                  <div class="card-body">
                    <h5 class="card-title">Electircity Generation</h5>
                    <p class="card-text">
                      Generating renewable energy through sustainable practices,
                      ensuring a reliable and eco-friendly ...
                    </p>
                    <img
                      src="images/home/electricity.jpg"
                      class="rounded w-100 me-4"
                      alt="..."
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* news column */}
        <div className="col-3 border-start border-3 gx-0 px-4">
          <div class="container text  mt-5">
            <div className="row">
              <div className="col-12">
                <h2>
                  <img
                    src="images/home/news.svg"
                    class="rounded w-25 me-4"
                    alt="..."
                  ></img>
                  Latest News :
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div class="card bg-teritary">
                  <div class="card-body">
                    <h5 class="card-title">
                      कर्णाली जलश्रोत लिमिटेड आठौं वार्षिक २०७९|०८|१०
                    </h5>
                    <p class="card-text">notice date- 12, Dec 2022</p>
                    <p>
                      The annual board meeting of Karnali Jalashrot Limited will
                      be held on 10th December 2022. All shareholders are
                      requested to attend the meeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
