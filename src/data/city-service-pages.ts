export type CityServicePageData = {
  city: string;
  climateParagraphs: string[];
  heroTitle: string;
  introParagraphs: string[];
  metaDescription: string;
  nearbyProjectSlugs: string[];
  regionLabel: string;
  serviceIntro: string;
  slug: string;
};

type CityPageSeed = Omit<
  CityServicePageData,
  "climateParagraphs" | "heroTitle" | "introParagraphs" | "metaDescription" | "serviceIntro"
> & {
  climateFocus: string;
  introFocus: string;
};

type CityServiceFocus =
  | "deck-fence"
  | "fence-repair"
  | "deck-railing"
  | "privacy-gates"
  | "outdoor-upgrades";

type GenericCitySeed = {
  city: string;
  focus: CityServiceFocus;
  regionLabel: string;
};

const createCityPage = ({
  city,
  climateFocus,
  introFocus,
  nearbyProjectSlugs,
  regionLabel,
  slug,
}: CityPageSeed): CityServicePageData => {
  const cityName = city.replace(", WA", "");

  return {
    city,
    climateParagraphs: [
      `Outdoor structures in ${city} need to handle rain, moisture, shade, and seasonal weather changes. Northwood Renovation helps homeowners choose layouts, materials, and installation details that fit long-term use in the Pacific Northwest.`,
      climateFocus,
    ],
    heroTitle: `Deck and Fence Contractor in ${city}`,
    introParagraphs: [
      `Northwood Renovation provides deck building, fence installation, railings, repairs, and outdoor renovation services throughout ${city}. We help homeowners create outdoor spaces that feel practical, clean, and built to last.`,
      introFocus,
    ],
    metaDescription: `Northwood Renovation provides deck building, fence installation, repairs, railings, and outdoor renovation services in ${city}.`,
    nearbyProjectSlugs,
    regionLabel,
    serviceIntro: `From privacy fences and cedar gates to backyard decks, railing upgrades, and repair work, we help ${cityName} homeowners plan outdoor projects with durable materials and clear next steps.`,
    slug,
  };
};

const slugifyCity = (city: string) =>
  city
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");

const nearbyProjectSlugsByFocus: Record<CityServiceFocus, string[]> = {
  "deck-fence": [
    "cedar-backyard-deck",
    "privacy-fence-installation",
    "horizontal-wood-fence",
  ],
  "deck-railing": [
    "deck-stairs-landing",
    "wood-railing-detail",
    "cedar-backyard-deck",
  ],
  "fence-repair": [
    "backyard-fence-refresh",
    "sunset-fence-line",
    "privacy-fence-installation",
  ],
  "outdoor-upgrades": [
    "modern-garden-deck",
    "covered-deck-framing",
    "cedar-backyard-deck",
  ],
  "privacy-gates": [
    "horizontal-wood-fence",
    "privacy-fence-installation",
    "backyard-fence-refresh",
  ],
};

const createGenericCityPage = ({ city, focus, regionLabel }: GenericCitySeed) =>
  createCityPage({
    city,
    climateFocus: `Homes in ${city} often need outdoor structures that balance privacy, moisture durability, and long-term maintenance expectations. We help homeowners choose fence, deck, railing, and repair solutions that fit ${regionLabel.toLowerCase()} conditions and everyday use.`,
    introFocus: `Whether the project involves a new fence, a deck rebuild, railing safety work, or exterior repairs, Northwood Renovation helps homeowners in ${city} plan practical outdoor improvements with clear communication and durable materials.`,
    nearbyProjectSlugs: nearbyProjectSlugsByFocus[focus],
    regionLabel,
    slug: slugifyCity(city),
  });

const genericCityPageSeeds: GenericCitySeed[] = [
  { city: "Burien, WA", regionLabel: "Southwest King County", focus: "privacy-gates" },
  { city: "Tukwila, WA", regionLabel: "South King County", focus: "fence-repair" },
  { city: "Newcastle, WA", regionLabel: "Eastside", focus: "deck-fence" },
  { city: "Issaquah, WA", regionLabel: "Eastside Foothills", focus: "deck-railing" },
  { city: "Sammamish, WA", regionLabel: "Eastside", focus: "outdoor-upgrades" },
  { city: "Bothell, WA", regionLabel: "Northshore", focus: "deck-fence" },
  { city: "Kenmore, WA", regionLabel: "Northshore", focus: "fence-repair" },
  { city: "Lake Forest Park, WA", regionLabel: "North King County", focus: "deck-fence" },
  {
    city: "Mountlake Terrace, WA",
    regionLabel: "South Snohomish County",
    focus: "privacy-gates",
  },
  { city: "Edmonds, WA", regionLabel: "Puget Sound North", focus: "deck-railing" },
  { city: "Lynnwood, WA", regionLabel: "South Snohomish County", focus: "outdoor-upgrades" },
  { city: "Mukilteo, WA", regionLabel: "Southwest Snohomish County", focus: "deck-railing" },
  { city: "Mill Creek, WA", regionLabel: "South Snohomish County", focus: "outdoor-upgrades" },
  { city: "Everett, WA", regionLabel: "Snohomish County", focus: "deck-fence" },
  { city: "Snohomish, WA", regionLabel: "Central Snohomish County", focus: "deck-fence" },
  { city: "Marysville, WA", regionLabel: "North Snohomish County", focus: "deck-fence" },
  { city: "Lake Stevens, WA", regionLabel: "North Snohomish County", focus: "deck-railing" },
  { city: "Arlington, WA", regionLabel: "North Snohomish County", focus: "privacy-gates" },
  { city: "Monroe, WA", regionLabel: "East Snohomish County", focus: "deck-fence" },
  { city: "Stanwood, WA", regionLabel: "North Snohomish County", focus: "deck-fence" },
  { city: "Mount Vernon, WA", regionLabel: "Skagit Valley", focus: "deck-fence" },
  { city: "Burlington, WA", regionLabel: "Skagit Valley", focus: "fence-repair" },
  { city: "Sedro-Woolley, WA", regionLabel: "Skagit Valley", focus: "outdoor-upgrades" },
  { city: "Anacortes, WA", regionLabel: "Skagit / Fidalgo", focus: "deck-railing" },
  { city: "Woodinville, WA", regionLabel: "Eastside", focus: "deck-fence" },
  { city: "Auburn, WA", regionLabel: "South King County", focus: "fence-repair" },
  { city: "Des Moines, WA", regionLabel: "Puget Sound South", focus: "deck-railing" },
  { city: "Federal Way, WA", regionLabel: "South King County", focus: "outdoor-upgrades" },
  { city: "SeaTac, WA", regionLabel: "South King County", focus: "privacy-gates" },
  { city: "Covington, WA", regionLabel: "South King County", focus: "deck-fence" },
  { city: "Maple Valley, WA", regionLabel: "South King County", focus: "deck-fence" },
  { city: "Medina, WA", regionLabel: "Lake Washington", focus: "outdoor-upgrades" },
  { city: "Clyde Hill, WA", regionLabel: "Eastside", focus: "deck-railing" },
  { city: "Green Lake, WA", regionLabel: "North Seattle", focus: "deck-fence" },
  { city: "Magnolia, WA", regionLabel: "Northwest Seattle", focus: "deck-railing" },
  { city: "Fremont, WA", regionLabel: "North Seattle", focus: "outdoor-upgrades" },
  { city: "Wallingford, WA", regionLabel: "North Seattle", focus: "deck-railing" },
  { city: "Beacon Hill, WA", regionLabel: "South Seattle", focus: "fence-repair" },
  { city: "Columbia City, WA", regionLabel: "South Seattle", focus: "deck-fence" },
  { city: "Rainier Beach, WA", regionLabel: "South Seattle", focus: "privacy-gates" },
  { city: "Northgate, WA", regionLabel: "North Seattle", focus: "fence-repair" },
  { city: "Greenwood, WA", regionLabel: "North Seattle", focus: "privacy-gates" },
  { city: "Phinney Ridge, WA", regionLabel: "North Seattle", focus: "deck-fence" },
  { city: "Madison Park, WA", regionLabel: "Central Seattle", focus: "deck-railing" },
  { city: "Ravenna, WA", regionLabel: "Northeast Seattle", focus: "deck-fence" },
  { city: "Wedgwood, WA", regionLabel: "Northeast Seattle", focus: "outdoor-upgrades" },
  { city: "Mount Baker, WA", regionLabel: "Southeast Seattle", focus: "deck-railing" },
];

export const cityServicePages: CityServicePageData[] = [
  createCityPage({
    city: "Seattle, WA",
    climateFocus:
      "Seattle yards often need practical privacy, drainage awareness, and materials that still look clean through long wet seasons. We focus on durable cedar details, strong framing, and outdoor layouts that work for everyday city living.",
    introFocus:
      "From privacy fences in compact Seattle yards to decks designed for outdoor living, our team focuses on craftsmanship, clean communication, and exterior work that fits the home and neighborhood.",
    nearbyProjectSlugs: [
      "cedar-backyard-deck",
      "wood-railing-detail",
      "covered-deck-framing",
    ],
    regionLabel: "King County",
    slug: "seattle-wa",
  }),
  createCityPage({
    city: "West Seattle, WA",
    climateFocus:
      "West Seattle homes often balance privacy needs, yard access, and year-round outdoor use. We help homeowners choose durable fencing, practical stair transitions, and deck layouts that fit the slope, view, and moisture conditions of the property.",
    introFocus:
      "Northwood Renovation serves West Seattle homeowners with custom decks, railings, fence replacement, gates, and repair work built for Northwest weather and daily use.",
    nearbyProjectSlugs: [
      "cedar-backyard-deck",
      "wood-railing-detail",
      "deck-stairs-landing",
    ],
    regionLabel: "Seattle Peninsula",
    slug: "west-seattle-wa",
  }),
  createCityPage({
    city: "Ballard, WA",
    climateFocus:
      "Ballard properties often need outdoor structures that feel clean and intentional in tighter yards. We help homeowners plan fences, gates, railings, and decks that improve privacy while still feeling open and well finished.",
    introFocus:
      "Whether you are planning a backyard fence, replacing aging deck components, or improving an outdoor living area, we help Ballard homeowners move from estimate to finished project with clear communication.",
    nearbyProjectSlugs: [
      "cedar-backyard-deck",
      "wood-railing-detail",
      "modern-garden-deck",
    ],
    regionLabel: "Northwest Seattle",
    slug: "ballard-wa",
  }),
  createCityPage({
    city: "Queen Anne, WA",
    climateFocus:
      "Queen Anne homes often need outdoor work that respects the house, the yard layout, and long-term moisture exposure. We focus on clean craftsmanship, careful detailing, and exterior structures that feel like a natural extension of the property.",
    introFocus:
      "Northwood Renovation helps Queen Anne homeowners improve privacy, update deck access, add railing safety, and build outdoor spaces that feel durable and thoughtfully planned.",
    nearbyProjectSlugs: [
      "wood-railing-detail",
      "cedar-backyard-deck",
      "covered-deck-framing",
    ],
    regionLabel: "Central Seattle",
    slug: "queen-anne-wa",
  }),
  createCityPage({
    city: "Capitol Hill, WA",
    climateFocus:
      "Capitol Hill properties often benefit from compact outdoor solutions, low-maintenance fence details, and practical upgrades that make decks and access points safer. We help homeowners choose work that fits both the space and long-term maintenance expectations.",
    introFocus:
      "From fence replacement to railing upgrades and deck repairs, Northwood Renovation serves Capitol Hill homeowners with outdoor work that feels organized, durable, and easy to understand.",
    nearbyProjectSlugs: [
      "wood-railing-detail",
      "deck-stairs-landing",
      "cedar-backyard-deck",
    ],
    regionLabel: "Central Seattle",
    slug: "capitol-hill-wa",
  }),
  createCityPage({
    city: "Shoreline, WA",
    climateFocus:
      "Shoreline yards often deal with shade, moisture, and changing grade conditions. We help homeowners choose fence layouts, railing details, and deck materials that hold up well in damp Northwest conditions.",
    introFocus:
      "Northwood Renovation serves Shoreline homeowners with custom fences, deck improvements, repairs, and outdoor upgrades designed for practical use and long-term durability.",
    nearbyProjectSlugs: [
      "privacy-fence-installation",
      "horizontal-wood-fence",
      "wood-railing-detail",
    ],
    regionLabel: "North King County",
    slug: "shoreline-wa",
  }),
  createCityPage({
    city: "Bellevue, WA",
    climateFocus:
      "Bellevue homes often need outdoor spaces that feel polished, private, and easy to maintain. We help homeowners choose materials and project scopes that fit the property, the yard layout, and the level of ongoing maintenance they want.",
    introFocus:
      "Northwood Renovation serves Bellevue homeowners with custom decks, cedar fences, railings, gates, and outdoor upgrades focused on clean craftsmanship and durable materials.",
    nearbyProjectSlugs: [
      "privacy-fence-installation",
      "horizontal-wood-fence",
      "modern-garden-deck",
    ],
    regionLabel: "Eastside",
    slug: "bellevue-wa",
  }),
  createCityPage({
    city: "Kirkland, WA",
    climateFocus:
      "Kirkland backyards often combine outdoor living goals with privacy needs and moisture exposure from shaded landscaping. We help homeowners choose structures that improve everyday use while staying durable through Northwest weather.",
    introFocus:
      "From backyard deck builds to fence replacement and railing work, Northwood Renovation helps Kirkland homeowners plan practical outdoor projects with clear estimates and organized scheduling.",
    nearbyProjectSlugs: [
      "modern-garden-deck",
      "privacy-fence-installation",
      "horizontal-wood-fence",
    ],
    regionLabel: "Eastside",
    slug: "kirkland-wa",
  }),
  createCityPage({
    city: "Renton, WA",
    climateFocus:
      "Renton homes often need safe access, reliable drainage awareness, and durable materials that work well through wet seasons. We help homeowners prioritize repairs, rebuilds, and upgrades that improve how the yard and deck function together.",
    introFocus:
      "Northwood Renovation provides deck building, fence installation, stairs, railings, and repair work throughout Renton, WA. Our team keeps the process clear from the first estimate through the final walkthrough.",
    nearbyProjectSlugs: [
      "deck-stairs-landing",
      "backyard-fence-refresh",
      "sunset-fence-line",
    ],
    regionLabel: "South King County",
    slug: "renton-wa",
  }),
  createCityPage({
    city: "Kent, WA",
    climateFocus:
      "Kent outdoor projects often need a balance of privacy, durability, and straightforward maintenance. We help homeowners choose fence layouts, deck upgrades, and repair scopes that fit the property and hold up well in local weather conditions.",
    introFocus:
      "Northwood Renovation serves Kent homeowners with cedar fences, deck work, railing updates, gates, and outdoor repairs designed to feel clean, practical, and built to last.",
    nearbyProjectSlugs: [
      "backyard-fence-refresh",
      "sunset-fence-line",
      "deck-stairs-landing",
    ],
    regionLabel: "South King County",
    slug: "kent-wa",
  }),
  createCityPage({
    city: "Redmond, WA",
    climateFocus:
      "Redmond homes often need outdoor structures that feel refined but still practical for wet seasons, tree cover, and everyday backyard use. We help homeowners choose deck and fence solutions that match both the home and the long-term maintenance plan.",
    introFocus:
      "Whether you are replacing an older fence, planning a deck upgrade, or improving a backyard layout, Northwood Renovation helps Redmond homeowners move forward with durable materials and clear communication.",
    nearbyProjectSlugs: [
      "horizontal-wood-fence",
      "privacy-fence-installation",
      "covered-deck-framing",
    ],
    regionLabel: "Eastside",
    slug: "redmond-wa",
  }),
  createCityPage({
    city: "Mercer Island, WA",
    climateFocus:
      "Mercer Island properties often combine privacy goals, moisture exposure, and higher expectations for finished exterior details. We help homeowners choose fences, decks, railings, and repairs that feel durable, clean, and well integrated with the home.",
    introFocus:
      "Northwood Renovation serves Mercer Island homeowners with deck building, fence installation, railing work, repairs, and outdoor upgrades focused on practical function and premium-looking results.",
    nearbyProjectSlugs: [
      "cedar-backyard-deck",
      "wood-railing-detail",
      "deck-stairs-landing",
    ],
    regionLabel: "Lake Washington",
    slug: "mercer-island-wa",
  }),
  ...genericCityPageSeeds.map(createGenericCityPage),
];

export const getCityServicePageBySlug = (slug: string) =>
  cityServicePages.find((page) => page.slug === slug);

export const cityServicePagePathByCity = Object.fromEntries(
  cityServicePages.map((page) => [page.city, `/areas-we-serve/${page.slug}`]),
) as Record<string, string>;
