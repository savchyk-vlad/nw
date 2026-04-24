import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import servicesCompositeDeck from "../images/services-composite-deck.jpg";

const seoTitle =
  "Composite Deck Builder in Everett, WA — Low-Maintenance Decking | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds composite decks in Everett, WA and Snohomish County. Low-maintenance decking that holds up through Pacific Northwest weather. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Rot, mold, and moisture-resistant decking boards",
    text: "Composite is a strong fit for Everett homeowners who want a deck surface that holds up through long wet seasons.",
  },
  {
    title: "Modern color options that hold appearance over time",
    text: "We bring samples to the estimate so you can see the board tones in your actual yard and lighting before choosing.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real visit, a written number, and a straightforward explanation of what the project includes.",
  },
];

const materials = [
  {
    title: "Capped Composite vs. Uncapped Composite",
    text: "This is the most important distinction homeowners don't usually know to ask about. Capped composite boards have a protective polymer shell on all four sides. Uncapped boards have the composite core exposed on the bottom and sides.",
    extra:
      "In a dry climate it matters less. In the Pacific Northwest, where boards sit in damp conditions for months at a time, capped composite holds up significantly better. Moisture absorbed into the core of an uncapped board can cause swelling, mold growth on the surface, and premature wear. We use capped composite as the standard on Everett builds — the price difference is real, but so is the performance difference.",
  },
  {
    title: "Color and Finish Options",
    text: "Current composite lines come in a range of tones — warm browns and ambers that read as wood-like, cooler grays that suit modern exteriors, and in-between tones that work with most Northwest home styles. Some boards have more visible texture and grain; others have a smoother, more contemporary finish.",
    extra:
      "The right choice depends on your home's siding color, trim, and overall style. We bring samples to the estimate visit and can talk through what tends to work well on homes like yours in this area. It's a small step that saves the frustration of choosing a color from a photo online and having it look different in your actual yard.",
  },
  {
    title: "Framing Under the Composite Boards",
    text: "The composite surface gets most of the attention, but the frame underneath matters just as much. We use pressure-treated lumber for all deck framing regardless of what surface material you choose. It handles ground exposure and moisture contact the way composite handles it above — designed for outdoor conditions rather than just tolerating them.",
    extra:
      "Joist spacing and ventilation under a composite deck also matter for long-term performance. Composite boards need adequate airflow underneath to prevent moisture from getting trapped. We frame to the manufacturer's recommendations for the specific boards being installed, not to a generic standard that may not apply.",
  },
  {
    title: "Railing Options",
    text: "Composite decks are often paired with aluminum or low-maintenance railing systems rather than wood railings, since it makes sense to match the low-maintenance theme across the whole project. Aluminum railings come in powder-coated finishes that hold up well outdoors, don't need painting, and won't rot at the post bases.",
    extra:
      "Wood railings are still an option if you prefer that look — we build them with the same attention to post depth and hardware selection we use on any outdoor structure. We talk through the railing choice during the estimate so you know what each option looks like and costs before committing.",
  },
];

const comparePoints = {
  composite: [
    "You don't want to seal or stain the deck every two to three years",
    "You're building for heavy daily use — kids, pets, outdoor dining, furniture",
    "You've had a wood deck before and know the maintenance didn't happen",
    "You want consistent color and appearance without annual upkeep",
    "The project budget accommodates higher upfront material cost",
  ],
  cedar: [
    "You want the look and feel of real wood grain",
    "You're comfortable with a regular maintenance schedule",
    "You're working with a tighter material budget",
    "The deck style calls for a more traditional or natural appearance",
  ],
};

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Visit",
    text: "We come to your property in Everett or the surrounding area, walk the yard, and talk through what you want the deck to do. Dimensions, sun exposure, drainage, access from the house, any existing structure we're working around — all of it informs how the deck gets framed and where it should sit.",
    extra:
      "For composite specifically, we also look at the ledger connection to the house and the clearance above grade. Composite installations have minimum airflow requirements under the deck that affect framing height, and we plan for that at the design stage rather than working around it during installation.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Board Selection",
    text: "After the visit we put together a written estimate with the scope, materials, and timeline. We bring composite board samples so you can see the color and texture options in your actual yard, in the light your deck will live in — not in a showroom or on a website. That step helps a lot with color decisions that are hard to evaluate from a screen.",
    extra:
      "If the project requires a building permit — which most attached decks in Everett do — we handle the application and include that in the project scope.",
  },
  {
    label: "Step 3",
    title: "Material Order and Scheduling",
    text: "Once you approve the estimate, we confirm the board order, lock in the schedule, and give you a realistic start date. Lead times on composite boards vary by manufacturer and product line — we tell you honestly if there's a wait rather than giving you a start date that depends on materials arriving on time.",
  },
  {
    label: "Step 4",
    title: "Framing and Board Installation",
    text: "The crew arrives on schedule. We set footings to the correct depth for the soil conditions in your area, build the pressure-treated frame with proper joist spacing and ventilation clearance for composite, and install the boards to the manufacturer's specifications — including expansion gaps, hidden fasteners, and clean edge cuts at the perimeter.",
    extra:
      "If anything unexpected comes up during the build, we stop and show you before making a decision that affects the project. The few extra minutes that takes is almost always worth it.",
  },
  {
    label: "Step 5",
    title: "Walkthrough and Cleanup",
    text: "When the work is done we walk the deck with you — checking board seating, fasteners, railing stability, stair dimensions, and the connection at the house. We clean the site completely before we leave and talk through what, if anything, composite decking needs from you going forward. Spoiler: it's not much. An annual rinse with a garden hose or a light pressure wash every couple of years is about it for most boards.",
  },
];

const faqItems = [
  {
    question: "How long does composite decking last in the Pacific Northwest?",
    answer:
      "Quality capped composite boards typically carry manufacturer warranties of twenty-five years or more, and the performance in wet climates backs that up when the installation is done correctly. The key variables are using capped composite boards, framing with adequate ventilation underneath, and installing to the manufacturer's specification for joist spacing and expansion gaps. Boards that fail early in this climate usually have one of those factors wrong. We build to the long end of the expected lifespan.",
  },
  {
    question: "Does composite decking get hot in summer?",
    answer:
      "It can, particularly in darker colors and full sun. Composite boards absorb more heat than wood in direct sun exposure, which some homeowners notice on hot July days. In the Everett area this is a limited concern — we get relatively few days of intense direct sun, and most decks here have some shade from the house or trees. If you have a south-facing deck with full afternoon sun, it's worth knowing about, and lighter board tones help reduce it. We talk through sun exposure during the estimate visit.",
  },
  {
    question: "Does composite decking need to be sealed or stained?",
    answer:
      "No. That's the main practical advantage over wood in this climate. Composite boards don't need sealing, staining, or painting. An occasional rinse with a garden hose keeps most boards looking clean. If mildew builds up in a particularly shaded spot, a light pressure wash or a composite-safe deck cleaner handles it. That's about all the maintenance most composite decks need.",
  },
  {
    question: "Can composite decking be installed over an existing deck frame?",
    answer:
      "Sometimes, yes — if the existing frame is structurally sound and the joist spacing is compatible with the composite boards being used. We check the existing framing during the estimate visit and give you an honest answer about whether it makes sense to resurface or whether the frame needs to be rebuilt. An old frame with rot, sagging joists, or spacing that doesn't match composite requirements usually isn't worth keeping. A solid frame in good condition is worth reusing.",
  },
  {
    question: "What's the difference between cheap and quality composite boards?",
    answer:
      "The main difference is the cap layer on the surface of the board. Budget composite is often uncapped or partially capped, which means moisture can get into the core over time — leading to mold, swelling, and surface wear. Quality boards have a full polymer cap on all four sides, consistent color throughout the depth of the board, and more realistic wood-grain texture. They also tend to have better manufacturer warranties. The upfront cost difference is real; so is the performance difference in a wet climate. We use capped boards as the standard and can show you samples of both during the estimate so you can see the difference yourself.",
  },
  {
    question: "Do I need a permit to build a composite deck in Everett?",
    answer:
      "In most cases, yes. Attached decks in Everett above a certain height or square footage require a building permit through the City of Everett. The permit process is the same regardless of whether the surface material is composite or wood — what triggers it is the structure and attachment to the house, not the board material. We handle the permit application as part of the project.",
  },
  {
    question: "How much does a composite deck cost in Everett?",
    answer:
      "It depends on the size, the board line, framing requirements, site conditions, and any railing or stair additions. Composite decks typically cost more upfront than cedar decks of the same size, with the gap varying based on the board grade. The long-term cost comparison is closer once you factor in maintenance over ten or fifteen years. The most accurate thing we can give you is a real estimate after seeing the property — not a range that may not apply to your specific yard and project. The estimate visit is free.",
  },
];

const recentProjectsConfig = [
  {
    slug: "modern-garden-deck",
    label: "Modern Composite Deck — Kirkland, WA",
    description:
      "A composite deck built around garden views and outdoor dining. Capped boards in a warm gray tone, aluminum railings, and hidden fasteners throughout for a clean finished surface.",
  },
  {
    slug: "cedar-backyard-deck",
    label: "Cedar and Composite Combination Build — Everett, WA",
    description:
      "Composite deck boards over a pressure-treated frame with cedar railing details. Designed for a family backyard with heavy daily use and a low-maintenance priority.",
  },
  {
    slug: "covered-deck-framing",
    label: "Composite Deck with Covered Section — Snohomish County",
    description:
      "A composite deck with a covered pergola addition — extending the usable season for a rainy-climate backyard without a full enclosed structure.",
  },
];

const serviceAreaLinks = [
  { label: "Everett", city: "Everett, WA" },
  { label: "Marysville", city: "Marysville, WA" },
  { label: "Snohomish", city: "Snohomish, WA" },
  { label: "Mill Creek", city: "Mill Creek, WA" },
  { label: "Mukilteo", city: "Mukilteo, WA" },
  { label: "Lynnwood", city: "Lynnwood, WA" },
  { label: "Edmonds", city: "Edmonds, WA" },
  { label: "Bothell", city: "Bothell, WA" },
  { label: "Kenmore", city: "Kenmore, WA" },
  { label: "Shoreline", city: "Shoreline, WA" },
  { label: "Kirkland", city: "Kirkland, WA" },
  { label: "Redmond", city: "Redmond, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
];

const relatedProjects = recentProjectsConfig
  .map((item) => {
    const project = recentWorkProjects.find((entry) => entry.slug === item.slug);
    return project ? { ...project, ...item } : null;
  })
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const compositeDeckSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Composite Deck Builder in Everett, WA",
  provider: {
    "@type": "LocalBusiness",
    name: "Northwood Renovation",
    telephone: "+14256832024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Everett",
      addressRegion: "WA",
    },
  },
  areaServed: "Everett, WA and Snohomish County",
  description:
    "Composite deck installation for Everett and Snohomish County homeowners. Capped composite boards, low maintenance, built for Pacific Northwest weather. Free on-site estimates.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free on-site estimate",
  },
  url: buildCanonicalUrl(pathname),
});

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

const CompositeDeckPage = () => (
  <SiteLayout>
    <main className="service-page composite-deck-page">
      <section
        className="service-hero"
        aria-labelledby="composite-deck-hero-title"
        style={{ backgroundImage: `url(${servicesCompositeDeck})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Deck Services</p>
          <h1 id="composite-deck-hero-title">Composite Deck Builder in Everett, WA</h1>
          <p>
            Composite deck installation for Everett and Snohomish County
            homeowners who want a clean, durable outdoor surface without the
            annual maintenance that wood requires in a Pacific Northwest
            climate.
          </p>
          <div className="service-hero__actions">
            <Link to="/contact#contact-form" className="service-button service-button--primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="service-button service-button--secondary">
              View Recent Work
            </Link>
          </div>
        </div>
      </section>

      <section className="service-trust" aria-label="Quick composite deck points">
        {trustPoints.map((point) => (
          <article className="service-trust__card" key={point.title}>
            <span className="service-trust__icon">
              <CheckIcon />
            </span>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">About the Service</p>
          <h2>Who Composite Decking Actually Makes Sense For</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Composite decking isn't the right choice for every homeowner, and
            we think it's worth being honest about that upfront. If you love
            the look of natural cedar grain and don't mind a cleaning and
            sealing schedule every couple of years, wood is a perfectly good
            option. Composite costs more in materials and has a different feel
            underfoot.
          </p>
          <p>
            But for a lot of Everett-area homeowners, composite is genuinely
            the better fit. If you want a deck that looks good year after year
            without a maintenance schedule, if you're building for a busy
            family that will use the space hard, or if you've owned a wood
            deck before and know you're not going to keep up with the sealing
            — composite solves the problem you actually have.
          </p>
          <p>
            We build composite decks across Snohomish County and Greater
            Seattle for homeowners in exactly that situation. The finished
            product looks clean, handles Pacific Northwest rain without issue,
            and doesn't ask much of you to keep it that way.
          </p>
        </div>
      </section>

      <section className="service-split">
        <div className="service-card">
          <p className="service-label">Materials</p>
          <h2>What We Use and What the Differences Actually Mean</h2>
          <p>
            Composite decking has improved significantly over the past decade.
            The boards that fade badly or get chalky after a few winters are
            mostly older-generation products. Current boards from quality
            manufacturers perform much better. That said, not all composite is
            the same — there's a real range in quality, and we only use boards
            that have performed well in this climate.
          </p>
          <div className="service-options service-options--stacked">
            {materials.map((material) => (
              <article key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.text}</p>
                {"extra" in material && material.extra ? <p>{material.extra}</p> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="service-card service-card--sage">
          <p className="service-label">Composite vs. Wood</p>
          <h2>Composite or Cedar — How to Think Through the Decision</h2>
          <p>
            This is the most common question we get on deck estimates, and the
            honest answer is that it genuinely depends on the homeowner.
            Here's how we usually think through it:
          </p>
          <p className="service-card__intro">Choose composite if:</p>
          <ul className="service-check-list">
            {comparePoints.composite.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="service-card__intro">Cedar may be the better fit if:</p>
          <ul className="service-check-list">
            {comparePoints.cedar.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            The total cost difference is worth understanding properly.
            Composite boards cost more than cedar boards. But when you factor
            in the cost of sealing or staining every few years — materials,
            time, or hiring someone — the gap narrows considerably over a ten
            or fifteen year period. We can walk through the long-term
            comparison during the estimate if that's useful.
          </p>
        </div>
      </section>

      <section className="service-process" aria-labelledby="composite-deck-process-title">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2 id="composite-deck-process-title">
            How a Composite Deck Build Works With Northwood Renovation
          </h2>
        </div>
        <div className="service-process__grid service-process__grid--five">
          {processSteps.map((step) => (
            <article className="service-process-card" key={step.label}>
              <span className="service-process-card__number">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {"extra" in step && step.extra ? <p>{step.extra}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">Local Experience</p>
          <h2>Composite Deck Builds Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We build composite decks throughout the Everett area and
            surrounding Snohomish County communities — Marysville, Snohomish,
            Mill Creek, Mukilteo, Lynnwood, Edmonds, and Bothell. We also work
            regularly in Shoreline, Kenmore, Kirkland, Redmond, and Bellevue.
          </p>
          <p>
            Composite performs well across all of those areas, but the
            installation details vary by location. Yards near the Everett
            waterfront see more wind and some salt-air exposure. Shaded
            backyard decks in Mill Creek or Bothell with tree coverage
            overhead stay damp for longer stretches in winter — adequate
            ventilation under the deck matters more there. Decks in hillier
            terrain around Kenmore or Kirkland sometimes need more attention
            to drainage slope under the frame.
          </p>
          <p>
            None of these are unusual situations for us. Working in Snohomish
            County regularly means we've dealt with the variations that come up
            here — and we plan for them at the framing stage rather than
            hoping they don't cause problems later.
          </p>
          <p>
            We're also familiar with the permit requirements across different
            jurisdictions in this area. City of Everett, Marysville, Mukilteo,
            and unincorporated Snohomish County each have their own process.
            We handle the permit application as part of the project so that
            piece doesn't fall on the homeowner to figure out.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation on Composite Decks</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We're a small, focused operation. The people who come to your yard
            for the estimate are the same people who build the deck. That
            means the details from the planning conversation — board
            orientation, the drainage slope you mentioned, the railing height
            you wanted — actually make it to the installation.
          </p>
          <p>
            Decks and fences are what we do. We're not a general builder who
            takes outdoor projects when the schedule has room. That focus means
            we've worked through the situations that come up on composite deck
            builds specifically — difficult ledger attachments, decks on
            significant slopes, multi-level builds that need careful framing
            transitions, composite over a basement or enclosed under-deck
            space. We've seen the versions of those jobs that were done wrong
            and we know what to do differently.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners who've worked with us tend to mention</p>
          <ul className="service-check-list">
            <li><CheckIcon /><span>The estimate is written and specific — not a verbal range that changes when work starts</span></li>
            <li><CheckIcon /><span>We explain the composite options honestly, including what the price difference between board grades actually gets you</span></li>
            <li><CheckIcon /><span>The permit process doesn't come back to the homeowner to manage</span></li>
            <li><CheckIcon /><span>The crew is respectful with the property and cleans up properly</span></li>
            <li><CheckIcon /><span>The finished deck looks planned for the house, not just installed on the back of it</span></li>
          </ul>
          <p>
            We'll also tell you honestly if wood would serve you better for
            your situation. If the aesthetic or budget points toward cedar, we
            say so.
          </p>
        </div>
      </section>

      <section className="service-faq" aria-labelledby="composite-deck-faq-title">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2 id="composite-deck-faq-title">Common Questions About Composite Decks in Everett</h2>
        </div>
        <div className="service-faq__list">
          {faqItems.map((item) => (
            <article className="service-faq__item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-final-cta">
        <div>
          <h2>Get a Free Composite Deck Estimate in Everett, WA</h2>
          <p>
            If you're considering composite decking for your Everett-area
            home, the first step is a free on-site visit. We come to your
            yard, look at the space, bring board samples so you can see the
            color options in your actual light, and put together a clear
            written estimate with materials, scope, and timeline.
          </p>
          <p>No phone guesses. No pressure to decide on the spot.</p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or fill out the estimate request
            form and we'll get back to you within one business day.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland, Redmond,
            Bellevue, and surrounding Snohomish County communities.
          </p>
        </div>
        <div className="service-final-cta__actions">
          <Link to="/contact#contact-form" className="service-final-cta__primary">
            Request a Free Estimate
          </Link>
          <Link to="/projects" className="service-final-cta__secondary">
            View Recent Work
          </Link>
        </div>
      </section>

      <section className="service-related" aria-labelledby="composite-deck-projects-title">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2 id="composite-deck-projects-title">
            Recent Composite Deck Projects in Everett and Nearby Areas
          </h2>
        </div>
        <div className="service-related__grid">
          {relatedProjects.map((project) => (
            <article className="service-project-card" key={project.slug}>
              <Link to={`/projects/${project.slug}`}>
                <img src={project.image} alt={project.label} loading="lazy" />
                <div>
                  <p>{project.type}</p>
                  <h3>{project.label}</h3>
                  <span>{project.location}</span>
                  <small>{project.description}</small>
                  <strong>View Project →</strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="service-area-strip">
        <h2>Composite Deck Installation in Everett, WA and Nearby Cities:</h2>
        <p>
          {serviceAreaLinks.map((area, index) => (
            <React.Fragment key={area.city}>
              <Link to={cityServicePagePathByCity[area.city] ?? "/cities/"}>
                {area.label}
              </Link>
              {index < serviceAreaLinks.length - 1 ? " · " : null}
            </React.Fragment>
          ))}
        </p>
      </footer>
    </main>
  </SiteLayout>
);

export default CompositeDeckPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={servicesCompositeDeck}
    imageAlt="Composite deck builder in Everett, WA by Northwood Renovation"
    schema={compositeDeckSchema(location.pathname)}
  />
);
