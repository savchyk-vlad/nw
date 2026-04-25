import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/reviews-areas.css";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathBySlug } from "../data/city-service-pages";

type CityCard = {
  city: string;
  description: string;
  slug: string;
  tier: "CORE AREA" | "EXTENDED" | "SELECT JOBS";
};

type AreaSection = {
  id: string;
  title: string;
  intro: string[];
  cards: CityCard[];
};

const cityLink = (slug: string) => cityServicePagePathBySlug[slug] ?? "/cities/";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Northwood Renovation",
  description:
    "Deck and fence builder based in Everett, WA serving Snohomish County, North Seattle, the Eastside, and selected nearby cities north of Everett.",
  telephone: "+14256832024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Everett",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Everett" },
    { "@type": "City", name: "Marysville" },
    { "@type": "City", name: "Snohomish" },
    { "@type": "City", name: "Mill Creek" },
    { "@type": "City", name: "Mukilteo" },
    { "@type": "City", name: "Lake Stevens" },
    { "@type": "City", name: "Monroe" },
    { "@type": "City", name: "Arlington" },
    { "@type": "City", name: "Stanwood" },
    { "@type": "City", name: "Lynnwood" },
    { "@type": "City", name: "Mountlake Terrace" },
    { "@type": "City", name: "Edmonds" },
    { "@type": "City", name: "Bothell" },
    { "@type": "City", name: "Kenmore" },
    { "@type": "City", name: "Woodinville" },
    { "@type": "City", name: "Shoreline" },
    { "@type": "City", name: "Lake Forest Park" },
    { "@type": "City", name: "Seattle" },
    { "@type": "City", name: "Kirkland" },
    { "@type": "City", name: "Redmond" },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Sammamish" },
    { "@type": "City", name: "Issaquah" },
    { "@type": "City", name: "Medina" },
    { "@type": "City", name: "Clyde Hill" },
    { "@type": "City", name: "Mount Vernon" },
    { "@type": "City", name: "Burlington" },
  ],
  url: "https://northwoodrenovation.com/cities/",
};

const serviceAreaSections: AreaSection[] = [
  {
    id: "snohomish-county",
    title: "Snohomish County — Our Home Base",
    intro: [
      "Snohomish County is where Northwood Renovation does the majority of its work. We're familiar with the neighborhoods, the soil conditions, the weather patterns, and the permit requirements across Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, and the surrounding communities.",
      "Projects here get our fastest scheduling and most competitive pricing because we're not adding significant drive time to the job.",
    ],
    cards: [
      {
        city: "Everett, WA — Home Base",
        slug: "everett-wa",
        tier: "CORE AREA",
        description:
          "Everett is where we're based and where we do more deck and fence work than anywhere else. We know the neighborhoods, lot sizes, and permit process here well, and Everett projects get the fastest response times.",
      },
      {
        city: "Marysville, WA",
        slug: "marysville-wa",
        tier: "CORE AREA",
        description:
          "Marysville is one of our busiest service areas outside Everett itself. The mix of newer subdivisions and older neighborhoods near the river creates a wide range of fence and deck work, and we're familiar with the city permit process.",
      },
      {
        city: "Snohomish, WA",
        slug: "snohomish-wa",
        tier: "CORE AREA",
        description:
          "Snohomish properties tend to have more outdoor space, which means longer fence runs, larger decks, and more custom layouts. Older lots near the river often have softer soil and heavier tree coverage that affect planning.",
      },
      {
        city: "Mill Creek, WA",
        slug: "mill-creek-wa",
        tier: "CORE AREA",
        description:
          "Mill Creek is heavily treed, and shaded backyards here stay damp through the wet season. That's relevant for both material selection and maintenance expectations, which is why cedar and composite decisions come up often here.",
      },
      {
        city: "Mukilteo, WA",
        slug: "mukilteo-wa",
        tier: "CORE AREA",
        description:
          "Mukilteo properties near the water deal with more wind and some salt-air influence than inland neighborhoods. That affects hardware choice, exposure planning, and the permit process, which Mukilteo handles separately from Snohomish County.",
      },
      {
        city: "Lake Stevens, WA",
        slug: "lake-stevens-wa",
        tier: "CORE AREA",
        description:
          "Lake Stevens has grown quickly, and the newer neighborhoods have a mix of flat and sloped lots. Cedar privacy fences are common here as homeowners establish boundaries in newer subdivisions.",
      },
      {
        city: "Monroe, WA",
        slug: "monroe-wa",
        tier: "CORE AREA",
        description:
          "Monroe has a more rural character than west Snohomish County. Properties tend to have larger lots, longer fence runs, and more grade change, and the Highway 2 drive from Everett is straightforward.",
      },
      {
        city: "Arlington, WA",
        slug: "arlington-wa",
        tier: "CORE AREA",
        description:
          "Arlington is a regular service area for us, with a mix of established neighborhoods and newer development. Homeowners here typically want durable, practical outdoor structures suited for North Puget Sound weather.",
      },
      {
        city: "Stanwood, WA",
        slug: "stanwood-wa",
        tier: "SELECT JOBS",
        description:
          "Stanwood sits at the northwest edge of Snohomish County and includes properties with more coastal exposure than inland areas. We take on selected projects here and are honest about whether the location works for scheduling.",
      },
      {
        city: "Lynnwood, WA",
        slug: "lynnwood-wa",
        tier: "CORE AREA",
        description:
          "Lynnwood is an easy drive from Everett and has a mix of older single-family homes and newer infill development. Projects here range from fence replacement on established lots to new deck builds on updated homes.",
      },
      {
        city: "Mountlake Terrace, WA",
        slug: "mountlake-terrace-wa",
        tier: "CORE AREA",
        description:
          "Mountlake Terrace has tighter residential lot lines and smaller yards than many north Snohomish County cities. Fence planning here often means more coordination with neighboring fences and property boundaries.",
      },
      {
        city: "Edmonds, WA",
        slug: "edmonds-wa",
        tier: "CORE AREA",
        description:
          "Edmonds includes hillside properties with significant slope as well as flatter lots near the water. Deck and fence design here often has to account for major grade change and Edmonds city permit requirements.",
      },
      {
        city: "Bothell, WA",
        slug: "bothell-wa",
        tier: "CORE AREA",
        description:
          "Bothell straddles the county line and has mature landscaping that often needs to be worked around during installation. Cedar fencing and custom deck builds are common requests here.",
      },
      {
        city: "Kenmore, WA",
        slug: "kenmore-wa",
        tier: "CORE AREA",
        description:
          "Kenmore includes both waterfront and upland properties, and the exposure difference matters. Material and hardware choices for deck and fence work here account for higher humidity and more wind near the lake.",
      },
      {
        city: "Woodinville, WA",
        slug: "woodinville-wa",
        tier: "CORE AREA",
        description:
          "Woodinville has everything from dense residential neighborhoods to larger rural lots. Fence runs can be longer here, and deck projects often involve more complex stair layouts on hillside properties.",
      },
    ],
  },
  {
    id: "north-king-seattle",
    title: "North King County and Seattle",
    intro: [
      "Shoreline, Lake Forest Park, and Seattle are south of Snohomish County and well within our regular service range. We take on deck and fence projects throughout these communities.",
      "Permitting is generally more involved here than in Snohomish County, especially in Seattle, and timelines tend to be longer.",
    ],
    cards: [
      {
        city: "Shoreline, WA",
        slug: "shoreline-wa",
        tier: "CORE AREA",
        description:
          "Shoreline is the closest King County community to our Everett base and one where we work regularly. The shaded, damp backyard conditions here make cedar versus composite an especially common conversation.",
      },
      {
        city: "Lake Forest Park, WA",
        slug: "lake-forest-park-wa",
        tier: "CORE AREA",
        description:
          "Lake Forest Park is heavily wooded, with irregular lots and dense landscaping that often call for custom fence and deck layouts rather than standard runs. We take on projects here for the right scope and size.",
      },
      {
        city: "Seattle, WA",
        slug: "seattle-wa",
        tier: "EXTENDED",
        description:
          "We build decks and fences throughout Seattle, but Seattle DCI permits are more involved and timelines are longer than in suburban Snohomish County. That reality affects scheduling, and we build permit coordination into every Seattle project.",
      },
    ],
  },
  {
    id: "eastside",
    title: "The Eastside — Kirkland, Redmond, Bellevue, and Beyond",
    intro: [
      "We work on the Eastside regularly. Kirkland, Redmond, and Bellevue are within practical daily driving range from Everett, and we've built decks and fences across the Eastside communities over the years.",
      "Eastside properties tend to have tighter setbacks, more complex topography, and more landscaping to work around than much of Snohomish County.",
    ],
    cards: [
      {
        city: "Kirkland, WA",
        slug: "kirkland-wa",
        tier: "EXTENDED",
        description:
          "Kirkland is one of the Eastside cities where we work most often. Properties range from compact lots near downtown to hillside homes where deck layouts require elevated framing and longer stair runs.",
      },
      {
        city: "Redmond, WA",
        slug: "redmond-wa",
        tier: "EXTENDED",
        description:
          "Redmond has a mix of established neighborhoods and newer development. Horizontal cedar fencing is especially popular here, and we know the post sizing and footing details that keep those fences performing correctly.",
      },
      {
        city: "Bellevue, WA",
        slug: "bellevue-wa",
        tier: "EXTENDED",
        description:
          "Bellevue projects tend to be larger in scope and often involve more complex permitting than most Snohomish County work. Cedar privacy fences and composite decks are both common here.",
      },
      {
        city: "Sammamish, WA",
        slug: "sammamish-wa",
        tier: "SELECT JOBS",
        description:
          "We take on selected projects in Sammamish when the scope justifies the travel time. Homes here often involve larger outdoor spaces, sloped lots, and multi-day projects that need more planning upfront.",
      },
      {
        city: "Issaquah, WA",
        slug: "issaquah-wa",
        tier: "SELECT JOBS",
        description:
          "Issaquah properties often involve foothill topography, slope, and drainage considerations that show up quickly in deck framing and fence post planning. We take on the right projects here and are straightforward about fit.",
      },
      {
        city: "Medina, WA",
        slug: "medina-wa",
        tier: "SELECT JOBS",
        description:
          "We take on selected projects in Medina for the right scope. These are generally not quick one-day jobs from Everett, so we're honest about scheduling and whether the project makes practical sense.",
      },
      {
        city: "Clyde Hill, WA",
        slug: "clyde-hill-wa",
        tier: "SELECT JOBS",
        description:
          "Clyde Hill projects are typically larger-scope builds where tighter setbacks, established landscaping, and a longer drive all factor into planning. We'll give you a direct answer about fit and timing.",
      },
    ],
  },
  {
    id: "skagit-valley",
    title: "Skagit Valley — North of Everett on I-5",
    intro: [
      "Mount Vernon and Burlington are north of Everett on I-5. That's counterintuitive for a business most homeowners associate with the Seattle metro area, but it's actually a reasonable drive from Everett with lighter traffic than heading south toward Seattle at peak hours.",
      "We take on selected deck and fence projects in Skagit Valley and are honest about whether the timing and scope work.",
    ],
    cards: [
      {
        city: "Mount Vernon, WA",
        slug: "mount-vernon-wa",
        tier: "EXTENDED",
        description:
          "Mount Vernon is a practical northbound service area from Everett, especially for larger projects. Properties here often have more space and longer fence runs than tighter south-end neighborhoods.",
      },
      {
        city: "Burlington, WA",
        slug: "burlington-wa",
        tier: "EXTENDED",
        description:
          "Burlington sits right in that north I-5 corridor that is often easier to reach than Seattle traffic. We take on selected deck and fence projects here when the scope makes sense.",
      },
    ],
  },
];

const processPoints = [
  {
    title: "Free on-site estimate",
    description:
      "We come to your property, walk the yard, and give you a clear written estimate with materials, scope, and timeline. No phone guesses, no pressure.",
  },
  {
    title: "Written scope",
    description:
      "The estimate covers what's included, what materials will be used, and what the timeline looks like. If something changes during the project, we discuss it before acting on it.",
  },
  {
    title: "Permit coordination",
    description:
      "Where a permit is required, we handle the application as part of the project. You don't manage that separately.",
  },
  {
    title: "Same crew",
    description:
      "The people who give you the estimate are the people who build the project. We don't hand off to a subcontractor after the sale.",
  },
  {
    title: "Final walkthrough",
    description:
      "We walk the finished project with you before we leave. If something needs adjustment, we handle it on the spot.",
  },
];

const buildPoints = [
  "Moisture-resistant cedar and capped composite materials",
  "Pressure-treated structural framing and concrete-set posts",
  "Corrosion-resistant fasteners and hardware throughout",
  "Proper drainage, ventilation, and board clearance from soil",
  "Permit-ready installations with documented scope",
];

const CitiesPage = () => (
  <SiteLayout>
    <main className="areas-page areas-page--service-map">
      <section
        className="areas-hero areas-hero--service-map"
        aria-labelledby="cities-hero-title"
        style={{ overflow: "hidden", position: "relative" }}>
        <StaticImage
          src="../images/cities-hero-suburban-pnw.png"
          alt=""
          aria-hidden="true"
          className="areas-hero__bg"
          imgClassName="areas-hero__bg-image"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
          quality={82}
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
            objectPosition: "30% 42%",
          }}
        />
        <div className="areas-hero__overlay" aria-hidden="true" />
        <div className="areas-hero__content">
          <p className="areas-hero__eyebrow">Service Area</p>
          <h1 id="cities-hero-title">
            Deck and Fence Builder Serving Everett, Snohomish County, and Greater Seattle
          </h1>
          <p>
            Northwood Renovation is based in Everett, WA. We build decks, cedar fences, composite
            decking, and outdoor structures for homeowners across Snohomish County, North Seattle,
            the Eastside, and selected nearby cities north of Everett.
          </p>
          <p className="areas-hero__subcopy">
            Browse the cities below to see where we work and what each area of our service map looks
            like. This index focuses on the cities closest to Everett and the locations that make the
            most practical sense for day-to-day scheduling. We&apos;re honest about that distinction
            rather than claiming to serve everywhere equally.
          </p>
          <p className="areas-hero__contact">
            If your city isn&apos;t listed or you&apos;re not sure whether your location is in our
            service area, call <strong>(425) 683-2024</strong> or send us a message. We&apos;ll give
            you a straight answer.
          </p>
          <div className="areas-hero__actions">
            <Link to="/contact#contact-form" className="areas-hero__button areas-hero__button--primary">
              Request a Free Estimate
            </Link>
            <a href="#snohomish-county" className="areas-hero__button areas-hero__button--secondary">
              Browse by region
            </a>
          </div>
        </div>
      </section>

      <section className="areas-service-map-intro">
        <p className="areas-service-map-intro__eyebrow">How Our Service Area Works</p>
        <h2>How We Think About Our Service Area</h2>
        <p>
          We&apos;re based in Everett. That means the communities closest to us - Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, and Edmonds - are where we work most consistently, respond fastest, and have the most experience with local permit requirements and soil conditions.
        </p>
        <p>
          As you move farther from Everett, two things change: drive time affects scheduling, and there&apos;s more variation in permit processes across different jurisdictions. We still take on projects in Kirkland, Redmond, Bellevue, and the closer Eastside communities regularly - they&apos;re well within practical driving distance.
        </p>
        <p>
          The Skagit Valley communities - Mount Vernon and Burlington - are north of us on I-5, which sounds counterintuitive for an Everett-based operation, but that corridor is actually a reasonable drive with lighter traffic than heading south toward Seattle at peak hours.
        </p>
        <p>
          We group the cities below by geographic area so you can see at a glance where we are relative to your location.
        </p>
      </section>

      <section className="areas-groups" aria-label="Service areas by region">
        {serviceAreaSections.map((section) => (
          <section key={section.id} className="areas-group areas-group--editorial">
            <div className="areas-group__head areas-group__head--editorial">
              <p>{section.title.split(" — ")[0]}</p>
              <h2>{section.title}</h2>
              {section.intro.map((paragraph) => (
                <span key={paragraph}>{paragraph}</span>
              ))}
            </div>

            <div className="areas-grid areas-grid--editorial">
              {section.cards.map((card) => (
                <article key={card.slug} className="areas-card areas-card--editorial">
                  <div className="areas-card__body areas-card__body--editorial">
                    <div className="areas-card__tags">
                      <span>{card.tier}</span>
                    </div>
                    <h3>{card.city}</h3>
                    <p>{card.description}</p>
                    <Link to={cityLink(card.slug)} className="areas-card__cta">
                      Explore {card.city.replace(", WA", "").replace(" — Home Base", "")} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="areas-process">
        <p className="areas-process__eyebrow">Across the Service Area</p>
        <h2>What Stays the Same Regardless of Where You Are</h2>
        <div className="areas-process__grid">
          {processPoints.map((point) => (
            <article key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="areas-final-cta">
        <h2>Ready to Start a Project in Your Area?</h2>
        <p>
          Tell us your city, describe the project, and we&apos;ll let you know if we&apos;re the right fit and get a free estimate scheduled.
        </p>
        <p>
          Call <strong>(425) 683-2024</strong> or fill out the estimate request form. We&apos;ll get back to you within one business day.
        </p>
        <div className="areas-final-cta__actions">
          <Link to="/contact#contact-form" className="areas-final-cta__primary">
            Request a Free Estimate
          </Link>
          <Link to="/projects" className="areas-final-cta__secondary">
            View Recent Work
          </Link>
        </div>
      </section>

      <section className="areas-trust areas-trust--service-map">
        <div>
          <p className="areas-trust__eyebrow">Built for Puget Sound Homes</p>
          <h2>Built for Pacific Northwest Conditions</h2>
          <p>
            Outdoor structures in western Washington deal with consistent rain, high soil moisture, and limited drying time between wet seasons. A fence or deck that works well in a drier climate needs different material choices, post depths, drainage planning, and maintenance expectations here.
          </p>
          <p>
            Northwood Renovation builds with those conditions in mind across our full service area - not just in Everett, but in every community where we work. The material recommendations we make in a Marysville estimate are the same ones we&apos;d make in a Kirkland estimate, because Pacific Northwest weather doesn&apos;t change based on city limits.
          </p>
        </div>
        <ul className="areas-trust__list">
          {buildPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </main>
  </SiteLayout>
);

export default CitiesPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Deck and Fence Builder Serving Everett, Snohomish County, and Greater Seattle | Northwood Renovation"
    description="Northwood Renovation is based in Everett, WA and builds decks and fences across Snohomish County, North Seattle, the Eastside, and South King County. Browse the cities we serve and what to expect in each area."
    pathname={location.pathname}
    schema={schema}
  />
);
