import pergolaDeckConstruction from "../images/gallery/pergola-deck-construction.jpg";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";
import servicesChainLinkFence from "../images/services-chain-link-fence.jpg";
import servicesCompositeDeck from "../images/services-composite-deck.jpg";
import servicesCustomDeck from "../images/services-custom-deck.jpg";
import servicesOutdoorDeck from "../images/services-outdoor-deck.jpeg";
import servicesWoodDeck from "../images/services-wood-deck.jpg";

export type ServicePageData = {
  benefits: string[];
  bestFit: string[];
  categoryLabel: "DECK SERVICES" | "FENCE SERVICES";
  finalCtaServiceName: string;
  faq: Array<{
    answer: string;
    question: string;
  }>;
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  materials: Array<{
    title: string;
    text: string;
  }>;
  metaDescription: string;
  overview: string[];
  processIntro: string;
  relatedProjectSlugs: string[];
  serviceName: string;
  slug: string;
  subtitle: string;
  titleTag: string;
  trustPoints: Array<{
    title: string;
    text: string;
  }>;
};

const deckFaq = [
  {
    question: "What deck material works best in Seattle?",
    answer:
      "The best material depends on budget, maintenance preference, and how the deck will be used. Cedar and wood offer natural warmth, while composite decking can reduce upkeep in rainy Pacific Northwest conditions.",
  },
  {
    question: "Do you build deck stairs and railings?",
    answer:
      "Yes. Northwood Renovation can plan deck stairs, railing details, landings, and safer transitions so the deck feels complete and practical for everyday use.",
  },
  {
    question: "How long does a deck project usually take?",
    answer:
      "Many residential deck projects take about one to two weeks after materials and scheduling are confirmed, but timing depends on size, access, design details, weather, and scope.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free estimates and help homeowners understand layout, materials, scope, and practical next steps before work begins.",
  },
];

const fenceFaq = [
  {
    question: "What fence material works best for Seattle weather?",
    answer:
      "Cedar is a strong option for privacy and natural appearance, while chain link is practical for security and visibility. The right choice depends on privacy goals, maintenance, budget, and site conditions.",
  },
  {
    question: "Do you install gates?",
    answer:
      "Yes. Gate planning can be included with fence projects so access points, hardware, alignment, and everyday use are considered before installation starts.",
  },
  {
    question: "Can you repair an existing fence?",
    answer:
      "Yes. If the existing fence can be repaired safely, we can discuss post issues, panel replacement, gate adjustments, and reinforcement options during the estimate.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. We provide free estimates for fence projects and explain material options, layout considerations, and installation steps clearly.",
  },
];

export const servicePages: Record<string, ServicePageData> = {
  "custom-deck": {
    benefits: [
      "Creates a deck layout around the way you actually use the yard.",
      "Improves outdoor dining, hosting, relaxing, and everyday access.",
      "Supports better railing, stair, seating, and material decisions.",
      "Helps the finished deck feel connected to the home instead of added on.",
      "Plans for Seattle moisture, shade, drainage, and long-term use.",
    ],
    bestFit: [
      "You want a deck designed around your home instead of a one-size layout.",
      "Your yard has slopes, access limits, landscaping, or unusual dimensions.",
      "You need help choosing materials, railings, stairs, or built-in features.",
      "You want a finished outdoor space for relaxing, dining, or entertaining.",
      "You want clear guidance before committing to the project scope.",
    ],
    categoryLabel: "DECK SERVICES",
    finalCtaServiceName: "Custom Deck",
    faq: [
      ...deckFaq,
      {
        question: "What makes a custom deck different?",
        answer:
          "A custom deck is planned around the home, yard, use case, access points, materials, and long-term goals instead of being built from a generic layout.",
      },
    ],
    heroImage: servicesCustomDeck,
    heroImageAlt: "Finished custom backyard deck for a Seattle home",
    h1: "Custom Deck Builder in Seattle, WA",
    materials: [
      {
        title: "Layout Planning",
        text: "We plan deck size, flow, stairs, railings, and transitions around the home and yard.",
      },
      {
        title: "Material Options",
        text: "Choose from wood, cedar, composite boards, pressure-treated framing, and practical finish details.",
      },
      {
        title: "Outdoor Features",
        text: "Built-in seating, skirting, stairs, railings, and usable gathering areas can be considered during planning.",
      },
      {
        title: "Weather Details",
        text: "Seattle decks need practical moisture, drainage, and exposure planning for long-term performance.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides custom deck builder services in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "A custom deck is a strong choice when your backyard needs more than a standard platform. Northwood Renovation designs and builds decks around the home, yard, materials, and the way homeowners want to use the space.",
      "For Seattle homes, we consider rain exposure, transitions from the home, shade, railings, stairs, framing, and everyday usability. The goal is a deck that feels intentional, durable, and comfortable for outdoor living.",
    ],
    processIntro:
      "We review your yard, discuss materials, confirm layout, and provide clear next steps before custom deck installation begins.",
    relatedProjectSlugs: [
      "cedar-backyard-deck",
      "modern-garden-deck",
      "deck-stairs-landing",
    ],
    serviceName: "Custom Deck",
    slug: "custom-deck",
    subtitle:
      "Custom deck design and installation for Seattle homeowners who want a durable, practical outdoor space built around their home and lifestyle.",
    titleTag: "Custom Deck in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Custom Layouts",
        text: "Designed around your home, yard, access points, and outdoor goals.",
      },
      {
        title: "Strong Framing",
        text: "Built with practical structure and long-term use in mind.",
      },
      {
        title: "Clear Estimates",
        text: "Helpful recommendations before you commit to the project.",
      },
    ],
  },
  "wood-deck": {
    benefits: [
      "Adds natural warmth and character to the backyard.",
      "Creates a comfortable surface for daily outdoor living.",
      "Can be maintained, stained, and refreshed over time.",
      "Works well with many Seattle home styles and landscapes.",
      "Provides a classic deck appearance with strong craftsmanship.",
    ],
    bestFit: [
      "You like the natural look and feel of real wood.",
      "You want a warm deck surface that fits a residential backyard.",
      "You are comfortable with maintenance like cleaning and sealing.",
      "You want cedar or wood details that match the home’s exterior style.",
      "You want practical guidance on moisture and upkeep in Seattle weather.",
    ],
    categoryLabel: "DECK SERVICES",
    finalCtaServiceName: "Wood Deck",
    faq: [
      ...deckFaq,
      {
        question: "How long does a wood deck usually last?",
        answer:
          "A well-built wood deck can last many years, especially when framing, drainage, ventilation, and maintenance are handled properly for Pacific Northwest weather.",
      },
    ],
    heroImage: servicesWoodDeck,
    heroImageAlt: "Natural wood deck with railing near a Seattle backyard",
    h1: "Wood Deck Builder in Seattle, WA",
    materials: [
      {
        title: "Cedar and Wood Decking",
        text: "Natural boards bring warmth, visible grain, and a classic outdoor feel.",
      },
      {
        title: "Pressure-Treated Framing",
        text: "Deck framing should be planned for strength, ventilation, and long-term exterior exposure.",
      },
      {
        title: "Staining and Sealing",
        text: "Wood decks need realistic maintenance planning to help protect against moisture and wear.",
      },
      {
        title: "Railings and Stairs",
        text: "Wood railing and stair details can complete the deck and improve safety.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides wood deck builder services in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "Wood decks bring natural warmth, texture, and character to an outdoor space. Northwood Renovation builds wood decks with careful layout, durable framing, clean board installation, and practical finishing details.",
      "Seattle weather makes material choice and maintenance expectations important. We help homeowners understand cedar, pressure-treated framing, sealing, drainage, and long-term care before the project starts.",
    ],
    processIntro:
      "We review your deck goals, discuss wood options and maintenance expectations, then plan a clean installation path.",
    relatedProjectSlugs: [
      "cedar-backyard-deck",
      "wood-railing-detail",
      "deck-stairs-landing",
    ],
    serviceName: "Wood Deck",
    slug: "wood-deck",
    subtitle:
      "Natural wood deck building for Seattle homes with warm character, sturdy construction, and practical Northwest weather planning.",
    titleTag: "Wood Deck in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Natural Warmth",
        text: "Wood decking gives the backyard a comfortable, timeless feel.",
      },
      {
        title: "Clean Craftsmanship",
        text: "Straight lines, careful details, and durable construction.",
      },
      {
        title: "Maintenance Guidance",
        text: "Clear expectations for care in Seattle rain and moisture.",
      },
    ],
  },
  "composite-deck": {
    benefits: [
      "Reduces routine maintenance compared with many natural wood decks.",
      "Creates a clean, modern, consistent deck appearance.",
      "Resists moisture, fading, and everyday wear more effectively than many traditional materials.",
      "Offers long-term value for homeowners who want lower upkeep.",
      "Works well for outdoor living spaces that see frequent use.",
    ],
    bestFit: [
      "You want lower maintenance than natural wood.",
      "You prefer a clean modern appearance and consistent board color.",
      "You want strong moisture resistance for Seattle weather.",
      "Your deck will be used often for family time or entertaining.",
      "You want to compare long-term value before choosing materials.",
    ],
    categoryLabel: "DECK SERVICES",
    finalCtaServiceName: "Composite Deck",
    faq: [
      ...deckFaq,
      {
        question: "Is composite decking better than cedar?",
        answer:
          "Composite decking is often better for lower maintenance, while cedar is better for natural wood character. The right choice depends on appearance, upkeep, budget, and long-term goals.",
      },
    ],
    heroImage: servicesCompositeDeck,
    heroImageAlt: "Clean composite deck boards with modern railing",
    h1: "Composite Deck Builder in Seattle, WA",
    materials: [
      {
        title: "Composite Boards",
        text: "Composite decking offers consistent color, moisture resistance, and a refined finish.",
      },
      {
        title: "Color Options",
        text: "Choose deck tones that fit the home exterior, railings, and landscape.",
      },
      {
        title: "Railing Systems",
        text: "Modern railing options can complement composite deck boards and improve safety.",
      },
      {
        title: "Long-Term Upkeep",
        text: "Composite decking can reduce staining and sealing needs for busy homeowners.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides composite deck builder services in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "Composite decking is a practical option for Seattle homeowners who want a polished outdoor space without heavy wood maintenance. It provides a clean look, strong moisture resistance, and dependable everyday performance.",
      "Northwood Renovation helps homeowners compare composite boards, framing needs, color choices, railings, and long-term value so the finished deck fits both the home and the way the space will be used.",
    ],
    processIntro:
      "We review your deck layout, compare composite options, confirm details, and schedule installation with clear expectations.",
    relatedProjectSlugs: [
      "modern-garden-deck",
      "cedar-backyard-deck",
      "wood-railing-detail",
    ],
    serviceName: "Composite Deck",
    slug: "composite-deck",
    subtitle:
      "Low-maintenance composite deck installation for Seattle-area homeowners who want a clean look and durable outdoor performance.",
    titleTag: "Composite Deck in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Lower Upkeep",
        text: "A strong option for homeowners who want less staining and sealing.",
      },
      {
        title: "Seattle Weather Ready",
        text: "Moisture-conscious material planning for Northwest conditions.",
      },
      {
        title: "Refined Finish",
        text: "Clean board lines, modern colors, and practical details.",
      },
    ],
  },
  "outdoor-deck": {
    benefits: [
      "Creates a dedicated place for family time, dining, and hosting.",
      "Improves connection between the home and the backyard.",
      "Makes outdoor space easier and more comfortable to use.",
      "Supports furniture, planters, grilling, and everyday outdoor routines.",
      "Helps the yard feel more finished and intentional.",
    ],
    bestFit: [
      "You want a more usable backyard for relaxing or entertaining.",
      "You need a better transition from the house to the yard.",
      "You want room for seating, dining, grilling, or planters.",
      "Your existing yard feels underused or unfinished.",
      "You want a practical deck layout without overcomplicating the design.",
    ],
    categoryLabel: "DECK SERVICES",
    finalCtaServiceName: "Outdoor Deck",
    faq: deckFaq,
    heroImage: servicesOutdoorDeck,
    heroImageAlt: "Outdoor deck overlooking a green backyard",
    h1: "Outdoor Deck Installation in Seattle, WA",
    materials: [
      {
        title: "Open-Air Layouts",
        text: "Outdoor decks can be planned around seating, dining, grilling, and access.",
      },
      {
        title: "Stairs and Transitions",
        text: "Deck stairs and landings help connect the home, deck, and yard safely.",
      },
      {
        title: "Wood or Composite",
        text: "Material options can match the maintenance level and style you prefer.",
      },
      {
        title: "Furniture Planning",
        text: "A good deck layout leaves room for furniture, circulation, and everyday comfort.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides outdoor deck installation in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "An outdoor deck can turn an underused backyard into a practical extension of the home. Northwood Renovation builds outdoor decks for relaxing, dining, entertaining, and everyday connection with the yard.",
      "We help Seattle homeowners plan layout, materials, stairs, railings, and transitions so the deck feels useful, comfortable, and built for the way the family lives.",
    ],
    processIntro:
      "We learn how you want to use the backyard, review layout options, and plan an outdoor deck that fits the home.",
    relatedProjectSlugs: [
      "modern-garden-deck",
      "cedar-backyard-deck",
      "covered-deck-framing",
    ],
    serviceName: "Outdoor Deck",
    slug: "outdoor-deck",
    subtitle:
      "Outdoor deck installation for Seattle backyards designed for relaxing, dining, hosting, and daily outdoor living.",
    titleTag: "Outdoor Deck in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Built for Everyday Use",
        text: "Deck layouts that support real family routines and outdoor living.",
      },
      {
        title: "Comfortable Flow",
        text: "Better connection between the home, deck, and yard.",
      },
      {
        title: "Practical Planning",
        text: "Clear recommendations for materials, size, stairs, and use.",
      },
    ],
  },
  "covered-deck": {
    benefits: [
      "Makes outdoor space more usable during rain, shade, and changing weather.",
      "Creates a more comfortable area for dining, grilling, or relaxing.",
      "Can add a premium feel to the backyard or outdoor living area.",
      "Supports future planning for lighting, fans, or covered seating.",
      "Helps Seattle homeowners get more value from outdoor space year-round.",
    ],
    bestFit: [
      "You want more protection from rain or strong sun.",
      "You use your outdoor space for dining, relaxing, or hosting.",
      "You want a more premium outdoor living area.",
      "You are interested in roof, pergola, or shade options.",
      "You want a deck that feels useful through more of the year.",
    ],
    categoryLabel: "DECK SERVICES",
    finalCtaServiceName: "Covered Deck",
    faq: [
      ...deckFaq,
      {
        question: "Can a covered deck help with Seattle weather?",
        answer:
          "Yes. A covered deck can make an outdoor space more usable during rain and shade, though the right cover type depends on layout, structure, budget, and local requirements.",
      },
    ],
    heroImage: pergolaDeckConstruction,
    heroImageAlt: "Covered deck and pergola framing in a residential backyard",
    h1: "Covered Deck Builder in Seattle, WA",
    materials: [
      {
        title: "Cover Options",
        text: "Roof, pergola, and shade planning can be discussed based on the home and goals.",
      },
      {
        title: "Deck Surface",
        text: "Wood or composite decking can be selected for appearance, upkeep, and durability.",
      },
      {
        title: "Lighting and Comfort",
        text: "Covered spaces can be planned with future lighting, fans, or seating in mind.",
      },
      {
        title: "Weather Planning",
        text: "Seattle covered decks need practical rain, drainage, and connection details.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides covered deck builder services in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "A covered deck helps Seattle homeowners use outdoor space more comfortably through rain, shade, and changing seasons. It can turn a simple deck into a more protected outdoor living area.",
      "Northwood Renovation helps plan covered deck layouts, material options, cover direction, stairs, railings, and practical weather details so the space feels durable and useful.",
    ],
    processIntro:
      "We review your deck goals, discuss cover options, confirm structural considerations, and plan clear installation steps.",
    relatedProjectSlugs: [
      "covered-deck-framing",
      "cedar-backyard-deck",
      "modern-garden-deck",
    ],
    serviceName: "Covered Deck",
    slug: "covered-deck",
    subtitle:
      "Covered deck building for Seattle homes that need more usable outdoor space through rain, shade, and everyday weather.",
    titleTag: "Covered Deck in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "More Usable Space",
        text: "Protection from rain and shade helps the deck work harder.",
      },
      {
        title: "Premium Outdoor Living",
        text: "A covered deck can feel like a true extension of the home.",
      },
      {
        title: "Weather Planning",
        text: "Built with Seattle moisture and seasonal use in mind.",
      },
    ],
  },
  "cedar-wood-fence": {
    benefits: [
      "Adds natural privacy and warmth to the property.",
      "Creates a clean boundary around the yard.",
      "Improves curb appeal with a classic residential look.",
      "Can include gates, height planning, and layout adjustments.",
      "Works well for Seattle homes when installation and maintenance are planned carefully.",
    ],
    bestFit: [
      "You want privacy without a cold or industrial look.",
      "You like natural cedar boards and warm wood character.",
      "You need a cleaner boundary around the yard.",
      "You want gate options or better access through the fence line.",
      "You want a fence that fits residential landscaping and curb appeal.",
    ],
    categoryLabel: "FENCE SERVICES",
    finalCtaServiceName: "Cedar Wood Fence",
    faq: [
      ...fenceFaq,
      {
        question: "How long does a cedar fence last?",
        answer:
          "Cedar fence life depends on installation quality, exposure, drainage, maintenance, and soil conditions. Proper posts, layout, and maintenance help the fence perform better in Seattle weather.",
      },
    ],
    heroImage: gardenFenceTrees,
    heroImageAlt: "Cedar privacy fence in a Seattle backyard",
    h1: "Cedar Wood Fence Installation in Seattle, WA",
    materials: [
      {
        title: "Cedar Boards",
        text: "Cedar offers natural warmth, privacy, and a clean residential appearance.",
      },
      {
        title: "Post Options",
        text: "Strong post planning helps fence lines stay straighter and more dependable.",
      },
      {
        title: "Gate Hardware",
        text: "Gate placement, hardware, and access should be planned before installation begins.",
      },
      {
        title: "Height and Layout",
        text: "Fence height and layout can be planned around privacy, yards, and property needs.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides cedar wood fence installation in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "Cedar wood fencing is a strong choice for Seattle homeowners who want privacy, natural warmth, and a clean finished look. Northwood Renovation installs cedar fences with careful layout, straight lines, durable posts, and details designed for long-term outdoor use.",
      "Because Seattle weather brings rain and moisture, fence planning should consider post setting, drainage, gate hardware, exposure, and maintenance expectations before work begins.",
    ],
    processIntro:
      "We review your fence line, privacy goals, gate needs, and cedar options before planning installation.",
    relatedProjectSlugs: [
      "privacy-fence-installation",
      "horizontal-wood-fence",
      "backyard-fence-refresh",
    ],
    serviceName: "Cedar Wood Fence",
    slug: "cedar-wood-fence",
    subtitle:
      "Cedar wood fence installation for Seattle homes that need privacy, natural warmth, clean lines, and durable outdoor performance.",
    titleTag: "Cedar Wood Fence in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Privacy & Curb Appeal",
        text: "Warm cedar fencing adds structure and comfort to the yard.",
      },
      {
        title: "Clean Fence Lines",
        text: "Careful layout, straight posts, and polished installation.",
      },
      {
        title: "Durable Installation",
        text: "Planned for Northwest rain, soil, and everyday outdoor use.",
      },
    ],
  },
  "chain-link-fence": {
    benefits: [
      "Creates a practical boundary while keeping visibility open.",
      "Works well for pets, side yards, security, and property lines.",
      "Can be a cost-effective fencing option for many residential needs.",
      "Provides durable metal fencing with straightforward maintenance.",
      "Can include gates and access points for everyday function.",
    ],
    bestFit: [
      "You want practical security and clear visibility.",
      "You need a durable fence for pets, side yards, or boundaries.",
      "You prefer a cost-effective fencing option.",
      "You want metal fencing with straightforward maintenance.",
      "You need gates or access points included in the layout.",
    ],
    categoryLabel: "FENCE SERVICES",
    finalCtaServiceName: "Chain Link Fence",
    faq: [
      ...fenceFaq,
      {
        question: "Is chain link fencing good for residential yards?",
        answer:
          "Yes. Chain link can be a practical choice for side yards, pet areas, boundaries, and spaces where visibility and function matter more than full privacy.",
      },
    ],
    heroImage: servicesChainLinkFence,
    heroImageAlt: "Residential chain link fence with green landscape",
    h1: "Chain Link Fence Installation in Seattle, WA",
    materials: [
      {
        title: "Chain Link Mesh",
        text: "Durable mesh provides security and visibility without fully closing off the space.",
      },
      {
        title: "Posts and Rails",
        text: "Post spacing and rail details help the fence feel stable and practical.",
      },
      {
        title: "Gate Options",
        text: "Gates can be planned for pets, side yards, driveways, and everyday access.",
      },
      {
        title: "Privacy Add-Ons",
        text: "Privacy slats may be considered when visibility needs to be reduced.",
      },
    ],
    metaDescription:
      "Northwood Renovation provides chain link fence installation in Seattle, WA and nearby communities. Request a free estimate for durable fence and deck work built for Northwest weather.",
    overview: [
      "Chain link fencing is practical, durable, and useful for homeowners who need security, visibility, and clear boundaries. It works well for side yards, pet areas, property lines, and functional outdoor spaces.",
      "Northwood Renovation helps Seattle homeowners plan chain link fence layout, gates, post placement, and practical installation details so the finished fence fits the property’s needs.",
    ],
    processIntro:
      "We review your boundary needs, gate placement, pets or access requirements, then provide clear fence installation recommendations.",
    relatedProjectSlugs: [
      "backyard-fence-refresh",
      "privacy-fence-installation",
      "sunset-fence-line",
    ],
    serviceName: "Chain Link Fence",
    slug: "chain-link-fence",
    subtitle:
      "Chain link fence installation for Seattle-area homeowners who need practical security, visibility, and durable property boundaries.",
    titleTag: "Chain Link Fence in Everett, WA | Northwood Renovation",
    trustPoints: [
      {
        title: "Security & Visibility",
        text: "A practical fence option that keeps spaces defined and open.",
      },
      {
        title: "Durable Boundaries",
        text: "Good for pets, side yards, property lines, and everyday function.",
      },
      {
        title: "Clear Estimates",
        text: "Straightforward planning for layout, gates, and installation.",
      },
    ],
  },
};

export const getServicePage = (slug: string) => servicePages[slug];
