import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/city-service-pages.css";
import { CityServicePageData } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import cityServiceHeroImage from "../images/city-service-hero.png";
import facebookLogo from "../images/facebook-logo.svg";
import googleReviewLogo from "../images/google-review-logo.png";
import yelpLogo from "../images/yelp-logo.png";
import renderHighlightedText from "./brand-text";
import SeoHead, { buildCanonicalUrl, buildLocalBusinessReference } from "./seo";
import SiteLayout from "./site-layout";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "../lib/site-metadata";

const trustCards = [
  {
    title: "Fence & Deck Specialists",
    text: "Focused on outdoor structures, including decks, fences, gates, railings, stairs, and repairs.",
  },
  {
    title: "Built for Northwest Weather",
    text: "We plan materials and installation details around rain, moisture, shade, and long-term durability.",
  },
  {
    title: "Clear Estimates",
    text: "You will know what to expect before work begins, with clear communication from start to finish.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Book Appointment",
    text: "Reach out to schedule a convenient time for your project conversation.",
  },
  {
    number: "2",
    title: "On-Site Estimate",
    text: "We walk the space, discuss priorities, and outline practical options.",
  },
  {
    number: "3",
    title: "Schedule Installation",
    text: "Once the scope is clear, we confirm materials, timing, and next steps.",
  },
  {
    number: "4",
    title: "Work Begins",
    text: "Our team completes the project with clean communication and a final walkthrough.",
  },
];

const reviewSummary = [
  {
    label: "Google Reviews",
    logo: googleReviewLogo,
    rating: "4.9",
    text: "Homeowners often mention clear estimates and organized communication.",
  },
  {
    label: "Yelp Reviews",
    logo: yelpLogo,
    rating: "4.7",
    text: "Fence and deck feedback often highlights clean craftsmanship and planning.",
  },
  {
    label: "Facebook Reviews",
    logo: facebookLogo,
    rating: "4.4",
    text: "Community recommendations frequently point to a smooth, easy process.",
  },
];

const reviewCards = [
  {
    title: "Clear communication",
    text: "Homeowners regularly mention straightforward estimates, helpful explanations, and updates that keep the project easy to follow.",
  },
  {
    title: "Clean finished work",
    text: "Recent feedback often highlights neat job sites, polished final details, and structures that feel solid and professionally completed.",
  },
  {
    title: "Practical recommendations",
    text: "Customers value guidance on materials, maintenance expectations, and layouts that fit Northwest weather and everyday use.",
  },
];

const whyPoints = [
  "Everett-based local experience",
  "Fence and deck focused team",
  "Clear project communication",
  "Durable exterior materials",
  "Clean job sites",
  "Final walkthroughs",
];

const createServiceItems = (city: string) => [
  {
    title: `Custom Deck Building in ${city}`,
    description: `We build backyard decks for ${city} homeowners who want durable outdoor living space with clean framing, practical layouts, and a finished look that fits the home.`,
    to: "/custom-deck",
  },
  {
    title: `Privacy Fence Installation in ${city}`,
    description: `We install cedar privacy fences that help ${city} homeowners add privacy, structure, and curb appeal to their outdoor spaces.`,
    to: "/cedar-wood-fence",
  },
  {
    title: `Cedar Fencing in ${city}`,
    description: `Cedar fences remain a strong choice in ${city} for warmth, durability, and a natural look that fits Northwest homes.`,
    to: "/cedar-wood-fence",
  },
  {
    title: `Composite Decks in ${city}`,
    description: `For homeowners in ${city} who want lower-maintenance outdoor living, we help plan composite deck options that feel clean and built for long-term use.`,
    to: "/composite-deck",
  },
  {
    title: `Deck Repairs in ${city}`,
    description: `We repair worn deck boards, railings, stairs, and structural details so ${city} homeowners can improve safety and extend the life of the deck.`,
    to: "/wood-deck",
  },
  {
    title: `Fence Repairs in ${city}`,
    description: `From leaning posts to aging panels, we help ${city} homeowners fix fence problems before they become larger exterior issues.`,
    to: "/cedar-wood-fence",
  },
  {
    title: `Gates in ${city}`,
    description: `We build and replace gates for everyday access, privacy, and better yard function across homes in ${city}.`,
    to: "/cedar-wood-fence",
  },
  {
    title: `Railings & Stairs in ${city}`,
    description: `Railings and stair transitions matter for safety and daily use, and we help ${city} homeowners make those details feel clean and dependable.`,
    to: "/custom-deck",
  },
  {
    title: `Exterior Carpentry in ${city}`,
    description: `We support ${city} homeowners with practical exterior carpentry work tied to decks, fences, railings, and outdoor upgrades.`,
    to: "/contact",
  },
];

const createFaqItems = (city: string) => [
  {
    answer: `Yes. Northwood Renovation provides deck building, fence installation, railings, repairs, and outdoor renovation services throughout ${city}.`,
    question: `Do you build decks in ${city}?`,
  },
  {
    answer: `Yes. We install cedar privacy fences, gates, and related fence upgrades for homeowners in ${city}, depending on the project scope and property layout.`,
    question: `Do you install cedar privacy fences in ${city}?`,
  },
  {
    answer: `Cedar, well-planned drainage details, quality framing, and practical maintenance choices all matter in the Pacific Northwest. We help homeowners choose materials that match their goals and maintenance expectations.`,
    question: "What fence materials work well for Northwest weather?",
  },
  {
    answer: `Most deck or fence projects take anywhere from a few days to a couple of weeks depending on size, access, weather, materials, and whether the work is new construction or repair-focused.`,
    question: `How long does a deck or fence project usually take in ${city}?`,
  },
  {
    answer: `Yes. We can evaluate an existing deck or fence and recommend whether repair, selective replacement, or a fuller rebuild makes the most sense for the property.`,
    question: "Can you repair an existing deck or fence?",
  },
  {
    answer: `Yes. We provide free estimates in ${city} and nearby communities throughout Snohomish County and Greater Seattle so homeowners can understand scope, options, and next steps before work begins.`,
    question: `Do you provide free estimates in ${city}?`,
  },
];

type CityServicePageProps = {
  page: CityServicePageData;
};

export const CityServicePage = ({ page }: CityServicePageProps) => {
  const services = React.useMemo(() => createServiceItems(page.city), [page.city]);
  const faqItems = React.useMemo(() => createFaqItems(page.city), [page.city]);
  const cityServiceSuffix = ` in ${page.city}`;
  const nearbyProjects = React.useMemo(() => {
    const slugOrder = new Map(page.nearbyProjectSlugs.map((slug, index) => [slug, index]));
    return recentWorkProjects
      .filter((project) => slugOrder.has(project.slug))
      .sort(
        (left, right) =>
          (slugOrder.get(left.slug) ?? 0) - (slugOrder.get(right.slug) ?? 0),
      );
  }, [page.nearbyProjectSlugs]);

  return (
    <SiteLayout>
      <main className="city-service-page">
        <section
          className="city-service-hero"
          style={{ backgroundImage: `url("${encodeURI(cityServiceHeroImage)}")` }}
        >
          <div className="city-service-hero__overlay" />
          <div className="city-service-hero__copy">
            <p className="city-service-hero__eyebrow">
              <span className="city-service-hero__eyebrow-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 20s6-5.7 6-10.2A6 6 0 0 0 6 9.8C6 14.3 12 20 12 20z" />
                  <circle cx="12" cy="9.8" r="2.2" />
                </svg>
              </span>
              <span>{page.city.toUpperCase()}</span>
            </p>
            <h1>{page.h1}</h1>
            {page.tier === 1 && !page.isHomeBase ? (
              <p className="city-service-proximity-note">
                <span aria-hidden="true">📍</span>
                <span>
                  Based in Everett - just {page.driveMin} minutes from {page.cityName}
                </span>
              </p>
            ) : null}
            <p className="city-service-hero__seo-line">
              Deck building, fence installation, repairs, and outdoor upgrades in{" "}
              <span className="city-service-accent">{page.city}</span>
            </p>
            <p>
              {renderHighlightedText(
                `Northwood Renovation builds clean, durable decks, privacy fences, railings, and outdoor spaces designed for ${page.city} homes and Northwest weather.`,
              )}
            </p>
            <div className="city-service-hero__cta-row">
              <Link to="/contact#contact-form" className="city-service-hero__primary">
                Request a Free Estimate
              </Link>
              <Link to="/projects" className="city-service-hero__secondary">
                View Recent Work →
              </Link>
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="city-service-hero__phone">
                Call {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
            <p className="city-service-hero__trust-line">
              Free estimates · Clear communication · Built for Northwest weather
            </p>
          </div>
        </section>

        <section className="city-service-trust-cards">
          {trustCards.map((card, index) => (
            <article key={card.title} className="city-service-trust-card">
              <span className="city-service-trust-card__icon" aria-hidden="true">
                {index + 1}
              </span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section className="city-service-intro">
          <div className="city-service-intro__header">
            <p>{renderHighlightedText(`Serving ${page.city}`)}</p>
            <h2>
              Outdoor renovation work built for{" "}
              <span className="city-service-accent">{page.city}</span> homes
            </h2>
          </div>
          <div className="city-service-intro__copy">
            {page.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
            ))}
            {page.permitNote ? (
              <p className="city-service-intro__permit-note">
                {renderHighlightedText(page.permitNote)}
              </p>
            ) : null}
          </div>
        </section>

        <section className="city-service-services">
          <div className="city-service-section-head">
            <p>Services</p>
            <h2>
              Our Services in <span className="city-service-accent">{page.city}</span>
            </h2>
            <span>{renderHighlightedText(page.serviceIntro)}</span>
          </div>
          <div className="city-service-services__grid">
            {services.map((service) => (
              <article key={service.title} className="city-service-service-card">
                <h3>
                  <span className="city-service-accent">
                    {service.title.replace(cityServiceSuffix, "")}
                  </span>{" "}
                  in <span className="city-service-accent">{page.city}</span>
                </h3>
                <p>{renderHighlightedText(service.description)}</p>
                <Link to={service.to}>Explore Service →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="city-service-why">
          <div className="city-service-section-head">
            <p>Why Homeowners Choose Us</p>
            <h2>
              Why <span className="city-service-accent">{page.city}</span> Homeowners
              Choose <span className="brand-highlight">Northwood Renovation</span>
            </h2>
            <span>
              We keep outdoor projects practical, organized, and clear from the
              first estimate through the final walkthrough.
            </span>
          </div>
          <div className="city-service-why__grid">
            {whyPoints.map((point) => (
              <article key={point} className="city-service-why__item">
                <span aria-hidden="true">✓</span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="city-service-projects">
          <div className="city-service-section-head">
            <p>Recent Work</p>
            <h2>
              Recent Fence and Deck Projects Near{" "}
              <span className="city-service-accent">{page.city}</span>
            </h2>
            <span>
              {renderHighlightedText(
                `Here are a few recent outdoor projects completed in nearby communities around ${page.city}.`,
              )}
            </span>
          </div>
          <div className="city-service-projects__grid">
            {nearbyProjects.map((project) => (
              <article key={project.slug} className="city-service-project-card">
                <Link
                  to={`/projects/${project.slug}/`}
                  className="city-service-project-card__media"
                >
                  <img src={project.image} alt={`${project.title} near ${page.city}`} />
                </Link>
                <div className="city-service-project-card__body">
                  <p className="city-service-project-card__type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="city-service-project-card__location">
                    {renderHighlightedText(project.location)}
                  </p>
                  <p>{renderHighlightedText(project.description)}</p>
                  <Link
                    to={`/projects/${project.slug}/`}
                    className="city-service-project-card__link"
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="city-service-process">
          <div className="city-service-section-head">
            <p>How It Works</p>
            <h2>
              How Our Process Works in{" "}
              <span className="city-service-accent">{page.city}</span>
            </h2>
            <span>
              A simple process helps keep deck and fence work easy to understand
              from the first conversation through installation.
            </span>
          </div>
          <div className="city-service-process__grid">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.title}>
                <article className="city-service-process-card">
                  <span className="city-service-process-card__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
                {index < processSteps.length - 1 ? (
                  <span className="city-service-process__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="city-service-climate">
          <div className="city-service-section-head">
            <p>Northwest Guidance</p>
            <h2>
              Built for <span className="city-service-accent">{page.city}</span> Homes
              and Northwest Weather
            </h2>
          </div>
          <div className="city-service-climate__copy">
            {page.climateParagraphs.map((paragraph) => (
              <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className="city-service-reviews">
          <div className="city-service-section-head">
            <p>Reviews</p>
            <h2>What Local Homeowners Say</h2>
            <span>
              Reviews across Google, Yelp, and Facebook consistently point to
              clear communication, clean craftsmanship, and a practical process.
            </span>
          </div>
          <div className="city-service-reviews__summary">
            {reviewSummary.map((platform) => (
              <article key={platform.label} className="city-service-review-summary-card">
                <img src={platform.logo} alt={platform.label} loading="lazy" />
                <strong>{platform.rating}</strong>
                <p>{platform.text}</p>
              </article>
            ))}
          </div>
          <div className="city-service-reviews__grid">
            {reviewCards.map((card) => (
              <article key={card.title} className="city-service-review-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="city-service-faq">
          <div className="city-service-section-head">
            <p>FAQ</p>
            <h2>
              Deck and Fence Questions in{" "}
              <span className="city-service-accent">{page.city}</span>
            </h2>
          </div>
          <div className="city-service-faq__list">
            {faqItems.map((item) => (
              <article key={item.question} className="city-service-faq__item">
                <h3>{renderHighlightedText(item.question)}</h3>
                <p>{renderHighlightedText(item.answer)}</p>
              </article>
            ))}
          </div>
        </section>

        {page.tier >= 2 ? (
          <section className="city-service-home-base-note">
            <p>
              Northwood Renovation is based in{" "}
              <Link to="/cities/everett-wa/">Everett, WA</Link> and serves{" "}
              {page.cityName} as part of our extended service area.
            </p>
          </section>
        ) : null}

        <section className="city-service-final-cta">
          <h2>
            Ready to Start a Fence or Deck Project in{" "}
            <span className="city-service-accent">{page.city}</span>?
          </h2>
          <p>
            {renderHighlightedText(
              "Tell us about your outdoor project and Northwood Renovation will help you plan the next step with a clear estimate and practical recommendations.",
            )}
          </p>
          <div className="city-service-final-cta__actions">
            <Link to="/contact#contact-form" className="city-service-final-cta__primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="city-service-final-cta__secondary">
              View Recent Work
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

const buildCitySeoTitle = (city: string) => {
  const cityName = city.replace(", WA", "");
  return `Deck & Fence Contractor in ${cityName}, WA | Northwood Renovation`;
};

const buildCitySeoDescription = (page: CityServicePageData) => {
  if (page.metaDescription.length <= 155) {
    return page.metaDescription;
  }

  const cityName = page.city.replace(", WA", "");

  return `${cityName} deck and fence contractor for decks, fences, railings, repairs, and outdoor upgrades. Request a free estimate.`;
};

export const CityServicePageHead =
  (page: CityServicePageData): HeadFC =>
  ({ location }) => {
    const pathname = location.pathname;
    const description = buildCitySeoDescription(page);

    return (
      <SeoHead
        title={page.titleTag || buildCitySeoTitle(page.city)}
        description={description}
        pathname={pathname}
        image={cityServiceHeroImage}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Northwood Renovation",
            description: `Deck and fence contractor serving ${page.city}`,
            telephone: "+14256832024",
            url: buildCanonicalUrl(pathname),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Everett",
              addressRegion: "WA",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "City",
              name: page.cityName,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.h1,
            description,
            serviceType: "Deck building, fence installation, repairs, and outdoor renovation",
            areaServed: {
              "@type": "City",
              name: page.cityName,
            },
            provider: buildLocalBusinessReference(),
            url: buildCanonicalUrl(pathname),
          },
        ]}
      />
    );
  };
