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
    href: "/cedar-wood-fence/",
    description:
      "Cedar wood fence installation for Everett and Snohomish County homes. Natural warmth, lasting privacy, and clean curb appeal - built to handle Pacific Northwest moisture and weather.",
    image: servicesFenceRoad,
    alt: "Cedar wood fence installation along a residential sidewalk",
  },
  {
    category: "Fence Services",
    name: "Chain Link Fence",
    href: "/chain-link-fence/",
    description:
      "Chain link fence installation in Everett, WA. Durable, low-maintenance, and cost-effective for securing yards, pet areas, side spaces, and residential property lines.",
    image: servicesChainLinkFence,
    alt: "Chain link fence service for secure residential boundaries",
  },
  {
    category: "Deck Services",
    name: "Wood Deck",
    href: "/wood-deck/",
    description:
      "Cedar and pressure-treated wood deck installation in Everett, WA. Natural warmth, strong construction, and the classic outdoor living feel that complements Northwest homes.",
    image: servicesWoodDeck,
    alt: "Wood deck service for natural outdoor living spaces",
  },
  {
    category: "Deck Services",
    name: "Composite Deck",
    href: "/composite-deck/",
    description:
      "Composite deck installation in Everett and Snohomish County. Low-maintenance decking built to resist moisture, fading, and the demands of Pacific Northwest weather - with the clean look of wood without the upkeep.",
    image: servicesCompositeDeck,
    alt: "Composite deck service with durable low-maintenance materials",
  },
  {
    category: "Deck Services",
    name: "Custom Deck",
    href: "/custom-deck/",
    description:
      "Custom deck design and build in Everett, WA. Every deck is planned around your yard layout, home style, and how you want to use the space - no cookie-cutter designs.",
    image: servicesCustomDeck,
    alt: "Custom deck service designed around the home and yard",
  },
  {
    category: "Deck Services",
    name: "Outdoor Deck",
    href: "/outdoor-deck/",
    description:
      "Outdoor deck installation for Everett-area homeowners. Open-air decks built for relaxing, entertaining, and outdoor dining - designed to extend your living space into the backyard.",
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
        <h2 id="services-section-title">Deck and Fence Services in Everett, WA</h2>
      </div>
      <Link to="/contact#contact-form" className="services-section__button">
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
