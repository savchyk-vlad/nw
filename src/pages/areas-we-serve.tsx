import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/reviews-areas.css";
import renderHighlightedText from "../components/brand-text";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
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

type ServiceAreaFocus =
  | "deck-fence"
  | "fence-repair"
  | "deck-railing"
  | "privacy-gates"
  | "outdoor-upgrades";

type ServiceAreaSection =
  | "Seattle Neighborhoods"
  | "Eastside"
  | "South King County"
  | "Snohomish County"
  | "Skagit Valley";

type ServiceAreaSeed = Omit<
  ServiceAreaCard,
  "detailsPath" | "image" | "section" | "serviceLinks"
> & {
  focus: ServiceAreaFocus;
};

const cityLabel = (city: string) => city.replace(", WA", "");

const sectionOrder: ServiceAreaSection[] = [
  "Seattle Neighborhoods",
  "Eastside",
  "South King County",
  "Snohomish County",
  "Skagit Valley",
];

const sectionDescriptions: Record<ServiceAreaSection, string> = {
  "Eastside":
    "Decks, fences, gates, railings, and repair work for Bellevue, Kirkland, Redmond, Mercer Island, and nearby Eastside communities.",
  "Seattle Neighborhoods":
    "Local outdoor renovation service across Seattle neighborhoods, from central neighborhoods to north and south Seattle yards.",
  "Skagit Valley":
    "Outdoor projects north of Snohomish County, including Mount Vernon, Burlington, Sedro-Woolley, and nearby communities.",
  "Snohomish County":
    "Fence and deck work for Shoreline-adjacent north communities, Everett, Lynnwood, Mukilteo, and surrounding Snohomish County areas.",
  "South King County":
    "Privacy fences, decks, gates, railings, and repair work across Renton, Kent, Auburn, Federal Way, and nearby south-end cities.",
};

const getAreaSection = (city: string, region: string): ServiceAreaSection => {
  if (
    city.includes("Seattle") ||
    [
      "Ballard, WA",
      "Queen Anne, WA",
      "Capitol Hill, WA",
      "Green Lake, WA",
      "Magnolia, WA",
      "Fremont, WA",
      "Wallingford, WA",
      "Beacon Hill, WA",
      "Columbia City, WA",
      "Rainier Beach, WA",
      "Northgate, WA",
      "Greenwood, WA",
      "Phinney Ridge, WA",
      "Madison Park, WA",
      "Ravenna, WA",
      "Wedgwood, WA",
      "Mount Baker, WA",
    ].includes(city)
  ) {
    return "Seattle Neighborhoods";
  }

  if (
    ["Eastside", "Eastside Foothills", "Lake Washington", "Northshore"].includes(
      region,
    )
  ) {
    return "Eastside";
  }

  if (
    [
      "South King County",
      "Southwest King County",
      "Puget Sound South",
    ].includes(region)
  ) {
    return "South King County";
  }

  if (["Skagit Valley", "Skagit / Fidalgo"].includes(region)) {
    return "Skagit Valley";
  }

  return "Snohomish County";
};

const serviceLinksByFocus = (
  city: string,
  focus: ServiceAreaFocus,
): string[] => {
  const place = cityLabel(city);

  switch (focus) {
    case "deck-fence":
      return [
        `Deck Builder ${place} WA`,
        `Fence Installation ${place} WA`,
        "Cedar Privacy Fences",
        "Deck Repair & Upgrades",
        "Railings & Stairs",
      ];
    case "fence-repair":
      return [
        `Fence Installation ${place} WA`,
        "Privacy Fence Installation",
        "Fence Repair & Reinforcement",
        "Custom Gates",
        "Deck and Fence Estimates",
      ];
    case "deck-railing":
      return [
        `Deck Builder ${place} WA`,
        "Deck Stairs & Railings",
        "Railing Repair & Upgrades",
        `Fence Installation ${place} WA`,
        "Outdoor Living Improvements",
      ];
    case "privacy-gates":
      return [
        `Fence Installation ${place} WA`,
        "Cedar Fence Installation",
        "Privacy Fences",
        "Custom Gates",
        "Backyard Fence Upgrades",
      ];
    case "outdoor-upgrades":
      return [
        `Deck Builder ${place} WA`,
        `Fence Installation ${place} WA`,
        "Outdoor Renovation Details",
        "Composite Deck Options",
        "Exterior Upgrade Planning",
      ];
  }
};

const serviceAreaSeeds: ServiceAreaSeed[] = [
  {
    city: "Seattle, WA",
    region: "King County",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "West Seattle, WA",
    region: "Seattle Peninsula",
    tags: ["DECKS", "REPAIRS", "RAILINGS"],
    focus: "deck-railing",
  },
  {
    city: "Ballard, WA",
    region: "Northwest Seattle",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Queen Anne, WA",
    region: "Central Seattle",
    tags: ["DECKS", "RAILINGS", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Capitol Hill, WA",
    region: "Central Seattle",
    tags: ["REPAIRS", "RAILINGS", "FENCES"],
    focus: "deck-railing",
  },
  {
    city: "Shoreline, WA",
    region: "North King County",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "fence-repair",
  },
  {
    city: "Bellevue, WA",
    region: "Eastside",
    tags: ["DECKS", "FENCES", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Kirkland, WA",
    region: "Eastside",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Renton, WA",
    region: "South King County",
    tags: ["REPAIRS", "DECKS", "RAILINGS"],
    focus: "deck-railing",
  },
  {
    city: "Kent, WA",
    region: "South King County",
    tags: ["FENCES", "REPAIRS", "DECKS"],
    focus: "fence-repair",
  },
  {
    city: "Redmond, WA",
    region: "Eastside",
    tags: ["FENCES", "DECKS", "GATES"],
    focus: "privacy-gates",
  },
  {
    city: "Mercer Island, WA",
    region: "Lake Washington",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Burien, WA",
    region: "Southwest King County",
    tags: ["FENCES", "GATES", "REPAIRS"],
    focus: "privacy-gates",
  },
  {
    city: "Tukwila, WA",
    region: "South King County",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "fence-repair",
  },
  {
    city: "Newcastle, WA",
    region: "Eastside",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Issaquah, WA",
    region: "Eastside Foothills",
    tags: ["DECKS", "REPAIRS", "RAILINGS"],
    focus: "deck-railing",
  },
  {
    city: "Sammamish, WA",
    region: "Eastside",
    tags: ["DECKS", "FENCES", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Bothell, WA",
    region: "Northshore",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Kenmore, WA",
    region: "Northshore",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "fence-repair",
  },
  {
    city: "Lake Forest Park, WA",
    region: "North King County",
    tags: ["FENCES", "DECKS", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Mountlake Terrace, WA",
    region: "South Snohomish County",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "privacy-gates",
  },
  {
    city: "Edmonds, WA",
    region: "Puget Sound North",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Lynnwood, WA",
    region: "South Snohomish County",
    tags: ["FENCES", "DECKS", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Mukilteo, WA",
    region: "Southwest Snohomish County",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Mill Creek, WA",
    region: "South Snohomish County",
    tags: ["FENCES", "DECKS", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Everett, WA",
    region: "Snohomish County",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Snohomish, WA",
    region: "Central Snohomish County",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Marysville, WA",
    region: "North Snohomish County",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Lake Stevens, WA",
    region: "North Snohomish County",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Arlington, WA",
    region: "North Snohomish County",
    tags: ["FENCES", "GATES", "REPAIRS"],
    focus: "privacy-gates",
  },
  {
    city: "Monroe, WA",
    region: "East Snohomish County",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Stanwood, WA",
    region: "North Snohomish County",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Mount Vernon, WA",
    region: "Skagit Valley",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Burlington, WA",
    region: "Skagit Valley",
    tags: ["FENCES", "GATES", "REPAIRS"],
    focus: "fence-repair",
  },
  {
    city: "Sedro-Woolley, WA",
    region: "Skagit Valley",
    tags: ["FENCES", "DECKS", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Anacortes, WA",
    region: "Skagit / Fidalgo",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Woodinville, WA",
    region: "Eastside",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Auburn, WA",
    region: "South King County",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "fence-repair",
  },
  {
    city: "Des Moines, WA",
    region: "Puget Sound South",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Federal Way, WA",
    region: "South King County",
    tags: ["DECKS", "FENCES", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "SeaTac, WA",
    region: "South King County",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "privacy-gates",
  },
  {
    city: "Covington, WA",
    region: "South King County",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Maple Valley, WA",
    region: "South King County",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Medina, WA",
    region: "Lake Washington",
    tags: ["DECKS", "RAILINGS", "GATES"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Clyde Hill, WA",
    region: "Eastside",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Green Lake, WA",
    region: "North Seattle",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Magnolia, WA",
    region: "Northwest Seattle",
    tags: ["DECKS", "RAILINGS", "GATES"],
    focus: "deck-railing",
  },
  {
    city: "Fremont, WA",
    region: "North Seattle",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Wallingford, WA",
    region: "North Seattle",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Beacon Hill, WA",
    region: "South Seattle",
    tags: ["REPAIRS", "FENCES", "GATES"],
    focus: "fence-repair",
  },
  {
    city: "Columbia City, WA",
    region: "South Seattle",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Rainier Beach, WA",
    region: "South Seattle",
    tags: ["FENCES", "REPAIRS", "GATES"],
    focus: "privacy-gates",
  },
  {
    city: "Northgate, WA",
    region: "North Seattle",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "fence-repair",
  },
  {
    city: "Greenwood, WA",
    region: "North Seattle",
    tags: ["FENCES", "DECKS", "GATES"],
    focus: "privacy-gates",
  },
  {
    city: "Phinney Ridge, WA",
    region: "North Seattle",
    tags: ["FENCES", "DECKS", "REPAIRS"],
    focus: "deck-fence",
  },
  {
    city: "Madison Park, WA",
    region: "Central Seattle",
    tags: ["DECKS", "RAILINGS", "REPAIRS"],
    focus: "deck-railing",
  },
  {
    city: "Ravenna, WA",
    region: "Northeast Seattle",
    tags: ["DECKS", "FENCES", "RAILINGS"],
    focus: "deck-fence",
  },
  {
    city: "Wedgwood, WA",
    region: "Northeast Seattle",
    tags: ["DECKS", "FENCES", "REPAIRS"],
    focus: "outdoor-upgrades",
  },
  {
    city: "Mount Baker, WA",
    region: "Southeast Seattle",
    tags: ["REPAIRS", "RAILINGS", "DECKS"],
    focus: "deck-railing",
  },
];

const serviceAreaCards: ServiceAreaCard[] = serviceAreaSeeds.map((area, index) => ({
  city: area.city,
  detailsPath: cityServicePagePathByCity[area.city] ?? "/contact",
  image: cityImages[index % cityImages.length],
  region: area.region,
  section: getAreaSection(area.city, area.region),
  tags: area.tags,
  serviceLinks: serviceLinksByFocus(area.city, area.focus),
}));

const trustPoints = [
  "Designed for Northwest weather",
  "Built with durable exterior materials",
  "Clear estimates and communication",
  "Clean job sites and final walkthroughs",
];

const AreasWeServePage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const visibleAreas = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return serviceAreaCards;

    return serviceAreaCards.filter((area) => {
      return (
        area.city.toLowerCase().includes(query) ||
        area.region.toLowerCase().includes(query)
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
          <p className="areas-hero__eyebrow">Local Service Area</p>
          <h1>Areas We Serve</h1>
          <p>
            {renderHighlightedText(
              "Northwood Renovation provides fence, deck, railing, and outdoor renovation services throughout Seattle, WA and nearby communities.",
            )}
          </p>
          <p className="areas-hero__subcopy">
            Choose your city below to explore local services, project examples,
            and details.
          </p>
        </section>

        <section className="areas-search" aria-label="Search cities">
          <label htmlFor="areas-city-search">Search by city</label>
          <input
            id="areas-city-search"
            type="search"
            placeholder="Search Seattle, Bellevue, Mount Vernon..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </section>

        <section className="areas-groups" aria-label="Seattle area locations">
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
                Try a nearby city name like <strong>Seattle</strong>,{" "}
                <strong>Bellevue</strong>, or <strong>Mount Vernon</strong>.
              </p>
            </article>
          )}
        </section>

        <section className="areas-trust">
          <div>
            <p className="areas-trust__eyebrow">Built for Local Conditions</p>
            <h2>Built for Seattle-Area Homes</h2>
            <p>
              {renderHighlightedText(
                "Outdoor structures in the Pacific Northwest need to handle rain, moisture, shade, and year-round use. Northwood Renovation builds fences, decks, railings, and exterior upgrades with local conditions in mind.",
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
            <Link to="/contact" className="areas-final-cta__primary">
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

export default AreasWeServePage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Areas We Serve | Northwood Renovation"
    description="Explore Seattle-area locations served by Northwood Renovation for deck building, fence installation, railings, repairs, and outdoor renovation services."
    pathname={location.pathname}
  />
);
