import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import servicesWoodDeck from "../images/services-wood-deck.jpg";

const seoTitle =
  "Wood Deck Builder in Everett, WA — Cedar & Pressure-Treated Decks | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds cedar and pressure-treated wood decks in Everett, WA and Snohomish County. Natural warmth, solid framing, honest maintenance guidance. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Cedar and pressure-treated wood options",
    text: "We help you choose the right combination for appearance, structure, and budget instead of pushing one material across every job.",
  },
  {
    title: "Proper drainage, ventilation, and post depth for Northwest conditions",
    text: "Wood decks last longer here when the framing, spacing, fasteners, and moisture details are handled correctly from the start.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real visit, a written number, and honest maintenance expectations before you decide anything.",
  },
];

const materials = [
  {
    title: "Western Red Cedar",
    text: "Cedar is the most common choice for wood deck surfaces in the Pacific Northwest, and it earns that reputation. It's naturally resistant to rot and insects without chemical treatment, which matters in a wet climate. It has a warm reddish tone when new that grays out naturally if left unsealed, or holds its color well with periodic staining.",
    extra:
      "Cedar is a softer wood than some alternatives, which means it can dent or scratch with heavy furniture or regular foot traffic over years. That's not a dealbreaker — it's just something to know going in. A cedar deck that's cleaned and resealed every two to three years will look and perform well for a long time in Everett's climate.",
    extraTwo:
      "We use clear and tight-knot grades depending on the project. Clear cedar has fewer knots and a cleaner appearance — it costs more but looks closer to finished lumber. Tight-knot is slightly more rustic and handles the same weather just as well for less money.",
  },
  {
    title: "Pressure-Treated Lumber",
    text: "Pressure-treated lumber is what we use for structural framing on almost every deck we build, regardless of the surface material. It's treated to resist moisture and ground contact, which makes it the right choice for joists, beams, posts, and ledger boards that sit closer to the soil or deal with standing water exposure.",
    extra:
      "As a surface decking board, pressure-treated lumber is a practical option for homeowners who want a wood deck at a lower material cost. It takes paint and stain well, and it holds up reliably in outdoor conditions. The trade-off is that it's a green-tinted, slightly rough surface when new and needs time to dry before finishing. Some homeowners prefer the natural look of cedar for the top surface while still using pressure-treated framing underneath — that's a common and sensible combination.",
  },
  {
    title: "A Note on Fasteners and Hardware",
    text: "Fasteners matter more than most homeowners realize. Galvanized or stainless steel screws and hardware are the right choice for any outdoor wood deck in the Pacific Northwest. Standard screws rust quickly in our wet climate, and rusty fasteners stain the wood around them and eventually lose their grip. We use corrosion-resistant hardware on every build — it's a small cost difference that makes a real difference in how the deck ages.",
  },
  {
    title: "Sealers, Stains, and Finishes",
    text: "We don't apply the finish coat as part of every deck installation, because timing matters. Freshly installed cedar and pressure-treated lumber needs time to dry and acclimate before a sealer or stain goes on properly. We advise homeowners on when to apply the first coat, what products perform well in the Northwest climate, and how often to reapply based on the amount of sun and rain exposure the deck gets.",
    extra:
      "This isn't complicated, but it is the step most homeowners are least familiar with when they get a new wood deck. We make sure you understand what to do and when before we leave the job.",
  },
];

const ownershipPoints = [
  "Cleaning: Once a year, usually in early spring after the wet season, a good deck cleaning removes mold, mildew, and the gray film that builds up on wood over winter. A pressure washer on a low setting works fine.",
  "Sealing or staining: Every two to three years is a reasonable schedule for most Everett backyards. South-facing decks that get more sun may need it more often. Heavily shaded decks that stay damp need closer attention for mold.",
  "Board checks: After a few winters, walk the deck and check for boards that are cupping, cracking, or pulling at the fasteners. Catching a bad board early is a minor repair. Ignoring several bad boards for years turns into a bigger job.",
  "Post and framing inspection: The structure underneath the deck outlasts the surface boards if it was built correctly. If you see sagging, soft spots underfoot, or posts that look like they're sitting in standing water, that's worth addressing sooner rather than later.",
];

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Visit",
    text: "We come to your property, look at the yard, and talk through what you want the deck to do. Slope, drainage, sun exposure, existing landscaping, access to the house — all of it shapes how the deck should be framed and where it should sit. The visit is free and there's no pressure to move forward after it.",
    extra:
      "We also look at the ledger attachment point if the deck connects to the house, because that's where moisture problems start if it's not flashed and sealed correctly. We check what we're working with before we plan the frame.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Material Discussion",
    text: "After the visit, we put together a written estimate with the scope, materials, and timeline. We walk you through the cedar vs. pressure-treated decision, staining expectations, railing options, and any site conditions that affect the build. If a permit is required — which it usually is for attached decks in Everett — we handle the application and include that in the project scope.",
  },
  {
    label: "Step 3",
    title: "Scheduling and Material Order",
    text: "Once you approve the estimate we lock in the schedule, confirm the material order, and give you a realistic start date. We don't promise a date we can't keep. If there's a wait on a specific cedar grade or a busy stretch coming up, we tell you honestly.",
  },
  {
    label: "Step 4",
    title: "Framing and Installation",
    text: "The crew shows up when we said we would. We set the footings to the correct depth for Snohomish County soil conditions, frame with pressure-treated lumber, and install the cedar surface boards with proper spacing for drainage and expansion. We keep the site organized throughout — tools out of the way, offcuts cleaned up, access to your yard maintained.",
    extra:
      "If anything unexpected comes up during the build — a ledger board that needs to be re-flashed, a footing that hits a buried utility — we stop, show you what we found, and discuss the options before moving forward.",
  },
  {
    label: "Step 5",
    title: "Walkthrough and Cleanup",
    text: "When the work is done, we do a walkthrough with you. We check the boards, railings, stairs, post bases, and ledger connection. If something isn't right, we address it before we leave. We clean the site completely and talk through the maintenance timeline so you know what to do and when.",
  },
];

const faqItems = [
  {
    question: "How long does a cedar deck last in the Pacific Northwest?",
    answer:
      "A cedar deck that's properly built and maintained can last fifteen to twenty years or more. The key variables are post depth and concrete footings, ledger flashing at the house connection, proper board spacing for drainage, and a realistic sealing or staining schedule. Decks that fail early in this climate usually have one or more of those factors wrong from the start. We build for the long end of that range, not the short end.",
  },
  {
    question: "Cedar or pressure-treated — which should I choose for the deck surface?",
    answer:
      "Cedar is the more popular choice for the deck surface because of its appearance and natural rot resistance. Pressure-treated is a practical alternative that costs less and still performs well outdoors. A common combination is a pressure-treated structural frame with a cedar surface — you get the appearance of cedar where it's visible and the durability of treated lumber where it's doing structural work underground or close to grade. We go through the specific trade-offs during the estimate visit so you can make a choice that fits your situation and budget.",
  },
  {
    question: "Do I need a permit to build a wood deck in Everett?",
    answer:
      "Usually yes. Attached decks in Everett that are over a certain height or square footage require a building permit through the City of Everett. The threshold varies by project type, but most standard backyard decks will need one. We handle the permit application as part of the project — you don't have to manage that process separately.",
  },
  {
    question: "How long does a wood deck build take?",
    answer:
      "Most residential wood decks in Everett take one to two weeks to complete once materials are confirmed and any required permits are in place. Larger or more complex projects — sloped yards, multi-level builds, covered structures — may take two to three weeks. We give you a clear timeline at the estimate and try to keep it realistic rather than optimistic.",
  },
  {
    question: "What maintenance does a wood deck actually need in this climate?",
    answer:
      "A cedar deck in the Everett area typically needs a basic cleaning once a year and a fresh coat of sealer or stain every two to three years. Heavily shaded decks that stay damp may need more attention for mold. It's not a large time commitment if you stay on schedule — the problems come from skipping several years of maintenance, not from the work itself being difficult. We talk through the specific schedule for your yard during the project walkthrough.",
  },
  {
    question: "Can you replace just the deck boards without rebuilding the whole frame?",
    answer:
      "Sometimes, yes. If the frame and posts are structurally sound, replacing the surface boards is a reasonable repair that costs significantly less than a full rebuild. We check the framing during the estimate visit and give you an honest assessment of whether it makes sense to resurface or start fresh. An old frame with soft spots, rot at the post bases, or poor original construction usually isn't worth saving — but a solid frame with worn surface boards is worth reusing.",
  },
  {
    question: "How much does a wood deck cost in Everett?",
    answer:
      "Size, materials, site conditions, and any covered or railing additions all affect the number, and price ranges we could list here wouldn't be accurate for your specific property. The most useful thing is an on-site visit where we can look at what's actually there and give you a real estimate. It's free and there's no commitment attached to it.",
  },
];

const recentProjectsConfig = [
  {
    slug: "cedar-backyard-deck",
    label: "Cedar Backyard Deck — Everett, WA",
    description:
      "A custom cedar deck built for backyard entertaining. Designed with proper drainage spacing, corrosion-resistant fasteners, and a natural finish suited for Everett's wet season.",
  },
  {
    slug: "wood-railing-detail",
    label: "Wood Railing Detail — Everett, WA",
    description:
      "A railing upgrade on an existing wood deck — sturdy post bases, open balusters for the view, and careful finishing at the corners and returns.",
  },
  {
    slug: "deck-stairs-landing",
    label: "Deck Stairs & Landing Rebuild — Renton, WA",
    description:
      "Full stair and landing replacement on a backyard wood deck. New footings, pressure-treated stringers, cedar treads, and a clean connection back to the existing deck frame.",
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

const woodDeckSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wood Deck Builder in Everett, WA",
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
    "Cedar and pressure-treated wood deck installation for Everett and Snohomish County homeowners. Free on-site estimates. Licensed and insured.",
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

const WoodDeckPage = () => (
  <SiteLayout>
    <main className="service-page wood-deck-page">
      <section
        className="service-hero"
        aria-labelledby="wood-deck-hero-title"
        style={{ backgroundImage: `url(${servicesWoodDeck})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Deck Services</p>
          <h1 id="wood-deck-hero-title">Wood Deck Builder in Everett, WA</h1>
          <p>
            Cedar and pressure-treated wood decks built for Everett and
            Snohomish County homes — natural character, solid framing, and
            honest expectations about what it takes to keep wood looking good
            in Pacific Northwest weather.
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

      <section className="service-trust" aria-label="Quick wood deck points">
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
          <h2>Why Homeowners in Everett Still Choose Wood</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Wood decks have been around longer than composite, and there are
            good reasons people still build them. The feel underfoot is
            different. The grain is real. A well-built cedar deck in a Pacific
            Northwest backyard looks like it belongs there in a way that takes
            time for other materials to achieve.
          </p>
          <p>
            That said, wood in the Everett area needs to be installed and
            maintained thoughtfully. Rain from October through April, soft
            soil, and the moisture that settles in shaded backyards all affect
            how a wood deck performs over time. A deck that was framed too
            close to the ground, sealed poorly, or built with the wrong
            fasteners will start showing problems within a few years.
          </p>
          <p>
            We build wood decks in Everett and across Snohomish County with
            those conditions in mind from the start — not as an afterthought
            when something starts to go wrong.
          </p>
        </div>
      </section>

      <section className="service-split">
        <div className="service-card">
          <p className="service-label">Materials</p>
          <h2>Wood Deck Materials We Use</h2>
          <p>
            The two main material choices for a wood deck are cedar and
            pressure-treated lumber. They perform differently and suit
            different situations. Here's an honest breakdown:
          </p>
          <div className="service-options service-options--stacked">
            {materials.map((material) => (
              <article key={material.title}>
                <h3>{material.title}</h3>
                <p>{material.text}</p>
                {"extra" in material && material.extra ? <p>{material.extra}</p> : null}
                {"extraTwo" in material && material.extraTwo ? <p>{material.extraTwo}</p> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="service-card service-card--sage">
          <p className="service-label">What to Expect From Wood</p>
          <h2>Honest Expectations for a Wood Deck in the Pacific Northwest</h2>
          <p>
            Wood decks take more maintenance than composite. That's just true,
            and any builder who doesn't tell you that upfront isn't being
            straight with you. In the Everett area, here's what realistic
            ownership looks like:
          </p>
          <ul className="service-check-list">
            {ownershipPoints.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            None of this is difficult or expensive if it's done on a
            reasonable schedule. The homeowners who get twenty or more years
            from a cedar deck are usually the ones who stayed on top of these
            basic steps rather than ignoring the deck until something went
            wrong.
          </p>
        </div>
      </section>

      <section className="service-process" aria-labelledby="wood-deck-process-title">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2 id="wood-deck-process-title">
            How a Wood Deck Build Works With Northwood Renovation
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
          <h2>Wood Deck Work Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most of our wood deck work is in Everett and the nearby Snohomish
            County communities — Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, and Edmonds. We also build wood decks in Bothell,
            Kenmore, Shoreline, Kirkland, and Redmond.
          </p>
          <p>
            Working consistently in this area means we know the conditions that
            affect wood decks here specifically. The neighborhoods near Port
            Gardner Bay and the Everett waterfront have more wind and salt-air
            exposure than inland yards in Snohomish or Monroe. Shaded
            backyards in Mill Creek or Bothell with mature trees overhead stay
            damp longer through winter and need a different maintenance
            approach than a south-facing yard in Lynnwood that gets more
            direct sun.
          </p>
          <p>
            We also know the permit requirements across different
            jurisdictions. City of Everett, Marysville, Mukilteo, and
            unincorporated Snohomish County each have their own process. An
            attached deck over 200 square feet typically needs a permit
            regardless of jurisdiction — the specifics vary by project and we
            work through that with you during the estimate.
          </p>
          <p>
            None of this knowledge replaces walking the actual property and
            looking at what's there. But it means we come to the visit already
            familiar with the kinds of things that come up on wood deck builds
            in this area.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation on Wood Decks</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We're not a large operation with multiple crews running different
            job sites every day. You meet the same people who give you the
            estimate and do the work. That means the details from the planning
            conversation don't get lost by the time installation starts.
          </p>
          <p>
            We specialize in decks, fences, and outdoor structures. That focus
            matters on a wood deck build because the situations that come up —
            a ledger attachment to Hardie board siding, a complex stair layout
            on a sloped yard, a railing height that triggers a different code
            threshold — are things we've worked through before. We're not
            figuring out your specific situation from scratch.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners who've worked with us tend to mention</p>
          <ul className="service-check-list">
            <li><CheckIcon /><span>The estimate is written and specific, not a vague verbal range that changes</span></li>
            <li><CheckIcon /><span>We're straightforward about what wood requires for maintenance — no overselling the material to close the job</span></li>
            <li><CheckIcon /><span>The permit process doesn't land back on the homeowner to manage</span></li>
            <li><CheckIcon /><span>The crew respects the property and cleans up properly</span></li>
            <li><CheckIcon /><span>The finished deck looks like it was planned for the house, not just attached to the back of it</span></li>
          </ul>
          <p>
            We're also honest when a different material would serve someone
            better. If a homeowner tells us they don't want to deal with annual
            maintenance, we'll say composite is probably the right choice for
            them — and mean it.
          </p>
        </div>
      </section>

      <section className="service-faq" aria-labelledby="wood-deck-faq-title">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2 id="wood-deck-faq-title">Common Questions About Wood Decks in Everett</h2>
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
          <h2>Get a Free Wood Deck Estimate in Everett, WA</h2>
          <p>
            If you're thinking about a cedar deck or a pressure-treated wood
            build for your Everett-area home, the first step is a free on-site
            visit. We come to your yard, look at the space, and give you a
            clear written estimate with material options and timeline — no
            phone guesses, no pressure.
          </p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or fill out the estimate request form
            and we'll get back to you within one business day.
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

      <section className="service-related" aria-labelledby="wood-deck-projects-title">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2 id="wood-deck-projects-title">
            Recent Wood Deck Projects in Everett and Nearby Areas
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
        <h2>Wood Deck Installation in Everett, WA and Nearby Cities:</h2>
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

export default WoodDeckPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={servicesWoodDeck}
    imageAlt="Wood deck builder in Everett, WA by Northwood Renovation"
    schema={woodDeckSchema(location.pathname)}
  />
);
