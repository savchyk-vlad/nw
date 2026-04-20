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
    title="Northwood Renovation | Seattle Deck, Fence, and Exterior Remodeling"
    description="Northwood Renovation builds decks, fences, and exterior upgrades for Seattle-area homeowners. Get a free estimate from a local team focused on clean craftsmanship and durable results."
    pathname={location.pathname}
  />
);

export default IndexPage;
