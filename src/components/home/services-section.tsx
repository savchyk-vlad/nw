import * as React from "react";
import { Link } from "gatsby";
import servicesChainLinkFence from "../../images/services-chain-link-fence.jpg";
import servicesCompositeDeck from "../../images/services-composite-deck.jpg";
import servicesCustomDeck from "../../images/services-custom-deck.jpg";
import servicesFenceRoad from "../../images/services-fence-road.jpeg";
import servicesOutdoorDeck from "../../images/services-outdoor-deck.jpeg";
import servicesWoodDeck from "../../images/services-wood-deck.jpg";

const services = [
  {
    category: "Fence Services",
    name: "Cedar Wood Fences",
    href: "/fence/cedar-wood-fence/",
    description:
      "Cedar wood fencing is a strong choice for homeowners who want natural warmth, privacy, and clean curb appeal that fits Seattle-area homes.",
    image: servicesFenceRoad,
    alt: "Cedar wood fence installation along a residential sidewalk",
  },
  {
    category: "Fence Services",
    name: "Chain Link Fence",
    href: "/fence/chain-link-fence/",
    description:
      "Chain link fencing is practical, durable, and cost-effective for securing yards, side spaces, pet areas, and property lines.",
    image: servicesChainLinkFence,
    alt: "Chain link fence service for secure residential boundaries",
  },
  {
    category: "Deck Services",
    name: "Wood Deck",
    href: "/deck/wood-deck/",
    description:
      "Wood decks bring warmth and natural character to an outdoor space while creating a comfortable extension of the home.",
    image: servicesWoodDeck,
    alt: "Wood deck service for natural outdoor living spaces",
  },
  {
    category: "Deck Services",
    name: "Composite Deck",
    href: "/deck/composite-deck/",
    description:
      "Composite decks offer a clean, low-maintenance outdoor living space built to handle moisture, fading, and daily use.",
    image: servicesCompositeDeck,
    alt: "Composite deck service with durable low-maintenance materials",
  },
  {
    category: "Deck Services",
    name: "Custom Deck",
    href: "/deck/custom-deck/",
    description:
      "Custom decks are designed around the home, yard, and lifestyle so the final layout feels intentional and built for the space.",
    image: servicesCustomDeck,
    alt: "Custom deck service designed around the home and yard",
  },
  {
    category: "Deck Services",
    name: "Outdoor Deck",
    href: "/deck/outdoor-deck/",
    description:
      "Outdoor decks create a functional place for relaxing, hosting guests, outdoor dining, and making the yard more usable every day.",
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
        <Link className="service-card" key={service.name} to={service.href}>
          <img src={service.image} alt={service.alt} loading="lazy" />
          <div className="service-card__body">
            <span className="service-card__tag">{service.category}</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="service-card__cta">
              View Service <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ServicesSection;
