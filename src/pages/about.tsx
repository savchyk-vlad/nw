import * as React from "react";
import { HeadFC, Link } from "gatsby";
import SiteLayout from "../components/site-layout";
import deckInstallationWorker from "../images/about/deck-installation-worker.jpg";
import seattleRainTrucks from "../images/about/seattle-rain-trucks.jpg";
import seattleTeamTrucks from "../images/about/seattle-team-trucks.jpg";
import teamTruckHome from "../images/about/team-truck-home.jpg";

const differencePoints = [
  "We specialize in fences, decks, and outdoor structures.",
  "We understand Seattle’s wet climate and exterior material needs.",
  "We communicate clearly before and during the project.",
  "We focus on clean lines, strong construction, and durable finishes.",
  "We respect your property and keep the work area organized.",
  "We complete a final walkthrough so details are not overlooked.",
];

const services = [
  "Custom deck building",
  "Cedar decks",
  "Composite decks",
  "Deck repairs and upgrades",
  "Privacy fence installation",
  "Cedar fencing",
  "Wood fence repairs",
  "Gates and fence upgrades",
  "Railings and stairs",
  "Exterior carpentry",
  "Outdoor structure improvements",
];

const serviceAreas = [
  "Seattle",
  "West Seattle",
  "Ballard",
  "Queen Anne",
  "Capitol Hill",
  "Shoreline",
  "Bellevue",
  "Kirkland",
  "Renton",
  "Kent",
  "Redmond",
  "Mercer Island",
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
            <Highlight>Northwood Renovation</Highlight>
          </h1>
          <span>
            Your trusted, locally owned <Highlight>fence</Highlight> and{" "}
            <Highlight>deck</Highlight> building company serving{" "}
            <Highlight>Seattle, WA</Highlight> and surrounding communities.
          </span>
          <div className="about-hero__actions">
            <Link to="/contact" className="about-button">
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
            <Highlight>Outdoor</Highlight> spaces built with clear communication
            and careful craftsmanship
          </h2>
          <p>
            At <Highlight>Northwood Renovation</Highlight>, we help homeowners
            improve their <Highlight>outdoor</Highlight> spaces with custom{" "}
            <Highlight>decks</Highlight>, privacy <Highlight>fences</Highlight>,
            railings, gates, repairs, and exterior renovation work.
          </p>
          <p>
            Whether you need a new backyard <Highlight>deck</Highlight>, a clean
            cedar <Highlight>fence</Highlight>, safer stairs, or an upgrade to
            an existing <Highlight>outdoor</Highlight> structure, our team
            handles the process with clear communication, durable materials, and
            careful craftsmanship from start to finish.
          </p>
        </div>
      </section>

      <AboutTextBlock
        label="Who We Are"
        title="A locally owned fence and deck company based in Seattle"
      >
        <p>
          <Highlight>Northwood Renovation</Highlight> is a locally owned{" "}
          <Highlight>fence</Highlight> and <Highlight>deck</Highlight> company
          based in <Highlight>Seattle, Washington</Highlight>, built on
          craftsmanship, trust, and straightforward service.
        </p>
        <p>
          We started with a simple belief: homeowners deserve outdoor spaces
          that are built properly, look clean, and last through Northwest
          weather. Our work focuses on practical, durable exterior projects:
          <Highlight>decks</Highlight>, <Highlight>fences</Highlight>,
          railings, gates, repairs, and <Highlight>outdoor</Highlight> upgrades
          that improve the way people use their homes.
        </p>
        <p>
          We are not trying to be every kind of contractor. Our focus is
          exterior renovation, especially <Highlight>fences</Highlight> and{" "}
          <Highlight>decks</Highlight>. That focus helps us deliver better
          planning, cleaner installation, and more reliable results for{" "}
          <Highlight>Seattle</Highlight>-area homeowners.
        </p>
      </AboutTextBlock>

      <section className="about-split-section">
        <div className="about-split-section__image">
          <img
            src={seattleRainTrucks}
            alt="Northwood Renovation vehicles in a Seattle neighborhood"
          />
        </div>
        <div className="about-split-section__content">
          <p className="about-label">Our Mission</p>
          <h2>Outdoor renovation should feel simple, honest, and organized</h2>
          <p>
            A great <Highlight>deck</Highlight> or <Highlight>fence</Highlight>{" "}
            is more than just wood, posts, boards, or railings. It changes how a
            home feels and functions. It can create privacy, improve safety, add
            usable <Highlight>outdoor</Highlight> space, and make a property
            feel more finished.
          </p>
          <p>
            At <Highlight>Northwood Renovation</Highlight>, we guide homeowners
            through the process with clear estimates, practical recommendations,
            and dependable workmanship. From the first conversation to the final
            walkthrough, our goal is to make the experience easy to understand
            and the finished result something you can feel proud of.
          </p>
        </div>
      </section>

      <section className="about-why-section">
        <div className="about-section-head">
          <p className="about-label">What Makes Us Different</p>
          <h2>Quality, communication, and clean execution</h2>
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
            <Highlight>Fence</Highlight>, <Highlight>deck</Highlight>, and
            exterior renovation services for <Highlight>Seattle</Highlight> homes
          </h2>
          <p>
            <Highlight>Northwood Renovation</Highlight> provides{" "}
            <Highlight>fence</Highlight>, <Highlight>deck</Highlight>, and
            exterior renovation services for homeowners in{" "}
            <Highlight>Seattle, WA</Highlight> and nearby areas. Every project
            is planned around the home, the yard, the materials, and how the
            space will be used.
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
          <p className="about-label">Built for Seattle Homes</p>
          <h2>Outdoor work that can handle Northwest weather</h2>
          <p>
            <Highlight>Seattle</Highlight> homes need{" "}
            <Highlight>outdoor</Highlight> work that can handle moisture, rain,
            changing seasons, and everyday use.
          </p>
          <p>
            <Highlight>Decks</Highlight> and <Highlight>fences</Highlight> in
            the Pacific Northwest need more than a good-looking design. They
            need proper material choices, solid construction, and attention to
            water exposure. <Highlight>Northwood Renovation</Highlight> builds
            with those local conditions in mind.
          </p>
          <p>
            We help homeowners choose options that fit their home’s style, their
            maintenance preferences, and the demands of{" "}
            <Highlight>Seattle</Highlight> weather.
          </p>
        </div>
      </section>

      <section className="about-service-area-section">
        <div>
          <p className="about-label">Our Service Area</p>
          <h2>
            Proudly serving <Highlight>Seattle, WA</Highlight> and surrounding
            communities
          </h2>
          <p>
            <Highlight>Northwood Renovation</Highlight> proudly serves{" "}
            <Highlight>Seattle, WA</Highlight> and surrounding communities. We
            are local to the <Highlight>Seattle</Highlight> area, which means we
            understand the homes, neighborhoods, weather, and{" "}
            <Highlight>outdoor</Highlight> living needs of Northwest homeowners.
          </p>
        </div>
        <div className="about-area-list">
          {serviceAreas.map((area) => (
            <span key={area}>
              <Highlight>{area}</Highlight>
            </span>
          ))}
        </div>
      </section>

      <section className="about-final-cta">
        <div>
          <p className="about-label">Let’s Build Something That Lasts</p>
          <h2>Your outdoor space should feel useful, comfortable, and built with care.</h2>
          <span className="about-final-cta__copy">
            Whether you are planning a new <Highlight>deck</Highlight>,
            replacing an old <Highlight>fence</Highlight>, improving privacy,
            repairing <Highlight>outdoor</Highlight> structures, or upgrading
            your backyard, <Highlight>Northwood Renovation</Highlight> is here
            to help you take the next step.
          </span>
          <span className="about-final-cta__copy">
            We combine clear communication, clean craftsmanship, and local{" "}
            <Highlight>Seattle</Highlight> experience to build{" "}
            <Highlight>outdoor</Highlight> work you can trust.
          </span>
        </div>
        <div className="about-final-cta__actions">
          <div className="about-final-cta__button-row">
            <Link to="/contact" className="about-final-cta__button">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="about-final-cta__link">
              View Recent Work
            </Link>
          </div>
          <p className="about-final-cta__trust">
            Free estimates · Clear next steps · Seattle-area service
          </p>
        </div>
      </section>
    </main>
  </SiteLayout>
);

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>About Northwood Renovation | Seattle Fence & Deck Builder</title>
    <meta
      name="description"
      content="Learn about Northwood Renovation, a Seattle fence and deck builder focused on honest communication, clean craftsmanship, and durable outdoor spaces."
    />
  </>
);
