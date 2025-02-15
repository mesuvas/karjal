import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About/About";
import Capital from "./components/About/Capital";
import Goals from "./components/About/Goals";
import Objectives from "./components/About/Objectives";
import Plans from "./components/About/Plans";
import Structure from "./components/About/Structure";
import Statement from "./components/About/Statement";
import Vision from "./components/About/Vision";
import Services from "./components/Services/Services";
import Electricity from "./components/Services/Electricity";
import Fisheries from "./components/Services/Fisheries";
import Irrigation from "./components/Services/Irrigation";
import Navigation from "./components/Services/Navigation";
import Recreation from "./components/Services/Recreation";
import Water from "./components/Services/Water";
import News from "./components/News";
import Document from "./components/Document";
import Contact from "./components/Contact";
import Director from "./components/Teams/Director";
import Members from "./components/Teams/Members";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-vision" element={<Vision />} />
          <Route path="/mission-statement" element={<Statement />} />
          <Route path="/organization-structure" element={<Structure />} />
          <Route path="/current-action-plans" element={<Plans />} />
          <Route path="/company-objectives" element={<Objectives />} />
          <Route path="/company-goals" element={<Goals />} />
          <Route path="/capital-sources" element={<Capital />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/drinking-water" element={<Water />} />
          <Route path="/irrigation" element={<Irrigation />} />
          <Route path="/fisheries" element={<Fisheries />} />
          <Route path="/electricity-generation" element={<Electricity />} />
          <Route path="/recreation" element={<Recreation />} />
          <Route path="/navigation" element={<Navigation />} />

          <Route path="/board-of-directors" element={<Director />} />
          <Route path="/team-members" element={<Members />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<News />} />
          <Route path="/documents" element={<Document />} />
    
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
