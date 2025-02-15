import React from "react";


function News() {
  return (
    <div className="container-fluid text-center">
      <h2 className="row text-primary fw-bold">Welcome to My Website</h2>
      <p className="lead">
        This is the News page of your website. Explore our site to learn more about
        what we offer.
      </p>
      <button className="btn btn-primary btn-lg mt-3" onClick={() => alert('Thanks for visiting!')}>
        Click Me
      </button>
    </div>
  );
}

export default News;
