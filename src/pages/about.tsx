import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/about.css";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import deckInstallationWorker from "../images/about/deck-installation-worker.jpg";
import seattleRainTrucks from "../images/about/seattle-rain-trucks.jpg";
import seattleTeamTrucks from "../images/about/seattle-team-trucks.jpg";
import teamTruckHome from "../images/about/team-truck-home.jpg";

const differencePoints = [
  "Licensed and insured deck and fence contractor based in Everett, WA",
  "Serving Snohomish County, North Seattle, and the Eastside since day one",
  "Free on-site estimates with no pressure and clear written scope",
  "Experienced with cedar, composite, and pressure-treated materials for Northwest climates",
  "Permit-ready - we handle Everett, Marysville, and Snohomish County building permits",
  "Clean job sites, clear timelines, and a final walkthrough on every project",
];

const services = [
  "Custom deck design and build",
  "Cedar wood deck installation",
  "Composite deck installation",
  "Covered deck and pergola installation",
  "Deck repair and board replacement",
  "Cedar wood privacy fence installation",
  "Chain link fence installation",
  "Wood fence repair and replacement",
  "Gate installation and upgrades",
  "Deck railings and stair installation",
  "Exterior carpentry and outdoor structure repairs",
];

const serviceAreas = [
  { label: "Everett, WA", to: "/cities/everett-wa/" },
  { label: "Marysville, WA", to: "/cities/marysville-wa/" },
  { label: "Snohomish, WA", to: "/cities/snohomish-wa/" },
  { label: "Mill Creek, WA", to: "/cities/mill-creek-wa/" },
  { label: "Mukilteo, WA", to: "/cities/mukilteo-wa/" },
  { label: "Lynnwood, WA", to: "/cities/lynnwood-wa/" },
  { label: "Edmonds, WA", to: "/cities/edmonds-wa/" },
  { label: "Bothell, WA", to: "/cities/bothell-wa/" },
  { label: "Kenmore, WA", to: "/cities/kenmore-wa/" },
  { label: "Shoreline, WA", to: "/cities/shoreline-wa/" },
  { label: "Seattle, WA", to: "/cities/seattle-wa/" },
  { label: "Kirkland, WA", to: "/cities/kirkland-wa/" },
  { label: "Bellevue, WA", to: "/cities/bellevue-wa/" },
  { label: "Redmond, WA", to: "/cities/redmond-wa/" },
];

const aboutTestimonials = [
  {
    label: "Cedar Fence Installation — Everett, WA",
    name: "Bryce F.",
    text: "Northwood Renovation did an amazing job on our new fence. The team was professional, communicated clearly, and completed the work with great attention to detail.",
  },
  {
    label: "Wood Deck Build — Mill Creek, WA",
    name: "Amanda R.",
    text: "We hired Northwood Renovation for a deck project and the result turned out better than we expected. The crew was respectful, organized, and easy to work with from start to finish.",
  },
  {
    label: "Cedar Fence Replacement — Snohomish, WA",
    name: "Michael T.",
    text: "Great experience from the estimate to the final walkthrough. They explained our options clearly and built a fence that looks solid, clean, and professionally finished.",
  },
  {
    label: "Composite Deck Installation — Everett, WA",
    name: "Sarah L.",
    text: "Our backyard feels completely different after the new deck. Northwood Renovation delivered quality work, stayed communicative, and made the whole process simple.",
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5 9.3 17 19 7" />
  </svg>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="about-highlight">{children}</span>
);

const AboutTextBlock = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="about-story-section">
    <p className="about-label">{label}</p>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const AboutPage = () => (
  <SiteLayout>
    <main className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${seattleTeamTrucks})` }}
      >
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <p>
            <Highlight>Northwood Renovation</Highlight>
          </p>
          <h1>
            About <Highlight>Northwood Renovation</Highlight> - Everett-Based{" "}
            <Highlight>Deck</Highlight> and <Highlight>Fence</Highlight>{" "}
            Contractor
          </h1>
          <span>
            Northwood Renovation is a locally owned <Highlight>deck</Highlight>{" "}
            and <Highlight>fence</Highlight> contractor serving{" "}
            <Highlight>Everett</Highlight>, Snohomish County, and the greater
            Seattle area. We build custom <Highlight>decks</Highlight>, cedar
            privacy <Highlight>fences</Highlight>, composite decking, covered
            decks, and railings - with free on-site estimates and clear
            communication from start to finish.
          </span>
          <div className="about-hero__actions">
            <Link to="/contact#contact-form" className="about-button">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="about-hero__secondary">
              View Recent Work
            </Link>
          </div>
        </div>
      </section>

      <section className="about-intro about-intro--lead">
        <p className="about-label">
          About <Highlight>Northwood Renovation</Highlight>
        </p>
        <div>
          <h2>
            Custom <Highlight>Deck</Highlight> and <Highlight>Fence</Highlight>{" "}
            Installation for <Highlight>Everett</Highlight> &amp; Snohomish
            County Homeowners
          </h2>
          <p>
            At <Highlight>Northwood Renovation</Highlight>, we help{" "}
            <Highlight>Everett</Highlight> and Snohomish County homeowners build
            and upgrade outdoor spaces - custom <Highlight>decks</Highlight>,
            cedar privacy <Highlight>fences</Highlight>, composite decking,
            railings, gates, and exterior repairs.
          </p>
          <p>
            Whether you need a new backyard <Highlight>deck</Highlight> built
            from scratch, a cedar wood <Highlight>fence</Highlight> for
            privacy, composite decking that holds up to Northwest weather, or
            repairs to an existing outdoor structure, our Everett-based crew
            manages the full process with honest estimates, clear timelines, and
            careful craftsmanship.
          </p>
        </div>
      </section>

      <AboutTextBlock
        label="Who We Are"
        title="Everett&apos;s Locally Owned Deck and Fence Company"
      >
        <p>
          <Highlight>Northwood Renovation</Highlight> is a locally owned{" "}
          <Highlight>deck</Highlight> and <Highlight>fence</Highlight>{" "}
          contractor based in <Highlight>Everett, Washington</Highlight>. We
          serve homeowners across Snohomish County, including{" "}
          <Highlight>Marysville</Highlight>, <Highlight>Mill Creek</Highlight>,{" "}
          <Highlight>Mukilteo</Highlight>, <Highlight>Lynnwood</Highlight>, and{" "}
          <Highlight>Edmonds</Highlight>, as well as North Seattle,{" "}
          <Highlight>Kirkland</Highlight>, and <Highlight>Bellevue</Highlight>.
        </p>
        <p>
          We started with a simple belief: homeowners deserve outdoor projects
          built properly, with honest pricing and workmanship that holds up
          through Northwest winters. Our focus is exterior renovation - custom
          deck building, cedar fence installation, composite decking, covered
          decks, railings, and fence repairs.
        </p>
        <p>
          We do not try to be every kind of contractor. Specializing in{" "}
          <Highlight>fences</Highlight> and <Highlight>decks</Highlight> means
          better results for homeowners who want the job done right.
        </p>
      </AboutTextBlock>

      <section className="about-split-section">
        <div className="about-split-section__image">
          <img
            src={seattleRainTrucks}
            alt="Northwood Renovation vehicles in a Northwest neighborhood"
          />
        </div>
        <div className="about-split-section__content">
          <p className="about-label">Our Mission</p>
          <h2>
            <Highlight>Deck</Highlight> and <Highlight>Fence</Highlight>{" "}
            Projects Done Right - From Estimate to Final Walkthrough
          </h2>
          <p>
            A well-built <Highlight>deck</Highlight> or{" "}
            <Highlight>fence</Highlight> does more than add structure - it
            creates privacy, improves safety, adds usable outdoor living space,
            and increases the value and appeal of your home.
          </p>
          <p>
            At <Highlight>Northwood Renovation</Highlight>, we guide{" "}
            <Highlight>Everett</Highlight> and Snohomish County homeowners
            through every step: free on-site estimate, material selection,
            permit handling, installation, and final walkthrough. Our goal is
            to make outdoor renovation straightforward and the finished result
            something you&apos;ll use every day.
          </p>
        </div>
      </section>

      <section className="about-why-section">
        <div className="about-section-head">
          <p className="about-label">What Makes Us Different</p>
          <h2>Why Everett Homeowners Choose Northwood Renovation</h2>
        </div>
        <div className="about-difference-copy">
          <p>
            We understand that hiring a contractor can feel stressful.
            Homeowners want to know what the project will cost, how long it will
            take, what materials are being used, and whether the crew will
            respect their home. That is why we keep the process clear from the
            beginning.
          </p>
          <p>
            We take time to understand your goals, explain your options, and
            recommend solutions that make sense for your property, budget, and
            long-term needs.
          </p>
        </div>
        <div className="about-card-grid about-card-grid--three">
          {differencePoints.map((point) => (
            <article className="about-trust-card" key={point}>
              <div className="about-card-icon">
                <CheckIcon />
              </div>
              <p>{point}</p>
            </article>
          ))}
        </div>
        <p className="about-section-note">
          Our goal is not to rush through projects. Our goal is to build outdoor
          spaces that feel solid, clean, and built to last.
        </p>
      </section>

      <section className="about-team-section">
        <div className="about-team-section__content">
          <p className="about-label">A Team That Cares</p>
          <h2>Prepared, respectful, and focused on the details</h2>
          <p>
            Our team is made up of people who care about showing up prepared,
            doing the work correctly, and treating each home with respect.
          </p>
          <p>
            From the first estimate to the final walkthrough, we want homeowners
            to feel informed and comfortable. We explain the process, answer
            questions, and keep the project moving in an organized way.
          </p>
          <p>
            We know that exterior projects can interrupt daily life, especially
            when work is happening around your yard, driveway, fence line, or
            deck area. That is why we focus on clean job sites, respectful
            communication, and careful attention to detail.
          </p>
          <p>
            When we work on your home, we treat it like a place that matters,
            because it does.
          </p>
        </div>
        <div className="about-team-section__image">
          <img
            src={teamTruckHome}
            alt="Northwood Renovation team standing near a branded truck"
          />
        </div>
      </section>

      <section className="about-services-list-section">
        <div>
          <p className="about-label">Our Services</p>
          <h2>
            <Highlight>Deck</Highlight> and <Highlight>Fence</Highlight>{" "}
            Services in <Highlight>Everett, WA</Highlight> and Snohomish County
          </h2>
          <p>
            <Highlight>Northwood Renovation</Highlight> provides{" "}
            <Highlight>fence</Highlight>, <Highlight>deck</Highlight>, and
            exterior renovation services for homeowners in{" "}
            <Highlight>Everett, WA</Highlight>, Snohomish County, and nearby
            areas. Every project is planned around the home, the yard, the
            materials, and how the space will be used.
          </p>
        </div>
        <div className="about-services-list">
          {services.map((service) => (
            <span key={service}>
              <CheckIcon />
              {service}
            </span>
          ))}
        </div>
      </section>

      <section className="about-materials-section">
        <div className="about-materials-section__image">
          <img
            src={deckInstallationWorker}
            alt="Northwood Renovation worker installing deck boards"
          />
        </div>
        <div className="about-materials-section__content">
          <p className="about-label">Built for Northwest Homes</p>
          <h2>
            <Highlight>Decks</Highlight> and <Highlight>Fences</Highlight>{" "}
            Built for Pacific Northwest Weather
          </h2>
          <p>
            <Highlight>Everett</Highlight> and Snohomish County homes need{" "}
            <Highlight>decks</Highlight> and <Highlight>fences</Highlight>{" "}
            built to handle moisture, heavy rain, and the freeze-thaw cycles of
            Pacific Northwest winters. The wrong materials or improper
            installation leads to rot, warping, and costly repairs within a few
            years.
          </p>
          <p>
            <Highlight>Northwood Renovation</Highlight> selects and installs
            materials proven in Northwest climates - cedar wood,
            pressure-treated lumber, and composite decking - with proper
            drainage, fastener choices, and finishing details that extend the
            life of every project. We help homeowners choose between cedar vs.
            composite, open vs. covered decks, and wood vs. chain link fences
            based on their maintenance preferences, budget, and how they plan to
            use the space.
          </p>
        </div>
      </section>

      <section className="about-service-area-section">
        <div className="about-service-area-section__content">
          <p className="about-label">Our Service Area</p>
          <h2>
            <Highlight>Deck</Highlight> and <Highlight>Fence</Highlight>{" "}
            Contractor Serving <Highlight>Everett</Highlight>, Snohomish County,
            and Greater Seattle
          </h2>
          <p>
            <Highlight>Northwood Renovation</Highlight> proudly serves{" "}
            <Highlight>Everett, WA</Highlight>, Snohomish County, and the
            greater Seattle region. We are local to the{" "}
            <Highlight>Everett</Highlight> area, which means we understand the
            homes, neighborhoods, weather, and <Highlight>outdoor</Highlight>{" "}
            living needs of Northwest homeowners.
          </p>
          <Link to="/cities/" className="about-service-area-section__link">
            View Full Service Area →
          </Link>
        </div>
        <div className="about-area-list">
          {serviceAreas.map((area) => (
            <Link key={area.to} to={area.to}>
              <Highlight>{area.label}</Highlight>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-reviews-section">
        <div className="about-section-head">
          <p className="about-label">Customer Reviews</p>
          <h2>What Homeowners Say About Northwood Renovation</h2>
        </div>
        <div className="about-rating-card">
          <div>
            <span className="about-rating-card__stars" aria-hidden="true">
              ★★★★★
            </span>
            <strong>4.9 Google Rating</strong>
          </div>
          <p>
            Real reviews from Everett and Snohomish County homeowners who hired
            Northwood Renovation for deck builds, fence installation, and
            outdoor renovation work.
          </p>
        </div>
        <div className="about-review-grid">
          {aboutTestimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <p>{testimonial.text}</p>
              <strong>{testimonial.label}</strong>
              <span>{testimonial.name}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-final-cta">
        <div>
          <p className="about-label">Get a Free Estimate</p>
          <h2>Get a Free Deck or Fence Estimate in Everett, WA</h2>
          <span className="about-final-cta__copy">
            Whether you&apos;re planning a new deck build, replacing a worn
            fence, adding a cedar privacy fence, or repairing an outdoor
            structure, <Highlight>Northwood Renovation</Highlight> is ready to
            help. We serve <Highlight>Everett</Highlight>,{" "}
            <Highlight>Marysville</Highlight>, <Highlight>Mill Creek</Highlight>,{" "}
            <Highlight>Lynnwood</Highlight>, <Highlight>Shoreline</Highlight>,{" "}
            <Highlight>Seattle</Highlight>, <Highlight>Kirkland</Highlight>, and
            surrounding Snohomish County communities.
          </span>
          <span className="about-final-cta__copy">
            Call <Highlight>(425) 683-2024</Highlight> or request a free
            estimate online - our Everett-based team responds within one
            business day.
          </span>
        </div>
        <div className="about-final-cta__actions">
          <div className="about-final-cta__button-row">
            <Link to="/contact#contact-form" className="about-final-cta__button">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="about-final-cta__link">
              View Recent Work
            </Link>
          </div>
          <p className="about-final-cta__trust">
            Free estimates · Clear next steps · Everett-based service
          </p>
        </div>
      </section>
    </main>
  </SiteLayout>
);

export default AboutPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="About Northwood Renovation — Everett, WA Deck & Fence Contractor"
    description="Northwood Renovation is an Everett, WA deck and fence contractor serving Snohomish County and Greater Seattle. Custom decks, cedar fences, composite decking, and exterior renovation. Free on-site estimates. Call (425) 683-2024."
    pathname={location.pathname}
  />
);
