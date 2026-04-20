import deckRailingHouse from "../images/gallery/deck-with-railing-house.jpg";
import deckLocalAfterImage from "../images/cities/deck-local-carousel-after-premium-deck.png";
import deckLocalBeforeImage from "../images/cities/deck-local-carousel-before-weathered-deck.png";
import fenceBackyard from "../images/gallery/fence-backyard.jpg";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";
import horizontalWoodFence from "../images/gallery/horizontal-wood-fence.jpg";
import modernBackyardDeck from "../images/gallery/modern-backyard-deck.jpg";
import morningGardenFence from "../images/gallery/morning-garden-fence.jpeg";
import newBackyardDeck from "../images/gallery/new-backyard-deck-construction.jpg";
import pergolaDeckConstruction from "../images/gallery/pergola-deck-construction.jpg";
import sunnyWoodFence from "../images/gallery/sunny-wood-fence.jpg";
import sunsetHomeDeck from "../images/gallery/sunset-home-deck.jpeg";
import sunsetWoodFence from "../images/gallery/sunset-wood-fence.jpg";
import woodenDeckSteps from "../images/gallery/wooden-deck-steps.jpg";

export type ProjectCategory = "Decks" | "Fences" | "Railings" | "Repairs";
export type ProjectFilter = "All Projects" | ProjectCategory;

export type RecentWorkProject = {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  location: string;
  description: string;
  story: string;
  squareFeet: string;
  materials: string;
  timeline: string;
  service: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: {
    quote: string;
    name: string;
  };
  image: string;
  extraImages: string[];
  highlights: string[];
  scope: string[];
};

export const recentWorkFilters: ProjectFilter[] = [
  "All Projects",
  "Decks",
  "Fences",
  "Railings",
  "Repairs",
];

export const recentWorkProjects: RecentWorkProject[] = [
  {
    slug: "cedar-backyard-deck",
    title: "Cedar Backyard Deck",
    type: "Deck Build",
    category: "Decks",
    location: "Seattle, WA",
    description:
      "A custom cedar deck built for backyard entertaining with clean edges, durable framing, and a natural finish.",
    story:
      "This backyard deck was planned as a comfortable extension of the home, with durable framing, natural wood character, and a layout that works for both quiet evenings and weekend gatherings.",
    squareFeet: "420 sq ft",
    materials: "Cedar Wood",
    timeline: "1-2 Weeks",
    service: "Custom Deck Installation",
    challenge:
      "The backyard had enough space for outdoor living, but it lacked a defined surface for dining, seating, and family use. The homeowner wanted a deck that felt connected to the home without overpowering the yard.",
    solution:
      "Northwood Renovation planned a custom cedar deck layout with practical circulation, durable framing, and clean railing placement. The build focused on a warm natural finish, stable structure, and a layout that works for daily use.",
    result:
      "The finished deck created a dedicated outdoor living area with room for dining, relaxing, and entertaining. It now feels like a natural extension of the house rather than an unused backyard zone.",
    testimonial: {
      quote:
        "The deck gave us exactly the outdoor space we were missing. The crew was organized, careful, and easy to communicate with from start to finish.",
      name: "Amanda R.",
    },
    image: deckRailingHouse,
    extraImages: [deckRailingHouse, woodenDeckSteps, sunsetHomeDeck],
    highlights: [
      "Cedar deck surface with natural warmth",
      "Clean railing layout for safety and visibility",
      "Built around everyday outdoor entertaining",
    ],
    scope: ["Deck framing", "Decking installation", "Railing detail"],
  },
  {
    slug: "privacy-fence-installation",
    title: "Privacy Fence Installation",
    type: "Fence Build",
    category: "Fences",
    location: "Bellevue, WA",
    description:
      "A warm wood privacy fence that adds structure, curb appeal, and everyday comfort around the yard.",
    story:
      "The goal was to create a stronger sense of privacy without making the yard feel closed off. The finished fence brings clean lines, sturdy posts, and a natural look that fits the property.",
    squareFeet: "185 linear ft",
    materials: "Cedar Wood",
    timeline: "3-5 Days",
    service: "Privacy Fence Installation",
    challenge:
      "The yard needed more privacy from nearby properties while still keeping a clean, residential look. The layout required careful planning around landscaping, corners, and property access.",
    solution:
      "The team installed a custom cedar privacy fence with strong posts, consistent panel spacing, and a natural finish. The fence line was planned to improve privacy while keeping the yard approachable and bright.",
    result:
      "The completed fence gave the homeowners a more private backyard, improved curb appeal, and a cleaner boundary around the property.",
    testimonial: {
      quote:
        "The fence looks clean and solid. They explained the layout clearly and the finished result made the whole yard feel more complete.",
      name: "Michael T.",
    },
    image: fenceBackyard,
    extraImages: [fenceBackyard, gardenFenceTrees, horizontalWoodFence],
    highlights: [
      "Custom privacy layout for the yard",
      "Durable posts and clean fence lines",
      "Natural wood look with strong curb appeal",
    ],
    scope: ["Fence layout", "Post setting", "Privacy panel installation"],
  },
  {
    slug: "modern-garden-deck",
    title: "Modern Garden Deck",
    type: "Outdoor Living",
    category: "Decks",
    location: "Kirkland, WA",
    description:
      "A clean backyard deck designed around garden views, durable surfaces, and relaxed outdoor living.",
    story:
      "This deck was built to make the garden feel more usable, giving the homeowners a grounded outdoor space that feels connected to the landscaping and the home.",
    squareFeet: "510 sq ft",
    materials: "Wood Decking",
    timeline: "1-2 Weeks",
    service: "Outdoor Deck Build",
    challenge:
      "The backyard had strong garden views but no comfortable place to enjoy them. The homeowner wanted an outdoor surface that felt modern, open, and easy to use throughout the season.",
    solution:
      "We designed a low-profile deck that frames the garden without competing with the landscaping. The surface, edges, and transitions were kept clean so the deck would feel calm and intentional.",
    result:
      "The new deck created a polished outdoor living space for relaxing, entertaining, and enjoying the backyard from a better vantage point.",
    testimonial: {
      quote:
        "The new deck changed how we use the backyard. It feels peaceful, clean, and much more functional than before.",
      name: "Sarah L.",
    },
    image: modernBackyardDeck,
    extraImages: [modernBackyardDeck, sunsetHomeDeck, deckRailingHouse],
    highlights: [
      "Low-profile outdoor living layout",
      "Natural lighting and garden-focused view",
      "Clean edges for a modern backyard feel",
    ],
    scope: ["Deck design", "Surface installation", "Finish detailing"],
  },
  {
    slug: "horizontal-wood-fence",
    title: "Horizontal Wood Fence",
    type: "Fence Build",
    category: "Fences",
    location: "Redmond, WA",
    description:
      "A horizontal wood fence with a modern profile, strong posts, and a natural finish that suits the home.",
    story:
      "This fence uses a horizontal board layout to create a cleaner architectural look while still giving the yard privacy, structure, and a warm wood finish.",
    squareFeet: "160 linear ft",
    materials: "Horizontal Cedar Boards",
    timeline: "4-6 Days",
    service: "Modern Fence Installation",
    challenge:
      "The homeowner wanted a privacy fence with a more modern look than a traditional vertical layout. The fence needed to feel architectural while still being practical and durable.",
    solution:
      "Northwood Renovation built a horizontal wood fence with consistent spacing, strong posts, and a clean finished profile. The design was planned around privacy, curb appeal, and long-term exterior performance.",
    result:
      "The finished fence added a modern backdrop to the yard and gave the property a more polished, intentional exterior style.",
    testimonial: {
      quote:
        "The horizontal fence looks sharp and fits the house perfectly. The installation was clean and the crew paid attention to the details.",
      name: "Bryce F.",
    },
    image: horizontalWoodFence,
    extraImages: [horizontalWoodFence, morningGardenFence, sunnyWoodFence],
    highlights: [
      "Modern horizontal board pattern",
      "Warm wood tone against landscaping",
      "Privacy-focused installation",
    ],
    scope: ["Fence planning", "Horizontal panel build", "Final walkthrough"],
  },
  {
    slug: "deck-stairs-landing",
    title: "Deck Stairs & Landing",
    type: "Deck Stairs",
    category: "Repairs",
    location: "Renton, WA",
    description:
      "A practical deck stair and landing update focused on safer access, clean lines, and long-term use.",
    story:
      "This project improved the way the deck connects to the yard. The stair and landing updates created a safer, cleaner transition for daily use.",
    squareFeet: "95 sq ft",
    materials: "Exterior-Grade Wood",
    timeline: "2-3 Days",
    service: "Deck Stair Repair",
    challenge:
      "The existing access point from the deck to the yard felt awkward and needed a safer, cleaner transition. The homeowner wanted the update to blend into the existing deck rather than feel patched on.",
    solution:
      "We rebuilt the stair and landing area with practical proportions, stable framing, and cleaner finish details. The work focused on everyday safety, comfortable access, and visual consistency.",
    result:
      "The updated stairs made the deck easier to use and gave the transition to the yard a more finished, dependable feel.",
    testimonial: {
      quote:
        "The stairs feel much safer now and look like they were always meant to be part of the deck.",
      name: "Daniel K.",
    },
    image: woodenDeckSteps,
    extraImages: [woodenDeckSteps, newBackyardDeck, deckRailingHouse],
    highlights: [
      "Improved yard access",
      "Cleaner stair geometry",
      "Durable exterior materials",
    ],
    scope: ["Stair update", "Landing work", "Safety-focused finish"],
  },
  {
    slug: "wood-railing-detail",
    title: "Wood Railing Detail",
    type: "Deck Railing",
    category: "Railings",
    location: "Seattle, WA",
    description:
      "A railing-focused deck project with sturdy posts, open views, and careful finishing around the perimeter.",
    story:
      "The railing work was designed to keep the deck secure while preserving an open backyard view. Details were kept clean, practical, and consistent with the deck style.",
    squareFeet: "72 linear ft",
    materials: "Wood Railing",
    timeline: "2-4 Days",
    service: "Deck Railing Installation",
    challenge:
      "The deck needed safer perimeter definition without blocking the view into the yard. The railing had to feel sturdy, clean, and visually balanced with the existing deck.",
    solution:
      "The crew installed wood railing with careful post placement, consistent spacing, and smooth finish details. The design protected the deck edge while keeping the backyard view open.",
    result:
      "The railing improved safety and gave the deck a more complete, professionally finished appearance.",
    testimonial: {
      quote:
        "The railing feels solid and the deck looks much more finished. Communication was clear the whole time.",
      name: "Olivia P.",
    },
    image: deckRailingHouse,
    extraImages: [deckRailingHouse, sunsetHomeDeck, modernBackyardDeck],
    highlights: [
      "Sturdy post spacing",
      "Open backyard visibility",
      "Clean perimeter finish",
    ],
    scope: ["Railing installation", "Post detail", "Finish review"],
  },
  {
    slug: "backyard-fence-refresh",
    title: "Backyard Fence Refresh",
    type: "Fence Repair",
    category: "Repairs",
    location: "Kent, WA",
    description:
      "A fence refresh that cleaned up the yard edge, improved privacy, and restored a more finished look.",
    story:
      "This refresh helped bring order back to the yard edge with a cleaner fence line and a more dependable exterior boundary.",
    squareFeet: "120 linear ft",
    materials: "Exterior-Grade Wood",
    timeline: "2-3 Days",
    service: "Fence Repair & Refresh",
    challenge:
      "The existing fence line looked tired and made the yard feel less maintained. The homeowner wanted a practical refresh that improved appearance and function without a full redesign.",
    solution:
      "Northwood Renovation corrected alignment issues, refreshed key fence sections, and cleaned up the final appearance. The work focused on a dependable result that made the yard feel cared for again.",
    result:
      "The refreshed fence improved the yard edge, restored a cleaner look, and added more confidence in the exterior boundary.",
    testimonial: {
      quote:
        "The fence refresh made a bigger difference than we expected. The yard looks cleaner and more put together.",
      name: "Laura S.",
    },
    image: morningGardenFence,
    extraImages: [morningGardenFence, sunnyWoodFence, fenceBackyard],
    highlights: [
      "Cleaner yard boundary",
      "Improved privacy feel",
      "Refreshed exterior appearance",
    ],
    scope: ["Fence refresh", "Panel alignment", "Final cleanup"],
  },
  {
    slug: "sunset-fence-line",
    title: "Sunset Fence Line",
    type: "Cedar Fence",
    category: "Fences",
    location: "Woodinville, WA",
    description:
      "A long cedar fence line installed for privacy and definition while keeping a calm, natural outdoor feel.",
    story:
      "The project created a clear property edge with a durable wood fence line that feels natural in the landscape and practical for long-term use.",
    squareFeet: "240 linear ft",
    materials: "Cedar Fence Boards",
    timeline: "5-7 Days",
    service: "Cedar Fence Installation",
    challenge:
      "The property needed a long, consistent fence line that could define the outdoor space while still looking natural in an open landscape.",
    solution:
      "The team planned a clean fence run with durable posts, consistent spacing, and a wood finish that works with the surrounding environment. The installation emphasized straight lines and a calm visual rhythm.",
    result:
      "The final fence gave the property clear definition, stronger privacy, and a warm exterior feature built for long-term use.",
    testimonial: {
      quote:
        "The fence line is straight, clean, and exactly what we wanted. It completely changed the feel of the property.",
      name: "Mark H.",
    },
    image: sunsetWoodFence,
    extraImages: [sunsetWoodFence, horizontalWoodFence, gardenFenceTrees],
    highlights: [
      "Long privacy fence layout",
      "Natural cedar-inspired look",
      "Consistent line and spacing",
    ],
    scope: ["Fence layout", "Post installation", "Panel installation"],
  },
  {
    slug: "covered-deck-framing",
    title: "Covered Deck Framing",
    type: "Deck Construction",
    category: "Decks",
    location: "Issaquah, WA",
    description:
      "A deck and pergola build prepared for a more usable outdoor area with shade, gathering space, and structure.",
    story:
      "This deck project set the foundation for a more comfortable outdoor living area, with framing and pergola structure planned around shade, gathering, and year-round usability.",
    squareFeet: "560 sq ft",
    materials: "Exterior Wood Framing",
    timeline: "1-2 Weeks",
    service: "Covered Deck Construction",
    challenge:
      "The homeowner wanted a more comfortable outdoor area that could support shade, gathering space, and future backyard use. The structure needed to feel integrated with the home and durable enough for changing weather.",
    solution:
      "We built the deck and pergola structure around the planned outdoor living layout, focusing on strong framing, practical spacing, and a clean foundation for future use.",
    result:
      "The finished structure created a more usable backyard gathering area with better shade potential, stronger organization, and a more inviting outdoor flow.",
    testimonial: {
      quote:
        "The covered deck structure gave us a real outdoor room. The planning was clear and the crew handled the details well.",
      name: "Chris W.",
    },
    image: pergolaDeckConstruction,
    extraImages: [pergolaDeckConstruction, newBackyardDeck, modernBackyardDeck],
    highlights: [
      "Outdoor structure for shade",
      "Spacious gathering layout",
      "Built for future outdoor living use",
    ],
    scope: ["Deck framing", "Pergola structure", "Outdoor layout planning"],
  },
];

export const getRecentWorkProject = (slug: string) =>
  recentWorkProjects.find((project) => project.slug === slug);

export const beforeAfterPreview = {
  before: deckLocalBeforeImage,
  after: deckLocalAfterImage,
};
