import * as React from "react";
import { Link } from "gatsby";
import renderBrandText from "../brand-text";
import servicesChainLinkFence from "../../images/services-chain-link-fence.jpg";
import servicesCompositeDeck from "../../images/services-composite-deck.jpg";
import servicesCustomDeck from "../../images/services-custom-deck.jpg";
import servicesFenceRoad from "../../images/services-fence-road.jpeg";
import servicesOutdoorDeck from "../../images/services-outdoor-deck.jpeg";
import servicesWoodDeck from "../../images/services-wood-deck.jpg";

const services = [
  {
    name: "Cedar Wood Fences",
    description:
      "Cedar wood fences are a great choice for homeowners who want natural beauty, privacy, and long-term value. Northwood Renovation builds cedar fencing with clean lines, strong posts, and careful installation so the fence looks great and performs well through changing weather.",
    image: servicesFenceRoad,
    alt: "Cedar wood fence installation along a residential sidewalk",
  },
  {
    name: "Chain Link Fence",
    description:
      "Chain link fencing is practical, durable, and cost-effective. It is a good solution for securing yards, pet areas, side yards, and property boundaries while keeping the space open and visible.",
    image: servicesChainLinkFence,
    alt: "Chain link fence service for secure residential boundaries",
  },
  {
    name: "Wood Deck",
    description:
      "Wood decks bring warmth and natural character to an outdoor space. Northwood Renovation designs and builds wood decks that feel comfortable, sturdy, and connected to the home’s existing style.",
    image: servicesWoodDeck,
    alt: "Wood deck service for natural outdoor living spaces",
  },
  {
    name: "Composite Deck",
    description:
      "Composite decks are built for homeowners who want a beautiful outdoor space without heavy maintenance. They resist moisture, fading, and everyday wear, making them a strong long-term choice for outdoor living.",
    image: servicesCompositeDeck,
    alt: "Composite deck service with durable low-maintenance materials",
  },
  {
    name: "Custom Deck",
    description:
      "Custom decks are designed around the home, yard, and lifestyle of the homeowner. Whether the goal is entertaining, relaxing, improving access, or creating a standout outdoor feature, each design should feel intentional and built for the space.",
    image: servicesCustomDeck,
    alt: "Custom deck service designed around the home and yard",
  },
  {
    name: "Outdoor Deck",
    description:
      "Outdoor decks create a functional extension of the home. They give homeowners a dedicated space for family time, hosting guests, outdoor dining, and enjoying the yard in a more comfortable way.",
    image: servicesOutdoorDeck,
    alt: "Outdoor deck service for relaxing and entertaining",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="services-section"
    aria-labelledby="services-section-title">
    <div className="services-section__header">
      <div>
        <h2 id="services-section-title">Our Comprehensive Services</h2>
      </div>
      <Link to="/contact" className="services-section__button">
        Request a Free Estimate
      </Link>
    </div>

    <div className="services-section__grid">
      {services.map((service) => (
        <article className="service-card" key={service.name}>
          <img src={service.image} alt={service.alt} loading="lazy" />
          <div className="service-card__body">
            <h3>{renderBrandText(service.name)}</h3>
            <p>{renderBrandText(service.description)}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesSection;
