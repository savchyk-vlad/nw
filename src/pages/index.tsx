import * as React from "react";
import "../styles/home.css";
import GallerySection from "../components/home/gallery-section";
import Hero from "../components/home/hero";
import ProcessSection from "../components/home/process-section";
import ServicesSection from "../components/home/services-section";
import TestimonialsSection from "../components/home/testimonials-section";
import TrustSection from "../components/home/trust-section";
import SiteLayout from "../components/site-layout";

const IndexPage = () => (
  <SiteLayout>
    <div className="home-page">
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
    </div>
  </SiteLayout>
);

export default IndexPage;
