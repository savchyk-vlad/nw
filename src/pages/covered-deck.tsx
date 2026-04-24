import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import pergolaDeckConstruction from "../images/gallery/pergola-deck-construction.jpg";

const seoTitle =
  "Covered Deck Builder in Everett, WA — Pergolas & Covered Outdoor Spaces | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds covered decks, pergolas, and outdoor roof structures in Everett, WA and Snohomish County. Use your deck year-round. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Pergolas, solid roof covers, and open-beam structures",
    text: "We help you choose the cover type that matches how much weather protection you actually want and what fits the house.",
  },
  {
    title: "Cedar, composite, and pressure-treated deck surface options",
    text: "The structure overhead and the deck surface below are planned together so the finished space works as one project.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real visit, an honest recommendation, and a written estimate that includes the structural and permit side too.",
  },
];

const coverTypes = [
  {
    title: "Open-Beam Pergola",
    text: "A pergola is the most popular covered deck addition we build in the Everett area. It's a structural frame of posts and beams with open rafters overhead — it doesn't block rain completely, but it gives the deck a defined outdoor room feel, supports climbing plants if you want them, and is significantly easier to permit and build than a full roof structure.",
    extra:
      "For homeowners who want the aesthetic of a covered space and some protection from light rain and direct sun, a pergola is often the right answer. It's also the most versatile starting point — you can add polycarbonate panels or a shade sail to the top later if you want more coverage without committing to a full roof upfront.",
  },
  {
    title: "Polycarbonate Panel Roof",
    text: "Polycarbonate panels on a pergola frame give you the structure of a pergola with significantly better rain protection. The panels let natural light through — the deck doesn't feel dark or enclosed — while keeping rain off the space below. This is a practical middle ground between a fully open pergola and a solid roof.",
    extra:
      "In an Everett climate, polycarbonate is a popular choice for homeowners who want year-round protection without the visual weight of a solid cover. The panels handle the rain load well, shed debris, and don't require much maintenance beyond an occasional rinse.",
  },
  {
    title: "Solid Roof Cover",
    text: "A solid roof cover is the most complete rain protection option — essentially a small roof structure attached to the house or supported by posts. It makes the covered area fully usable in any weather, keeps the deck surface dry, and creates the most finished outdoor-room feel of any cover type.",
    extra:
      "The trade-offs are higher construction cost, a more involved permit process, and more structural planning to make sure the connection to the house is handled correctly. Done right, a solid covered deck addition looks like it was part of the original house design rather than attached after the fact. Done poorly, it's a water infiltration problem waiting to happen at the ledger connection. We plan the structural details carefully.",
  },
  {
    title: "Shade Sail and Fabric Covers",
    text: "We occasionally incorporate shade sails or tensioned fabric covers into covered deck designs as a supplemental or lower-cost option. They work well for sun protection and light rain but don't hold up to heavy Everett winters the way a structural cover does.",
    extra:
      "We'll discuss whether a fabric option makes sense for your situation during the estimate — it's a reasonable choice in some cases and the wrong choice in others.",
  },
];

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Visit",
    text: "We come to your property and look at the yard, the house orientation, and how the covered area would connect. Sun angle, drainage, the roof line of the house, any setback requirements from the property edge — all of it shapes what kind of covered structure makes sense and how it should be positioned.",
    extra:
      "For covered decks specifically, we also look at how the roof or pergola will drain. Water running off a covered structure needs somewhere to go — into a gutter, away from the house foundation, away from the fence line. Planning drainage at the design stage prevents problems that are harder to fix after the structure is built.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Cover Discussion",
    text: "After the visit we put together a written estimate with the scope, cover type, surface materials, and timeline. We go through the pergola vs. polycarbonate vs. solid roof comparison in the context of your specific yard and goals — not as a general overview but as a recommendation for what makes sense for your situation.",
    extra:
      "We also confirm permit requirements at this stage and include the application process in the project scope.",
  },
  {
    label: "Step 3",
    title: "Permit Application and Scheduling",
    text: "Once you approve the estimate we handle the permit submission, confirm material orders, and give you a realistic start date. Covered deck permits in Everett typically take longer to process than standard deck permits — we account for that in the timeline so the schedule doesn't depend on a permit turnaround we can't guarantee.",
  },
  {
    label: "Step 4",
    title: "Foundation, Framing, and Cover Installation",
    text: "The crew arrives on schedule. We set posts and footings to the correct depth for the load and soil conditions, build the deck frame with proper joist spacing, install the surface boards, and then build the cover structure from the ground up. On attached structures, the ledger connection and flashing are done before the cover framing goes up — in the right order, not as an afterthought.",
    extra:
      "If anything unexpected comes up during the build, we stop and show you before making a decision that affects the structure.",
  },
  {
    label: "Step 5",
    title: "Walkthrough and Cleanup",
    text: "When the work is done we walk the full structure with you — the deck surface, railings, post bases, cover frame, and the connection point at the house. We check that drainage is working as planned, that fasteners and hardware are solid, and that everything looks and functions the way it should. We clean the site completely before we leave.",
  },
];

const faqItems = [
  {
    question: "Does a covered deck need a permit in Everett?",
    answer:
      "Yes, in almost all cases. Covered deck structures — pergolas, polycarbonate roof panels, solid roof additions — require a building permit in Everett, typically with more documentation than a standard open deck. The permit involves structural review, connection details, and sometimes engineering depending on the span and cover type. We handle the permit application as part of the project. You don't need to manage that process separately.",
  },
  {
    question: "What's the difference between a pergola and a covered deck?",
    answer:
      "A pergola is an open-beam overhead structure — it gives the space a defined outdoor room feel and filters sun and light rain, but doesn't fully block a Pacific Northwest downpour. A covered deck has a solid or semi-solid roof — polycarbonate panels, metal roofing, or a built roof structure — that provides real rain protection. We build both, and we help homeowners figure out which one matches their goals and budget during the estimate visit.",
  },
  {
    question: "How long does a covered deck project take?",
    answer:
      "Most covered deck builds in Everett take two to three weeks once permits are in place and materials are confirmed. Larger or more complex structures — solid roof additions, multi-level covered areas, projects with significant framing tied into the house — may take longer. The permit process for covered structures takes more time than a standard deck permit, so we build that into the schedule upfront rather than treating it as a variable that gets figured out later.",
  },
  {
    question: "Can you add a cover to an existing deck?",
    answer:
      "Yes, and this is a common project. If the existing deck is structurally sound and the posts or framing can support a cover, adding a pergola or roof structure to an existing deck is straightforward. If the existing deck needs reinforcement — heavier posts, additional footings, ledger upgrades — we assess that during the estimate and include it in the scope. We give you an honest picture of what the existing deck can support before recommending an approach.",
  },
  {
    question: "What surface material works best under a covered deck?",
    answer:
      "Composite is the most popular choice for covered decks because it pairs logically with the low-maintenance goal of a covered structure. Cedar is a good option too — reduced direct rain exposure means cedar under a cover lasts longer between maintenance cycles than a fully exposed cedar deck. We go through the specific trade-offs during the estimate visit.",
  },
  {
    question: "How much does a covered deck cost in Everett?",
    answer:
      "The range is wide depending on cover type, size, surface material, and site conditions. A basic cedar pergola over an existing deck is a different project than a solid roof covered deck built from scratch on a sloped lot. The most accurate number comes from an on-site visit where we can look at what's actually there and plan accordingly. The estimate is free and there's no obligation attached to it.",
  },
];

const recentProjectsConfig = [
  {
    slug: "covered-deck-framing",
    label: "Covered Pergola Deck — Issaquah, WA",
    description:
      "An open-beam pergola deck built for year-round backyard use. Cedar framing, composite deck surface, and proper drainage planning for a hillside property.",
  },
  {
    slug: "cedar-backyard-deck",
    label: "Cedar Deck with Pergola Addition — Everett, WA",
    description:
      "A cedar backyard deck with a pergola cover over the dining area — extending usable season without a full roof structure.",
  },
  {
    slug: "modern-garden-deck",
    label: "Composite Covered Deck — Snohomish County",
    description:
      "A composite deck with a polycarbonate panel roof — fully usable in Pacific Northwest rain with natural light coming through the panels.",
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
  { label: "Issaquah", city: "Issaquah, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
];

const relatedProjects = recentProjectsConfig
  .map((item) => {
    const project = recentWorkProjects.find((entry) => entry.slug === item.slug);
    return project ? { ...project, ...item } : null;
  })
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const coveredDeckSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Covered Deck Builder in Everett, WA",
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
    "Covered deck building, pergola installation, and outdoor roof structures for Everett and Snohomish County homeowners. Free on-site estimates. Licensed and insured.",
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

const CoveredDeckPage = () => (
  <SiteLayout>
    <main className="service-page covered-deck-page">
      <section
        className="service-hero"
        aria-labelledby="covered-deck-hero-title"
        style={{ backgroundImage: `url(${pergolaDeckConstruction})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Deck Services</p>
          <h1 id="covered-deck-hero-title">Covered Deck Builder in Everett, WA</h1>
          <p>
            Covered deck building for Everett and Snohomish County homeowners
            who want to use their outdoor space through rain, not just on the
            handful of dry summer days the Pacific Northwest actually delivers.
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

      <section className="service-trust" aria-label="Quick covered deck points">
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
          <h2>Why a Covered Deck Makes More Sense in Everett Than Almost Anywhere</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most parts of the country build covered decks as a luxury upgrade.
            In Everett, they're closer to a practical decision.
          </p>
          <p>
            The Puget Sound area gets consistent rain from October through
            April — and honestly, into May in a normal year. An uncovered deck
            in the backyard looks nice in a listing photo, but if you're only
            willing to use it when it's dry, you're getting maybe four months
            of real use out of it annually.
          </p>
          <p>
            A covered deck changes that math. A well-designed cover lets you
            sit outside in the rain with a cup of coffee in November, grill in
            March without getting soaked, and run a dining area through
            October without watching it get rained out. In Everett's climate,
            that's not a luxury — it's a meaningful improvement in how much
            you actually use the space you paid to build.
          </p>
          <p>
            We design and build covered decks across Everett and Snohomish
            County for homeowners who've done the math and decided they want a
            deck that earns its keep through more of the year.
          </p>
        </div>
      </section>

      <section className="service-split">
        <div className="service-card">
          <p className="service-label">Cover Types</p>
          <h2>Types of Covered Deck Structures We Build</h2>
          <p>
            Covered deck covers a range of structures, and the right one
            depends on what you're trying to do, how the house is oriented,
            and what your budget allows. Here's how the main options compare:
          </p>
          <div className="service-options service-options--stacked">
            {coverTypes.map((cover) => (
              <article key={cover.title}>
                <h3>{cover.title}</h3>
                <p>{cover.text}</p>
                {"extra" in cover && cover.extra ? <p>{cover.extra}</p> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="service-card service-card--sage">
          <p className="service-label">Deck Surface Options</p>
          <h2>Choosing a Deck Surface Under a Covered Structure</h2>
          <p>
            A covered deck needs the same careful surface material selection
            as any other deck build — the cover changes some of the moisture
            dynamics but doesn't eliminate them entirely.
          </p>
          <p className="service-card__intro">Cedar</p>
          <p>
            Cedar works well under a covered structure. The reduced direct
            rain exposure means cedar under a solid cover or pergola stays
            looking better longer between maintenance cycles. That said,
            covered decks in Everett can still deal with wind-driven moisture,
            condensation, and the general dampness of a Pacific Northwest
            winter — cedar still needs periodic sealing, just less frequently
            than a fully exposed deck.
          </p>
          <p className="service-card__intro">Composite decking</p>
          <p>
            Composite decking pairs naturally with a covered deck build. If
            you're already committing to a covered structure for
            low-maintenance outdoor living, composite boards extend that logic
            to the surface — you get a space that doesn't require sealing,
            staining, or much attention beyond an annual rinse. For covered
            decks intended for year-round dining or entertaining, composite is
            the most popular surface choice.
          </p>
          <p className="service-card__intro">Pressure-treated framing</p>
          <p>
            Pressure-treated framing goes under both regardless of the surface
            you choose. The structural frame — joists, beams, posts — is
            always pressure-treated for outdoor exposure and ground contact.
            That doesn't change with a covered structure.
          </p>
          <p>
            We go through the surface material decision during the estimate
            visit and bring samples so you can see the options in your actual
            yard, in the light the deck will live in.
          </p>
        </div>
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">Permits and Structural Planning</p>
          <h2>Permits and Structural Details for Covered Decks in Everett</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            This section matters more for covered decks than for standard open
            decks, so it's worth addressing directly.
          </p>
          <p>
            Most covered deck additions in Everett require a building permit —
            and typically a more detailed one than a standard deck build. A
            pergola attached to the house, a polycarbonate panel roof
            structure, or a solid covered roof all trigger permit
            requirements that involve structural review, connection details,
            and sometimes engineering depending on the span and load.
          </p>
          <p>
            We handle the permit application as part of every covered deck
            project. That includes preparing the site plan, structural
            details, and any documentation required by the City of Everett or
            Snohomish County — depending on where your property is located.
            You don't need to manage that process separately.
          </p>
          <p>
            The ledger connection deserves specific attention on covered deck
            structures. A covered deck that's attached to the house transfers
            more load to the connection point than an open deck. If that
            connection isn't properly flashed and detailed, it becomes a water
            infiltration point — moisture gets behind the siding, into the
            framing, and causes the kind of damage that's expensive to repair.
            We plan the connection detail before we start, not as an
            afterthought when we're already framing.
          </p>
        </div>
      </section>

      <section className="service-process" aria-labelledby="covered-deck-process-title">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2 id="covered-deck-process-title">
            How a Covered Deck Build Works With Northwood Renovation
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
          <h2>Covered Deck Builds Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most of our covered deck work is in Everett and the surrounding
            Snohomish County communities — Marysville, Snohomish, Mill Creek,
            Mukilteo, Lynnwood, Edmonds, and Bothell. We also build covered
            structures in Shoreline, Kenmore, Kirkland, Redmond, and
            Issaquah.
          </p>
          <p>
            The Everett area has a few specific conditions that affect covered
            deck design. Properties near the waterfront in north Everett deal
            with more wind load than inland yards — cover structures there
            need more attention to post sizing, anchor hardware, and
            connection details. Hillside properties in areas like Silver Lake
            or the Paine Field neighborhood sometimes have slope and drainage
            considerations that affect where a covered structure can sit
            relative to the house and yard grade.
          </p>
          <p>
            We've also dealt with the permit requirements across different
            jurisdictions in this area. City of Everett permits for covered
            structures involve structural documentation that takes more
            preparation than a standard deck application. Snohomish County
            unincorporated permits work differently again. We know the process
            in the jurisdictions where we work regularly, which means fewer
            surprises and a more realistic timeline estimate upfront.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation on Covered Decks</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Covered decks are more complex than standard deck builds. They
            involve more structural planning, a more involved permit process,
            and connection details at the house that have real consequences if
            they're done incorrectly. This is a project where experience with
            the specific type of work matters more than it does on a
            straightforward platform deck.
          </p>
          <p>
            We've built covered deck structures across Snohomish County —
            pergolas, polycarbonate roof covers, solid attached structures,
            and freestanding covered areas. We've also seen the versions of
            these projects that were done wrong — improper ledger flashing,
            undersized posts, drainage that runs toward the house — and we
            know what to do differently.
          </p>
          <p>
            The people who give you the estimate are the same people who build
            the project. The structural details discussed during the planning
            conversation don't get lost between the office and the job site.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners who've worked with us tend to mention</p>
          <ul className="service-check-list">
            <li><CheckIcon /><span>The estimate is written and specific, not a verbal description that changes when work starts</span></li>
            <li><CheckIcon /><span>Permit coordination doesn't fall back on the homeowner to manage</span></li>
            <li><CheckIcon /><span>The structural details — ledger connection, post sizing, drainage — are handled correctly from the start</span></li>
            <li><CheckIcon /><span>The crew respects the property and keeps the site organized</span></li>
            <li><CheckIcon /><span>The finished covered deck looks like it was planned for the house</span></li>
          </ul>
          <p>
            We're also straightforward about what a covered deck won't do. A
            pergola with open rafters won't keep you dry in a hard Everett
            rain. A polycarbonate roof will, but it's a different look. We
            talk through what you're actually trying to accomplish and
            recommend accordingly.
          </p>
        </div>
      </section>

      <section className="service-faq" aria-labelledby="covered-deck-faq-title">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2 id="covered-deck-faq-title">Common Questions About Covered Decks in Everett</h2>
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
          <h2>Get a Free Covered Deck Estimate in Everett, WA</h2>
          <p>
            If you're thinking about a covered deck, pergola, or outdoor roof
            structure for your Everett-area home, the first step is a free
            on-site visit. We come to your property, look at the yard and
            house orientation, and put together a clear written estimate with
            cover options, surface materials, permit requirements, and a
            realistic timeline.
          </p>
          <p>No phone guesses. No pressure to decide on the spot.</p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or fill out the estimate request
            form and we'll get back to you within one business day.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland,
            Redmond, Bellevue, Issaquah, and surrounding Snohomish County
            communities.
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

      <section className="service-related" aria-labelledby="covered-deck-projects-title">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2 id="covered-deck-projects-title">
            Recent Covered Deck Projects in Everett and Nearby Areas
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
        <h2>Covered Deck Building in Everett, WA and Nearby Cities:</h2>
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

export default CoveredDeckPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={pergolaDeckConstruction}
    schema={coveredDeckSchema(location.pathname)}
  />
);
