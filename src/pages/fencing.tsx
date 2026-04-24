import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/decking.css";
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
import fenceBackyard from "../images/gallery/fence-backyard.jpg";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";
import horizontalWoodFence from "../images/gallery/horizontal-wood-fence.jpg";
import morningGardenFence from "../images/gallery/morning-garden-fence.jpeg";
import sunnyWoodFence from "../images/gallery/sunny-wood-fence.jpg";
import sunsetWoodFence from "../images/gallery/sunset-wood-fence.jpg";
import chainLinkFence from "../images/services-chain-link-fence.jpg";

const seoTitle =
  "Fence Builder in Everett, WA — Cedar Wood & Chain Link Installation | Northwood Renovation";
const seoDescription =
  "Northwood Renovation installs cedar wood fences, chain link fences, privacy fences, and gates in Everett, WA and Snohomish County. Free on-site estimates. Licensed and insured. Call (425) 683-2024.";

const seoKeywords = [
  "fencing in Everett WA",
  "Everett fence builder",
  "fence builder Everett WA",
  "fence installation Everett",
  "fence replacement Everett",
  "cedar wood fence Everett",
  "chain link fence Everett",
  "privacy fence Everett",
  "fence gates Everett",
  "Northwood Renovation fencing",
];

const services = [
  {
    tag: "Cedar Wood Fence Installation",
    title: "Cedar Wood Fence Installation",
    text: "Cedar privacy fence installation in Everett, WA and Snohomish County. Natural warmth, moisture resistance, and clean lines — cedar is the most popular choice for Pacific Northwest residential yards.",
    to: "/cedar-wood-fence/",
  },
  {
    tag: "Chain Link Fence Installation",
    title: "Chain Link Fence Installation",
    text: "Chain link fence installation in Everett, WA. Durable, low-maintenance fencing for property boundaries, pet enclosures, side yards, and residential security — galvanized for Pacific Northwest weather.",
    to: "/chain-link-fence/",
  },
  {
    tag: "Privacy Fence Installation",
    title: "Privacy Fence Installation",
    text: "Full-height privacy fence installation in Everett, WA. Cedar board-on-board and solid panel privacy fencing — designed to create a fully enclosed backyard for Snohomish County homes.",
    to: "/cedar-wood-fence/",
  },
  {
    tag: "Fence Gate Installation",
    title: "Fence Gate Installation",
    text: "Wood and chain link gate installation in Everett, WA. Walk gates, drive gates, and access gates with durable hardware, correct alignment, and smooth operation for daily residential use.",
    to: "/contact/#contact-form",
  },
];

const galleryItems = [
  { src: fenceBackyard, type: "Cedar Privacy Fence Installation", location: "Bellevue, WA" },
  { src: horizontalWoodFence, type: "Horizontal Cedar Board Fence", location: "Redmond, WA" },
  { src: sunsetWoodFence, type: "Cedar Privacy Fence Line", location: "Woodinville, WA" },
  { src: chainLinkFence, type: "Galvanized Chain Link Fence", location: "Everett Area" },
  { src: morningGardenFence, type: "Cedar Fence Replacement", location: "Kent, WA" },
  { src: gardenFenceTrees, type: "Cedar Garden Privacy Fence", location: "Snohomish County" },
];

const featureCards = [
  {
    title: "Fence Planning & Property Layout",
    text: "We walk your Everett-area property line, measure the full fence run, mark post locations, and plan a layout around your yard, access points, neighboring fences, and drainage.",
    points: [
      "Free on-site measuring and fence layout planning",
      "Cedar wood, chain link, and privacy fence options",
      "Gate width, swing direction, and hardware planning",
      "Designed for Snohomish County lot sizes and soil conditions",
    ],
  },
  {
    title: "Fence Materials & Professional Installation",
    text: "Every fence Northwood Renovation installs in Everett uses concrete-set posts, correct board spacing, and quality materials chosen for Pacific Northwest moisture and daily outdoor conditions.",
    points: [
      "Concrete-set posts with proper depth and spacing",
      "Western red cedar boards or galvanized chain link mesh",
      "Straight fence lines, level top rails, and clean cuts",
      "Stainless and galvanized gate hardware built for rain",
    ],
  },
  {
    title: "Built for Pacific Northwest Weather and Soil",
    text: "Every fence we install in Everett and Snohomish County is built for wet seasons, soft soil, heavy rain, and the freeze-thaw conditions of Pacific Northwest winters.",
    points: [
      "Naturally rot-resistant Western red cedar",
      "Hot-dip galvanized chain link for long-term rust resistance",
      "Proper post depth and drainage to prevent lean and rot",
      "Increased property value, privacy, and backyard security",
    ],
  },
];

const transformations = [
  {
    before: morningGardenFence,
    after: fenceBackyard,
    title: "Privacy Fence Replacement",
    location: "Snohomish County",
  },
];

const whyChoosePoints = [
  "Licensed and insured fence builder based in Everett, WA",
  "Serving Snohomish County, North Seattle, and the Eastside since day one",
  "Free on-site property walkthroughs with clear written scope",
  "Western red cedar, galvanized chain link, and privacy fence specialists",
  "Permit coordination, straight fence lines, and no surprise costs",
];

const processSteps = [
  {
    title: "Consultation & Planning",
    text: "We schedule a free on-site visit to your Everett-area property. We walk the full fence line, measure the run, identify slope or terrain issues, and discuss cedar vs. chain link options, fence height, post spacing, and gate placement.",
  },
  {
    title: "Material Selection & Scope",
    text: "We help you compare Western red cedar boards, galvanized chain link mesh, post sizes, and gate hardware options based on your budget, privacy needs, and Pacific Northwest weather requirements. We confirm full scope, permit requirements if applicable, and installation timeline in writing.",
  },
  {
    title: "Post Setting & Footings",
    text: "Our Everett crew sets posts at correct spacing with concrete footings poured to the depth required by Snohomish County soil conditions — typically 24–36 inches — ensuring alignment and long-term stability across the full fence run.",
  },
  {
    title: "Fence Installation & Gate Fitting",
    text: "We install cedar boards, chain link mesh, or privacy panels with straight alignment, level top rails, and consistent spacing. Gates are fitted with correctly sized hinges, latches, and hardware for smooth, secure daily use in outdoor Pacific Northwest conditions.",
  },
  {
    title: "Final Walkthrough & Cleanup",
    text: "After installation we walk the full fence line with you — checking post stability, board alignment, gate swing, latch function, and top-line straightness — clean the job site completely, and confirm the fence is solid and ready before we leave.",
  },
];

const faqs = [
  {
    question: "What fence material works best in Everett weather?",
    answer:
      "Western red cedar is the best natural choice for Pacific Northwest weather — it resists moisture, rot, and insects without chemical treatment. Galvanized chain link is the most weather-resistant low-maintenance option. Composite fence boards are also available for homeowners who want wood appearance with less upkeep. We help you compare options during your free on-site estimate.",
  },
  {
    question: "Do you install cedar wood fences?",
    answer:
      "Yes. Cedar wood fence installation is our most requested fence service in Everett and Snohomish County. We install board-on-board cedar fences, dog-ear cedar fences, horizontal cedar fences, and cedar privacy fences in heights from 4 to 8 feet.",
  },
  {
    question: "Do you install chain link fences?",
    answer:
      "Yes. We install residential galvanized chain link fences in Everett, WA and surrounding Snohomish County areas. Chain link is available in multiple heights and mesh gauges for yards, pet enclosures, side yards, and property boundaries.",
  },
  {
    question: "Can you install a gate with a new fence?",
    answer:
      "Yes. Every fence project includes gate planning — walk gates, drive gates, and access gates sized and positioned for how the space is used. We also install standalone gate replacements on existing fences.",
  },
  {
    question: "Can you replace an old or damaged fence?",
    answer:
      "Yes. Northwood Renovation provides full fence removal and replacement in Everett and Snohomish County. We demo the old fence, inspect post locations, and rebuild with updated materials, improved post depth, and better alignment.",
  },
  {
    question: "How long does a fence installation usually take?",
    answer:
      "Most residential fence projects in Everett take 1–3 days depending on length, terrain, and gate count. Larger fence runs or complex layouts may take 3–5 days. We confirm a clear timeline during the estimate.",
  },
  {
    question: "Do you offer free estimates for fence projects in Seattle?",
    answer:
      "Yes. We offer free on-site fence estimates for all projects in Everett, Snohomish County, and Greater Seattle. We walk the property, measure the fence run, and provide a written estimate with no obligation.",
  },
  {
    question: "What areas near Everett do you serve?",
    answer:
      "We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Shoreline, Kirkland, Redmond, Bellevue, Renton, and surrounding Snohomish County communities.",
  },
];

const recentFenceProjects = recentWorkProjects
  .filter((project) => project.category === "Fences" || project.service.includes("Fence"))
  .slice(0, 4);

const serviceAreas = [
  "Everett",
  "Marysville",
  "Snohomish",
  "Mill Creek",
  "Mukilteo",
  "Lynnwood",
  "Edmonds",
  "Bothell",
  "Shoreline",
  "Seattle",
  "Kirkland",
  "Redmond",
  "Bellevue",
  "Renton",
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
  { label: "Seattle", city: "Seattle, WA" },
  { label: "Kirkland", city: "Kirkland, WA" },
  { label: "Redmond", city: "Redmond, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
  { label: "Renton", city: "Renton, WA" },
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
      name: "Fencing in Everett, WA",
      alternateName: [
        "Everett fence builder",
        "Cedar wood fence installation in Everett",
        "Chain link fence installation in Everett",
      ],
      description: seoDescription,
      url: canonicalUrl,
      serviceType:
        "Fence installation, fence replacement, cedar wood fencing, chain link fencing, privacy fences, gates, and hardware",
      category: "Fence builder",
      provider: localBusiness,
      areaServed,
      audience: {
        "@type": "Audience",
        audienceType: "Everett-area homeowners",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fence Installation Services in Everett, WA",
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
          "Free estimate for cedar wood, chain link, privacy fence, and gate installation projects in Everett, WA.",
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
          name: "Fencing in Everett, WA",
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
      <main className="decking-page fencing-page">
        <section className="decking-hero">
          <div className="decking-hero__copy">
            <p className="decking-hero__rating">
              <span aria-hidden="true">★★★★★</span> 4.9 Google Rating · Fence Builder in Everett, WA
            </p>
            <h1>Fence Builder in Everett, WA — Cedar Wood and Chain Link Installation</h1>
            <p className="decking-hero__lead">
              Northwood Renovation is an Everett-based fence builder building
              cedar privacy fences, chain link fences, privacy fences, and
              gates for homeowners across Snohomish County and Greater Seattle.
              Free on-site estimates. Straight fence lines built to handle
              Pacific Northwest weather.
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
              <li>Fence builder based in Everett, WA</li>
              <li>Cedar wood, chain link, and privacy fence installation</li>
              <li>Built for Pacific Northwest rain and moisture</li>
              <li>Free on-site estimate — fast response</li>
            </ul>
          </div>
          <div className="decking-hero__media">
            <img
              src={fenceBackyard}
              alt="Fence project in Everett, WA by Northwood Renovation"
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section className="decking-section">
          <div className="decking-section__head">
            <h2>Fence Installation Services in Everett, WA</h2>
            <p>
              Cedar wood fences, chain link fences, privacy fencing, and gate
              installation — designed for Everett and Snohomish County
              residential properties.
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
            <h2>Recent Fence Projects in Everett, WA and Snohomish County</h2>
            <p>
              Browse cedar privacy fences, chain link installations, horizontal
              wood fences, and gate builds completed by Northwood Renovation
              across Everett, Snohomish County, Kirkland, Redmond, and Greater
              Seattle.
            </p>
          </div>
          <div className="decking-gallery__grid">
            {galleryItems.map((item) => (
              <figure className="decking-gallery__item" key={`${item.type}-${item.location}`}>
                <img
                  src={item.src}
                  alt="Fence project in Everett, WA by Northwood Renovation"
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
            <h2>Full-Service Fence Installation for Everett and Snohomish County Homeowners</h2>
            <p>
              When you choose Northwood Renovation for your fence project, you
              get more than just installation. From selecting the right
              materials to precise post placement and clean finishing, we handle
              every step of the process for Everett and Snohomish County
              homeowners.
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
              installations designed for privacy, security, and everyday
              Northwest
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
                alt="Before fence project in Everett, WA by Northwood Renovation"
                loading="lazy"
                decoding="async"
              />
              <div className="decking-before-after__after">
                <img
                  src={activeTransformation.after}
                  alt="After fence project in Everett, WA by Northwood Renovation"
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
          <h2>Fence Builder in Everett, WA — Cedar Wood & Chain Link Specialists</h2>
          <p>
            Northwood Renovation is an Everett-based fence builder serving
            homeowners across Snohomish County and Greater Seattle. We install
            cedar privacy fences, chain link fences, board-on-board privacy
            fencing, horizontal wood fences, and gates for residential
            properties in Everett, Marysville, Snohomish, Mill Creek,
            Mukilteo, Lynnwood, Edmonds, Bothell, Shoreline, Kirkland,
            Redmond, Bellevue, and Renton.
          </p>
          <p>
            Every fence project starts with a free on-site property walkthrough,
            uses materials suited for Pacific Northwest rain and soil
            conditions, and ends with a final fence line walkthrough before we
            leave the job site.
          </p>
          <h3>Cedar Wood Fence Installation in Everett, WA</h3>
          <p>
            Cedar wood fencing is the most popular choice for Everett and
            Snohomish County homeowners who want natural warmth, backyard
            privacy, and a residential look that fits Pacific Northwest homes.
            Western red cedar is naturally resistant to moisture, rot, and
            insects — making it one of the best-performing fence materials in a
            wet climate without chemical treatment.
          </p>
          <p>
            Northwood Renovation installs cedar fences in Everett with careful
            post placement, straight board alignment, and clean top-line
            finishing. We build cedar privacy fences, board-on-board fences,
            horizontal cedar fences, and dog-ear cedar fences depending on the
            homeowner's style preference, privacy goals, and yard layout.
          </p>
          <p>
            Cedar fence height, board direction, spacing, gate placement, and
            top style are all planned around how the property is used. A 6-foot
            board-on-board cedar fence gives full privacy for a backyard patio.
            A 4-foot dog-ear fence defines a front yard without closing the
            home off from the street. We help Everett homeowners choose the
            right cedar fence style for their property before any work begins.
          </p>
          <p>
            Proper cedar fence installation also means attention to post depth,
            concrete footing mix, board fastening, and ground clearance. Cedar
            boards that sit too close to the soil retain moisture and fail
            early — correct installation extends the life of the fence
            significantly in a Pacific Northwest climate.
          </p>
          <h3>Chain Link Fence Installation in Everett, WA</h3>
          <p>
            Chain link fencing is a practical, low-maintenance option for
            Everett and Snohomish County homeowners who need a clear property
            boundary, secure pet enclosure, or utility area perimeter.
            Galvanized chain link holds up through years of Pacific Northwest
            rain and moisture without rotting, warping, or requiring regular
            sealing.
          </p>
          <p>
            Northwood Renovation installs residential chain link fences in
            Everett with proper post setting, correct rail alignment, and tight
            fabric tension so the system stays straight and functional
            long-term. We size chain link mesh, post gauge, and rail diameter
            based on the fence height and intended use — a pet run has
            different requirements than a property boundary.
          </p>
          <p>
            Chain link is a strong choice for side yards, utility areas, rental
            properties, garden enclosures, and anywhere homeowners want a
            secure perimeter without the visual weight of a solid privacy
            fence. We install chain link gates as part of every fence project —
            sized for walk access, equipment clearance, or vehicle entry
            depending on the space.
          </p>
          <p>
            For Everett properties with uneven terrain, slopes, or soft soil
            near the waterfront or creeks, chain link can be tensioned and
            racked to follow the grade while keeping the top rail level. We
            review the fence run, post spacing, and terrain before installation
            to plan a layout that fits the land.
          </p>
          <h3>Fence Replacement in Everett, WA</h3>
          <p>
            If your existing fence is leaning, rotting at the posts, missing
            boards, or simply worn out from years of Pacific Northwest weather,
            Northwood Renovation provides complete fence removal and
            replacement in Everett and Snohomish County.
          </p>
          <p>
            Most fence failures in the Everett area start at the post bases —
            where wood meets soil, moisture collects, and rot begins. Other
            common failure signs include leaning panels, dragging gates,
            cracked posts, boards separating from rails, or sections that move
            in wind. During a replacement project, we look at what caused the
            old fence to fail and plan the new installation with stronger post
            depth, better concrete footings, and improved material selection.
          </p>
          <p>
            Fence replacement in Everett and Snohomish County typically
            requires a building permit when changing fence height or structure.
            Northwood Renovation handles permit applications and coordinates
            with the City of Everett and Snohomish County permitting offices as
            part of the project.
          </p>
          <p>
            Fence replacement is also a good time to improve the yard. Common
            upgrades include adding a wider access gate, switching from wood to
            composite or cedar, improving privacy near a patio, adding a dog
            run section, or adjusting the fence height. We plan the replacement
            around your current goals, not just what was there before.
          </p>
          <h3>Fence Gate Installation in Everett, WA</h3>
          <p>
            A properly installed fence gate makes daily yard access easier,
            keeps pets and children secure, and holds up through years of
            Pacific Northwest weather without sagging, binding, or failing to
            latch.
          </p>
          <p>
            Northwood Renovation installs wood fence gates and chain link gates
            in Everett and Snohomish County as part of new fence builds or as
            standalone gate replacements on existing fences. Gate types include
            single walk gates, double drive gates, wide equipment gates, and
            side-yard access gates — sized and positioned based on how the
            space is used.
          </p>
          <p>
            Gate alignment, post strength, hinge weight rating, and latch
            position are all planned before installation. A gate mounted on a
            weak post or with undersized hinges will sag and misalign quickly,
            especially in soft Everett-area soil. We build gate posts with
            extra depth and reinforced concrete footings to handle the load of
            daily opening and closing.
          </p>
          <p>
            Common gate upgrades Northwood Renovation installs include
            self-closing hinges, cane bolt latches for double gates,
            padlock-compatible hardware, and heavy-duty lever latches for pet
            security. All hardware is chosen for corrosion resistance in
            Pacific Northwest outdoor conditions.
          </p>
          <h3>Why Everett Homeowners Choose Northwood Renovation for Fence Installation</h3>
          <p>
            Northwood Renovation is a licensed, insured, and locally operated
            fence builder based in Everett, WA — not a franchise, not a
            general builder who hands fence work off to subcontractors. Our crew
            specializes in fences, decks, and outdoor structures for
            Snohomish County and Greater Seattle residential properties.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Shoreline, Kirkland, Redmond,
            Bellevue, and Renton. Every fence project includes a free on-site
            property walkthrough, clear written estimate, permit coordination
            where required, and a final fence line inspection before the crew
            leaves.
          </p>
          <p>
            Homeowners across Snohomish County choose Northwood Renovation for
            straight fence lines, honest pricing, organized job sites, and
            cedar and chain link work built to last through Pacific Northwest
            seasons. Because we also build decks and outdoor structures, we
            understand how a fence fits into the full yard — privacy, pet
            safety, curb appeal, landscaping, and outdoor living all
            considered together.
          </p>
          <h3>Schedule Your Free Fence Estimate in Everett, WA</h3>
          <p>
            Ready to install a new fence at your Everett home? Contact Northwood
            Renovation today for a free estimate. Our team will visit your
            property, review layout options, and provide a clear scope before any
            work begins. Request an online estimate or call us directly to start
            your fence project with a trusted Everett fence builder.
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
            <h2>Recent Fence Projects in Everett, WA</h2>
          </div>
          <div className="decking-project-grid">
            {recentFenceProjects.map((project) => (
              <article className="decking-project-card" key={project.slug}>
                <img
                  src={project.image}
                  alt="Fence project in Everett, WA by Northwood Renovation"
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
            <h2>Our Fence Installation Process in Everett, WA — 5 Steps</h2>
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
            <h2>Fence Builder Reviews from Everett and Snohomish County Homeowners</h2>
            <p>
              Real reviews from Snohomish County homeowners — cedar fences,
              chain link installations, and privacy fence projects.
            </p>
          </div>
          <div className="decking-review-grid">
            {[
              {
                quote:
                  '"Clear written estimate before work began — no surprise costs. Cedar privacy fence in Everett looks clean and held up through winter."',
                source: "Everett, WA homeowner",
              },
              {
                quote:
                  '"Straight fence lines, organized crew, and clean job site. Exactly what we wanted and done on schedule."',
                source: "Marysville, WA homeowner",
              },
              {
                quote:
                  '"They planned around our dog, our gate placement, and our sloped yard — great result and the fence feels solid."',
                source: "Snohomish County homeowner",
              },
            ].map((review) => (
              <article className="decking-review-card" key={review.quote}>
                <span aria-hidden="true">★★★★★</span>
                <p>{review.quote}</p>
                <strong>{review.source}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="decking-faq">
          <div className="decking-section__head">
            <h2>Frequently Asked Questions About Fencing in Everett</h2>
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
          <h2>Get a Free Fence Estimate in Everett, WA — Cedar, Chain Link, or Privacy</h2>
          <p>
            Tell us about your yard, your fence goals, and your budget.
            Northwood Renovation will visit your Everett-area property, walk
            the fence line, and give you a clear written estimate for your
            cedar fence, chain link fence, or privacy fence project — with no
            obligation.
          </p>
          <p>
            Call {BUSINESS_PHONE_DISPLAY} or request an estimate online. We
            serve Everett, Marysville, Mill Creek, Mukilteo, Lynnwood,
            Snohomish, Bothell, Shoreline, Kirkland, and surrounding
            Snohomish County communities.
          </p>
          <div>
            <Link to="/contact#contact-form">Request a Free Fence Estimate →</Link>
            <a href={`tel:${BUSINESS_PHONE_TEL}`}>
              Call Northwood Renovation
            </a>
          </div>
        </section>

        <footer className="decking-service-area">
          <h2>Fence Installation in Everett, WA and Nearby Cities:</h2>
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

export default FencingPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image="/og-northwood-renovation.jpg"
    imageAlt="Fencing in Everett, WA by Northwood Renovation"
    keywords={seoKeywords}
    schema={buildFencingPageSchema(location.pathname)}
  />
);
