import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/reviews-areas.css";
import renderHighlightedText from "../components/brand-text";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import {
  cityServicePages,
  cityServicePagePathByCity,
  ServiceAreaSection,
} from "../data/city-service-pages";
import cityImage01 from "../images/cities/Gemini_Generated_Image_3msels3msels3mse.png";
import cityImage02 from "../images/cities/Gemini_Generated_Image_iz2i03iz2i03iz2i.png";
import cityImage03 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Lynnwood-area_residential_home_with_a-0 (1).jpg";
import cityImage04 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Lynnwood-area_residential_home_with_a-0.jpg";
import cityImage05 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (1).jpg";
import cityImage06 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (2).jpg";
import cityImage07 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (3).jpg";
import cityImage08 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (4).jpg";
import cityImage09 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (5).jpg";
import cityImage10 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (6).jpg";
import cityImage11 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0.jpg";
import cityImage12 from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_near_Seattle-area_residential_home_wi-0.jpg";

type ServiceAreaCard = {
  city: string;
  detailsPath: string;
  image: string;
  region: string;
  section: ServiceAreaSection;
  tags: string[];
  serviceLinks: string[];
};

const cityImages = [
  cityImage01,
  cityImage02,
  cityImage03,
  cityImage04,
  cityImage05,
  cityImage06,
  cityImage07,
  cityImage08,
  cityImage09,
  cityImage10,
  cityImage11,
  cityImage12,
];

const sectionOrder: ServiceAreaSection[] = [
  "Snohomish County",
  "North King County & Seattle",
  "Eastside",
  "South King County",
  "Skagit Valley",
];

const sectionDescriptions: Record<ServiceAreaSection, string> = {
  "Snohomish County":
    "Our closest service area to Everett, including Snohomish County cities and nearby north-end communities where we work most often.",
  "North King County & Seattle":
    "Deck and fence work for Shoreline, Lake Forest Park, Seattle, and the surrounding north Seattle service area.",
  "Eastside":
    "Outdoor renovation work throughout the Eastside, including Kirkland, Redmond, Bellevue, Sammamish, Issaquah, and nearby communities.",
  "South King County":
    "Extended service area for larger deck and fence projects across Renton, Kent, Burien, Tukwila, SeaTac, Auburn, and nearby cities.",
  "Skagit Valley":
    "Northbound service area for Mount Vernon, Burlington, Anacortes, Sedro-Woolley, and neighboring Skagit Valley communities.",
};

const serviceLinksBySection = (
  city: string,
  section: ServiceAreaSection,
): string[] => {
  const cityName = city.replace(", WA", "");

  if (section === "Snohomish County") {
    return [
      `Deck Builder ${cityName} WA`,
      `Fence Installation ${cityName} WA`,
      "Cedar Privacy Fences",
      "Composite Deck Upgrades",
      "Railings & Stairs",
    ];
  }

  if (section === "North King County & Seattle") {
    return [
      `Deck Builder ${cityName} WA`,
      `Fence Installation ${cityName} WA`,
      "Privacy Fences & Gates",
      "Deck Repairs & Replacements",
      "Outdoor Upgrade Planning",
    ];
  }

  if (section === "Eastside") {
    return [
      `Deck Builder ${cityName} WA`,
      `Fence Installation ${cityName} WA`,
      "Covered Deck Options",
      "Railings & Stairs",
      "Exterior Carpentry",
    ];
  }

  if (section === "South King County") {
    return [
      `Fence Installation ${cityName} WA`,
      `Deck Builder ${cityName} WA`,
      "Deck Repairs & Rebuilds",
      "Gates & Privacy Fences",
      "Free On-Site Estimates",
    ];
  }

  return [
    `Deck Builder ${cityName} WA`,
    `Fence Installation ${cityName} WA`,
    "Cedar Fence Installation",
    "Custom Deck Construction",
    "Project Planning",
  ];
};

const buildTags = (section: ServiceAreaSection, tier: number) => {
  const tierTag = tier === 1 ? "CORE AREA" : tier === 2 ? "EXTENDED" : "SELECT JOBS";

  if (section === "Snohomish County") return [tierTag, "DECKS", "FENCES"];
  if (section === "North King County & Seattle") return [tierTag, "PRIVACY", "RAILINGS"];
  if (section === "Eastside") return [tierTag, "DECKS", "GATES"];
  if (section === "South King County") return [tierTag, "REPAIRS", "FENCES"];
  return [tierTag, "DECKS", "OUTDOOR"];
};

const serviceAreaCards: ServiceAreaCard[] = cityServicePages.map((page, index) => ({
  city: page.city,
  detailsPath: cityServicePagePathByCity[page.city] ?? "/cities/",
  image: cityImages[index % cityImages.length],
  region: page.regionLabel,
  section: page.section,
  tags: buildTags(page.section, page.tier),
  serviceLinks: serviceLinksBySection(page.city, page.section),
}));

const trustPoints = [
  "Everett-based and locally operated",
  "Built for Northwest weather",
  "Clear estimates and communication",
  "Clean job sites and final walkthroughs",
];

const CitiesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const visibleAreas = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return serviceAreaCards;

    return serviceAreaCards.filter((area) => {
      return (
        area.city.toLowerCase().includes(query) ||
        area.region.toLowerCase().includes(query) ||
        area.section.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const groupedAreas = React.useMemo(() => {
    return sectionOrder
      .map((section) => ({
        areas: visibleAreas.filter((area) => area.section === section),
        section,
      }))
      .filter((group) => group.areas.length > 0);
  }, [visibleAreas]);

  return (
    <SiteLayout>
      <main className="areas-page">
        <section className="areas-hero">
          <p className="areas-hero__eyebrow">Cities We Serve</p>
          <h1>From Everett, WA - We Serve the Entire Puget Sound Region</h1>
          <p>
            {renderHighlightedText(
              "Northwood Renovation is based in Everett, WA and serves homeowners across Snohomish County, Greater Seattle, the Eastside, and South King County. Whether you're in our backyard in Marysville or across the lake in Bellevue, our crew brings the same honest estimates and quality craftsmanship.",
            )}
          </p>
          <p className="areas-hero__subcopy">
            Browse by city to see where we work most often and how each area fits
            into our Everett-based service map.
          </p>
        </section>

        <section className="areas-search" aria-label="Search cities">
          <label htmlFor="areas-city-search">Search by city</label>
          <input
            id="areas-city-search"
            type="search"
            placeholder="Search Everett, Seattle, Bellevue..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </section>

        <section className="areas-groups" aria-label="Service area locations">
          {groupedAreas.length > 0 ? (
            groupedAreas.map((group) => (
              <section key={group.section} className="areas-group">
                <div className="areas-group__head">
                  <p>{group.section}</p>
                  <h2>{group.section}</h2>
                  <span>{sectionDescriptions[group.section]}</span>
                </div>

                <div className="areas-grid">
                  {group.areas.map((area) => (
                    <article key={area.city} className="areas-card">
                      <div
                        className="areas-card__image"
                        style={{ backgroundImage: `url("${encodeURI(area.image)}")` }}
                      >
                        <div className="areas-card__image-overlay" />
                        <div className="areas-card__image-content">
                          <p>{area.region}</p>
                          <h2>{renderHighlightedText(area.city)}</h2>
                        </div>
                      </div>

                      <div className="areas-card__body">
                        <div
                          className="areas-card__tags"
                          aria-label={`${area.city} tags`}
                        >
                          {area.tags.map((tag) => (
                            <span key={`${area.city}-${tag}`}>{tag}</span>
                          ))}
                        </div>

                        <ul className="areas-card__links">
                          {area.serviceLinks.map((link) => (
                            <li key={`${area.city}-${link}`}>
                              {renderHighlightedText(link)}
                            </li>
                          ))}
                        </ul>

                        <Link to={area.detailsPath} className="areas-card__cta">
                          Explore Details →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <article className="areas-grid__empty">
              <h2>No matching cities found</h2>
              <p>
                Try a nearby city name like <strong>Everett</strong>,{" "}
                <strong>Seattle</strong>, or <strong>Bellevue</strong>.
              </p>
            </article>
          )}
        </section>

        <section className="areas-trust">
          <div>
            <p className="areas-trust__eyebrow">Everett-Based Service</p>
            <h2>Built for Puget Sound Homes</h2>
            <p>
              {renderHighlightedText(
                "Outdoor structures in Western Washington need to handle rain, moisture, shade, and year-round use. Northwood Renovation builds fences, decks, railings, and exterior upgrades with Snohomish County and greater Puget Sound conditions in mind.",
              )}
            </p>
          </div>
          <ul className="areas-trust__list">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="areas-final-cta">
          <h2>Ready to Start a Project in Your Area?</h2>
          <p>
            Tell us about your fence, deck, or outdoor renovation project and
            we&apos;ll help you plan the next step.
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
      </main>
    </SiteLayout>
  );
};

export default CitiesPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Cities We Serve | Everett-Based Deck & Fence Contractor | Northwood Renovation"
    description="Northwood Renovation is based in Everett, WA and serves homeowners across Snohomish County, Greater Seattle, the Eastside, and South King County with decks, fences, railings, and outdoor renovation work."
    pathname={location.pathname}
    keywords={[
      "cities served by Northwood Renovation",
      "Everett deck contractor cities",
      "Everett fence contractor cities",
      "Snohomish County deck builder",
      "Puget Sound fence installer",
    ]}
  />
);
