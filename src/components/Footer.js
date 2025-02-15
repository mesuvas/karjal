import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" text-white py-4" style={{ backgroundColor: "#006EB9" }}>
      <div className="container-footer">
        <div className="row">
          <div className="col-md-3">
            <h5>Karnali Jalashrot Limited</h5>
            <p>© 2025 Karnali Jalashrot Limited. All rights reserved.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <div className="container-fluid d-flex justify-content-center">
              <div className="row width-100">
                <div className="col">
                  <ul className="list-unstyled">
                    <li><Link className="text-white" to="/">Home</Link></li>
                    <li><Link className="text-white" to="/about">About Us</Link></li>
                    <li><Link className="text-white" to="/contact">Contact Us</Link></li>
                    <li><Link className="text-white" to="/documents">Documents</Link></li>
                  </ul>
                </div>
                <div className="col ">
                  <ul className="list-unstyled">
                    <li><Link className="text-white" to="/drinking-water">Drinking Water</Link></li>
                    <li><Link className="text-white" to="/irrigation">Irrigation</Link></li>
                    <li><Link className="text-white" to="/fisheries">Fisheries</Link></li>
                    <li><Link className="text-white" to="/electricity-generation">Electricity Generation</Link></li>
                    <li><Link className="text-white" to="/recreation">Recreation</Link></li>
                    <li><Link className="text-white" to="/navigation">Navigation</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="list-unstyled">
              <li><Link className="text-white" to="/">Home</Link></li>
              <li><Link className="text-white" to="/about">About Us</Link></li>
              <li><Link className="text-white" to="/contact">Contact Us</Link></li>
              <li><Link className="text-white" to="/documents">Documents</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white" to="/drinking-water">Drinking Water</Link></li>
              <li><Link className="text-white" to="/irrigation">Irrigation</Link></li>
              <li><Link className="text-white" to="/fisheries">Fisheries</Link></li>
              <li><Link className="text-white" to="/electricity-generation">Electricity Generation</Link></li>
              <li><Link className="text-white" to="/recreation">Recreation</Link></li>
              <li><Link className="text-white" to="/navigation">Navigation</Link></li>
            </ul>
          </div>
          <div className="col-md-3 text-center mt-4">
            <p>Follow Us:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              LinkedIn
            </a>
          </div>
        </div>
           
        </div>
     </footer>
  );
}

export default Footer;
