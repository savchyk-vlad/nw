import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/decking.css";
import SeoHead, {
  buildCanonicalUrl,
  buildLocalBusinessReference,
} from "../components/seo";
import SiteLayout from "../components/site-layout";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_TEL } from "../lib/site-metadata";
import fenceBackyard from "../images/gallery/fence-backyard.jpg";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";
import horizontalWoodFence from "../images/gallery/horizontal-wood-fence.jpg";
import morningGardenFence from "../images/gallery/morning-garden-fence.jpeg";
import sunnyWoodFence from "../images/gallery/sunny-wood-fence.jpg";
import sunsetWoodFence from "../images/gallery/sunset-wood-fence.jpg";
import chainLinkFence from "../images/services-chain-link-fence.jpg";

const seoTitle =
  "Fencing in Seattle, WA | Cedar Wood & Chain Link Fence | Northwood Renovation";
const seoDescription =
  "Northwood Renovation installs cedar wood and chain link fences for Seattle homeowners. Strong craftsmanship, clean fence lines, and free estimates for fencing in Seattle, WA.";

const seoKeywords = [
  "fencing in Seattle WA",
  "Seattle fence contractor",
  "fence contractor Seattle WA",
  "fence installation Seattle",
  "fence replacement Seattle",
  "cedar wood fence Seattle",
  "chain link fence Seattle",
  "privacy fence Seattle",
  "fence gates Seattle",
  "Northwood Renovation fencing",
];

const services = [
  {
    tag: "Privacy + Warmth",
    title: "Cedar Wood Fence",
    text: "Natural cedar privacy fencing with warm character, strong posts, and clean lines built for Seattle residential yards.",
    to: "/fence/cedar-wood-fence/",
  },
  {
    tag: "Secure + Practical",
    title: "Chain Link Fence",
    text: "Durable, practical chain link fencing for security, property boundaries, pets, and side yards.",
    to: "/fence/chain-link-fence/",
  },
  {
    tag: "Backyard Privacy",
    title: "Privacy Fence",
    text: "Full-height privacy fencing designed to create a clean boundary and a more enclosed backyard.",
    to: "/fence/cedar-wood-fence/",
  },
  {
    tag: "Access + Hardware",
    title: "Fence Gates & Hardware",
    text: "Professionally installed gates with clean hardware and proper alignment for everyday access and security.",
    to: "/contact/#contact-form",
  },
];

const galleryItems = [
  { src: fenceBackyard, type: "Privacy Fence", location: "Bellevue, WA" },
  { src: horizontalWoodFence, type: "Horizontal Cedar Fence", location: "Redmond, WA" },
  { src: sunsetWoodFence, type: "Cedar Fence Line", location: "Woodinville, WA" },
  { src: chainLinkFence, type: "Chain Link Fence", location: "Seattle Area" },
  { src: morningGardenFence, type: "Fence Refresh", location: "Kent, WA" },
  { src: gardenFenceTrees, type: "Garden Fence", location: "Seattle Area" },
];

const featureCards = [
  {
    title: "Expert Planning & Layout",
    text: "We measure your property, mark post locations, and plan a fence layout that fits your yard, home, and access needs.",
    points: [
      "On-site measuring & planning",
      "Cedar wood and chain link options",
      "Gate placement and hardware",
      "Designed for Northwest conditions",
    ],
  },
  {
    title: "Quality Materials & Installation",
    text: "Built with straight posts, correct spacing, and clean board placement for long-term performance through Seattle rain and moisture.",
    points: [
      "Strong post footings",
      "Cedar boards or chain link mesh",
      "Clean fence lines and level tops",
      "Durable gate hardware",
    ],
  },
  {
    title: "Built for Seattle Homes",
    text: "Every fence we install is designed to handle wet seasons, daily outdoor conditions, and Pacific Northwest weather.",
    points: [
      "Moisture-resistant cedar",
      "Galvanized chain link",
      "Proper drainage around posts",
      "Improved privacy and curb appeal",
    ],
  },
];

const transformations = [
  {
    before: morningGardenFence,
    after: fenceBackyard,
    title: "Privacy Fence Replacement",
    location: "Seattle Area",
  },
];

const whyChoosePoints = [
  "Fence specialists serving Seattle and surrounding areas",
  "Cedar wood and chain link fence options",
  "Gates, hardware, and complete fence installations",
  "Fully insured and trusted by Seattle-area homeowners",
  "Clean fence lines, clear communication, no surprise costs",
];

const processSteps = [
  {
    title: "Consultation & Planning",
    text: "We start with a free on-site visit to walk the property line, measure the fence run, and discuss material options, height, post placement, and gate locations.",
  },
  {
    title: "Material Selection & Scope",
    text: "After reviewing the layout, we confirm materials: cedar boards, chain link mesh, post size, then provide a clear estimate and timeline.",
  },
  {
    title: "Post Setting & Footings",
    text: "Our crew sets posts at correct spacing with solid concrete footings, ensuring proper alignment and a stable foundation for the full fence run.",
  },
  {
    title: "Fence Installation & Gate Fitting",
    text: "We install boards, chain link, or panels with clean alignment and level tops, then fit gates with proper hardware for smooth daily use.",
  },
  {
    title: "Final Walkthrough & Cleanup",
    text: "After installation, we walk the fence line with you, check every detail, clean the site, and confirm the fence is ready to use.",
  },
];

const faqs = [
  {
    question: "What fence material works best in Seattle weather?",
    answer:
      "Cedar wood is a popular choice for Seattle because it naturally resists moisture and decay, making it a durable option for a rainy climate. Chain link is also a strong choice for homeowners who want a low-maintenance, practical fence for security or property boundaries. The best material depends on your privacy needs, budget, and how the fence will be used.",
  },
  {
    question: "Do you install cedar wood fences?",
    answer:
      "Yes. Northwood Renovation installs cedar privacy fences for Seattle residential homes, including board-on-board designs, straight-top panels, and custom height options with gate access.",
  },
  {
    question: "Do you install chain link fences?",
    answer:
      "Yes. We install galvanized chain link fencing for Seattle homeowners, including property boundary fencing, side yard enclosures, pet areas, and gates with proper hardware.",
  },
  {
    question: "Can you install a gate with a new fence?",
    answer:
      "Yes. Gates can be included as part of any new fence installation or added as a standalone upgrade. We install gates with aligned posts, smooth swing hardware, and secure latching.",
  },
  {
    question: "Can you replace an old or damaged fence?",
    answer:
      "Yes. Northwood Renovation provides complete fence replacement in Seattle. We remove the old fence, check existing post locations, and install a new fence with better materials and cleaner alignment.",
  },
  {
    question: "How long does a fence installation usually take?",
    answer:
      "Most residential fence projects take one to three days depending on the fence length, materials, ground conditions, and gate complexity. We confirm the timeline before work begins.",
  },
  {
    question: "Do you offer free estimates for fence projects in Seattle?",
    answer:
      "Yes. Northwood Renovation offers free on-site estimates for fence installation, replacement, and gate work in Seattle and surrounding areas.",
  },
  {
    question: "What areas near Seattle do you serve?",
    answer:
      "We serve Seattle and nearby communities including Bellevue, Kirkland, Redmond, Bothell, Shoreline, Edmonds, Renton, West Seattle, and other Seattle-area neighborhoods.",
  },
];

const recentFenceProjects = recentWorkProjects
  .filter((project) => project.category === "Fences" || project.service.includes("Fence"))
  .slice(0, 4);

const serviceAreas = [
  "Seattle",
  "Bellevue",
  "Kirkland",
  "Redmond",
  "Bothell",
  "Shoreline",
  "Edmonds",
  "Renton",
  "West Seattle",
  "Capitol Hill",
  "Ballard",
];

const buildFencingPageSchema = (pathname: string) => {
  const canonicalUrl = buildCanonicalUrl(pathname);
  const localBusiness = buildLocalBusinessReference();
  const areaServed = serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "State",
      name: "Washington",
    },
  }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#fencing-service`,
      name: "Fencing in Seattle, WA",
      alternateName: [
        "Seattle fence contractor",
        "Cedar wood fence installation in Seattle",
        "Chain link fence installation in Seattle",
      ],
      description: seoDescription,
      url: canonicalUrl,
      serviceType:
        "Fence installation, fence replacement, cedar wood fencing, chain link fencing, privacy fences, gates, and hardware",
      category: "Fence contractor",
      provider: localBusiness,
      areaServed,
      audience: {
        "@type": "Audience",
        audienceType: "Seattle-area homeowners",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fence & Outdoor Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            provider: localBusiness,
            areaServed,
          },
        })),
      },
      offers: {
        "@type": "Offer",
        name: "Free fence estimate",
        description:
          "Free estimate for cedar wood, chain link, privacy fence, and gate installation projects in Seattle, WA.",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        areaServed,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: buildCanonicalUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fencing in Seattle, WA",
          item: canonicalUrl,
        },
      ],
    },
  ];
};

const FencingPage = () => {
  const [zip, setZip] = React.useState("");
  const [comparePosition, setComparePosition] = React.useState(50);
  const [isComparingTransformation, setIsComparingTransformation] =
    React.useState(false);
  const activeTransformation = transformations[0];

  const handleZipSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      projectType: "fence-installation",
      source: "fencing",
    });

    if (zip.trim()) {
      params.set("zip", zip.trim());
    }

    window.location.href = `/contact?${params.toString()}#contact-form`;
  };

  const updateComparePosition = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100;
    setComparePosition(Math.max(5, Math.min(95, nextPosition)));
  };

  const startTransformationCompare = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsComparingTransformation(true);
    updateComparePosition(event);
  };

  const moveTransformationCompare = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!isComparingTransformation) return;
    updateComparePosition(event);
  };

  const endTransformationCompare = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsComparingTransformation(false);
  };

  return (
    <SiteLayout>
      <main className="decking-page">
        <section className="decking-hero">
          <div className="decking-hero__copy">
            <p className="decking-hero__rating">
              <span aria-hidden="true">★★★★★</span> Trusted Fence Contractor in Seattle, WA
            </p>
            <h1>Top Fence Contractor in Seattle, WA</h1>
            <p className="decking-hero__lead">
              From cedar privacy fences to durable chain link installations,
              Northwood Renovation builds strong, clean fences for Seattle
              homes. Professional craftsmanship, straight fence lines, and
              trusted service across the Seattle area.
            </p>
            <form className="decking-zip-form" onSubmit={handleZipSubmit}>
              <label>
                <span>Enter your ZIP code</span>
                <input
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="98103"
                />
              </label>
              <button type="submit">Get a Quick Quote →</button>
            </form>
            <ul className="decking-check-list">
              <li>Seattle-area fence contractor</li>
              <li>Cedar wood and chain link fence options</li>
              <li>Built for Northwest weather</li>
              <li>Free estimates</li>
            </ul>
          </div>
          <div className="decking-hero__media">
            <img
              src={fenceBackyard}
              alt="Fence project in Seattle, WA by Northwood Renovation"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section className="decking-section">
          <div className="decking-section__head">
            <h2>Fence & Outdoor Services</h2>
            <p>
              Build a clean, secure, and private outdoor boundary: designed for
              everyday Seattle living and Northwest weather.
            </p>
          </div>
          <div className="decking-services-grid">
            {services.map((service) => (
              <article className="decking-service-card" key={service.title}>
                <span>{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to={service.to}>Learn More →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-gallery">
          <div className="decking-section__head">
            <p className="decking-kicker">Fence Builder Gallery</p>
            <h2>Finished Fence Projects Around Seattle</h2>
            <p>
              From cedar privacy fences to chain link installations, explore
              completed fence projects by Northwood Renovation in Seattle and
              nearby areas.
            </p>
          </div>
          <div className="decking-gallery__grid">
            {galleryItems.map((item) => (
              <figure className="decking-gallery__item" key={`${item.type}-${item.location}`}>
                <img
                  src={item.src}
                  alt="Fence project in Seattle, WA by Northwood Renovation"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <strong>{item.type}</strong>
                  <span>{item.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="decking-section">
          <div className="decking-section__head">
            <h2>Complete Fence Installation Service for Seattle Homeowners</h2>
            <p>
              When you choose Northwood Renovation for your fence project, you
              get more than just installation. From selecting the right
              materials to precise post placement and clean finishing, we handle
              every step of the process for Seattle-area homeowners.
            </p>
          </div>
          <div className="decking-feature-grid">
            {featureCards.map((card) => (
              <article className="decking-feature-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <ul className="decking-check-list">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-transform">
          <div className="decking-section__head">
            <h2>Before & After Transformations</h2>
            <p>
              See how we replace old, tired fences with clean, strong new
              installations designed for privacy, security, and everyday Seattle
              living.
            </p>
          </div>
          <div className="decking-before-after">
            <div className="decking-before-after__meta">
              <strong>{activeTransformation.title}</strong>
              <span>{activeTransformation.location}</span>
            </div>
            <div className="decking-before-after__hint">
              Drag to compare the transformation
            </div>
            <div
              className={
                isComparingTransformation
                  ? "decking-before-after__compare decking-before-after__compare--dragging"
                  : "decking-before-after__compare"
              }
              onPointerDown={startTransformationCompare}
              onPointerMove={moveTransformationCompare}
              onPointerUp={endTransformationCompare}
              onPointerCancel={endTransformationCompare}
              style={{ "--compare-position": `${comparePosition}%` } as React.CSSProperties}
            >
              <img
                src={activeTransformation.before}
                alt="Before fence project in Seattle, WA by Northwood Renovation"
                loading="lazy"
                decoding="async"
              />
              <div className="decking-before-after__after">
                <img
                  src={activeTransformation.after}
                  alt="After fence project in Seattle, WA by Northwood Renovation"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="decking-before-after__label decking-before-after__label--before">
                Before
              </span>
              <span className="decking-before-after__label decking-before-after__label--after">
                After
              </span>
              <span className="decking-before-after__handle" aria-hidden="true">
                <span />
              </span>
            </div>
            <Link to="/projects/" className="decking-button decking-button--secondary">
              See More Fence Projects →
            </Link>
          </div>
        </section>

        <section className="decking-seo-copy">
          <h2>Fence Contractor in Seattle, WA — Cedar Wood & Chain Link Specialists</h2>
          <p>
            Northwood Renovation is a trusted fence contractor serving Seattle,
            WA and surrounding communities including Bellevue, Kirkland, Redmond,
            Bothell, Edmonds, and Shoreline. We provide professional fence
            installation, fence replacement, and gate installation for homeowners
            across the Seattle area. Our team builds durable outdoor fencing
            using cedar wood, chain link, and treated post materials engineered
            to withstand Pacific Northwest weather. Every fence we install is
            planned for privacy, security, and long-term performance.
          </p>
          <p>
            Seattle fence projects need more than a straight run of boards or
            mesh. Rain, sloped yards, tree roots, narrow side yards, and soft
            soil can all affect how a fence should be planned. Our team looks at
            the full property layout before work begins, including access,
            drainage, gate swing, existing landscaping, neighboring fence lines,
            and how the fence will be used day to day. That planning helps us
            build fence lines that feel clean, stable, and practical after the
            first rainy season and for years beyond it.
          </p>
          <h3>Cedar Wood Fence Installation in Seattle, WA</h3>
          <p>
            Cedar wood fencing is one of the most popular choices for Seattle
            homeowners who want natural warmth, privacy, and a clean residential
            look. Cedar is naturally resistant to moisture and decay, making it a
            strong long-term choice for the wet Pacific Northwest climate.
            Northwood Renovation installs cedar fences with careful post
            placement, straight board alignment, and clean top edges designed to
            look right alongside Seattle residential homes.
          </p>
          <p>
            A cedar fence can be built for privacy, curb appeal, pets, side-yard
            access, or a more finished backyard. We help homeowners choose fence
            height, board direction, spacing, gate placement, and top-line style
            based on the property. For privacy-focused yards, cedar boards can
            create a more enclosed outdoor space while still feeling warm and
            natural. For front or side-yard projects, a cleaner layout can define
            the property without making the home feel closed off.
          </p>
          <p>
            Proper installation matters just as much as material selection. We
            focus on post spacing, alignment, fastening, and ground clearance so
            the finished fence looks intentional and handles wet outdoor
            conditions. A well-built cedar fence should not only look good on day
            one; it should also age in a way that still feels solid, straight,
            and appropriate for a Seattle residential property.
          </p>
          <h3>Chain Link Fence Installation in Seattle, WA</h3>
          <p>
            Chain link fencing is a practical, durable, and cost-effective
            solution for Seattle homeowners who need a clear property boundary,
            security, or pet enclosure. Galvanized chain link holds up well
            through rain, moisture, and outdoor use without requiring regular
            maintenance.
          </p>
          <p>
            Chain link is often the right choice for side yards, utility areas,
            pet runs, garden boundaries, rental properties, and places where
            visibility is useful. It creates a secure perimeter without blocking
            light or views, and it can be paired with gates for daily access.
            Northwood Renovation installs chain link fences with proper post
            setting, rail alignment, fabric tension, and gate hardware so the
            system feels tight, stable, and easy to use.
          </p>
          <p>
            For Seattle-area homes, chain link can also be a smart solution when
            the yard has mixed terrain or when homeowners want durable fencing
            without the visual weight of a full privacy fence. We review the
            fence run, corners, gate locations, and connection points before
            installation so the finished fence works with the property instead
            of fighting against it.
          </p>
          <h3>Fence Replacement in Seattle, WA</h3>
          <p>
            If your existing fence is leaning, rotting, or simply worn out from
            years of Seattle weather, Northwood Renovation provides complete
            fence replacement. We remove the old fence, inspect existing post
            locations, and install a new fence with stronger materials and
            better alignment.
          </p>
          <p>
            Many older fences in Seattle fail first at the posts, gates, and
            lower boards where moisture collects. Other signs include uneven top
            lines, loose panels, dragging gates, cracked posts, missing boards,
            or sections that move in the wind. During a replacement project, we
            look at what caused the old fence to fail and plan the new
            installation around a stronger layout, better post placement, and
            cleaner long-term performance.
          </p>
          <p>
            Fence replacement is also a good time to improve how the yard works.
            Homeowners often add a wider gate, adjust the fence height, update
            the style, improve privacy near patios, or switch materials based on
            maintenance goals. Whether the project is a cedar privacy fence, a
            chain link boundary, or a mixed fencing layout, our goal is to leave
            the property with a fence that feels straighter, stronger, and more
            useful than what was there before.
          </p>
          <h3>Gate Installation and Fence Hardware</h3>
          <p>
            A properly installed gate makes everyday access easier and keeps
            your yard secure. Northwood Renovation installs gates as part of new
            fence projects or as standalone upgrades to existing fences, using
            durable hardware with correct alignment, smooth swing, and secure
            latching.
          </p>
          <p>
            Gates are often the hardest-working part of a fence. They need to
            open smoothly, close securely, and stay aligned through wet weather
            and daily use. We plan gate width, latch placement, hinge support,
            post strength, and swing direction around how the space is actually
            used. That might mean a single walk gate for a side yard, a wider
            access gate for equipment, or a gate positioned for pets, trash bins,
            gardens, or backyard traffic.
          </p>
          <h3>Why Choose Northwood Renovation for Fencing in Seattle, WA</h3>
          <p>
            Northwood Renovation is a local fence contractor focused on
            residential fence and deck work in Seattle and nearby communities.
            We are fully insured and serve Seattle, Bellevue, Kirkland, Redmond,
            Bothell, Shoreline, Edmonds, and Renton. Our clients appreciate
            straightforward estimates, organized job sites, and finished fence
            lines that look clean and hold up through Northwest weather.
          </p>
          <p>
            We keep the process practical from the first estimate through final
            cleanup. You get a clear scope, material guidance, and a crew that
            respects the property while work is underway. Our fence projects are
            built around the details homeowners notice every day: straight lines,
            strong posts, consistent spacing, usable gates, tidy cuts, and a
            jobsite that feels organized instead of chaotic.
          </p>
          <p>
            Because Northwood Renovation also works on decks, railings, and
            outdoor spaces, we understand how a fence fits into the larger yard.
            A good fence should support privacy, safety, curb appeal, pets,
            landscaping, and outdoor living without feeling like an afterthought.
            That is why we approach fencing as part of the whole property, not
            just a material installation.
          </p>
          <h3>Schedule Your Free Fence Estimate in Seattle, WA</h3>
          <p>
            Ready to install a new fence at your Seattle home? Contact Northwood
            Renovation today for a free estimate. Our team will visit your
            property, review layout options, and provide a clear scope before any
            work begins. Request an online estimate or call us directly to start
            your fence project with a trusted Seattle fence contractor.
          </p>
        </section>

        <section className="decking-why">
          <div className="decking-section__head">
            <h2>Why Choose Northwood Renovation</h2>
          </div>
          <ul className="decking-check-list decking-check-list--large">
            {whyChoosePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="decking-section">
          <div className="decking-section__head">
            <h2>Recent Fence Projects in Seattle, WA</h2>
          </div>
          <div className="decking-project-grid">
            {recentFenceProjects.map((project) => (
              <article className="decking-project-card" key={project.slug}>
                <img
                  src={project.image}
                  alt="Fence project in Seattle, WA by Northwood Renovation"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                  <small>{project.description}</small>
                  <Link to={`/projects/${project.slug}/`}>View Project →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-process">
          <div className="decking-section__head">
            <h2>Fence Installation Process: What to Expect</h2>
          </div>
          <div className="decking-process__grid">
            {processSteps.map((step, index) => (
              <article className="decking-process-card" key={step.title}>
                <span>Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-reviews">
          <div className="decking-section__head">
            <h2>What Seattle Homeowners Say About Northwood Renovation</h2>
            <p>
              Homeowners choose Northwood Renovation for clean fence lines,
              practical advice, and finished outdoor spaces that feel secure and
              ready to use.
            </p>
          </div>
          <div className="decking-review-grid">
            {[
              "Clear estimates before work begins.",
              "Straight fence lines and organized installation.",
              "Fences planned for privacy, pets, gates, weather, and daily use.",
            ].map((quote) => (
              <article className="decking-review-card" key={quote}>
                <span aria-hidden="true">★★★★★</span>
                <p>{quote}</p>
                <strong>Homeowner Feedback</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-faq">
          <div className="decking-section__head">
            <h2>Frequently Asked Questions About Fencing in Seattle</h2>
          </div>
          <div className="decking-faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="decking-final-cta">
          <h2>Ready to Install a Fence in Seattle?</h2>
          <p>
            Tell us about your property and Northwood Renovation will help you
            plan a clean, durable fence built for Seattle homes and Northwest
            weather.
          </p>
          <div>
            <Link to="/contact#contact-form">Request a Free Fence Estimate →</Link>
            <a href={`tel:${BUSINESS_PHONE_TEL}`}>
              Call Northwood Renovation
            </a>
          </div>
        </section>

        <footer className="decking-service-area">
          <h2>Proudly Serving Seattle &amp; Surrounding Areas</h2>
          <p>{serviceAreas.join(" · ")}</p>
        </footer>
      </main>
    </SiteLayout>
  );
};

export default FencingPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image="/og-northwood-renovation.jpg"
    imageAlt="Fencing in Seattle, WA by Northwood Renovation"
    keywords={seoKeywords}
    schema={buildFencingPageSchema(location.pathname)}
  />
);
