import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#006EB9" }}>
      <div className="container text-center">
    
        <Link className="navbar-brand w-50" to="/">Karnali Jalashrot Limited</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/company-vision">Company Vision</Link></li>
                <li><Link className="dropdown-item" to="/mission-statement">Mission Statement</Link></li>
                <li><Link className="dropdown-item" to="/company-goals">Company Goals</Link></li>
                <li><Link className="dropdown-item" to="/company-objectives">Company Objectives</Link></li>
                <li><Link className="dropdown-item" to="/current-action-plans">Current Action Plans</Link></li>
                <li><Link className="dropdown-item" to="/capital-sources">Capital Sources</Link></li>
                <li><Link className="dropdown-item" to="/organization-structure">Organization Structure</Link></li>
              </ul>
            </li>

            {/* Our Services Dropdown */}
            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button">
                Our Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/drinking-water">Drinking Water</Link></li>
                <li><Link className="dropdown-item" to="/irrigation">Irrigation</Link></li>
                <li><Link className="dropdown-item" to="/fisheries">Fisheries</Link></li>
                <li><Link className="dropdown-item" to="/electricity-generation">Electricity Generation</Link></li>
                <li><Link className="dropdown-item" to="/recreation">Recreation</Link></li>
                <li><Link className="dropdown-item" to="/navigation">Navigation</Link></li>
              </ul>
            </li>

            {/* Our Teams Dropdown */}
            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="teamsDropdown" role="button">
                Our Teams
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/board-of-directors">Board Of Directors</Link></li>
                <li><Link className="dropdown-item" to="/team-members">Team Members</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/news-events">News and Events</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/documents">Documents</Link>
            </li>

          </ul>
        </div>       
      </div>
    </nav>
  );
}

export default Header;
