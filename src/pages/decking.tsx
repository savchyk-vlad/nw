import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/decking.css";
import SeoHead, {
  buildCanonicalUrl,
  buildLocalBusinessReference,
} from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
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
  "Deck Builder in Everett, WA — Custom Wood & Composite Decks | Northwood Renovation";
const seoDescription =
  "Northwood Renovation builds custom wood decks, composite decks, covered decks, and deck railings in Everett, WA and Snohomish County. Free on-site estimates. Licensed and insured. Call (425) 683-2024.";

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
    tag: "Custom Deck Design & Build",
    title: "Custom Deck Design & Build",
    text: "Custom deck design and installation in Everett, WA. We plan the layout, select materials, and build a deck matched to your yard, home style, and how you use the space — wood, cedar, or composite.",
    to: "/custom-deck/",
  },
  {
    tag: "Composite Deck Installation",
    title: "Composite Deck Installation",
    text: "Composite deck installation in Everett, WA. Low-maintenance decking that resists rot, moisture, and fading — ideal for Pacific Northwest weather without the upkeep of wood.",
    to: "/composite-deck/",
  },
  {
    tag: "Wood Deck Builder",
    title: "Wood Deck Builder",
    text: "Cedar and pressure-treated wood deck installation in Everett, WA. Natural warmth, strong framing, and a timeless look built for Northwest backyards.",
    to: "/wood-deck/",
  },
  {
    tag: "Covered Deck & Pergola Builder",
    title: "Covered Deck & Pergola Builder",
    text: "Covered deck and pergola installation in Everett, WA. Year-round outdoor living with rain protection, railings, and built-in shade structures designed for Pacific Northwest homes.",
    to: "/covered-deck/",
  },
];

const galleryItems = [
  {
    src: heroDeckImage,
    type: "Composite Deck Installation",
    location: "Everett, WA",
  },
  {
    src: galleryDeckImage,
    type: "Custom Cedar Deck",
    location: "Snohomish County",
  },
  {
    src: galleryDeckAfterImage,
    type: "Backyard Wood Deck",
    location: "Everett, WA",
  },
  {
    src: largeDeckAfterImage,
    type: "Pressure-Treated Wood Deck",
    location: "Greater Seattle",
  },
  {
    src: recentWorkProjects[0].image,
    type: "Custom Deck Build",
    location: recentWorkProjects[0].location,
  },
  {
    src: recentWorkProjects[2].image,
    type: "Covered Deck & Pergola",
    location: recentWorkProjects[2].location,
  },
];

const featureCards = [
  {
    title: "Deck Design & Site Planning",
    text: "We visit your Everett-area property, measure the yard, and plan a deck layout around your home's footprint, outdoor use, and budget.",
    points: [
      "Free on-site measuring and planning",
      "Composite, cedar, and pressure-treated wood options",
      "Railings, stairs, pergolas, and covered deck options",
      "Designed for Snohomish County weather and lot sizes",
    ],
  },
  {
    title: "Deck Materials & Professional Installation",
    text: "Every Northwood Renovation deck is built with proper footings, solid framing, and quality materials chosen for Pacific Northwest moisture and daily use.",
    points: [
      "Concrete footings and treated lumber framing",
      "Composite decking, cedar, and pressure-treated boards",
      "Hidden fasteners and clean-edge finishing",
      "Structural railings and code-compliant stairs",
    ],
  },
  {
    title: "Built for Pacific Northwest Weather",
    text: "Every deck we build in Everett and Snohomish County is designed for wet seasons, freeze-thaw cycles, and daily Pacific Northwest use.",
    points: [
      "Moisture-resistant composite and cedar materials",
      "Proper deck drainage, ventilation, and board spacing",
      "Code-compliant railings and stair construction",
      "Increased home value and year-round outdoor living space",
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
  "Licensed, insured, and locally operated deck builder based in Everett, WA",
  "Not a franchise or a general contractor who subcontracts deck work",
  "Free on-site estimate, clear written scope, and permit coordination where required",
  "Serving Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Shoreline, Kirkland, Redmond, Bellevue, and Renton",
  "Honest pricing, clean work, and decks built to last through Pacific Northwest seasons",
];

const processSteps = [
  {
    title: "Consultation & Design",
    text: "We schedule a free on-site visit to your Everett-area property. We measure the yard, review your home's footprint, and discuss material options — composite, cedar, or pressure-treated — along with layout, stairs, railings, and any covered structure additions.",
  },
  {
    title: "Material Selection & Planning",
    text: "We help you compare composite boards, cedar, and pressure-treated lumber based on your budget, maintenance preferences, and Pacific Northwest weather needs. We confirm the full project scope, permit requirements, timeline, and installation date in writing.",
  },
  {
    title: "Framing & Structural Setup",
    text: "Our Everett crew installs concrete footings and builds a treated lumber frame with correct alignment, proper spacing, and load-bearing strength required by Snohomish County building code.",
  },
  {
    title: "Deck Installation & Finishing",
    text: "We install your composite, cedar, or wood boards with clean edge cuts, hidden fasteners, and precise railing and stair finishing. Every detail is handled before the crew moves on to the next section.",
  },
  {
    title: "Final Inspection & Cleanup",
    text: "After installation we do a full walkthrough with you — checking boards, railings, stairs, and fasteners — clean the job site completely, and confirm the project is done to your satisfaction before we leave.",
  },
];

const faqs = [
  {
    question: "What deck material works best in Everett weather?",
    answer:
      "Composite decking is the most durable choice for Everett's wet climate — it resists rot, mold, and moisture without annual sealing. Cedar is a strong natural option with good rot resistance. Pressure-treated lumber is the most cost-effective for structural framing. We help you compare options during your free estimate.",
  },
  {
    question: "Do you build both wood and composite decks?",
    answer:
      "Yes. Northwood Renovation builds cedar decks, pressure-treated wood decks, and composite decks in Everett and Snohomish County. We also combine materials — composite boards over pressure-treated framing is one of our most popular builds.",
  },
  {
    question: "Can you build covered decks in Everett?",
    answer:
      "Yes. We build covered decks, pergolas, and shade structures in Everett and surrounding areas. Covered decks typically require a building permit in Everett — we handle the permit application as part of your project.",
  },
  {
    question: "Do you handle deck stairs and railings?",
    answer:
      "Yes. Every deck we build includes properly framed stairs and code-compliant railings. We also build standalone railing upgrades and stair replacements for existing decks.",
  },
  {
    question: "How long does a deck project usually take?",
    answer:
      "Most standard decks in Everett take 3–7 days to install once materials are confirmed and permits are in place. Larger or covered decks may take 1–2 weeks. We give you a clear timeline during the estimate.",
  },
  {
    question: "Do you offer deck replacement for old or unsafe decks?",
    answer:
      "Yes. We provide full deck demolition and replacement in Everett, including inspecting existing footings, removing the old structure, and rebuilding with updated materials and design.",
  },
  {
    question: "Do you offer free estimates for Everett deck projects?",
    answer:
      "Yes. We offer free on-site estimates for all deck projects in Everett and Snohomish County. We visit your property, review the space, and provide a clear written estimate with no obligation.",
  },
  {
    question: "What areas near Everett do you serve?",
    answer:
      "We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland, Redmond, Bellevue, and Renton.",
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

const serviceAreaLinks = [
  { label: "Everett", city: "Everett, WA" },
  { label: "Marysville", city: "Marysville, WA" },
  { label: "Snohomish", city: "Snohomish, WA" },
  { label: "Mukilteo", city: "Mukilteo, WA" },
  { label: "Mill Creek", city: "Mill Creek, WA" },
  { label: "Lynnwood", city: "Lynnwood, WA" },
  { label: "Edmonds", city: "Edmonds, WA" },
  { label: "Bothell", city: "Bothell, WA" },
  { label: "Shoreline", city: "Shoreline, WA" },
  { label: "Kirkland", city: "Kirkland, WA" },
  { label: "Redmond", city: "Redmond, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
  { label: "Renton", city: "Renton, WA" },
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
              <span aria-hidden="true">★★★★★</span> 4.9 Google Rating · Deck Builder in Everett, WA
            </p>
            <h1>Deck Builder in Everett, WA — Custom Wood and Composite Decks</h1>
            <p className="decking-hero__lead">
              Northwood Renovation is an Everett-based deck contractor building custom wood decks, composite decks, covered decks, and deck railings for homeowners across Snohomish County and Greater Seattle. Free on-site estimates. Built to handle Pacific Northwest weather.
            </p>
            <form className="decking-zip-form" onSubmit={handleZipSubmit}>
              <label>
                <span>Get Your Free Estimate</span>
                <input
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="Enter your ZIP code to get started"
                />
              </label>
              <button type="submit">Check My Area →</button>
            </form>
            <ul className="decking-check-list">
              <li>Deck contractor based in Everett, WA</li>
              <li>Custom wood, cedar, and composite deck installation</li>
              <li>Built for Pacific Northwest rain and moisture</li>
              <li>Free on-site estimate — fast response</li>
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
            <h2>Deck Installation Services in Everett, WA</h2>
            <p>
              Custom deck builds, composite decking, wood decks, and covered outdoor structures — designed for Everett and Snohomish County homes.
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
            <h2>Recent Deck Projects in Everett, WA and Snohomish County</h2>
            <p>
              Browse custom wood decks, composite deck installations, covered decks, and deck railings built by Northwood Renovation across Everett, Snohomish County, Kirkland, and Greater Seattle.
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
            <h2>Full-Service Deck Installation for Everett and Snohomish County Homeowners</h2>
            <p>
              When you choose Northwood Renovation for your deck project, you get more than just installation. From selecting durable materials to precise framing and clean finishing, we handle every step of the process for Everett-area homeowners.
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
            Northwood Renovation is an Everett-based deck contractor serving homeowners across Snohomish County and Greater Seattle. We build custom decks, install composite decking, construct wood and cedar decks, replace worn outdoor structures, and add covered decks and railings for residential properties in Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Bothell, Edmonds, Shoreline, Kirkland, Redmond, and Bellevue.
          </p>
          <p>
            Every deck project starts with a free on-site estimate, uses materials suited for Pacific Northwest rain and moisture, and ends with a final walkthrough before we consider the job complete.
          </p>
          <h3>Custom Deck Installation in Everett, WA</h3>
          <p>
            Northwood Renovation builds custom decks in Everett tailored to your yard&apos;s dimensions, your home&apos;s style, and how you plan to use the space. We install attached decks, freestanding platform decks, multi-level decks, and covered outdoor structures using composite boards, cedar planks, and pressure-treated framing.
          </p>
          <p>
            Our custom deck installation process in Everett includes free on-site measurement, material selection, permit coordination, structural framing, board installation with hidden fasteners, and railing and stair finishing. Every build is planned for Pacific Northwest moisture, seasonal rain, and daily residential use.
          </p>
          <h3>Composite Deck Installation in Everett, WA</h3>
          <p>
            Composite decking is the most popular choice for Everett and Snohomish County homeowners who want a low-maintenance outdoor surface that holds up through years of Pacific Northwest rain. Unlike wood, composite deck boards resist rot, mold, moisture, and UV fading without requiring annual sanding, sealing, or staining.
          </p>
          <p>
            Northwood Renovation installs composite decking from leading manufacturers with proper framing, hidden fasteners, clean-edge board finishing, and code-compliant railings and stairs. Whether you&apos;re building a new composite deck or replacing an old wood deck with composite, our Everett crew handles the full installation from permit to final walkthrough.
          </p>
          <h3>Wood Deck Builder in Everett, WA</h3>
          <p>
            Wood decks remain the most customizable and visually warm option for Everett and Snohomish County backyards. Northwood Renovation builds wood decks using cedar and pressure-treated lumber — two of the best-performing materials for Pacific Northwest moisture and seasonal weather changes.
          </p>
          <p>
            Cedar decks offer natural rot resistance, a warm appearance, and excellent workability for custom shapes, railings, and built-in features. Pressure-treated decks provide strong structural performance at a lower material cost, making them a practical choice for larger platforms and framing. Both options are available as stained, sealed, or painted finishes to match your home&apos;s exterior.
          </p>
          <h3>Deck Replacement in Everett, WA</h3>
          <p>
            If your existing deck is rotting, structurally unsafe, or simply worn out from years of Pacific Northwest weather, Northwood Renovation provides complete deck removal and replacement in Everett and Snohomish County.
          </p>
          <p>
            We demo the old structure, inspect footings and framing for damage, and rebuild with updated materials — composite, cedar, or pressure-treated — based on your goals and budget. Common deck replacement upgrades include switching from old wood to composite decking, adding new railings, extending the deck footprint, and replacing unsafe stairs.
          </p>
          <p>
            Deck replacement in Everett typically requires a building permit. Northwood Renovation handles permit applications as part of the project scope.
          </p>
          <h3>Covered Deck and Pergola Installation in Everett, WA</h3>
          <p>
            A covered deck extends your usable outdoor season in the Pacific Northwest — providing rain protection in fall and spring, shade in summer, and a year-round outdoor space you&apos;ll actually use.
          </p>
          <p>
            Northwood Renovation designs and builds covered decks, pergolas, shade structures, and overhead roof additions for Everett and Snohomish County homes. We integrate the structure directly into your deck build or add a covered section to an existing deck. Options include open-beam pergolas, solid roof panels, polycarbonate covers, and lattice shade structures — all designed to complement your home&apos;s exterior and handle Northwest weather.
          </p>
          <h3>Why Everett Homeowners Choose Northwood Renovation for Deck Building</h3>
          <p>
            Northwood Renovation is a licensed, insured, and locally operated deck contractor based in Everett, WA. We are not a franchise or a general contractor who subcontracts deck work — our crew specializes in decks, fences, and outdoor structures, which means better planning, cleaner installation, and more reliable results.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Shoreline, Kirkland, Redmond, Bellevue, and Renton. Every project includes a free on-site estimate, clear written scope, permit coordination where required, and a final walkthrough before we leave the job site. Homeowners across Snohomish County choose us for honest pricing, clean work, and decks built to last through Pacific Northwest seasons.
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
            <h2>Our Deck Installation Process in Everett, WA — 5 Steps</h2>
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
            <h2>Deck Builder Reviews from Everett and Snohomish County Homeowners</h2>
            <p>
              Real reviews from deck projects completed across Everett, Marysville, and Snohomish County.
            </p>
          </div>
          <div className="decking-review-grid">
            {[
              {
                quote:
                  "★★★★★ \"Clear estimate before work began — no surprise costs. Composite deck in Everett looks great and held up through a full winter.\"",
                source: "Everett, WA homeowner",
              },
              {
                quote:
                  "★★★★★ \"Organized crew, clean job site, and careful finish on the railings and stairs. Would hire again for our next project.\"",
                source: "Marysville, WA homeowner",
              },
              {
                quote:
                  "★★★★★ \"They planned the deck layout around our yard perfectly — covered the stairs, added a gate for the dog, and finished on schedule.\"",
                source: "Snohomish County homeowner",
              },
            ].map((review) => (
              <article className="decking-review-card" key={review.source}>
                <span aria-hidden="true">★★★★★</span>
                <p>{review.quote.replace("★★★★★ ", "")}</p>
                <strong>{review.source}</strong>
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
          <h2>Get a Free Deck Estimate in Everett, WA — Wood, Composite, or Custom</h2>
          <p>
            Tell us about your yard, your goals, and your budget. Northwood Renovation will come to your Everett-area property, review the space, and give you a clear written estimate for your wood deck, composite deck, or covered deck project — with no obligation.
          </p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or request an estimate online. We serve Everett, Marysville, Mill Creek, Mukilteo, Lynnwood, Snohomish, Shoreline, Kirkland, and surrounding Snohomish County communities.
          </p>
          <div>
            <Link to="/contact#contact-form">Request a Free Deck Estimate →</Link>
            <a href={`tel:${BUSINESS_PHONE_TEL}`}>
              Call Northwood Renovation
            </a>
          </div>
        </section>

        <footer className="decking-service-area">
          <h2>Deck Installation in Everett, WA and Nearby Cities:</h2>
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
