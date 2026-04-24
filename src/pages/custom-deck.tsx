import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, {
  buildCanonicalUrl,
  buildLocalBusinessReference,
} from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "../lib/site-metadata";
import servicesCustomDeck from "../images/services-custom-deck.jpg";

const seoTitle =
  "Custom Deck Builder in Everett, WA | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds custom decks in Everett, WA designed around your yard, home, and how you actually use the space. Cedar, composite, and covered options. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Planned around your yard layout, slopes, and access points",
    text: "We look at the actual property first so the finished deck works with the land instead of fighting it.",
  },
  {
    title: "Cedar, composite, and covered deck options",
    text: "Material and structure choices are matched to how you want to use the space and what kind of upkeep you want long-term.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real visit, a real conversation, and a written estimate that explains what the project actually involves.",
  },
];

const customDeckFit = [
  "Your yard has a slope, uneven terrain, or a grade change at the back of the house",
  "You want to wrap the deck around a corner or build off multiple doors",
  "You're combining a deck with stairs, a pergola, a gate, or a covered section",
  "Your lot size, setback requirements, or neighbors affect where the deck can go",
  "You want something that looks connected to the house rather than attached as an afterthought",
  "You need help working through material options before you commit",
];

const materials = [
  {
    title: "Cedar",
    text: "Cedar is the most popular choice for custom decks in the Everett area for good reason. It handles Pacific Northwest moisture well, it has a warm, natural appearance that fits most Northwest homes, and it's flexible enough to work with more complex layouts. Cedar will need sealing or staining every few years to keep its color, but it ages gracefully and can be refinished if you want to update the look later.",
  },
  {
    title: "Composite Decking",
    text: "Composite boards are worth considering if you want a low-maintenance surface that holds its appearance year after year. They don't rot, they don't need annual sealing, and they handle the freeze-thaw cycle of Northwest winters without warping. The trade-off is a higher upfront material cost and a look that some homeowners find less warm than natural wood. Quality varies significantly between manufacturers — we use boards that have performed well in this climate, not whatever is cheapest that week.",
  },
  {
    title: "Pressure-Treated Lumber",
    text: "Pressure-treated lumber is almost always used for the structural framing underneath your deck boards regardless of what surface material you choose. It's strong, moisture-resistant, and suited for the ground contact and exposure that deck framing deals with. For above-ground decking, some homeowners choose pressure-treated boards because they're cost-effective and take paint or stain well.",
  },
  {
    title: "Covered Deck Additions",
    text: "If you want to use your deck through the rainy months — which in Everett is a long stretch — a covered section changes the calculation entirely. We build covered deck structures, open-beam pergolas, and solid roof additions as part of a custom deck project or as an add-on to an existing deck. A covered section doesn't need to cover the whole deck; even covering the dining area while leaving the rest open is a practical approach.",
  },
];

const processSteps = [
  {
    label: "Step 1",
    title: "The On-Site Visit",
    text: "We come to your property, walk the yard, and look at what we're actually working with. Slope, access, existing structures, drainage, where the sun hits, where the neighbors are — all of it informs how the deck should be laid out. This visit is free and there's no obligation.",
    extra:
      "We ask questions during the visit because the answers matter. How often do you plan to use this deck? Do you have kids or pets that need to be considered in the railing design? Do you want to be able to extend it later? The answers shape the design, not just the material spec.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Material Discussion",
    text: "After the visit, we put together a clear written estimate. It covers the scope of work, the materials, and the timeline. We walk you through the options and explain what the differences actually mean in practical terms — not just \"composite lasts longer\" but why that matters or doesn't for your specific situation.",
    extra:
      "If there are permit requirements for the project — which there often are for decks in Everett and Snohomish County — we let you know upfront and handle the application as part of the project.",
  },
  {
    label: "Step 3",
    title: "Scheduling and Prep",
    text: "Once you approve the estimate, we lock in a start date, confirm material orders, and let you know what to expect leading up to the installation. We're straightforward about lead times. If there's a wait for materials or a busy stretch on the schedule, we tell you honestly instead of giving you a date we can't keep.",
  },
  {
    label: "Step 4",
    title: "Installation",
    text: "Our crew shows up when we say we will. We work in an organized way, keep the site clean throughout the job, and flag anything unexpected before we make a decision that affects the project. If something comes up — a rotted ledger board under the siding, a footing location that conflicts with a buried line — we stop, show you, and discuss the options before moving forward.",
  },
  {
    label: "Step 5",
    title: "Walkthrough and Cleanup",
    text: "When the work is done, we do a walkthrough with you. We check the boards, the railings, the stairs, the fasteners, and any covered structure details. If something isn't right, we fix it before we leave. We clean the site completely — no leftover lumber, hardware, or debris in the yard.",
  },
];

const faqItems = [
  {
    question: "What's the difference between a custom deck and a standard deck build?",
    answer:
      "A standard deck build follows a fixed layout — usually a rectangular platform at a set height with a basic railing. A custom build is designed around your specific yard, home, and how you want to use the space. That might mean a different shape, a multi-level design, a covered section, built-in features, or specific material combinations. The process involves more planning upfront, but the result fits the property better.",
  },
  {
    question: "Do I need a permit to build a deck in Everett?",
    answer:
      "In most cases, yes. Decks in Everett that are above a certain height or attached to the home typically require a building permit through the City of Everett's Development Services department. The threshold and requirements vary, but a standard attached deck will usually need one. We handle the permit application as part of the project — you don't need to manage that process separately.",
  },
  {
    question: "How long does a custom deck build take?",
    answer:
      "Most residential custom decks in Everett take one to two weeks to build once materials are confirmed and permits are in place. Larger or more complex projects — multi-level decks, covered structures, or decks combined with stairs and gates — may take two to three weeks. We give you a realistic timeline during the estimate and don't pad it to give ourselves room to be late.",
  },
  {
    question: "What deck material holds up best in Pacific Northwest weather?",
    answer:
      "Cedar and composite both perform well here. Cedar is naturally moisture-resistant and handles the wet season without issues when properly installed and maintained. Composite boards resist rot and don't need annual sealing, which makes them a lower-maintenance option. Pressure-treated framing is used on both — it's the right structural material for ground contact and exposure regardless of what surface you choose. We go over the specific trade-offs during the estimate visit so you can make the choice that fits your situation.",
  },
  {
    question: "Can you add a covered section or pergola to a custom deck?",
    answer:
      "Yes. Covered deck additions and pergola structures are a regular part of custom builds. In Everett's climate, a covered section extends how long into the year you can use the deck comfortably. We design these as part of the original deck plan or as an addition to an existing deck. Covered structures typically require a permit in addition to the deck permit, which we include in the project scope.",
  },
  {
    question: "How much does a custom deck cost in Everett?",
    answer:
      "The honest answer is that it depends on the size, materials, complexity, and site conditions. A straightforward cedar deck for a flat yard will cost less than a multi-level composite deck on a sloped lot with a covered section and built-in stairs. We don't publish price ranges because they're rarely accurate for a specific property. The most useful thing we can do is come to your yard, look at what's actually there, and give you a real number. The estimate is free and there's no pressure to move forward with it.",
  },
];

const recentProjectsConfig = [
  {
    slug: "cedar-backyard-deck",
    label: "Cedar Backyard Deck — Everett, WA",
    description:
      "A custom cedar deck built for backyard entertaining. Designed around the yard's access constraints with clean framing, hidden fasteners, and a natural finish.",
  },
  {
    slug: "modern-garden-deck",
    label: "Modern Composite Deck — Kirkland, WA",
    description:
      "A composite deck designed around garden views with low-profile railings, clean board spacing, and a layout built for outdoor dining and relaxing.",
  },
  {
    slug: "deck-stairs-landing",
    label: "Deck Stairs & Landing Rebuild — Renton, WA",
    description:
      "A stair and landing replacement focused on safer access, proper footing depth, and clean integration with the existing deck structure.",
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

const customDeckSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Deck Builder in Everett, WA",
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
    "Custom deck design and installation for Everett and Snohomish County homeowners. Cedar, composite, and covered deck builds. Free on-site estimates.",
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

const CustomDeckPage = () => (
  <SiteLayout>
    <main className="service-page custom-deck-page">
      <section
        className="service-hero"
        aria-labelledby="custom-deck-hero-title"
        style={{ backgroundImage: `url(${servicesCustomDeck})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Deck Services</p>
          <h1 id="custom-deck-hero-title">Custom Deck Builder in Everett, WA</h1>
          <p>
            We design and build decks around your yard, your home, and the way
            you want to use your outdoor space — not around a standard platform
            pulled from a catalog.
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

      <section className="service-trust" aria-label="Quick custom deck points">
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
          <h2>What a Custom Deck Actually Means</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most decks we replace were built to a standard size with standard
            materials and not much thought about how the homeowner would
            actually use the space. A custom deck build starts from a different
            place — with your yard, your home's layout, and what you want to do
            outside.
          </p>
          <p>
            That might mean a deck that wraps around a corner of the house to
            catch afternoon sun. It might mean a split-level design that
            handles a sloped backyard without the need for retaining walls. It
            might just mean choosing the right board width and railing height
            for how the space will be used.
          </p>
          <p>
            At Northwood Renovation, we build custom decks for homeowners in
            Everett, Marysville, Snohomish, Mill Creek, Mukilteo, and
            surrounding Snohomish County communities. Every project starts with
            a conversation about the property — what's there, what's in the
            way, what you want the finished space to feel like, and what kind
            of maintenance you're willing to take on long-term.
          </p>
        </div>
      </section>

      <section className="service-split">
        <div className="service-card service-card--sage">
          <p className="service-label">Is This Right for You</p>
          <h2>When a Custom Deck Build Makes Sense</h2>
          <p>
            Not every deck project needs a fully custom approach. A standard
            platform deck on a flat yard with straightforward access is a
            simpler job — and we build those too. But there are situations
            where a custom design makes a real difference in how useful and how
            long-lasting the finished deck turns out to be.
          </p>
          <p className="service-card__intro">
            A custom build is usually the right call when:
          </p>
          <ul className="service-check-list">
            {customDeckFit.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            If your situation fits any of those, the estimate visit is the
            right first step. We look at the space, discuss what's realistic,
            and give you a clear picture of what the project would actually
            involve.
          </p>
        </div>

        <div className="service-card">
          <p className="service-label">Materials</p>
          <h2>Materials We Use for Custom Deck Builds</h2>
          <p>
            The material choice on a custom deck affects everything — how it
            looks, how long it lasts, how much maintenance it needs, and what
            it costs over time. We don't push one material over another because
            the right answer genuinely depends on the homeowner.
          </p>
          <div className="service-options service-options--stacked">
            {materials.map((material) => (
              <article key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process" aria-labelledby="custom-deck-process-title">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2 id="custom-deck-process-title">
            How a Custom Deck Project Works, Start to Finish
          </h2>
          <span>
            We try to keep this straightforward. There are no complicated
            phases or drawn-out timelines if the project scope is clear. Here's
            what the process typically looks like:
          </span>
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
          <h2>Building Custom Decks in Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most of our custom deck work is in Everett and the surrounding
            Snohomish County area — Marysville, Snohomish, Mill Creek,
            Mukilteo, Lynnwood, Edmonds, and Bothell. We also build decks for
            homeowners in Shoreline, Kirkland, Redmond, and Bellevue.
          </p>
          <p>
            Working in this area regularly means we understand the conditions.
            Everett gets consistent rain from October through April. The soil
            in many neighborhoods holds moisture and can shift under footings
            if the depth and concrete mix aren't right. Yards near the
            waterfront deal with wind and salt air that affects material choice
            differently than an inland yard in Snohomish or Monroe.
          </p>
          <p>
            We've also dealt with the permit requirements across different
            jurisdictions in Snohomish County. Everett, Marysville, Mukilteo,
            and unincorporated Snohomish County each have their own process.
            Knowing the local requirements before we start means the project
            moves forward without the delays that come from catching a permit
            issue midway through framing.
          </p>
          <p>
            None of this is complicated if you've been doing it in one area for
            a while. We have. That local familiarity is genuinely useful on a
            custom deck build where the details of the specific property
            matter.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work with Northwood Renovation</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We're not a franchise and we don't subcontract the work. The crew
            that gives you the estimate is the crew that builds the deck. That
            matters more than it might seem — when the same people who planned
            the project are doing the work, the details don't get lost in
            translation.
          </p>
          <p>
            We specialize in fences, decks, and outdoor structures. We're not
            trying to be every kind of builder. Specializing means we've built
            through the situations that come up on these projects regularly —
            sloped yards, difficult access, ledger attachments to different
            siding types, complex railing corners, permits across multiple
            jurisdictions. That experience shows up in the quality of the
            planning and the quality of the finished result.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners tell us they appreciate most</p>
          <ul className="service-check-list">
            <li><CheckIcon /><span>The estimate is written and clear — no vague verbal quotes that change later</span></li>
            <li><CheckIcon /><span>We explain the material options honestly, including the trade-offs</span></li>
            <li><CheckIcon /><span>The crew is respectful of the property during the job</span></li>
            <li><CheckIcon /><span>We handle the permit process without putting it back on the homeowner</span></li>
            <li><CheckIcon /><span>The finished deck looks like it belongs on the house, not attached to it</span></li>
          </ul>
          <p>
            We're also straightforward about what we can and can't do. If a
            project is outside our scope, we'll tell you instead of taking the
            job and figuring it out as we go.
          </p>
        </div>
      </section>

      <section className="service-faq" aria-labelledby="custom-deck-faq-title">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2 id="custom-deck-faq-title">Common Questions About Custom Decks in Everett</h2>
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
          <h2>Get a Free Custom Deck Estimate in Everett, WA</h2>
          <p>
            If you're thinking about a custom deck for your Everett-area home,
            the first step is a quick on-site visit. We come to your property,
            look at the yard, and talk through what you have in mind. From
            there we put together a clear written estimate with material
            options, scope, and timeline.
          </p>
          <p>
            No obligation. No vague phone quotes that change when we show up.
          </p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or fill out the form and we'll get
            back to you within one business day.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Shoreline, Kirkland, Redmond,
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

      <section className="service-related" aria-labelledby="custom-deck-projects-title">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2 id="custom-deck-projects-title">
            Recent Custom Deck Projects in Everett and Nearby Areas
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
        <h2>Custom Deck Installation in Everett, WA and Nearby Cities:</h2>
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

export default CustomDeckPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={servicesCustomDeck}
    imageAlt="Custom deck builder in Everett, WA by Northwood Renovation"
    schema={customDeckSchema(location.pathname)}
  />
);
