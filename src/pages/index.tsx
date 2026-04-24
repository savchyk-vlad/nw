import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/home.css";
import GallerySection from "../components/home/gallery-section";
import Hero from "../components/home/hero";
import ProcessSection from "../components/home/process-section";
import SeoHead from "../components/seo";
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

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Deck & Fence Contractor in Everett, WA | Northwood Renovation"
    description="Northwood Renovation is an Everett-based deck and fence contractor serving Snohomish County, North Seattle, and the greater Puget Sound area. Free on-site estimates. Call (425) 683-2024."
    pathname={location.pathname}
  />
);

export default IndexPage;
