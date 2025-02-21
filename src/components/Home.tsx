import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row d-flex">
        <div className="col-9 gx-0">
          {/* home main image */}
          <div className="container-fluid gx-0">
            <div className="container py-5 ps-5 my-5 gx-0 home text-center shadow-lg rounded">
              <h2 className="fw-bold">Welcome to My Website</h2>
              <p className="text-warning lead">
                This is the Home page of your website. Explore our site to learn
                more about what we offer.
              </p>
            </div>
          </div>

          {/* home-description with features */}
          <div className="container g-5 p-5 my-5 home-description shadow-lg rounded text-start lead bg-body-tertiary">
            <h2 className="fw-bold mb-2">
              Karnali Jalashrot Limited - An Alternative Development Model
            </h2>
            <p className="text-primary">
              A Public Limited Company based on mass participation, believing in
              Development for the people by the people, financed by crowd
              funding, and devoted to people-centric water resources
              development, mobilizing their full potential in the fields of
              <br />
              <Link className="dropdown-item" to="/about">
                Read More
              </Link>
            </p>

            {/* Features */}
            <div className="row">
              {[
                {
                  title: "Drinking Water",
                  text: "Providing clean and safe drinking water to communities, ensuring access to this basic ...",
                  imgSrc: "images/home/drinkingWater.jpg",
                },
                {
                  title: "Electricity Generation",
                  text: "Generating renewable energy through sustainable practices, ensuring a reliable and eco-friendly ...",
                  imgSrc: "images/home/hydro.jpg",
                },
                {
                  title: "Irrigation",
                  text: "Ensuring efficient water distribution for agriculture and sustainability ...",
                  imgSrc: "images/home/irrigation.jpg",
                },
                {
                  title: "Recreation",
                  text: "Promoting eco-friendly tourism and leisure activities...",
                  imgSrc: "images/home/recreation.jpg",
                },
                {
                  title: "Fisheries",
                  text: "Developing sustainable fish farming and aquatic biodiversity conservation...",
                  imgSrc: "images/home/fishery.jpg",
                },
                {
                  title: "Navigation",
                  text: "Enhancing inland water transport infrastructure...",
                  imgSrc: "images/home/navigation.jpg",
                },
              ].map((feature, index) => (
                <div key={index} className="col-sm-6 mt-4">
                  <div className="card px-4">
                    <div className="card-body">
                      <h5 className="card-title">{feature.title}</h5>
                      <p className="card-text">{feature.text}</p>
                      <img
                        src={feature.imgSrc}
                        className="rounded w-100 me-4"
                        alt={feature.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News Column */}
        <div className="col-3 border-start border-3 gx-0 px-4">
          <div className="container text mt-5">
            <div className="row">
              <div className="col-12">
                <h2>
                  <img
                    src="images/home/news.svg"
                    className="rounded w-25 me-4"
                    alt="News"
                  />
                  Latest News:
                </h2>
              </div>
            </div>

            <div className="row">
              {[
                {
                  title: "कर्णाली जलश्रोत लिमिटेड सौर्य दैनिक",
                  date: "Jan 6, 2025",
                  text: "Click here to download the daily report.",
                },
                {
                  title: "कर्णाली जलश्रोत लिमिटेड सौर्य दैनिक",
                  date: "Sept 5, 2024",
                  text: "Related to share ...",
                },
                {
                  title: "कर्णाली जलश्रोत लिमिटेड सौर्य दैनिक २०८० मंसिर २८",
                  date: "Dec 14, 2023",
                  text: "Related to share ...",
                },
                {
                  title: "कर्णाली जलश्रोत लिमिटेड आठौं वार्षिक २०७९|०८|१०",
                  date: "Dec 12, 2022",
                  text: "The annual board meeting of Karnali Jalashrot Limited will be held on 10th December 2022. All shareholders are requested to attend the meeting ...",
                },
                {
                  title: "कर्णाली जलश्रोत लिमिटेड आठौं वार्षिक २०७९|०८|१०",
                  date: "Jan 17, 2013",
                  text: "We maintain our standards in what we do and plan ahead for the future...",
                },
              ].map((news, index) => (
                <div key={index} className="col-12 mb-4">
                  <div className="card bg-teritary text-start">
                    <div className="card-body">
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text">Notice date: {news.date}</p>
                      <p>{news.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
