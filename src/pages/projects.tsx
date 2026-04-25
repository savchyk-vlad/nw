import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/projects.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import {
  beforeAfterPreview,
  recentWorkFilters,
  recentWorkProjects,
  type ProjectFilter,
} from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";

const seoTitle = "Recent Deck and Fence Projects in Everett, WA | Northwood Renovation";
const seoDescription =
  "Browse completed deck and fence projects by Northwood Renovation in Everett, WA and Snohomish County. Cedar decks, privacy fences, composite builds, railings, and repairs. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  "Projects completed across Everett, Marysville, Kirkland, Redmond, and beyond",
  "Cedar, composite, wood, and chain link work",
  "Every project started with a free on-site estimate and clear written scope",
];

const projectCardContent: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    alt: string;
  }
> = {
  "cedar-backyard-deck": {
    title: "Cedar Backyard Deck — Everett, WA",
    category: "Deck Build",
    description:
      "A custom cedar deck built for backyard dining and everyday outdoor use in Everett. The layout was sized around a dining table and grill with wide stairs connecting to the lawn. Western red cedar boards, corrosion-resistant fasteners, and a natural stain finish suited for Pacific Northwest weather.",
    alt: "Cedar backyard deck in Everett, WA — Northwood Renovation",
  },
  "privacy-fence-installation": {
    title: "Privacy Fence Installation — Bellevue, WA",
    category: "Fence Build",
    description:
      "A cedar privacy fence installed along the rear and side property lines of a Bellevue residential yard. Board-on-board construction for full privacy, 6-foot height, with a walk gate on the side yard. Posts set in concrete at the depth required for the local soil conditions.",
    alt: "Cedar privacy fence installation in Bellevue, WA — Northwood Renovation",
  },
  "modern-garden-deck": {
    title: "Modern Garden Deck — Kirkland, WA",
    category: "Outdoor Living",
    description:
      "A composite deck built around garden views in a Kirkland backyard. Low-profile aluminum railings, capped composite boards in a warm gray tone, and a layout designed around the existing landscaping rather than against it. Built for a homeowner who wanted low maintenance and a clean, contemporary look.",
    alt: "Composite deck build in Kirkland, WA — Northwood Renovation",
  },
  "horizontal-wood-fence": {
    title: "Horizontal Wood Fence — Redmond, WA",
    category: "Fence Build",
    description:
      "A horizontal cedar fence installed along the front and side yard of a modern Redmond home. Horizontal board direction, consistent spacing, and clean post-top cuts to complement the home's contemporary exterior style. Posts set in concrete with galvanized hardware throughout.",
    alt: "Horizontal cedar fence in Redmond, WA — Northwood Renovation",
  },
  "deck-stairs-landing": {
    title: "Deck Stairs & Landing — Renton, WA",
    category: "Deck Stairs",
    description:
      "A stair and landing replacement on an existing backyard deck in Renton. The original stairs were steep, narrow, and showing rot at the stringers. New pressure-treated stringers, cedar treads, and a wider landing at the bottom for safer access. The existing deck frame was sound and was kept in place — only the stairs and landing were rebuilt.",
    alt: "Deck stair and landing rebuild in Renton, WA — Northwood Renovation",
  },
  "wood-railing-detail": {
    title: "Wood Railing Detail — Everett, WA",
    category: "Deck Railing",
    description:
      "A railing upgrade on an existing cedar deck in Everett. The original railings were aging and no longer met current code height requirements. New cedar posts, horizontal top rail, and vertical balusters with open spacing for yard views. Corrosion-resistant hardware and post bases throughout. The deck boards were left in place — only the railing system was replaced.",
    alt: "Cedar deck railing upgrade in Everett, WA — Northwood Renovation",
  },
  "backyard-fence-refresh": {
    title: "Backyard Fence Refresh — Kent, WA",
    category: "Fence Repair",
    description:
      "A partial fence replacement and repair for a Kent residential property. Several sections had leaning posts and failing boards from years of Pacific Northwest moisture. Rotted posts were pulled, new concrete-set posts installed, and new cedar boards matched to the existing fence style. The result is a consistent fence line that looks uniform and performs correctly without replacing the entire run.",
    alt: "Fence repair and cedar board replacement in Kent, WA — Northwood Renovation",
  },
  "sunset-fence-line": {
    title: "Sunset Fence Line — Woodinville, WA",
    category: "Cedar Fence",
    description:
      "A long cedar privacy fence installed along the full rear property line of a Woodinville residential home. The run included a slope transition mid-fence that required racking the panels to follow the grade. Board-on-board cedar, consistent post spacing, and a clean cap rail along the top. Built for privacy and definition while keeping a natural, calm appearance from both the yard and the neighboring property.",
    alt: "Board-on-board cedar fence in Woodinville, WA — Northwood Renovation",
  },
  "covered-deck-framing": {
    title: "Covered Deck Framing — Issaquah, WA",
    category: "Deck Construction",
    description:
      "A deck and open-beam pergola built for a homeowner in Issaquah who wanted year-round outdoor use from their backyard. Composite deck surface, pressure-treated framing, and a cedar pergola structure with open rafters overhead. The pergola covers the dining area of the deck while leaving the outer section open. The project required a building permit through the city — handled as part of the project scope.",
    alt: "Covered deck and pergola build in Issaquah, WA — Northwood Renovation",
  },
};

const serviceLinks = [
  {
    title: "Custom Deck Builder — Everett, WA",
    description: "Designed around your yard, home, and how you use the space.",
    to: "/custom-deck",
  },
  {
    title: "Wood Deck Builder — Everett, WA",
    description: "Cedar and pressure-treated deck installation for Northwest homes.",
    to: "/wood-deck",
  },
  {
    title: "Composite Deck Builder — Everett, WA",
    description: "Low-maintenance decking built for Pacific Northwest weather.",
    to: "/composite-deck",
  },
  {
    title: "Covered Deck Builder — Everett, WA",
    description: "Pergolas and covered structures for year-round outdoor use.",
    to: "/covered-deck",
  },
  {
    title: "Cedar Wood Fence Installation — Everett, WA",
    description: "Privacy fencing for Everett and Snohomish County homes.",
    to: "/cedar-wood-fence",
  },
  {
    title: "Chain Link Fence Installation — Everett, WA",
    description: "Durable, low-maintenance fencing for residential properties.",
    to: "/chain-link-fence",
  },
];

const completedCities = [
  ["Everett", "/cities/everett-wa/"],
  ["Marysville", "/cities/marysville-wa/"],
  ["Snohomish", "/cities/snohomish-wa/"],
  ["Mill Creek", "/cities/mill-creek-wa/"],
  ["Mukilteo", "/cities/mukilteo-wa/"],
  ["Lynnwood", "/cities/lynnwood-wa/"],
  ["Edmonds", "/cities/edmonds-wa/"],
  ["Bothell", "/cities/bothell-wa/"],
  ["Shoreline", "/cities/shoreline-wa/"],
  ["Kirkland", "/cities/kirkland-wa/"],
  ["Redmond", "/cities/redmond-wa/"],
  ["Woodinville", "/cities/woodinville-wa/"],
  ["Bellevue", "/cities/bellevue-wa/"],
  ["Issaquah", "/cities/issaquah-wa/"],
] as const;

const getProjectCard = (slug: string) => projectCardContent[slug];

const RecentWorkPage = () => {
  const [activeFilter, setActiveFilter] =
    React.useState<ProjectFilter>("All Projects");
  const [comparisonValue, setComparisonValue] = React.useState(52);

  return (
    <SiteLayout>
      <main className="recent-work-page">
        <section
          className="recent-work-hero"
          style={{ overflow: "hidden", position: "relative" }}>
          <StaticImage
            src="../images/deck-hero-background.jpg"
            alt=""
            aria-hidden="true"
            className="recent-work-hero__media"
            imgClassName="recent-work-hero__image"
            layout="fullWidth"
            loading="eager"
            placeholder="blurred"
            quality={72}
            formats={["auto", "webp", "avif"]}
            style={{
              display: "block",
              inset: 0,
              pointerEvents: "none",
              position: "absolute",
              zIndex: 0,
            }}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div
            className="recent-work-hero__overlay"
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
          <div
            className="recent-work-hero__content"
            style={{ position: "relative", zIndex: 1 }}>
            <h1>Recent Deck and Fence Projects in Everett, WA</h1>
            <p>
              Completed work by Northwood Renovation across Everett,
              Snohomish County, and Greater Seattle — cedar decks,
              privacy fences, composite builds, railings, covered
              structures, and outdoor repairs.
            </p>
            <div className="recent-work-hero__actions">
              <Link to="/contact#contact-form" className="recent-work-button">
                Request a Free Estimate
              </Link>
              <Link to="/#services" className="recent-work-hero__secondary-link">
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="recent-work-intro" aria-label="Project standards">
          <p>
            Real work, real yards, real homeowners.
          </p>
          <div className="recent-work-intro__trust">
            {trustPoints.map((point) => (
              <span key={point}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5 9.3 17 19 7" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </section>

        <section className="recent-work-overview">
          <div className="recent-work-overview__section">
            <div className="recent-work-section-head">
              <p>Intro</p>
              <h2>Real Work, Real Yards, Real Homeowners</h2>
            </div>
            <div className="recent-work-overview__copy">
              <p>
                This page shows finished projects — not renderings, not stock
                images, not before-and-after graphics built from unrelated photos.
                Every project here was built by our crew for a homeowner in Everett
                or a surrounding Snohomish County or Greater Seattle community.
              </p>
              <p>
                We include work from across our service area: Everett, Marysville,
                Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell,
                Shoreline, Kirkland, Redmond, Bellevue, Renton, Kent, Issaquah,
                and Woodinville. The variety of locations gives you a realistic
                sense of the kinds of projects we take on and the results we
                deliver in different yards, on different house styles, and in
                different neighborhoods.
              </p>
              <p>
                If you're planning a similar project and want to talk through what
                it might look like for your property, the estimate visit is the
                right first step — and it's free.
              </p>
            </div>
          </div>

          <div className="recent-work-overview__section">
            <div className="recent-work-section-head">
              <p>Portfolio Guide</p>
              <h2>What You'll Find in This Portfolio</h2>
            </div>
            <div className="recent-work-category-grid">
              <article className="recent-work-category-card">
                <h3>Decks</h3>
                <p>
                  Deck projects include cedar backyard decks, composite deck
                  installations, custom multi-level builds, covered deck and
                  pergola structures, and open-air platforms in various sizes
                  and layouts. Projects range from straightforward rectangular
                  platforms on flat yards to more involved builds on sloped
                  properties with custom stair layouts and railing systems.
                </p>
                <p>
                  Most of the deck work shown is in Everett, Snohomish County,
                  and the Eastside — Kirkland, Redmond, Issaquah, and Bellevue —
                  which reflects where the majority of our deck builds happen.
                </p>
              </article>
              <article className="recent-work-category-card">
                <h3>Fences</h3>
                <p>
                  Fence projects include cedar privacy fences, horizontal wood
                  fences, board-on-board cedar fencing, chain link installations,
                  and fence replacements. Projects are shown with location and
                  a brief description of the scope — what was replaced, what
                  was added, and what the yard looked like before versus after.
                </p>
                <p>
                  Most fence work shown is in Everett, Marysville, and surrounding
                  Snohomish County neighborhoods, along with projects in Redmond,
                  Woodinville, Kent, and Bellevue.
                </p>
              </article>
              <article className="recent-work-category-card">
                <h3>Railings</h3>
                <p>
                  Railing projects include deck railing upgrades, stair railings,
                  and railing replacements on existing decks. These are often
                  standalone projects where the deck structure itself is sound
                  but the railing is aging, unsafe, or simply needs to be updated
                  to match a renovation to the rest of the home.
                </p>
              </article>
              <article className="recent-work-category-card">
                <h3>Repairs</h3>
                <p>
                  Repair projects include deck board replacement, fence refresh
                  and partial replacement, post repairs, stair rebuilds, and
                  ledger reattachment. Repairs are some of the most useful projects
                  to browse if you have an existing deck or fence that isn't quite
                  right — seeing what a targeted repair can accomplish versus a
                  full replacement helps homeowners make a more informed decision
                  about scope and budget.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="recent-work-projects" aria-labelledby="projects">
          <div className="recent-work-section-head">
            <p>Portfolio</p>
            <h2 id="projects">Completed deck, fence, railing, and repair work</h2>
          </div>

          <div className="recent-work-tabs" aria-label="Project filters">
            {recentWorkFilters.map((filter) => (
              <button
                type="button"
                className={
                  activeFilter === filter
                    ? "recent-work-tab recent-work-tab--active"
                    : "recent-work-tab"
                }
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="recent-work-grid">
            {recentWorkProjects.map((project) => {
              const card = getProjectCard(project.slug) ?? {
                title: `${project.title} — ${project.location}`,
                category: project.type,
                description: project.description,
                alt: `${project.title} in ${project.location} — Northwood Renovation`,
              };
              const isVisible =
                activeFilter === "All Projects" || project.category === activeFilter;

              return (
                <article
                  className={`recent-project-card${isVisible ? "" : " recent-project-card--hidden"}`}
                  key={project.slug}
                  aria-hidden={isVisible ? undefined : true}
                >
                  <Link
                    to={`/projects/${project.slug}/`}
                    className="recent-project-card__media"
                    aria-label={`View ${card.title}`}
                    tabIndex={isVisible ? undefined : -1}
                  >
                    <img
                      src={project.image}
                      alt={card.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <div className="recent-project-card__body">
                    <p className="recent-project-card__type">{card.category}</p>
                    <h3>{card.title}</h3>
                    <p className="recent-project-card__location">{project.location}</p>
                    <p>{card.description}</p>
                    <Link
                      to={`/projects/${project.slug}/`}
                      className="recent-project-card__link"
                      tabIndex={isVisible ? undefined : -1}
                    >
                      View Project
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="recent-work-featured">
          <div className="recent-work-featured__media">
            <StaticImage
              src="../images/gallery/horizontal-wood-fence.jpg"
              alt="Cedar privacy fence installation in Everett, WA — Northwood Renovation"
              imgClassName="recent-work-featured__image"
              placeholder="blurred"
              quality={72}
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="recent-work-featured__content">
            <p className="recent-work-featured__label">Featured Project</p>
            <h2>Featured Project: Cedar Privacy Fence — Everett, WA</h2>
            <p>
              This project involved a full privacy fence installation along the rear
              and one side yard of an Everett residential property. The homeowners
              wanted full privacy from the neighboring yard, a defined boundary for
              their kids and dog, and a cleaner overall look for the backyard.
            </p>
            <p>
              The fence is board-on-board cedar construction — boards overlap slightly
              so there are no gaps between them, giving full privacy without the boards
              needing to be pressed tightly together. This style also allows the fence
              to flex slightly with seasonal wood movement without boards splitting or
              buckling.
            </p>
            <p>
              Post spacing was planned to avoid a large ash tree root system along the
              side run, which required adjusting the bay spacing in two sections. The
              gate sits at the side yard entry and uses a self-closing hinge and cane
              bolt latch for secure daily use.
            </p>
            <div className="recent-work-featured__lists">
              <div>
                <h3>What the homeowners wanted:</h3>
                <ul>
                  <li>Full privacy along the rear yard</li>
                  <li>Secure enclosure for kids and a dog</li>
                  <li>A gate that closes on its own and latches securely</li>
                  <li>Natural cedar look that ages well</li>
                </ul>
              </div>
              <div>
                <h3>What was built:</h3>
                <ul>
                  <li>6-foot board-on-board cedar fence, rear and side yard</li>
                  <li>Concrete-set posts at adjusted spacing to work around tree roots</li>
                  <li>Self-closing hinged walk gate with cane bolt latch</li>
                  <li>Cap rail and consistent board alignment throughout</li>
                </ul>
              </div>
            </div>
            <Link to="/contact#contact-form" className="recent-work-button">
              Start a Similar Project
            </Link>
          </div>
        </section>

        <section className="recent-work-before-after">
          <div className="recent-work-section-head">
            <p>Before & After</p>
            <h2>Before and After: Deck Replacement in Everett</h2>
          </div>
          <div className="before-after-slider">
            <img
              className="before-after-slider__image"
              src={beforeAfterPreview.before}
              alt="Aging deck before replacement in Everett, WA — Northwood Renovation"
              loading="lazy"
              decoding="async"
            />
            <div
              className="before-after-slider__after"
              style={{ clipPath: `inset(0 0 0 ${comparisonValue}%)` }}
            >
              <img
                src={beforeAfterPreview.after}
                alt="Composite deck replacement after construction in Everett, WA — Northwood Renovation"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="before-after-slider__label before-after-slider__label--before">
              Before
            </span>
            <span className="before-after-slider__label before-after-slider__label--after">
              After
            </span>
            <div
              className="before-after-slider__handle"
              style={{ left: `${comparisonValue}%` }}
              aria-hidden="true"
            >
              <span />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={comparisonValue}
              onChange={(event) => setComparisonValue(Number(event.target.value))}
              className="before-after-slider__range"
              aria-label="Drag to compare before and after project photos"
            />
          </div>
          <div className="recent-work-before-after__story">
            <p>
              The before-and-after comparison shown on this page is a deck replacement
              project in the Everett area. The original deck was about twelve years old
              and had been showing problems for a couple of years — soft spots near the
              ledger, a stair stringer with visible rot at the base, and boards that had
              cupped badly after repeated wet seasons without sealing.
            </p>
            <p>
              The homeowners had patched it twice and decided a replacement made more
              sense than a third round of repairs.
            </p>
            <div className="recent-work-before-after__lists">
              <div>
                <h3>What we found during demolition:</h3>
                <ul>
                  <li>Ledger flashing had failed, allowing water into the house framing behind the siding for an unknown period</li>
                  <li>Two posts were sitting in standing water and had rotted at the base</li>
                  <li>The rim joist was soft in two locations</li>
                </ul>
              </div>
              <div>
                <h3>What was rebuilt:</h3>
                <ul>
                  <li>Full demo and haul-off of the existing structure</li>
                  <li>New ledger installation with correct flashing and siding integration</li>
                  <li>Concrete footings at the correct depth for the soil</li>
                  <li>Pressure-treated framing throughout</li>
                  <li>Composite deck boards chosen to avoid repeating the maintenance cycle that had let the original deck deteriorate</li>
                </ul>
              </div>
            </div>
            <p>
              The finished deck is wider than the original by two feet, includes a
              new stair layout with a landing at the bottom, and has a composite
              surface that doesn't need annual sealing.
            </p>
            <p>
              This project is a good example of why the on-site estimate matters for
              replacement projects specifically. The problems with the ledger and the
              rotted posts weren't visible from the surface — they showed up during
              demo. We build that kind of discovery into how we plan replacement scope
              rather than treating it as a surprise that changes the estimate.
            </p>
          </div>
        </section>

        <section className="recent-work-cta">
          <div>
            <p>Start a Similar Project</p>
            <h2>Want to Start a Similar Project?</h2>
            <span>
              If you've seen something in this portfolio that looks like what you want
              for your yard, the next step is a free on-site estimate. We come to your
              property, look at the space, and put together a clear written estimate
              with materials, scope, and timeline.
            </span>
            <span className="recent-work-cta__copy">
              No phone guesses. No pressure to decide on the spot.
            </span>
            <span className="recent-work-cta__copy">
              We work across Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
              Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland, Redmond,
              Bellevue, Kent, Renton, Woodinville, Issaquah, and surrounding
              Snohomish County communities.
            </span>
            <span className="recent-work-cta__copy">
              Call {BUSINESS_PHONE_DISPLAY} or fill out the estimate request form and
              we'll get back to you within one business day.
            </span>
          </div>
          <div className="recent-work-cta__actions">
            <Link to="/contact#contact-form" className="recent-work-button">
              Request a Free Estimate
            </Link>
            <Link to="/#services" className="recent-work-hero__secondary-link">
              View Our Services
            </Link>
          </div>
        </section>

        <section className="recent-work-services" aria-labelledby="project-services">
          <div className="recent-work-section-head">
            <p>Related Services</p>
            <h2 id="project-services">Explore Our Services</h2>
          </div>
          <div className="recent-work-services__grid">
            {serviceLinks.map((service) => (
              <Link className="recent-work-service-card" to={service.to} key={service.to}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>Learn More →</strong>
              </Link>
            ))}
          </div>
        </section>

        <footer className="recent-work-area-strip">
          <h2>Deck and Fence Projects Completed Across:</h2>
          <p>
            {completedCities.map(([label, to], index) => (
              <React.Fragment key={label}>
                <Link to={to}>{label}</Link>
                {index < completedCities.length - 1 ? " · " : null}
              </React.Fragment>
            ))}
          </p>
        </footer>
      </main>
    </SiteLayout>
  );
};

export default RecentWorkPage;

export const Head: HeadFC = ({ location }) => {
  const pathname = location.pathname;

  return (
    <SeoHead
      title={seoTitle}
      description={seoDescription}
      pathname={pathname}
      schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Recent Deck and Fence Projects — Northwood Renovation",
        description:
          "Completed deck and fence projects by Northwood Renovation in Everett, WA and Snohomish County. Cedar decks, privacy fences, composite builds, railings, and repairs.",
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
        url: buildCanonicalUrl(pathname),
      }}
    />
  );
};
