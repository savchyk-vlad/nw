import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import servicesOutdoorDeck from "../images/services-outdoor-deck.jpeg";

const seoTitle =
  "Outdoor Deck Installation in Everett, WA — Backyard Deck Builder | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds outdoor decks in Everett, WA and Snohomish County. Open-air backyard decks for dining, entertaining, and daily outdoor living. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Cedar, composite, and pressure-treated options",
    text: "We help you choose the surface and structure based on budget, maintenance, and how heavily the deck will actually be used.",
  },
  {
    title: "Layout planned around how you actually use the space",
    text: "Deck size, stair placement, and furniture zones are figured out from the way your household lives, not from a stock footprint.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real visit, a written estimate, and a practical conversation about the yard before any decisions are made.",
  },
];

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Visit",
    text: "We come to your property in Everett or the surrounding area, walk the backyard, and talk through what you want. How big, how it connects to the house, where the stairs go, what furniture you're planning for — all of it informs a layout recommendation that fits your yard rather than a default size pulled from a template.",
    extra:
      "We also look at the practical details: slope, drainage, how close the deck will sit to the soil, where the ledger attaches to the house. These affect both how the deck is framed and what it will cost.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Material Discussion",
    text: "After the visit we put together a written estimate with scope, materials, and timeline. We walk through the cedar vs. composite vs. pressure-treated decision in the context of your specific situation — budget, maintenance preference, how much use the deck will get — not as a general overview that applies to everyone.",
    extra:
      "If the project requires a building permit, we let you know upfront and handle the application as part of the project scope.",
  },
  {
    label: "Step 3",
    title: "Scheduling and Material Order",
    text: "Once you approve the estimate we lock in the schedule, confirm material orders, and give you a clear start date. We don't give you an optimistic date that depends on everything going perfectly. If there's a wait on materials or a full schedule coming up, we say so.",
  },
  {
    label: "Step 4",
    title: "Framing and Deck Installation",
    text: "The crew shows up when we said we would. We set footings to the correct depth for the soil conditions in your area, build the pressure-treated frame with proper joist spacing and drainage clearance, and install the surface boards with correct spacing and corrosion-resistant fasteners.",
    extra:
      "We keep the job site organized throughout — tools stored properly, lumber stacked cleanly, your yard accessible during the build.",
  },
  {
    label: "Step 5",
    title: "Walkthrough and Cleanup",
    text: "When the deck is done we walk it with you. We check boards, railings, stair treads, post bases, and the connection at the house. If anything needs adjustment before we leave, we handle it. We clean the site completely and talk through what the deck needs from you going forward — sealing schedule for cedar, or basically nothing for composite.",
  },
];

const faqItems = [
  {
    question: "How big should an outdoor deck be?",
    answer:
      "It depends on how you plan to use it. A dining table for four needs roughly 12 by 12 feet of usable surface — more if you want room to pull chairs out and walk around the table. A lounge area with two chairs and a side table works in a smaller footprint. If you want both a dining area and a lounge zone, you're looking at 16 by 20 feet or larger to keep both areas comfortable. We talk through how you plan to use the space during the estimate visit and size the layout around that conversation rather than a standard number that may or may not fit your actual backyard routine.",
  },
  {
    question: "Do I need a permit for an outdoor deck in Everett?",
    answer:
      "Most attached outdoor decks in Everett above a certain height require a building permit. Freestanding decks close to grade sometimes don't, depending on dimensions. The threshold varies by project type and jurisdiction. We assess permit requirements during the estimate and handle the application as part of the project.",
  },
  {
    question: "Cedar or composite — which is better for an outdoor deck here?",
    answer:
      "Both perform well in Everett's climate when installed correctly. Cedar has natural warmth and needs sealing every two to three years. Composite costs more upfront, requires almost no maintenance, and holds its color through years of Pacific Northwest rain. The right choice depends on your maintenance preference and budget. If you're not sure, we bring samples to the estimate visit so you can see and feel the difference in your actual yard — it's a much easier decision to make with the real material in hand.",
  },
  {
    question: "How long does outdoor deck installation take?",
    answer:
      "Most standard outdoor decks in Everett take one to two weeks to build once permits are in place and materials are confirmed. Larger builds, complex stair layouts, or sites with difficult access may take a bit longer. We give you a realistic timeline during the estimate — not an optimistic one built on things going perfectly.",
  },
  {
    question: "What maintenance does an outdoor deck need in Everett?",
    answer:
      "For cedar: an annual spring cleaning and sealer or stain every two to three years. Shaded decks may need closer attention for surface mold, which cleans off easily with a deck wash. For composite: an occasional rinse is about all it needs. For both: check post bases and any areas close to soil after the first few winters to confirm water isn't pooling where it shouldn't.",
  },
  {
    question: "Can you build an outdoor deck on a sloped yard?",
    answer:
      "Yes. Sloped yards require more attention to footing depth, stair layout, and framing height, but we build outdoor decks on sloped Everett-area properties regularly. The estimate visit is especially useful on sloped sites — we look at the grade, discuss how the deck and stairs can be laid out, and give you a clear picture of what the project involves before you commit. If your yard has a significant slope or unusual dimensions, our custom deck page covers those situations in more detail.",
  },
  {
    question: "How much does an outdoor deck cost in Everett?",
    answer:
      "Size, materials, site conditions, stair layout, and railing additions all affect the number. A straightforward cedar deck on a flat yard costs less than a composite build on a sloped lot with a wide stair. The most accurate estimate comes from seeing the property — the on-site visit is free and there's no obligation attached to it.",
  },
];

const recentProjectsConfig = [
  {
    slug: "cedar-backyard-deck",
    label: "Cedar Backyard Deck — Everett, WA",
    description:
      "An open-air cedar deck built for backyard dining and everyday use. Layout sized around a dining table, wide stairs to the lawn, and a natural finish suited for Everett's wet season.",
  },
  {
    slug: "modern-garden-deck",
    label: "Outdoor Living Deck — Kirkland, WA",
    description:
      "A clean open-air composite deck designed around garden views, with a low-profile railing and a layout that works for both relaxing and outdoor dining.",
  },
  {
    slug: "covered-deck-framing",
    label: "Backyard Deck with Pergola — Issaquah, WA",
    description:
      "An outdoor deck with an open-beam pergola over the dining area — practical weather cover without committing to a full roof structure.",
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

const outdoorDeckSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outdoor Deck Installation in Everett, WA",
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
    "Outdoor deck installation for Everett and Snohomish County homeowners. Open-air backyard decks in cedar, composite, and pressure-treated lumber. Free on-site estimates.",
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

const OutdoorDeckPage = () => (
  <SiteLayout>
    <main className="service-page outdoor-deck-page">
      <section
        className="service-hero"
        aria-labelledby="outdoor-deck-hero-title"
        style={{ backgroundImage: `url(${servicesOutdoorDeck})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Deck Services</p>
          <h1 id="outdoor-deck-hero-title">Outdoor Deck Installation in Everett, WA</h1>
          <p>
            Open-air backyard deck building for Everett and Snohomish County homeowners
            who want a practical outdoor space — somewhere to eat, sit, host guests,
            or just spend time outside without the backyard feeling unfinished.
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

      <section className="service-trust" aria-label="Quick outdoor deck points">
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
          <h2>What an Outdoor Deck Actually Changes About a Backyard</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            A lot of Everett backyards have the same problem. There's grass, maybe
            some landscaping, a sliding door or back door off the house — and nothing
            in between that makes the yard feel like a place to be. You walk outside,
            stand on the grass, and then walk back in. Nobody sets up a dining table
            on a lawn.
          </p>
          <p>
            A deck fixes that. It creates a defined surface at a comfortable height,
            gives furniture somewhere stable to sit, and makes the transition from
            inside the house to outside feel intentional rather than awkward. It turns
            the backyard from something you look at through the window into something
            you actually use.
          </p>
          <p>
            We build outdoor decks across Everett and Snohomish County for homeowners
            in that situation — people who have an underused backyard and want to
            change that without overcomplicating the project.
          </p>
        </div>
      </section>

      <section className="service-split">
        <div className="service-card">
          <p className="service-label">Layout and Planning</p>
          <h2>Getting the Layout Right Before Anything Gets Built</h2>
          <p>
            The most common mistake on an outdoor deck project is building the wrong
            size. A deck that's too small doesn't have room for the furniture you
            actually want on it. A deck that's too large costs more than it needs to
            and can feel out of scale with the house. Getting the dimensions right
            matters, and it starts with understanding how the space will actually be used.
          </p>
          <div className="service-options service-options--stacked">
            <article>
              <h3>How We Think About Deck Size</h3>
              <p>
                When we visit for the estimate, we ask practical questions. How many people
                do you typically have over? Do you want a dining table, lounge furniture,
                or both? Is there a grill that needs a spot? Do kids or pets need room to
                move around? The answers to those questions drive a layout that works for
                your household rather than a standard size that may or may not fit.
              </p>
              <p>
                A family that wants a picnic table and a gas grill needs different square
                footage than a couple who want two chairs and a small side table. We plan
                around the first group, not a generic average.
              </p>
            </article>
            <article>
              <h3>Deck Position and Sun Exposure</h3>
              <p>
                Where the deck sits relative to the house and which direction it faces
                affects how usable it is. A west-facing deck in Everett gets afternoon sun
                in summer — comfortable on cooler days, potentially too warm on hot ones.
                A north-facing deck stays cooler and more comfortable through the afternoon
                but gets less direct sun. A deck that sits under the house overhang stays
                drier in light rain but may feel more enclosed.
              </p>
              <p>
                None of these are dealbreakers — they're tradeoffs worth thinking through
                before settling on a layout. We talk through sun angle and exposure during
                the estimate visit and factor it into the layout recommendation.
              </p>
            </article>
            <article>
              <h3>Stairs, Landings, and Yard Connections</h3>
              <p>
                How the deck connects to the yard matters as much as the deck surface
                itself. A deck with no stairs or a single narrow stair feels like a
                platform you climb onto rather than an extension of the yard. Wide stairs
                and a landing at the bottom change how the deck feels — more open, more
                connected, easier to move in and out of with kids or while carrying
                groceries from the grill.
              </p>
              <p>
                We plan stairs and landings as part of the deck layout, not as an add-on
                after the main structure is sized. If your yard has a significant slope or
                unusual dimensions, our <Link to="/custom-deck">custom deck page</Link> covers
                those situations in more detail.
              </p>
            </article>
          </div>
        </div>

        <div className="service-card service-card--sage">
          <p className="service-label">Materials</p>
          <h2>Material Options for Outdoor Deck Builds in Everett</h2>
          <p>
            Outdoor decks in the Everett area deal with consistent rain exposure from
            fall through spring. The material you choose affects how the deck looks,
            how much maintenance it needs, and how it performs over time in a wet
            climate. Here's an honest comparison:
          </p>
          <p className="service-card__intro">Cedar</p>
          <p>
            Cedar is the most popular choice for outdoor decks in Snohomish County.
            It has natural warmth, handles Pacific Northwest moisture well when
            properly installed, and gives the backyard a look that fits most Northwest
            home styles. It needs sealing or staining every two to three years to
            hold its appearance — left untreated, it grays out naturally, which some
            homeowners like and others don't.
          </p>
          <p>
            For a first deck or a backyard that sees moderate use, cedar is a
            reliable, well-understood choice. We use Western red cedar for decking
            boards — it performs better in wet conditions than other cedar species
            without chemical treatment.
          </p>
          <p className="service-card__intro">Composite</p>
          <p>
            Composite decking costs more upfront and requires almost no maintenance.
            No sealing, no staining, no annual schedule to keep track of. For a
            heavily used backyard deck — kids, pets, outdoor dining multiple times
            a week — composite takes the daily wear without showing it the way
            cedar can. It also holds its color consistently over years of Pacific
            Northwest rain.
          </p>
          <p>
            The trade-off is that composite feels different underfoot than wood
            and has a more manufactured appearance. Some homeowners prefer it;
            others want the look and feel of natural wood. We bring samples to the
            estimate visit so you can see and feel the difference in your actual yard.
          </p>
          <p className="service-card__intro">Pressure-Treated Lumber</p>
          <p>
            Pressure-treated boards are a cost-effective surface option for homeowners
            who want a straightforward outdoor deck at a lower material cost. They
            take paint and stain well, perform reliably outdoors, and last a long time
            when installed correctly. The fresh green tint fades as the lumber dries,
            and first finishing should wait a season for the wood to acclimate.
          </p>
          <p>
            Pressure-treated lumber is always used for structural framing — joists,
            beams, posts — regardless of which surface material you choose. It handles
            ground exposure and moisture contact the way the surface boards handle
            rain above.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">Honest Expectations</p>
          <h2>What to Expect From an Outdoor Deck in Everett's Climate</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Outdoor decks in the Everett area hold up well when built and maintained
            properly. A few things are worth knowing going in:
          </p>
          <p>
            <strong>Rain and surface water</strong> — a well-built outdoor deck drains correctly.
            Board spacing allows water to run through rather than pool on the surface.
            Post footings sit above grade so posts don't sit in standing water. Proper
            framing height gives airflow under the deck to prevent moisture from
            getting trapped underneath. These aren't complicated details — they're
            the difference between a deck that ages well and one that starts showing
            problems within a few years.
          </p>
          <p>
            <strong>Mold and mildew</strong> — decks in shaded Everett backyards, particularly
            under mature trees or on north-facing exposures, can develop surface mold
            during the wet season. This is normal for wood in a wet climate and cleans
            off easily with a deck wash or light pressure rinse in spring. It's not a
            structural problem — it's a surface maintenance reality worth knowing
            about before the deck is built.
          </p>
          <p>
            <strong>Seasonal movement</strong> — wood decks expand and contract with seasonal
            moisture changes. This is why board spacing and proper fastening matter
            at installation. A deck built with correct spacing and corrosion-resistant
            fasteners handles this movement without cupping, buckling, or pulling at
            the fasteners over time.
          </p>
          <p>
            None of this is alarming — it's the honest picture of what outdoor wood
            construction looks like in a Pacific Northwest climate. We build with
            these conditions in mind from the start.
          </p>
        </div>
      </section>

      <section className="service-process" aria-labelledby="outdoor-deck-process-title">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2 id="outdoor-deck-process-title">
            How an Outdoor Deck Build Works With Northwood Renovation
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
          <h2>Outdoor Deck Builds Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We build outdoor decks throughout Everett and the surrounding Snohomish
            County communities — Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, and Edmonds. We also work regularly in Bothell, Kenmore,
            Shoreline, Kirkland, Redmond, and Bellevue.
          </p>
          <p>
            Working consistently in this area means we know what outdoor decks
            deal with here specifically. The neighborhoods near the Port of Everett
            see more wind than inland areas in Snohomish or Monroe. Mature tree
            coverage in Mill Creek or Bothell keeps backyards shadier and damper
            through winter. Properties on sloped lots in Kenmore or Kirkland
            sometimes need more attention to stair layout and drainage under the
            deck frame.
          </p>
          <p>
            We're also familiar with permit requirements across different
            jurisdictions in Snohomish County. City of Everett, Marysville,
            Mukilteo, and unincorporated Snohomish County each have their own
            process for attached deck permits. Knowing those processes means the
            permit step doesn't slow the project down unexpectedly.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We're a focused operation. Decks, fences, and outdoor structures are
            what we build — not a long list of general services with outdoor decks
            somewhere in the middle. That focus means we've worked through the
            situations that come up on these projects: difficult ledger attachments,
            sloped yards that need custom stair layouts, drainage issues at the
            framing stage, railings that need to meet code height without looking
            overbuilt.
          </p>
          <p>
            The crew that gives you the estimate is the same crew that builds the
            project. The layout discussion and material decisions from the planning
            visit carry through to installation because the same people are doing both.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners tend to mention after working with us</p>
          <ul className="service-check-list">
            <li><CheckIcon /><span>The estimate is written and specific — no verbal range that changes when work starts</span></li>
            <li><CheckIcon /><span>Permit coordination doesn't fall back on the homeowner to manage</span></li>
            <li><CheckIcon /><span>The crew shows up when they said they would and keeps the site tidy</span></li>
            <li><CheckIcon /><span>The finished deck looks planned for the house, not just attached to the back of it</span></li>
            <li><CheckIcon /><span>They understood what they were getting before the work started</span></li>
          </ul>
          <p>
            We're also straightforward about cost and maintenance. If your
            situation calls for a different approach than what you had in mind,
            we say so during the estimate rather than after the work is underway.
          </p>
        </div>
      </section>

      <section className="service-faq" aria-labelledby="outdoor-deck-faq-title">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2 id="outdoor-deck-faq-title">Common Questions About Outdoor Deck Installation in Everett</h2>
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
          <h2>Get a Free Outdoor Deck Estimate in Everett, WA</h2>
          <p>
            If you're ready to do something with your backyard, the first step is
            a free on-site visit. We come to your property, walk the yard, talk
            through what you want the space to do, and put together a clear written
            estimate with layout options, materials, and a realistic timeline.
          </p>
          <p>No phone guesses. No pressure to commit on the spot.</p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or fill out the estimate request form and
            we'll get back to you within one business day.
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

      <section className="service-related" aria-labelledby="outdoor-deck-projects-title">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2 id="outdoor-deck-projects-title">
            Recent Outdoor Deck Projects in Everett and Nearby Areas
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
        <h2>Outdoor Deck Installation in Everett, WA and Nearby Cities:</h2>
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

export default OutdoorDeckPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={servicesOutdoorDeck}
    schema={outdoorDeckSchema(location.pathname)}
  />
);
