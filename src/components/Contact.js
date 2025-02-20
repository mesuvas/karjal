import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.69962876398487, // Change to your desired latitude
  lng: 85.32895745377914, // Change to your desired longitude
};

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>About Us</h2>
      <p>We are located at this amazing place!</p>

      {/* Google Map Component */}
      <LoadScript googleMapsApiKey="AIzaSyCvgehG6snr5tUWIYCVC2m1HaYd32ZgEWs">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Contact;
