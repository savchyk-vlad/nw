export type CityTier = 1 | 2 | 3;

export type ServiceAreaSection =
  | "Snohomish County"
  | "North King County & Seattle"
  | "Eastside"
  | "Skagit Valley";

export type CityServicePageData = {
  city: string;
  cityName: string;
  climateParagraphs: string[];
  county: string;
  driveMin: number;
  h1: string;
  introParagraphs: string[];
  isHomeBase: boolean;
  metaDescription: string;
  nearbyProjectSlugs: string[];
  permitNote?: string;
  regionLabel: string;
  section: ServiceAreaSection;
  serviceIntro: string;
  slug: string;
  tier: CityTier;
  titleTag: string;
};

type CitySeed = {
  cityName: string;
  county: string;
  driveMin: number;
  regionLabel: string;
  section: ServiceAreaSection;
  slug: string;
  tier: CityTier;
};

const projectSlugsBySection: Record<ServiceAreaSection, string[]> = {
  "Eastside": [
    "modern-garden-deck",
    "horizontal-wood-fence",
    "privacy-fence-installation",
  ],
  "North King County & Seattle": [
    "cedar-backyard-deck",
    "privacy-fence-installation",
    "wood-railing-detail",
  ],
  "Skagit Valley": [
    "cedar-backyard-deck",
    "horizontal-wood-fence",
    "covered-deck-framing",
  ],
  "Snohomish County": [
    "cedar-backyard-deck",
    "privacy-fence-installation",
    "horizontal-wood-fence",
  ],
};

const tierMetaDescription = (seed: CitySeed) => {
  if (seed.slug === "everett-wa") {
    return "Northwood Renovation is based in Everett, WA and builds custom decks, cedar fences, composite decks, covered decks, and railings for local homeowners. Free on-site estimates. Call (425) 683-2024.";
  }

  if (seed.tier === 1) {
    return `Northwood Renovation serves ${seed.cityName}, WA with custom decks, cedar fences, and exterior renovation work. Based just ${seed.driveMin} minutes away in Everett - fast response, free on-site estimates. Call (425) 683-2024.`;
  }

  if (seed.tier === 2) {
    return `Northwood Renovation provides deck and fence installation in ${seed.cityName}, WA. Our Everett-based crew serves ${seed.county} with quality craftsmanship and free on-site estimates. Call (425) 683-2024.`;
  }

  return `Northwood Renovation builds decks and fences in ${seed.cityName}, WA. Serving ${seed.county} from our Everett base. Free estimates, licensed and insured. Call (425) 683-2024.`;
};

const buildIntroParagraphs = (seed: CitySeed) => {
  if (seed.slug === "everett-wa") {
    return [
      "Northwood Renovation is based right here in Everett, WA - not a franchise, not a Seattle company that drives up for jobs. We live and work in Snohomish County, which means faster response times, better availability, and a crew that actually knows Everett's neighborhoods, lot sizes, and building permit requirements.",
      "We build custom decks, cedar privacy fences, composite decks, covered decks, and railings for Everett homeowners. Whether your yard is on the flat streets near Mukilteo Boulevard or a sloped lot in the Silver Lake area, we've worked in it before.",
    ];
  }

  if (seed.slug === "seattle-wa") {
    return [
      "Northwood Renovation serves Seattle homeowners with custom decks, cedar fences, railings, and exterior renovation work built for dense neighborhoods, wet weather, and daily use.",
      "We serve all Seattle neighborhoods including Ballard, Queen Anne, Capitol Hill, Green Lake, Fremont, Wallingford, Magnolia, West Seattle, Beacon Hill, Columbia City, Northgate, Greenwood, Phinney Ridge, Madison Park, Ravenna, Wedgwood, and Mount Baker.",
    ];
  }

  if (seed.tier === 1) {
    return [
      `${seed.cityName} is part of our core service area - our crew is based in Everett and works in ${seed.cityName} regularly. We build custom decks, install cedar privacy fences, and handle exterior renovations for ${seed.cityName} homeowners year-round.`,
      `From fence replacements to deck upgrades and outdoor repairs, Northwood Renovation helps ${seed.cityName} homeowners plan projects with durable materials, practical layouts, and clear communication from estimate through walkthrough.`,
    ];
  }

  if (seed.tier === 2) {
    return [
      `Northwood Renovation serves ${seed.cityName} homeowners with the same crew and quality as our Everett base. We travel to ${seed.county} for deck builds, fence installations, and exterior projects - free on-site estimates included.`,
      `Whether the project is a new cedar fence, a deck replacement, or a railing upgrade, we help ${seed.cityName} homeowners choose practical outdoor improvements built for Northwest homes and weather.`,
    ];
  }

  return [
    `We take on deck and fence projects in ${seed.cityName} and the surrounding ${seed.county} area. Our Everett-based team is available for larger jobs and full installations - contact us to discuss your project and we'll let you know availability.`,
    `Northwood Renovation helps ${seed.cityName} homeowners with deck construction, fence replacement, railings, gates, and exterior updates when the project calls for durable materials and an organized installation process.`,
  ];
};

const buildClimateParagraphs = (seed: CitySeed) => {
  if (seed.slug === "everett-wa") {
    return [
      "Everett homes deal with long wet seasons, moisture-heavy yards, and neighborhood layouts that can change a lot from one part of the city to another. We build decks and fences with drainage, framing, privacy, and long-term maintenance in mind.",
      "Everett Building Permits: Fence and deck projects in Everett often require a building permit through the City of Everett's Development Services department. We handle the permit process as part of your project - no extra coordination needed on your end.",
    ];
  }

  return [
    `Outdoor structures in ${seed.cityName} need to handle rain, moisture, shade, and seasonal weather changes. Northwood Renovation helps homeowners choose layouts, materials, and installation details that fit long-term use in the Pacific Northwest.`,
    `${seed.cityName} homeowners often need a balance of privacy, durability, and straightforward maintenance. We help plan fences, decks, gates, and railings that feel practical now and hold up well over time in ${seed.county}.`,
  ];
};

const buildServiceIntro = (seed: CitySeed) => {
  if (seed.slug === "everett-wa") {
    return "From custom decks and composite upgrades to cedar fences, gates, railings, and repairs, we help Everett homeowners plan outdoor improvements with faster local response and a crew that knows the area.";
  }

  return `Northwood Renovation helps ${seed.cityName} homeowners with custom decks, cedar fences, gates, railings, and outdoor upgrades built for daily use and Northwest weather.`;
};

const createCityServicePage = (seed: CitySeed): CityServicePageData => ({
  city: `${seed.cityName}, WA`,
  cityName: seed.cityName,
  climateParagraphs: buildClimateParagraphs(seed),
  county: seed.county,
  driveMin: seed.driveMin,
  h1:
    seed.slug === "everett-wa"
      ? "Everett's Local Deck and Fence Contractor"
      : `Deck and Fence Contractor in ${seed.cityName}, WA`,
  introParagraphs: buildIntroParagraphs(seed),
  isHomeBase: seed.slug === "everett-wa",
  metaDescription: tierMetaDescription(seed),
  nearbyProjectSlugs: projectSlugsBySection[seed.section],
  permitNote:
    seed.slug === "everett-wa"
      ? "Everett Building Permits: Fence and deck projects in Everett often require a building permit through the City of Everett's Development Services department. We handle the permit process as part of your project - no extra coordination needed on your end."
      : undefined,
  regionLabel: seed.regionLabel,
  section: seed.section,
  serviceIntro: buildServiceIntro(seed),
  slug: seed.slug,
  tier: seed.tier,
  titleTag: `Deck & Fence Contractor in ${seed.cityName}, WA | Northwood Renovation`,
});

const citySeeds: CitySeed[] = [
  { slug: "everett-wa", cityName: "Everett", county: "Snohomish County", tier: 1, driveMin: 0, section: "Snohomish County", regionLabel: "Everett" },
  { slug: "marysville-wa", cityName: "Marysville", county: "Snohomish County", tier: 1, driveMin: 15, section: "Snohomish County", regionLabel: "North Snohomish County" },
  { slug: "snohomish-wa", cityName: "Snohomish", county: "Snohomish County", tier: 1, driveMin: 18, section: "Snohomish County", regionLabel: "Central Snohomish County" },
  { slug: "mill-creek-wa", cityName: "Mill Creek", county: "Snohomish County", tier: 1, driveMin: 20, section: "Snohomish County", regionLabel: "South Snohomish County" },
  { slug: "mukilteo-wa", cityName: "Mukilteo", county: "Snohomish County", tier: 1, driveMin: 18, section: "Snohomish County", regionLabel: "Southwest Snohomish County" },
  { slug: "lake-stevens-wa", cityName: "Lake Stevens", county: "Snohomish County", tier: 1, driveMin: 20, section: "Snohomish County", regionLabel: "North Snohomish County" },
  { slug: "monroe-wa", cityName: "Monroe", county: "Snohomish County", tier: 1, driveMin: 25, section: "Snohomish County", regionLabel: "East Snohomish County" },
  { slug: "arlington-wa", cityName: "Arlington", county: "Snohomish County", tier: 1, driveMin: 25, section: "Snohomish County", regionLabel: "North Snohomish County" },
  { slug: "stanwood-wa", cityName: "Stanwood", county: "Snohomish County", tier: 1, driveMin: 30, section: "Snohomish County", regionLabel: "North Snohomish County" },
  { slug: "lynnwood-wa", cityName: "Lynnwood", county: "Snohomish County", tier: 1, driveMin: 22, section: "Snohomish County", regionLabel: "South Snohomish County" },
  { slug: "mountlake-terrace-wa", cityName: "Mountlake Terrace", county: "Snohomish County", tier: 1, driveMin: 25, section: "Snohomish County", regionLabel: "South Snohomish County" },
  { slug: "edmonds-wa", cityName: "Edmonds", county: "Snohomish County", tier: 1, driveMin: 25, section: "Snohomish County", regionLabel: "Puget Sound North" },
  { slug: "bothell-wa", cityName: "Bothell", county: "King/Snohomish County", tier: 1, driveMin: 28, section: "Snohomish County", regionLabel: "Northshore" },
  { slug: "kenmore-wa", cityName: "Kenmore", county: "King County", tier: 1, driveMin: 30, section: "Snohomish County", regionLabel: "Northshore" },
  { slug: "woodinville-wa", cityName: "Woodinville", county: "King County", tier: 1, driveMin: 32, section: "Snohomish County", regionLabel: "Northshore" },
  { slug: "shoreline-wa", cityName: "Shoreline", county: "King County", tier: 1, driveMin: 33, section: "North King County & Seattle", regionLabel: "North King County" },
  { slug: "lake-forest-park-wa", cityName: "Lake Forest Park", county: "King County", tier: 1, driveMin: 35, section: "North King County & Seattle", regionLabel: "North King County" },
  { slug: "seattle-wa", cityName: "Seattle", county: "King County", tier: 2, driveMin: 38, section: "North King County & Seattle", regionLabel: "Seattle" },
  { slug: "kirkland-wa", cityName: "Kirkland", county: "King County", tier: 2, driveMin: 38, section: "Eastside", regionLabel: "Eastside" },
  { slug: "redmond-wa", cityName: "Redmond", county: "King County", tier: 2, driveMin: 40, section: "Eastside", regionLabel: "Eastside" },
  { slug: "bellevue-wa", cityName: "Bellevue", county: "King County", tier: 2, driveMin: 45, section: "Eastside", regionLabel: "Eastside" },
  { slug: "sammamish-wa", cityName: "Sammamish", county: "King County", tier: 2, driveMin: 47, section: "Eastside", regionLabel: "Eastside" },
  { slug: "issaquah-wa", cityName: "Issaquah", county: "King County", tier: 2, driveMin: 50, section: "Eastside", regionLabel: "Eastside Foothills" },
  { slug: "mount-vernon-wa", cityName: "Mount Vernon", county: "Skagit County", tier: 2, driveMin: 45, section: "Skagit Valley", regionLabel: "Skagit Valley" },
  { slug: "burlington-wa", cityName: "Burlington", county: "Skagit County", tier: 2, driveMin: 50, section: "Skagit Valley", regionLabel: "Skagit Valley" },
  { slug: "medina-wa", cityName: "Medina", county: "King County", tier: 3, driveMin: 50, section: "Eastside", regionLabel: "Lake Washington" },
  { slug: "clyde-hill-wa", cityName: "Clyde Hill", county: "King County", tier: 3, driveMin: 50, section: "Eastside", regionLabel: "Eastside" },
];

export const cityServicePages: CityServicePageData[] =
  citySeeds.map(createCityServicePage);

export const getCityServicePageBySlug = (slug: string) =>
  cityServicePages.find((page) => page.slug === slug);

export const cityServicePagePathByCity = Object.fromEntries(
  cityServicePages.map((page) => [page.city, `/cities/${page.slug}/`]),
) as Record<string, string>;

export const cityServicePagePathBySlug = Object.fromEntries(
  cityServicePages.map((page) => [page.slug, `/cities/${page.slug}/`]),
) as Record<string, string>;
