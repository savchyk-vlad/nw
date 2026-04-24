import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/decking.css";
import SeoHead, {
  buildCanonicalUrl,
  buildLocalBusinessReference,
} from "../components/seo";
import SiteLayout from "../components/site-layout";
import { recentWorkProjects, beforeAfterPreview } from "../data/recent-work-projects";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "../lib/site-metadata";
import heroDeckImage from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (4).jpg";
import galleryDeckImage from "../images/cities/Gemini_Generated_Image_3msels3msels3mse.png";
import galleryDeckAfterImage from "../images/cities/deck-local-carousel-after-premium-deck.png";
import galleryDeckBeforeImage from "../images/cities/deck-local-carousel-before-weathered-deck.png";
import largeDeckAfterImage from "../images/cities/deck-local-carousel-after-new-wood-deck.jpg";
import largeDeckBeforeImage from "../images/cities/deck-local-carousel-before-large-weathered-deck.png";

const seoTitle =
  "Decking in Everett, WA | Custom Wood & Composite Decks | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds custom wood, composite, and covered decks for Everett homeowners. Strong craftsmanship, clean installations, and free estimates for decking in Everett, WA.";

const seoKeywords = [
  "decking in Everett WA",
  "Everett deck builder",
  "deck builder Everett WA",
  "deck installation Everett",
  "deck replacement Everett",
  "composite decking Everett",
  "wood decks Everett",
  "cedar decks Everett",
  "covered decks Everett",
  "custom decks Everett",
  "Northwood Renovation decking",
];

const services = [
  {
    tag: "Design + Build",
    title: "Custom Decks",
    text: "From design to build, we craft clean, long-lasting decks that fit your Everett-area home and outdoor lifestyle.",
    to: "/custom-deck/",
  },
  {
    tag: "Low Maintenance",
    title: "Composite Decking",
    text: "Low-maintenance, weather-resistant composite decks with a clean, modern look built for rainy Northwest weather.",
    to: "/composite-deck/",
  },
  {
    tag: "Natural Finish",
    title: "Wood Decks",
    text: "Natural wood decks with warm textures and timeless appeal, built with careful craftsmanship.",
    to: "/wood-deck/",
  },
  {
    tag: "Outdoor Living",
    title: "Covered Decks & Railings",
    text: "Add usable covered outdoor space with railings, pergolas, and weather protection designed for the Pacific Northwest.",
    to: "/covered-deck/",
  },
];

const galleryItems = [
  {
    src: heroDeckImage,
    type: "Composite Deck",
    location: "Everett, WA",
  },
  {
    src: galleryDeckImage,
    type: "Custom Deck",
    location: "Snohomish County",
  },
  {
    src: galleryDeckAfterImage,
    type: "Backyard Deck",
    location: "Everett, WA",
  },
  {
    src: largeDeckAfterImage,
    type: "Wood Deck",
    location: "Greater Seattle",
  },
  {
    src: recentWorkProjects[0].image,
    type: recentWorkProjects[0].type,
    location: recentWorkProjects[0].location,
  },
  {
    src: recentWorkProjects[2].image,
    type: recentWorkProjects[2].type,
    location: recentWorkProjects[2].location,
  },
];

const featureCards = [
  {
    title: "Expert Design & Planning",
    text: "We measure your yard, discuss materials, and plan a deck layout that fits your home, outdoor space, and everyday use.",
    points: [
      "On-site measuring & planning",
      "Material options: composite or wood",
      "Railings, stairs & covered options",
      "Designed for Northwest weather",
    ],
  },
  {
    title: "Premium Materials & Installation",
    text: "Built with precision for long-term performance and clean finishes that hold up through Northwest rain, moisture, and daily use.",
    points: [
      "Footings & framing done right",
      "Composite, cedar, treated lumber options",
      "Clean edges & hidden fasteners",
      "Strong railings and safe stairs",
    ],
  },
  {
    title: "Built for Everett & Northwest Homes",
    text: "Every deck we build is designed to handle wet seasons, daily traffic, and Pacific Northwest weather.",
    points: [
      "Moisture-resistant materials",
      "Proper drainage & ventilation",
      "Code-compliant railings & stairs",
      "Improved curb appeal and outdoor living",
    ],
  },
];

const transformations = [
  {
    before: beforeAfterPreview.before,
    after: beforeAfterPreview.after,
    title: "Weathered Deck Replacement",
    location: "Everett, WA",
  },
  {
    before: galleryDeckBeforeImage,
    after: galleryDeckAfterImage,
    title: "Backyard Deck Rebuild",
    location: "Snohomish County",
  },
  {
    before: largeDeckBeforeImage,
    after: largeDeckAfterImage,
    title: "Large Wood Deck Replacement",
    location: "Greater Seattle",
  },
];

const whyChoosePoints = [
  "Expert deck builders serving Everett and surrounding areas",
  "Custom designs to fit your home, yard, and outdoor lifestyle",
  "Quality materials: composite, wood, cedar, or covered options",
  "Fully insured and trusted by Everett-area homeowners",
  "Clean installations, clear communication, no surprise costs",
];

const processSteps = [
  {
    title: "Consultation & Design",
    text: "We start with a free on-site visit to understand your yard, style, and goals. We measure the space and discuss material options, layout, stairs, and railings.",
  },
  {
    title: "Material Selection & Planning",
    text: "After reviewing the design, we help you choose the right materials: composite boards, cedar, or treated lumber, then confirm scope, timeline, and next steps.",
  },
  {
    title: "Framing & Structural Setup",
    text: "Our crew builds a solid frame using treated lumber and proper footings, ensuring correct alignment and load-bearing strength for long-term durability.",
  },
  {
    title: "Deck Installation & Finishing",
    text: "We install your chosen boards with precision: clean edges, hidden fasteners, and careful railing and stair details for a finished, professional result.",
  },
  {
    title: "Final Inspection & Cleanup",
    text: "After installation, we do a full walkthrough, clean the site, and make sure every detail is right before the project is complete.",
  },
];

const faqs = [
  {
    question: "What deck material works best in Everett weather?",
    answer:
      "Composite decking is a strong choice for Everett because it resists moisture, rot, and mold without requiring regular sealing or staining. Cedar is also popular for its natural warmth and character. The best material depends on your maintenance preferences, budget, and how you plan to use the space.",
  },
  {
    question: "Do you build both wood and composite decks?",
    answer:
      "Yes. Northwood Renovation builds both wood and composite decks, including cedar decks, custom layouts, outdoor decks, and replacement deck projects.",
  },
  {
    question: "Can you build covered decks in Everett?",
    answer:
      "Yes. We can plan covered deck structures, pergolas, railings, stairs, and weather protection details for Everett-area homes.",
  },
  {
    question: "Do you handle deck stairs and railings?",
    answer:
      "Yes. Stairs, landings, railings, and safety details can be included as part of your deck build or deck replacement.",
  },
  {
    question: "How long does a deck project usually take?",
    answer:
      "Many residential deck projects take one to two weeks after materials and scheduling are confirmed. Timing depends on size, access, materials, weather, and design complexity.",
  },
  {
    question: "Do you offer deck replacement for old or unsafe decks?",
    answer:
      "Yes. We replace old, unsafe, or weathered decks and can update framing, stairs, railings, layout, and material choices during the rebuild.",
  },
  {
    question: "Do you offer free estimates for Everett deck projects?",
    answer:
      "Yes. Northwood Renovation offers free estimates for deck installation, replacement, and remodeling projects in Everett and surrounding areas. We review the yard, discuss options, and provide a clear scope before any work begins.",
  },
  {
    question: "What areas near Everett do you serve?",
    answer:
      "We serve Everett and nearby areas including Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Bellevue, Kirkland, Redmond, Bothell, Shoreline, and Edmonds.",
  },
];

const recentDeckProjects = recentWorkProjects
  .filter((project) => project.category === "Decks" || project.category === "Railings")
  .slice(0, 4);

const serviceAreas = [
  "Everett",
  "Marysville",
  "Snohomish",
  "Mukilteo",
  "Mill Creek",
  "Lynnwood",
  "Edmonds",
  "Bothell",
  "Shoreline",
  "Kirkland",
  "Redmond",
  "Bellevue",
  "Renton",
];

const buildDeckingPageSchema = (pathname: string) => {
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
      "@id": `${canonicalUrl}#decking-service`,
      name: "Decking in Everett, WA",
      alternateName: [
        "Everett deck builder",
        "Custom deck installation in Everett",
        "Composite decking in Everett",
      ],
      description: seoDescription,
      url: canonicalUrl,
      serviceType:
        "Deck building, deck installation, deck replacement, composite decking, wood decks, covered decks, railings, and stairs",
      category: "Deck builder",
      provider: localBusiness,
      areaServed,
      audience: {
        "@type": "Audience",
        audienceType: "Everett-area homeowners",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Deck & Outdoor Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            provider: localBusiness,
            areaServed,
            url: `${canonicalUrl}#${service.title
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`,
          },
        })),
      },
      offers: {
        "@type": "Offer",
        name: "Free deck estimate",
        description:
          "Free estimate for custom wood, composite, covered, and replacement deck projects in Everett, WA.",
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
          name: "Decking in Everett, WA",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonicalUrl}#deck-projects`,
      name: "Recent Deck Projects in Everett, WA",
      itemListElement: recentDeckProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: buildCanonicalUrl(`/projects/${project.slug}/`),
          locationCreated: {
            "@type": "Place",
            name: project.location,
          },
        },
      })),
    },
  ];
};

const DeckingPage = () => {
  const [zip, setZip] = React.useState("");
  const [comparePosition, setComparePosition] = React.useState(50);
  const [isComparingTransformation, setIsComparingTransformation] =
    React.useState(false);
  const activeTransformation = transformations[0];

  const handleZipSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      projectType: "deck-build",
      source: "decking",
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
              <span aria-hidden="true">★★★★★</span> 4.9 · Trusted Deck Builder in Everett
            </p>
            <h1>Top Deck Builder in Everett, WA</h1>
            <p className="decking-hero__lead">
              From custom wood decks to modern composite designs, Northwood
              Renovation builds strong, beautiful outdoor spaces for Everett
              homes. Expert craftsmanship, clean installations, and trusted
              service across Snohomish County and Greater Seattle.
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
              <li>Everett-area deck contractor</li>
              <li>Wood, composite, and custom deck options</li>
              <li>Built for Northwest weather</li>
              <li>Free estimates</li>
            </ul>
          </div>
          <div className="decking-hero__media">
            <img
              src={heroDeckImage}
              alt="Deck project in Everett, WA by Northwood Renovation"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section className="decking-section">
          <div className="decking-section__head">
            <h2>Deck & Outdoor Services</h2>
            <p>
              Build your dream outdoor space: durable, practical, and designed
              for everyday Northwest living.
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
            <p className="decking-kicker">Deck Builder Gallery</p>
            <h2>Finished Deck Projects Around Everett</h2>
            <p>
              From custom wood decks to composite installations, explore
              completed outdoor projects by Northwood Renovation in Everett and
              nearby areas.
            </p>
          </div>
          <div className="decking-gallery__grid">
            {galleryItems.map((item) => (
              <figure className="decking-gallery__item" key={`${item.type}-${item.location}`}>
                <img
                  src={item.src}
                  alt="Deck project in Everett, WA by Northwood Renovation"
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
            <h2>Complete Deck Building Service for Everett Homeowners</h2>
            <p>
              When you choose Northwood Renovation for your deck project, you get
              more than just installation. From selecting durable materials to
              precise framing and clean finishing, we handle every step of the
              process for Everett-area homeowners.
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
              Watch how we replace old, weathered decks with beautiful,
              long-lasting outdoor spaces designed for relaxing, entertaining,
              and everyday Northwest living.
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
                alt="Before deck project in Everett, WA by Northwood Renovation"
                loading="lazy"
                decoding="async"
              />
              <div className="decking-before-after__after">
                <img
                  src={activeTransformation.after}
                  alt="After deck project in Everett, WA by Northwood Renovation"
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
              See More Deck Projects →
            </Link>
          </div>
        </section>

        <section className="decking-seo-copy">
          <h2>Deck Builder in Everett, WA — Custom Outdoor Living Experts</h2>
          <p>
            Northwood Renovation is a trusted deck builder serving Everett, WA
            and surrounding communities including Marysville, Snohomish, Mill
            Creek, Mukilteo, Lynnwood, Bellevue, Kirkland, Redmond, Bothell,
            Edmonds, and Shoreline. We provide professional deck installation,
            deck replacement, and deck repair for homeowners across Snohomish
            County and the greater Puget Sound area. Our team builds durable outdoor living spaces using
            composite, wood, and cedar materials engineered to withstand Pacific
            Northwest weather. Every deck we build is designed for comfort,
            strength, and long-term performance.
          </p>
          <h3>Custom Deck Installation in Everett, WA</h3>
          <p>
            Our Everett deck installation services combine thoughtful design and
            precise construction. Each deck is custom-built to fit your home's
            layout, yard size, and daily outdoor use. We work closely with
            homeowners to plan decks that match both modern and traditional
            Northwest homes, using materials like composite boards, cedar, and
            pressure-treated framing. Whether you want an attached deck,
            freestanding platform, covered outdoor space, or multi-level design,
            our installation process ensures clean alignment, solid framing, and
            a finished result built to last.
          </p>
          <h3>Composite Decking Installation in Everett, WA</h3>
          <p>
            Composite decking is a top choice for Everett homeowners who want low
            maintenance and lasting durability in a rainy climate. Composite deck
            boards are resistant to rot, mold, moisture, and warping, making them
            ideal for wet Pacific Northwest weather. These decks hold their color
            and texture for years without sanding, sealing, or staining. Northwood
            Renovation installs high-quality composite boards with clean edges,
            hidden fasteners, and solid framing that performs well through
            Western Washington's changing seasons.
          </p>
          <h3>Wood Deck Builder in Everett, WA</h3>
          <p>
            Wood decks bring warmth, natural beauty, and a timeless feel to any
            Everett backyard. Northwood Renovation builds wood decks using cedar
            and pressure-treated lumber designed to handle moisture, daily use,
            and outdoor conditions. Our wood decks are carefully framed, cleanly
            finished, and sealed for long-term protection. Whether you prefer a
            natural cedar look or a more finished painted surface, wood remains
            one of the most customizable and visually warm materials for
            Everett-area homes.
          </p>
          <h3>Deck Replacement and Remodeling in Everett</h3>
          <p>
            If your existing deck is unsafe, outdated, or simply worn out from
            years of Northwest weather, Northwood Renovation provides complete
            deck replacement in Everett. We remove the old structure, inspect the
            foundation and framing, and rebuild with stronger materials and
            updated design. Our remodeling services allow you to upgrade from old
            wood to composite, add new railings, extend the deck footprint, or
            improve stairs and access. A well-executed deck replacement improves
            safety, appearance, and everyday usability.
          </p>
          <h3>Covered Decks and Outdoor Living Add-Ons</h3>
          <p>
            Northwood Renovation can turn a simple deck into a complete covered
            outdoor living area. We plan and build pergolas, covered deck
            structures, railings, stairs, and built-in seating designed for
            Everett-area homeowners who want to use their outdoor space year-round.
            Covered decks add significant usability in a rainy climate, providing
            shade in summer and protection from rain in fall and spring. These
            additions make your outdoor area more comfortable and practical while
            maintaining visual harmony with your home.
          </p>
          <h3>Why Choose Northwood Renovation for Decking in Everett, WA</h3>
          <p>
            Northwood Renovation stands out through craftsmanship, clear
            communication, and a practical understanding of Snohomish County and
            Puget Sound residential projects. We are fully insured and locally
            operated, serving Everett and nearby communities including Marysville,
            Snohomish, Mill Creek, Bellevue, Kirkland, Redmond, Bothell,
            Shoreline, Edmonds, and Renton. Our clients appreciate honest
            estimates, organized job sites, and finished results that hold up
            through Northwest weather. We use quality materials and careful
            framing to ensure structural integrity and clean finishes on every
            deck project.
          </p>
          <h3>Schedule Your Free Deck Estimate in Everett, WA</h3>
          <p>
            Ready to build a new deck for your Everett home? Contact Northwood
            Renovation today for a free estimate. Our team will walk you through
            material options, layout planning, and practical next steps from your
            first call to final walkthrough. Request an online estimate or call us
            directly to start your deck project with a trusted Everett deck
            builder.
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
            <h2>Recent Deck Projects in Everett, WA</h2>
          </div>
          <div className="decking-project-grid">
            {recentDeckProjects.map((project) => (
              <article className="decking-project-card" key={project.slug}>
                <img
                  src={project.image}
                  alt="Deck project in Everett, WA by Northwood Renovation"
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
            <h2>Deck Building Process: What to Expect</h2>
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
            <h2>What Everett-Area Homeowners Say About Northwood Renovation</h2>
            <p>
              Homeowners choose Northwood Renovation for clean work, practical
              advice, and finished outdoor spaces that feel ready to use.
            </p>
          </div>
          <div className="decking-review-grid">
            {[
              "Clear estimates before work begins.",
              "Organized installation and careful finish details.",
              "Decks planned for daily use, weather, pets, stairs, and railings.",
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
            <h2>Frequently Asked Questions About Decking in Everett</h2>
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
          <h2>Ready to Build a Deck in Everett?</h2>
          <p>
            Tell us about your outdoor space and Northwood Renovation will help
            you plan a clean, durable deck built for Everett homes and Northwest
            weather.
          </p>
          <div>
            <Link to="/contact#contact-form">Request a Free Deck Estimate →</Link>
            <a href={`tel:${BUSINESS_PHONE_TEL}`}>
              Call Northwood Renovation
            </a>
          </div>
        </section>

        <footer className="decking-service-area">
          <h2>Proudly Serving Everett &amp; Surrounding Areas</h2>
          <p>{serviceAreas.join(" · ")}</p>
        </footer>
      </main>
    </SiteLayout>
  );
};

export default DeckingPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image="/og-northwood-renovation.jpg"
    imageAlt="Decking in Everett, WA by Northwood Renovation"
    keywords={seoKeywords}
    schema={buildDeckingPageSchema(location.pathname)}
  />
);
