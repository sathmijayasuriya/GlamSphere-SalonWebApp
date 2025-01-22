import React from "react";
import HeroSection from "../../components/Landing/HeroSection";
import GoogleMap from "../../components/Landing/GoogleMap";
import SalonServices from "../../components/Landing/SalonServices";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <SalonServices />
      <GoogleMap/>
    </>
  );
}
