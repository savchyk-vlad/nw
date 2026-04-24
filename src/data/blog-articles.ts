import servicesFenceRoad from "../images/services-fence-road.jpeg";
import servicesWoodDeck from "../images/services-wood-deck.jpg";
import servicesCompositeDeck from "../images/services-composite-deck.jpg";
import servicesChainLinkFence from "../images/services-chain-link-fence.jpg";
import testimonialsFamilyOutdoor from "../images/testimonials-family-outdoor.avif";
import deckWithRailingHouse from "../images/gallery/deck-with-railing-house.jpg";
import horizontalWoodFence from "../images/gallery/horizontal-wood-fence.jpg";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";

export const blogCategories = [
  "All",
  "Decks",
  "Fences",
  "Materials",
  "Maintenance",
  "Planning",
  "Seattle Homes",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogSection = {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFaqItem = {
  answer: string;
  question: string;
};

type BaseBlogArticle = {
  category: Exclude<BlogCategory, "All">;
  ctaParagraphs?: string[];
  ctaPrimaryLabel?: string;
  ctaPrimaryTo?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryTo?: string;
  ctaTitle?: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  relatedSlugs: string[];
  sections: BlogSection[];
  slug: string;
  tocItems?: string[];
  title: string;
};

export type BlogArticleSeo = {
  dateModifiedIso: string;
  datePublishedIso: string;
  metaDescription?: string;
  seoTitle?: string;
  primaryKeyword: string;
  searchIntent: string;
  secondaryKeywords: string[];
};

export type BlogArticleGuide = {
  checklist: string[];
  checklistHeading?: string;
  checklistIntro?: string;
  faq: BlogFaqItem[];
  introParagraphs: string[];
  localNotesHeading?: string;
  localNotesIntro?: string;
  localNotes: string[];
  proSectionHeading?: string;
  proSectionIntro?: string;
  proSectionBullets: string[];
};

export type BlogArticle = BaseBlogArticle &
  BlogArticleSeo &
  BlogArticleGuide & {
    authorName: string;
  };

export const featuredGuideSlug = "replace-your-deck-or-fence";

const baseBlogArticles: BaseBlogArticle[] = [
  {
    category: "Planning",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Learn the signs of aging wood, moisture damage, unstable railings, and fence movement - and when repair or replacement makes more sense.",
    image: testimonialsFamilyOutdoor,
    imageAlt: "Seattle backyard deck and fence project overview",
    readTime: "7 min read",
    relatedSlugs: [
      "wood-deck-lifespan-pnw",
      "fence-posts-failing-signs",
      "questions-before-hiring-deck-builder",
    ],
    sections: [
      {
        heading: "Start with structural safety",
        paragraphs: [
          "Most homeowners first notice appearance issues, but safety is the deciding factor. If rails wobble, steps move, or posts feel soft at the base, get the structure reviewed quickly.",
          "In Seattle weather, trapped moisture can weaken framing long before damage is obvious from the top surface.",
        ],
        bullets: [
          "Loose railings or stair movement",
          "Posts shifting after rain",
          "Boards soft underfoot",
        ],
      },
      {
        heading: "When repair still makes sense",
        paragraphs: [
          "Repair is usually the right path when damage is isolated and core framing remains sound. Replacing select boards, reinforcing rails, or resetting a few fence posts can extend service life.",
          "A clear estimate should explain what is being repaired now and what may need future attention.",
        ],
      },
      {
        heading: "When replacement is the better long-term move",
        paragraphs: [
          "If moisture damage is widespread, multiple structural parts are failing, or layout no longer fits your yard use, replacement often provides better value than repeated repairs.",
          "A rebuild also allows better drainage planning, stronger connections, and materials selected for Pacific Northwest exposure.",
        ],
      },
      {
        heading: "How to make a smart repair vs replacement decision",
        paragraphs: [
          "Compare options using a 2-3 year outlook, not just today's repair cost. If repeated fixes are likely, replacement often gives better long-term value and fewer disruptions.",
          "Ask for clear scope documentation that separates structural work, cosmetic updates, and optional upgrades. This makes it easier to prioritize budget while still protecting safety.",
          "For Seattle homes, include moisture management in the decision: ventilation, drainage paths, and protected connection points usually determine how well the next solution performs.",
        ],
        bullets: [
          "Estimate total cost over 24 to 36 months, not one invoice",
          "Confirm which components are structurally sound vs worn",
          "Prioritize safety-critical repairs first if phasing work",
          "Request a final walkthrough checklist before closeout",
        ],
      },
      {
        heading: "Typical budget ranges for repair vs replacement",
        paragraphs: [
          "Budget outcomes vary by scope, but targeted repairs are usually lower-cost upfront while full replacement often provides stronger long-term value when structural issues are widespread.",
          "For planning purposes, ask for line items that separate structural corrections, finish materials, and optional upgrades. This helps you compare options without confusion.",
        ],
        bullets: [
          "Minor localized repair: lower upfront, shorter timeline",
          "Multi-area structural repair: medium cost, often phased",
          "Full replacement: highest upfront, strongest long-term reset",
        ],
      },
      {
        heading: "Seattle case example: phased stabilization before rebuild",
        paragraphs: [
          "A homeowner with railing movement and repeated fence lean chose a two-phase plan: immediate structural stabilization first, then full replacement the next season.",
          "This approach improved safety quickly while giving time to finalize layout and materials for a longer-term rebuild strategy.",
        ],
      },
    ],
    slug: "replace-your-deck-or-fence",
    title: "How to Know When It's Time to Replace Your Deck or Fence",
  },
  {
    category: "Decks",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "This is the most common question we get from homeowners planning a new deck in Everett and Snohomish County. Cedar or composite? Both are used regularly in this climate. Both can last a long time when installed correctly. But they're genuinely different materials that suit different homeowners, and the right answer depends on factors specific to your yard, your household, and how much time you want to spend on maintenance.",
    ctaParagraphs: [
      "The best way to make this decision is to see the materials in your actual yard. We bring cedar samples and composite board samples to estimate visits so you can compare them in the light your deck will actually be in - not under fluorescent lights at a showroom or on a screen.",
      "We serve homeowners across Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland, Redmond, Bellevue, and surrounding Snohomish County communities.",
      "Call (425) 683-2024 or [request an estimate](/contact) online. We'll get back to you within one business day.",
    ],
    ctaPrimaryLabel: "Request a Free Estimate",
    ctaPrimaryTo: "/contact#contact-form",
    ctaTitle: "Still Not Sure? We'll Help You Decide at the Estimate Visit.",
    image: servicesCompositeDeck,
    imageAlt:
      "Cedar and composite deck board comparison for Pacific Northwest homes - Northwood Renovation Everett WA",
    readTime: "8 min read",
    tocItems: [
      "How cedar performs in the Pacific Northwest",
      "How composite performs in the Pacific Northwest",
      "Maintenance: what each material actually requires",
      "Cost comparison: upfront vs. long-term",
      "Appearance: what each looks and feels like",
      "How your yard affects the decision",
      "When a mix of materials makes sense",
      "What we recommend based on your situation",
      "Frequently Asked Questions",
    ],
    relatedSlugs: [
      "wood-deck-lifespan-pnw",
      "spring-checklist-decks-fences",
      "questions-before-hiring-deck-builder",
    ],
    sections: [
      {
        heading: "How Cedar Performs in the Pacific Northwest",
        paragraphs: [
          "Cedar has been used for outdoor decks in the Puget Sound region for generations, and it earns that track record. Western red cedar - the species used for Pacific Northwest deck boards - is naturally resistant to rot and insects without chemical treatment. That's a meaningful advantage in a climate where decks deal with consistent moisture from October through May.",
          "A [cedar deck](/wood-deck/) in Everett, installed correctly and maintained reasonably well, can last fifteen to twenty years. Some last longer. The variables that shorten that lifespan are almost always installation and maintenance failures, not the material itself.",
        ],
        bullets: [
          "Posts sitting in standing water rather than elevated above grade",
          "Ledger connections that were not flashed properly against the house",
          "Boards sealed too infrequently and left to absorb moisture for years",
          "Fasteners that were not corrosion-resistant and stained or lost grip",
        ],
      },
      {
        heading: "Cedar's Limitations in a Wet Climate",
        level: 3,
        paragraphs: [
          "When those details are right, cedar is a reliable, long-performing material for an Everett backyard. When they are wrong, you are replacing it in eight years and wondering why wood decks have a bad reputation.",
          "Cedar is not maintenance-free. In Everett's climate, a cedar deck needs a basic cleaning once a year, a sealer or stain every two to three years to maintain moisture protection, and board and fastener checks after a few winters.",
          "Shaded yards - particularly those with mature fir or cedar trees overhead that keep the deck surface damp for long stretches - may need more frequent attention for surface mold and mildew. This is a surface condition, not a structural one, and it cleans off easily. But it is worth knowing about before you build.",
          "Cedar also moves with the seasons. It expands when wet and contracts when dry. Correct board spacing at installation allows for this movement - boards installed too tight will cup or buckle over time. A builder who installs cedar with the right spacing accounts for this from the start.",
        ],
      },
      {
        heading: "How Composite Performs in the Pacific Northwest",
        paragraphs: [
          "Composite decking has changed significantly over the past ten years. Early composite products developed a reputation for fading, chalking, and surface mold in wet climates that put a lot of homeowners off the material. Current capped composite boards - the standard for quality composite installations - perform much better and carry manufacturer warranties of twenty-five years or more.",
          "The key distinction in composite quality is the cap layer. Capped composite has a polymer shell on all four sides of the board that prevents moisture from reaching the wood fiber core. Uncapped composite exposes the core on the bottom and sides, which allows moisture absorption over time - leading to swelling, surface mold, and early wear.",
          "In the Pacific Northwest, where boards sit in damp conditions for months at a time, this distinction matters more than it does in a drier climate. We use capped [composite deck](/composite-deck/) boards as the standard on Everett builds.",
        ],
      },
      {
        heading: "What Composite Asks of You",
        level: 3,
        paragraphs: [
          "Properly installed capped composite decking in an Everett backyard requires almost no annual maintenance. A rinse with a garden hose once or twice a year removes dirt and debris. A light pressure wash or composite-safe deck cleaner handles mildew if it builds up in heavily shaded areas. No sealing, staining, or sanding - ever.",
          "For homeowners who have owned a cedar deck and know they did not keep up with the sealing schedule, composite solves that specific problem. The deck looks the same in year ten as it did in year two, without needing any intervention.",
        ],
      },
      {
        heading: "What Composite Won't Do",
        level: 3,
        paragraphs: [
          "Composite is not wood. The texture is manufactured - some boards have realistic grain patterns and others are clearly more uniform. On a warm summer day, darker composite boards absorb more heat than wood, which some homeowners notice underfoot. In Everett's climate, hot days are limited enough that this is rarely a significant concern, but south-facing decks in full afternoon sun are worth mentioning to your builder at the estimate stage.",
          "Composite also cannot be sanded or refinished the way wood can. If a composite board gets a deep scratch or gouge, the affected board gets replaced rather than sanded smooth. This is uncommon, but worth knowing.",
        ],
      },
      {
        heading: "Maintenance: What Cedar and Composite Actually Require",
        paragraphs: [
          "This is usually the deciding factor for homeowners who are on the fence. Here is the honest side-by-side breakdown of what each material asks of you over time in the Everett area.",
        ],
      },
      {
        heading: "Cedar Maintenance Schedule",
        level: 3,
        paragraphs: [
          "Year 1: Let the deck acclimate through one wet season before applying the first sealer or stain. New cedar needs to dry and open its grain before a finish bonds properly. Walk the deck at the end of summer and check that boards are seated correctly and fasteners are holding.",
          "Years 2-3: Apply a quality deck sealer or semi-transparent stain before the wet season starts, usually September or October. Clean the surface first - a light pressure wash removes the summer's worth of dirt, pollen, and mildew.",
          "Ongoing every 2-3 years: Repeat the clean and seal cycle. Check post bases and the ledger connection at the house for any signs of moisture damage. Replace any boards that show significant cupping, cracking, or soft spots.",
          "Total annual time commitment: Two to four hours per year on average, with a longer day every two to three years for the full clean and seal.",
        ],
      },
      {
        heading: "Composite Maintenance Schedule",
        level: 3,
        paragraphs: [
          "Year 1 and beyond: Rinse the deck surface with a garden hose once or twice a year. If mildew appears in shaded areas, apply a composite-safe cleaner and rinse. This takes about twenty minutes.",
          "Check fasteners and railings annually - composite boards do not degrade, but hardware can corrode if lower-quality fasteners were used.",
          "Total annual time commitment: Under an hour per year for most decks.",
        ],
      },
      {
        heading: "The Honest Conclusion on Maintenance",
        level: 3,
        paragraphs: [
          "If you will realistically seal your cedar deck every two to three years, cedar is a perfectly good choice. If you will not - and a lot of homeowners genuinely will not - composite is the better option for your situation.",
          "Neither answer is wrong. The mistake is choosing cedar while telling yourself you will maintain it, and then not doing it.",
        ],
      },
      {
        heading: "Cost Comparison: Upfront vs. Long-Term",
        paragraphs: [
          "The cost conversation on cedar versus composite is more nuanced than cedar is cheaper. Here is how to think about it properly.",
        ],
      },
      {
        heading: "Upfront Material Cost",
        level: 3,
        paragraphs: [
          "Cedar deck boards typically cost less per linear foot than quality capped composite boards. The gap varies by grade, but cedar is usually the lower material cost at time of installation. Pressure-treated framing is used under both, so that cost does not change with the surface material.",
        ],
      },
      {
        heading: "Total Project Cost",
        level: 3,
        paragraphs: [
          "Total project price - including framing, fasteners, railings, stairs, permits, and labor - is driven more by the size and complexity of the deck than by whether you chose cedar or composite surface boards.",
          "A 500-square-foot cedar deck with a complex stair layout and a railing system costs more than a 200-square-foot composite deck with simple stairs. Material choice matters less than scope.",
        ],
      },
      {
        heading: "Long-Term Cost",
        level: 3,
        paragraphs: [
          "Over a ten to fifteen year period, the comparison gets closer. Cedar requires sealing or staining every two to three years - either your time or the cost of hiring someone. Composite requires almost none. The breakeven point depends on the cost of labor in your area and how you value your own time.",
          "A rough comparison for a 300-square-foot Everett deck over fifteen years: cedar usually means a lower install cost plus approximately three to five professional seal or stain applications over the period if you do not DIY, plus possible board replacement in years ten to twelve. Composite usually means a higher install cost, minimal ongoing maintenance, and full warranty coverage through the period.",
          "Neither is dramatically cheaper over a full lifecycle. The decision usually comes down to maintenance preference more than total cost.",
        ],
      },
      {
        heading: "Appearance: What Each Material Looks and Feels Like",
        paragraphs: [
          "Appearance is where the decision becomes personal. Cedar and composite can both look good in an Everett backyard, but they do it differently.",
        ],
      },
      {
        heading: "Cedar",
        level: 3,
        paragraphs: [
          "Fresh cedar has a warm reddish-brown tone with visible grain variation. No two boards are identical - the texture is natural, the color shifts subtly from board to board, and the overall effect is warm and organic. Left unsealed, cedar grays to a silver tone over time, which some homeowners find attractive and others do not.",
          "Sealed or stained cedar holds color well and has a classic outdoor look that fits most Everett-area home styles - craftsman, farmhouse, traditional Northwest, and ranchers. It feels like wood underfoot because it is wood. Bare feet on a warm cedar deck in summer is a good experience.",
        ],
      },
      {
        heading: "Composite",
        level: 3,
        paragraphs: [
          "Current composite boards have come a long way from the flat, uniform look of early products. The better board lines have realistic grain texture and subtle color variation that reads as wood-like from a normal viewing distance.",
          "Colors range from warm browns and ambers to cooler grays and charcoals, with options that suit both traditional and contemporary exteriors. Composite is more consistent than cedar - boards match each other closely, the color stays stable over years without sealing, and the surface feels slightly different underfoot than wood.",
          "We bring board samples to estimate visits so homeowners can see the options in their actual yard, in the light the deck will live in. Color choices made from a website or brochure do not always match what the material looks like in a shaded Everett backyard.",
        ],
      },
      {
        heading: "How Your Yard Affects the Decision",
        paragraphs: [
          "The Pacific Northwest is not one climate - even within the Everett area, yards differ significantly in ways that affect how decking materials perform.",
        ],
      },
      {
        heading: "Shaded Yards",
        level: 3,
        paragraphs: [
          "If your backyard is heavily shaded by mature Douglas firs, cedars, or the house itself, the deck surface stays damp for longer stretches through the wet season. This affects both materials, but differently.",
          "For cedar, shaded conditions mean surface mold builds up more quickly between seal cycles. You are cleaning it more often and the sealer does not last quite as long before reapplication is needed. It is manageable, but the maintenance schedule tightens.",
          "For composite, shaded conditions mean less UV exposure - which is actually favorable for composite boards. The main thing to watch is mildew on the surface, which cleans off easily and is not a structural concern. Composite in a shaded yard typically performs well with minimal attention.",
        ],
      },
      {
        heading: "South and West-Facing Decks",
        level: 3,
        paragraphs: [
          "Decks that face south or west get more direct sun in summer. For cedar, this accelerates color fading and the need for resealing - sun and UV break down the finish faster than shade. For composite, a south or west-facing deck in darker colors can feel hot underfoot on warm days.",
          "Lighter composite tones reduce this. It is worth discussing sun exposure with your builder when choosing a board color.",
        ],
      },
      {
        heading: "Waterfront and Wind-Exposed Properties",
        level: 3,
        paragraphs: [
          "Homes near the Everett waterfront, Mukilteo, or other exposed locations deal with more wind and some salt-air influence. Cedar handles salt air reasonably well but may need more frequent resealing. Composite is generally more resistant to salt-air exposure because the polymer cap does not absorb moisture or salt the way wood grain does.",
        ],
      },
      {
        heading: "When a Mix of Materials Makes Sense",
        paragraphs: [
          "One option that does not get discussed enough is using both materials on the same project. It is more common than most homeowners realize and can be a practical solution.",
          "The most common combination is composite surface boards over a pressure-treated structural frame. A more intentional mixed approach might look like composite boards on the main deck surface with cedar used for bench framing, fascia boards, or railing elements.",
          "Another good combination is cedar for a pergola or [covered deck](/covered-deck/) structure overhead, with composite for the deck surface below. The cover reduces the cedar's rain exposure significantly and the combination looks natural together.",
          "None of these are complicated to execute. They just require deciding early in the planning process so the framing and material orders reflect the intent from the start.",
        ],
      },
      {
        heading: "What We Recommend Based on Your Situation",
        paragraphs: [
          "After building decks across Everett and Snohomish County for a number of years, here is how we tend to think about the recommendation.",
        ],
      },
      {
        heading: "Cedar Is Probably the Right Fit If:",
        level: 3,
        paragraphs: [
          "You want the look and feel of natural wood and the manufactured appearance of composite does not appeal to you. You are comfortable with a maintenance schedule and will actually follow it. The deck is going on a covered or partially covered structure where direct rain exposure is reduced. You are working with a tighter material budget and can offset the difference over time through DIY maintenance. The home's style calls for a warmer, more traditional outdoor look.",
        ],
      },
      {
        heading: "Composite Is Probably the Right Fit If:",
        level: 3,
        paragraphs: [
          "You have owned a wood deck before and know the maintenance did not happen consistently. The deck will see heavy daily use and you want a surface that holds up without annual attention. You want consistent color and appearance over ten or fifteen years without refinishing. The project budget accommodates the higher upfront material cost. The deck faces south or west and will get significant UV exposure that would accelerate cedar's need for resealing.",
        ],
      },
      {
        heading: "The One Thing We Tell Every Homeowner",
        level: 3,
        paragraphs: [
          "Do not choose cedar while telling yourself you will maintain it regularly if you genuinely will not. A neglected cedar deck in Everett's climate will start looking rough within three to four years and will need significant work within eight to ten.",
          "If honest self-assessment says you are unlikely to seal it on schedule, composite is the right call - even if you prefer the look of wood.",
        ],
      },
    ],
    slug: "cedar-vs-composite-decking-everett",
    title: "Cedar vs Composite Decking: Which Is Better for Pacific Northwest Weather?",
  },
  {
    category: "Decks",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Understand expected deck lifespan, what shortens it, and how to plan repairs before structural issues grow.",
    image: servicesWoodDeck,
    imageAlt: "Wood deck in rainy Pacific Northwest setting",
    readTime: "4 min read",
    relatedSlugs: [
      "replace-your-deck-or-fence",
      "rain-moisture-outdoor-wood",
      "spring-checklist-decks-fences",
    ],
    sections: [
      {
        heading: "Typical lifespan in wet climates",
        paragraphs: [
          "A well-built and maintained wood deck in the Pacific Northwest can last many years, but moisture management is the biggest factor.",
          "Ventilation, drainage, and routine sealing all influence how long framing and surface boards stay healthy.",
        ],
      },
      {
        heading: "What shortens deck life",
        paragraphs: [
          "Standing water, trapped debris, and delayed maintenance can speed up wear. Shaded zones and high-moisture corners often age first.",
        ],
        bullets: [
          "Drainage that directs water toward framing",
          "Persistent algae or mildew growth",
          "Fastener corrosion or repeated board movement",
        ],
      },
      {
        heading: "Plan inspections before major damage",
        paragraphs: [
          "A yearly review helps catch repair items while costs stay manageable. Replacing worn parts early is usually less disruptive than waiting for structural failure.",
        ],
      },
      {
        heading: "What homeowners should document each year",
        paragraphs: [
          "A simple annual record helps identify patterns: areas that stay wet, recurring movement, or repeated fastener issues. This makes future repair planning more accurate.",
          "Photograph stair connections, railing posts, and deck-to-home transition points during each inspection cycle. These are common locations for early wear in Pacific Northwest conditions.",
        ],
        bullets: [
          "Record board movement, soft spots, and rail stability",
          "Track sealing and cleaning dates by season",
          "Note drainage problems after heavy rainfall",
          "Flag areas needing professional assessment before winter",
        ],
      },
      {
        heading: "Typical lifespan ranges by maintenance level",
        paragraphs: [
          "Well-maintained decks generally outperform neglected ones by a wide margin. The difference is often driven by moisture control, cleaning frequency, and timely repair decisions.",
          "Even durable materials degrade faster when drainage, airflow, and connection integrity are not monitored consistently.",
        ],
        bullets: [
          "High consistency maintenance: best long-term performance",
          "Occasional maintenance: moderate lifespan variability",
          "Reactive-only maintenance: elevated risk of early replacement",
        ],
      },
      {
        heading: "Case example: extending deck life with early intervention",
        paragraphs: [
          "A homeowner noticed minor stair movement and recurring algae in one corner. Early repair plus drainage correction prevented wider framing damage.",
          "Because issues were addressed early, replacement was delayed and safety improved without major disruption.",
        ],
      },
    ],
    slug: "wood-deck-lifespan-pnw",
    title: "How Long Does a Wood Deck Last in the Pacific Northwest?",
  },
  {
    category: "Fences",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Review the pros and trade-offs of cedar, chain link, and other fence options for privacy, weather resistance, and upkeep.",
    image: servicesFenceRoad,
    imageAlt: "Fence material options for Seattle homes",
    readTime: "5 min read",
    relatedSlugs: [
      "fence-posts-failing-signs",
      "prepare-yard-fence-deck-project",
      "seattle-permits-outdoor-projects",
    ],
    sections: [
      {
        heading: "Match material to yard priorities",
        paragraphs: [
          "For Seattle homeowners, privacy level, maintenance preference, and slope conditions often matter more than trend-based material choices.",
        ],
      },
      {
        heading: "Common options and trade-offs",
        paragraphs: [
          "Cedar provides a natural look and privacy. Chain link is practical for security and clear boundaries. Hybrid designs can balance privacy with airflow.",
        ],
        bullets: [
          "Cedar: strong curb appeal and privacy",
          "Chain link: practical, durable, and budget friendly",
          "Custom layouts: better fit for sloped or irregular yards",
        ],
      },
      {
        heading: "Plan for moisture and footing stability",
        paragraphs: [
          "Post setting, drainage, and panel spacing should be planned for wet seasons to reduce movement and early wear.",
        ],
      },
      {
        heading: "How to choose the best fence setup for your lot",
        paragraphs: [
          "Material is only part of fence performance. Layout decisions - gate location, panel height transitions, and slope handling - strongly influence durability and everyday usability.",
          "For Seattle-area properties, consider privacy needs and runoff behavior together. A fence that looks good on day one should also remain stable through repeated wet seasons.",
        ],
        bullets: [
          "Select gate locations based on daily traffic patterns",
          "Plan panel transitions for slope and grade changes",
          "Use drainage-aware post strategy in moisture-prone zones",
          "Balance curb appeal with realistic maintenance expectations",
        ],
      },
      {
        heading: "Typical budget ranges by fence type",
        paragraphs: [
          "Fence budgets differ by material, linear footage, gate count, and slope complexity. A practical estimate should separate base installation from optional upgrades.",
          "Higher-cost options may provide better durability or lower maintenance depending on your site conditions and priorities.",
        ],
        bullets: [
          "Simple boundary runs: lower complexity and cost",
          "Multiple gates and transitions: higher labor impact",
          "Slope-heavy layouts: additional planning and installation effort",
        ],
      },
      {
        heading: "Seattle neighborhood scenario: privacy goals on compact lots",
        paragraphs: [
          "In tighter neighborhoods, homeowners often need privacy without making the yard feel closed-in. Mixed-height or strategic panel sections can improve both comfort and appearance.",
          "Early layout planning around sightlines and access paths helps avoid expensive adjustments later.",
        ],
      },
    ],
    slug: "best-fence-materials-seattle",
    title: "Best Fence Materials for Seattle Homes",
  },
  {
    category: "Maintenance",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "See how moisture, standing water, and shade impact outdoor wood and what routine maintenance protects your investment.",
    image: gardenFenceTrees,
    imageAlt: "Moisture exposure on outdoor cedar fence boards",
    readTime: "6 min read",
    relatedSlugs: [
      "wood-deck-lifespan-pnw",
      "spring-checklist-decks-fences",
      "replace-your-deck-or-fence",
    ],
    sections: [
      {
        heading: "Why Seattle moisture needs special attention",
        paragraphs: [
          "Frequent rain and seasonal dampness keep wood surfaces wet longer. Without airflow and maintenance, this can increase rot risk and shorten service life.",
        ],
      },
      {
        heading: "High-risk areas to watch first",
        paragraphs: [
          "Check horizontal surfaces, stair landings, and fence post bases first. These locations hold moisture and usually show early signs of wear.",
        ],
      },
      {
        heading: "Simple prevention routine",
        paragraphs: [
          "Routine cleaning, sealing, and debris removal protect both appearance and structure.",
        ],
        bullets: [
          "Remove leaves and debris from deck corners",
          "Clean mildew before it spreads",
          "Re-seal exposed wood based on product guidance",
        ],
      },
      {
        heading: "Season-by-season maintenance strategy",
        paragraphs: [
          "Maintenance works best when split into smaller seasonal tasks. Spring and fall are key checkpoints for cleaning, moisture review, and minor repairs.",
          "If your yard has dense shade or limited airflow, plan shorter inspection intervals. These sites often require more frequent attention to prevent hidden moisture retention.",
        ],
        bullets: [
          "Spring: clean surfaces and inspect structural movement",
          "Summer: perform sealing and targeted board replacement",
          "Fall: clear debris and confirm drainage before heavy rain",
          "Winter: monitor high-moisture zones and access safety",
        ],
      },
      {
        heading: "Typical moisture hotspots homeowners overlook",
        paragraphs: [
          "Many moisture issues begin in low-visibility areas: under stairs, near planters, deck-to-home transitions, and fence corners blocked by dense landscaping.",
          "These zones should be reviewed more often because they can hold moisture longer and hide early structural wear.",
        ],
      },
      {
        heading: "Case example: solving repeat algae and slip issues",
        paragraphs: [
          "A household reported repeated slippery conditions near one deck entry. Inspection showed poor drainage and debris accumulation in an adjacent corner.",
          "After cleaning protocol changes and minor drainage correction, slip risk dropped and surface condition stayed stable through wet months.",
        ],
      },
    ],
    slug: "rain-moisture-outdoor-wood",
    title: "How Rain and Moisture Affect Outdoor Wood Structures",
  },
  {
    category: "Planning",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Use practical pre-project steps so your crew can work safely, efficiently, and on schedule from day one.",
    image: horizontalWoodFence,
    imageAlt: "Backyard prepared for fence and deck installation",
    readTime: "4 min read",
    relatedSlugs: [
      "best-fence-materials-seattle",
      "questions-before-hiring-deck-builder",
      "seattle-permits-outdoor-projects",
    ],
    sections: [
      {
        heading: "Clear site access before start day",
        paragraphs: [
          "Open pathways, move furniture, and mark irrigation or utility considerations before the crew arrives.",
        ],
      },
      {
        heading: "Align on scope and layout",
        paragraphs: [
          "Confirm property boundaries, gate swing direction, and deck use goals before materials are finalized.",
        ],
      },
      {
        heading: "Set realistic project expectations",
        paragraphs: [
          "Good communication about timeline, weather delays, and staging keeps the project smoother for both homeowners and crews.",
        ],
      },
      {
        heading: "Pre-construction planning that saves time",
        paragraphs: [
          "Define decision deadlines before work starts: material approvals, gate placement, and any optional upgrades. This reduces mid-project delays and helps crews stay on sequence.",
          "Ask how schedule changes are communicated and how weather days are handled. In Seattle, clear process for rain-related adjustments is essential for predictable execution.",
        ],
        bullets: [
          "Confirm who approves changes and by when",
          "Set communication cadence for project milestones",
          "Prepare a staging area for tools and materials",
          "Review final scope one more time before kickoff",
        ],
      },
      {
        heading: "Typical pre-construction timeline for homeowners",
        paragraphs: [
          "Most successful projects follow a practical sequence: scope confirmation, material finalization, site prep, scheduling, then installation kickoff.",
          "Allow extra planning time for permit-related items, specialty materials, or access constraints that can affect start dates.",
        ],
      },
      {
        heading: "Case example: reducing delays with better site prep",
        paragraphs: [
          "A homeowner who pre-cleared access paths, confirmed utility notes, and finalized gate layout before start avoided common first-week delays.",
          "The crew stayed on schedule because staging, approvals, and daily workflow decisions were already aligned.",
        ],
      },
    ],
    slug: "prepare-yard-fence-deck-project",
    title: "How to Prepare Your Yard Before a Fence or Deck Project",
  },
  {
    category: "Seattle Homes",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Learn where permits are commonly needed, what site factors matter, and how better planning avoids costly delays.",
    image: deckWithRailingHouse,
    imageAlt: "Seattle home deck and railing planning requirements",
    readTime: "6 min read",
    relatedSlugs: [
      "prepare-yard-fence-deck-project",
      "questions-before-hiring-deck-builder",
      "best-fence-materials-seattle",
    ],
    sections: [
      {
        heading: "Projects that often need permit review",
        paragraphs: [
          "Permits can be required for many structural changes, including certain deck builds, stair modifications, and boundary-sensitive fence work.",
        ],
      },
      {
        heading: "Seattle-specific planning factors",
        paragraphs: [
          "Slope, drainage, neighboring structures, and access constraints can all affect scheduling and installation approach.",
        ],
      },
      {
        heading: "Avoid delays with early coordination",
        paragraphs: [
          "Discuss permit paths, inspection timing, and scope details before final scheduling so your project starts with fewer surprises.",
        ],
      },
      {
        heading: "How to coordinate timelines with fewer surprises",
        paragraphs: [
          "Timeline stability improves when permit review, material lead times, and site readiness are planned together. Isolated planning often creates avoidable delays.",
          "For Seattle homes, include weather flexibility and inspection windows in your schedule assumptions. This makes timeline conversations more realistic and less stressful.",
        ],
        bullets: [
          "Align permit milestones with material ordering schedule",
          "Confirm inspection sequence before installation start",
          "Prepare site access in advance of crew arrival",
          "Set contingency plan for weather-related shifts",
        ],
      },
      {
        heading: "Typical permit and inspection timeline ranges",
        paragraphs: [
          "Timeline ranges vary by scope and review path, but homeowners should plan for multiple stages: documentation, review, approvals, and inspection checkpoints during construction.",
          "Building schedule flexibility around these stages usually reduces stress and prevents avoidable idle time.",
        ],
      },
      {
        heading: "Case example: avoiding rework through early coordination",
        paragraphs: [
          "One project team aligned permit documents, material ordering, and site prep before final scheduling. When inspection windows opened, work progressed without major scope changes.",
          "The result was fewer interruptions and stronger predictability for both homeowner and crew.",
        ],
      },
    ],
    slug: "seattle-permits-outdoor-projects",
    title: "Permits and Planning for Outdoor Projects in Seattle",
  },
  {
    category: "Fences",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Identify leaning sections, soft posts, and hidden base rot before a repair turns into a full replacement.",
    image: servicesChainLinkFence,
    imageAlt: "Fence posts showing early movement and repair needs",
    readTime: "4 min read",
    relatedSlugs: [
      "best-fence-materials-seattle",
      "replace-your-deck-or-fence",
      "rain-moisture-outdoor-wood",
    ],
    sections: [
      {
        heading: "Early warning signs homeowners miss",
        paragraphs: [
          "Fence failure often starts at the post base. Leaning panels, gate drag, and uneven top lines usually appear before full failure.",
        ],
      },
      {
        heading: "Check after heavy rain periods",
        paragraphs: [
          "Soil movement and moisture around post footings can accelerate instability, especially in older installations.",
        ],
        bullets: [
          "Post movement when pushed by hand",
          "Panel seams opening over time",
          "Gate latch no longer aligning",
        ],
      },
      {
        heading: "Repair early to avoid full rebuild",
        paragraphs: [
          "Targeted post replacement and reinforcement can often stabilize sections before broader replacement becomes necessary.",
        ],
      },
      {
        heading: "How to prioritize fence repairs by urgency",
        paragraphs: [
          "Start with structural and safety concerns: unstable posts, gate failures, and sections that can shift with light pressure. Cosmetic upgrades can follow after stability is restored.",
          "If multiple sections show movement, request a phased plan that identifies immediate stabilization work and medium-term replacement options.",
        ],
        bullets: [
          "Stabilize gates and high-use entries first",
          "Address leaning lines before panel separation worsens",
          "Separate structural repairs from appearance updates",
          "Use phased budgeting for larger fence systems",
        ],
      },
      {
        heading: "Typical repair vs replacement cost ranges for posts",
        paragraphs: [
          "Localized post repair is generally lower-cost than replacing large fence sections, but costs rise quickly when movement affects gates, multiple lines, or footing integrity.",
          "Request estimates that separate immediate stabilization from longer-term replacement options so budgeting stays clear.",
        ],
      },
      {
        heading: "Case example: stabilizing a failing fence line in phases",
        paragraphs: [
          "A homeowner with recurring gate drag and two leaning sections prioritized high-use access points first, then replaced weaker runs the following season.",
          "Phased execution improved safety and appearance while distributing budget across manageable stages.",
        ],
      },
    ],
    slug: "fence-posts-failing-signs",
    title: "How to Tell If Your Fence Posts Are Failing",
  },
  {
    category: "Maintenance",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Follow a simple seasonal checklist for cleaning, inspecting, and protecting cedar decks and fences in wet weather.",
    image: servicesCompositeDeck,
    imageAlt: "Seasonal maintenance checklist for deck and fence surfaces",
    readTime: "5 min read",
    relatedSlugs: [
      "rain-moisture-outdoor-wood",
      "wood-deck-lifespan-pnw",
      "best-fence-materials-seattle",
    ],
    sections: [
      {
        heading: "Spring checklist priorities",
        paragraphs: [
          "Spring is the best time to reset maintenance after winter moisture. Start with cleaning and a full visual review.",
        ],
        bullets: [
          "Wash surfaces and remove algae buildup",
          "Check stairs, rails, and gates for movement",
          "Inspect post bases and connection points",
        ],
      },
      {
        heading: "Summer touch-ups that matter",
        paragraphs: [
          "Dry season is ideal for sealing, board replacement, and small repairs before wet conditions return.",
        ],
      },
      {
        heading: "Set a repeatable annual routine",
        paragraphs: [
          "Consistent maintenance extends lifespan and helps avoid high-cost emergency repairs.",
        ],
      },
      {
        heading: "Build a practical maintenance calendar",
        paragraphs: [
          "Homeowners get better results when maintenance is scheduled in advance instead of performed reactively. A calendar-based approach improves consistency and cost planning.",
          "Link each task to typical Seattle weather windows so cleaning, sealing, and repair timing stays realistic year to year.",
        ],
        bullets: [
          "Schedule two structural checks per year",
          "Reserve dry-season windows for sealing work",
          "Document recurring issue areas after each inspection",
          "Plan small repairs before rainy season intensifies",
        ],
      },
      {
        heading: "Typical spring maintenance budget ranges",
        paragraphs: [
          "Maintenance costs vary by project size and condition, but routine cleaning and minor repairs are usually far less expensive than delayed structural work.",
          "Budgeting a predictable annual maintenance amount helps avoid emergency spending during wet seasons.",
        ],
      },
      {
        heading:
          "Case example: seasonal checklist that prevented major repairs",
        paragraphs: [
          "A homeowner using a structured spring checklist found early post movement and loose rail hardware before damage spread.",
          "Small corrective work completed in dry weather prevented larger framing and gate issues later in the year.",
        ],
      },
    ],
    slug: "spring-checklist-decks-fences",
    title: "Spring Deck and Fence Maintenance Checklist for Everett Homeowners",
  },
  {
    category: "Planning",
    dateLabel: "Updated Apr 2026",
    excerpt:
      "Use these homeowner questions to evaluate communication, project clarity, and long-term quality before you hire.",
    image: servicesWoodDeck,
    imageAlt: "Homeowner planning questions for deck builder interviews",
    readTime: "5 min read",
    relatedSlugs: [
      "replace-your-deck-or-fence",
      "prepare-yard-fence-deck-project",
      "seattle-permits-outdoor-projects",
    ],
    sections: [
      {
        heading: "Ask how scope is documented",
        paragraphs: [
          "A clear estimate should define materials, layout, timeline assumptions, and what happens if conditions change during the job.",
        ],
      },
      {
        heading: "Ask about communication cadence",
        paragraphs: [
          "Good builders set expectations for updates, decision points, and final walkthrough steps so homeowners stay informed.",
        ],
      },
      {
        heading: "Ask how quality is protected",
        paragraphs: [
          "Request details on framing standards, moisture planning, and final checks before project closeout.",
        ],
      },
      {
        heading: "How to compare bids without confusion",
        paragraphs: [
          "Compare estimates using the same scope assumptions: materials, timeline, site conditions, and change-order process. Price alone does not show project quality.",
          "A reliable proposal should explain communication process, cleanup expectations, and final walkthrough criteria so homeowners know exactly what completion looks like.",
        ],
        bullets: [
          "Check if bids include equivalent material specs",
          "Review assumptions about drainage and site prep",
          "Ask how changes are priced and approved",
          "Confirm handoff and warranty documentation process",
        ],
      },
      {
        heading: "Typical proposal red flags to watch for",
        paragraphs: [
          "Red flags often include vague scope language, missing assumptions, unclear change-order process, or no clear closeout criteria.",
          "If an estimate cannot explain materials, timeline assumptions, and quality checkpoints in plain language, comparison becomes unreliable.",
        ],
        bullets: [
          "No clear breakdown between structural and finish scope",
          "Unclear responsibility for weather and schedule changes",
          "Missing details on cleanup, final walkthrough, or warranty",
        ],
      },
      {
        heading: "Case example: comparing two bids with clear scope criteria",
        paragraphs: [
          "A homeowner received two differently priced proposals. After normalizing scope assumptions, material details, and timeline process, the comparison became clear and actionable.",
          "The final choice was based on transparency and quality process rather than headline price alone.",
        ],
      },
    ],
    slug: "questions-before-hiring-deck-builder",
    title: "10 Questions to Ask a Deck Builder Before You Sign Anything",
  },
];

const articleSeoBySlug: Record<string, BlogArticleSeo> = {
  "replace-your-deck-or-fence": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "deck repair vs replacement seattle",
    searchIntent: "informational",
    secondaryKeywords: [
      "fence repair vs replacement",
      "deck replacement signs",
      "when to replace a fence",
      "seattle deck contractor advice",
      "outdoor structure safety checklist",
    ],
  },
  "cedar-vs-composite-decking-everett": {
    dateModifiedIso: "2026-04-24",
    datePublishedIso: "2026-04-20",
    metaDescription:
      "Cedar or composite? A practical comparison for Everett and Snohomish County homeowners - maintenance, cost, appearance, and how each material performs in Pacific Northwest weather. From Northwood Renovation, Everett deck builders.",
    primaryKeyword: "cedar vs composite decking everett",
    seoTitle:
      "Cedar vs Composite Decking: Which Is Better for Everett & Pacific Northwest Weather? | Northwood Renovation",
    searchIntent: "commercial investigation",
    secondaryKeywords: [
      "best decking material everett weather",
      "cedar deck maintenance everett",
      "composite decking pros and cons",
      "deck material comparison pacific northwest",
      "everett deck builder",
    ],
  },
  "wood-deck-lifespan-pnw": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "wood deck lifespan pacific northwest",
    searchIntent: "informational",
    secondaryKeywords: [
      "how long does a cedar deck last",
      "deck maintenance lifespan tips",
      "seattle deck moisture damage",
      "deck inspection checklist",
      "wood deck replacement timeline",
    ],
  },
  "best-fence-materials-seattle": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "best fence materials for seattle homes",
    searchIntent: "commercial investigation",
    secondaryKeywords: [
      "cedar fence seattle",
      "privacy fence material options",
      "fence installation seattle weather",
      "fence durability rainy climate",
      "fence contractor planning guide",
    ],
  },
  "rain-moisture-outdoor-wood": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "rain effect on outdoor wood structures",
    searchIntent: "informational",
    secondaryKeywords: [
      "moisture damage deck and fence",
      "seattle outdoor wood maintenance",
      "prevent wood rot outside",
      "deck algae mildew prevention",
      "pacific northwest wood care",
    ],
  },
  "prepare-yard-fence-deck-project": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "prepare yard for fence or deck project",
    searchIntent: "informational",
    secondaryKeywords: [
      "before fence installation checklist",
      "deck project planning steps",
      "site prep for outdoor renovation",
      "seattle backyard project prep",
      "homeowner pre-construction checklist",
    ],
  },
  "seattle-permits-outdoor-projects": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "seattle permits for deck and fence projects",
    searchIntent: "informational",
    secondaryKeywords: [
      "deck permit seattle",
      "fence permit planning seattle",
      "outdoor renovation permit checklist",
      "seattle project timeline planning",
      "permit and inspection outdoor work",
    ],
  },
  "fence-posts-failing-signs": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "signs fence posts are failing",
    searchIntent: "informational",
    secondaryKeywords: [
      "leaning fence post repair",
      "fence post rot signs",
      "when to replace fence posts",
      "seattle fence repair guide",
      "gate alignment fence issues",
    ],
  },
  "spring-checklist-decks-fences": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "spring maintenance checklist decks and fences",
    searchIntent: "informational",
    secondaryKeywords: [
      "deck spring maintenance tips",
      "fence seasonal maintenance",
      "seattle deck cleaning checklist",
      "wood fence maintenance rainy weather",
      "annual outdoor wood care routine",
    ],
  },
  "questions-before-hiring-deck-builder": {
    dateModifiedIso: "2026-04-20",
    datePublishedIso: "2026-04-20",
    primaryKeyword: "questions to ask before hiring a deck builder",
    searchIntent: "commercial investigation",
    secondaryKeywords: [
      "how to choose deck contractor",
      "fence builder interview questions",
      "deck estimate comparison checklist",
      "seattle outdoor contractor hiring tips",
      "homeowner contractor vetting guide",
    ],
  },
};

const articleGuideBySlug: Record<string, BlogArticleGuide> = {
  "replace-your-deck-or-fence": {
    checklist: [
      "Review rails, stairs, and framing for movement before focusing on cosmetic issues.",
      "Document moisture-prone zones and compare repair vs replacement cost over 24 to 36 months.",
      "Ask for a scope that separates structural fixes, finish updates, and optional upgrades.",
      "Confirm whether drainage, ventilation, and fastener strategy are included in the plan.",
      "Prioritize safety-critical work first if you need to phase budget.",
      "Schedule a final walkthrough with a written punch list.",
    ],
    faq: [
      {
        question:
          "What is the biggest sign replacement may be better than repair?",
        answer:
          "When structural damage is widespread across multiple areas, repeated repairs usually cost more over time than rebuilding correctly once.",
      },
      {
        question: "Can I repair now and replace later?",
        answer:
          "Yes. Many homeowners stabilize high-risk sections first, then plan full replacement once scope and budget are clearer.",
      },
      {
        question: "How do I compare two proposals fairly?",
        answer:
          "Compare assumptions line by line: structural scope, materials, drainage approach, schedule flexibility, and closeout standards.",
      },
      {
        question: "Is moisture damage always visible from the surface?",
        answer:
          "No. Hidden framing and connection points can be compromised before top surfaces show obvious signs.",
      },
      {
        question: "How quickly should I act on structural movement?",
        answer:
          "Promptly. Rail instability, stair shift, or soft framing should be assessed quickly to reduce safety risk and avoid larger repairs.",
      },
    ],
    introParagraphs: [
      "Homeowners often face this decision after noticing visible wear, but the right answer depends on structure, moisture exposure, and long-term use goals.",
      "This guide explains how to evaluate safety, cost, and project scope so you can choose a practical path for your Seattle property.",
    ],
    localNotes: [
      "Seattle rain can keep framing damp for extended periods, especially in shaded backyards with limited airflow.",
      "Moisture management at connection points often determines whether a repair lasts or fails early.",
      "Projects in sloped or tight-lot neighborhoods typically need more detailed drainage and access planning.",
    ],
    proSectionBullets: [
      "You feel stair or railing movement during normal use.",
      "Deck-to-home transition points show moisture staining or structural concern.",
      "Multiple fence lines lean after rain events.",
      "Scope includes structural changes, not just board swaps.",
      "You need a phased plan that protects safety while controlling budget.",
    ],
  },
  "cedar-vs-composite-decking-everett": {
    checklistHeading: "Homeowner Checklist Before You Start",
    checklistIntro:
      "Before choosing your material, it helps to think through a few key points:",
    checklist: [
      "Do you prefer natural wood or low maintenance?",
      "How much time will you spend on upkeep each year?",
      "Is your yard mostly shaded or open to sun?",
      "What is your long-term budget, not just upfront cost?",
      "Do you want the deck to match existing structures?",
    ],
    faq: [
      {
        question: "Which material lasts longer in Everett's climate?",
        answer:
          "Both can last fifteen to twenty-five years or more when installed and maintained correctly. The difference is in what maintained correctly means for each. Cedar needs regular sealing. Composite needs almost nothing. Decks that fail early in this climate usually have installation problems - improper flashing, incorrect post footings, or the wrong fasteners - more than material problems.",
      },
      {
        question: "Can I switch from cedar to composite without rebuilding the frame?",
        answer:
          "Sometimes. If the existing pressure-treated frame is structurally sound and the joist spacing is compatible with composite installation specs, resurfacing with composite boards is possible. A frame with rot, soft spots, or incorrect joist spacing usually needs to be rebuilt before composite goes on.",
      },
      {
        question: "Does composite get slippery when wet?",
        answer:
          "Quality capped composite boards have textured surfaces that provide grip when wet. Current boards from quality manufacturers are designed with wet-weather traction in mind, but debris and mildew should still be cleaned off periodically.",
      },
      {
        question: "Is cedar still a good choice in 2026?",
        answer:
          "Yes. Cedar is still a reliable, well-performing material for Pacific Northwest decks. The choice between cedar and composite is a practical one based on maintenance preference and budget, not a question of one being obsolete.",
      },
      {
        question: "How do I know which composite board quality to ask for?",
        answer:
          "Ask specifically about capped composite boards and whether the product carries a warranty of twenty-five years or more. If a composite option is being offered at a much lower price than expected, it is worth asking whether it is capped or uncapped.",
      },
      {
        question: "What does a deck builder in Everett typically recommend?",
        answer:
          "We recommend cedar for homeowners who want natural wood and will maintain it. We recommend composite for homeowners who want low maintenance and do not want a recurring sealing schedule. The recommendation comes from understanding how the homeowner plans to use and maintain the space over time.",
      },
    ],
    introParagraphs: [
      "This article gives you a straight comparison based on what we see on actual builds and replacements in the Pacific Northwest - not a generic national comparison that does not account for the specific conditions Everett-area decks deal with.",
    ],
    localNotes: [],
    localNotesHeading: "Local Notes",
    localNotesIntro: "",
    proSectionHeading: "When to Talk to a Builder",
    proSectionIntro: "It's a good idea to get professional input if:",
    proSectionBullets: [
      "Your layout includes stairs or elevation changes.",
      "You are comparing multiple material options.",
      "You want a long-term cost recommendation.",
      "You are unsure how weather will affect your deck.",
    ],
  },
  "wood-deck-lifespan-pnw": {
    checklist: [
      "Perform full annual inspection of boards, rails, stairs, and framing.",
      "Track moisture retention zones after heavy rain periods.",
      "Document cleaning, sealing, and repair history by date.",
      "Prioritize high-traffic and high-exposure areas for early fixes.",
      "Schedule professional review if movement or soft spots appear.",
      "Budget for planned maintenance instead of emergency repairs.",
    ],
    faq: [
      {
        question: "What shortens deck lifespan most in the Pacific Northwest?",
        answer:
          "Persistent moisture, poor drainage, limited airflow, and delayed maintenance are the most common lifespan reducers.",
      },
      {
        question: "How often should I inspect framing components?",
        answer:
          "At least once per year, plus after severe weather or when you notice movement, noise, or soft areas.",
      },
      {
        question: "Can small issues really become structural problems?",
        answer:
          "Yes. Minor movement and moisture accumulation can develop into larger structural concerns if ignored.",
      },
      {
        question: "Is a maintenance log worth keeping?",
        answer:
          "Absolutely. It helps spot recurring trouble areas and improves planning for seasonal maintenance and repairs.",
      },
      {
        question:
          "When should I move from maintenance to replacement planning?",
        answer:
          "When structural concerns spread across multiple components or repeated repairs stop delivering reliable performance.",
      },
    ],
    introParagraphs: [
      "Deck lifespan depends less on one material decision and more on drainage, airflow, construction quality, and maintenance consistency.",
      "This article helps you understand what to monitor and how to plan repairs before service life drops unexpectedly.",
    ],
    localNotes: [
      "Pacific Northwest moisture cycles can stress stair transitions and railing posts faster than open-sun deck areas.",
      "Moss and algae buildup in shaded corners often indicates longer wet-time and higher wear risk.",
      "Seasonal inspection timing is critical in Seattle because wet and dry periods create different maintenance priorities.",
    ],
    proSectionBullets: [
      "Deck framing feels soft, unstable, or visibly compromised.",
      "Railings or stairs shift under normal household use.",
      "You see repeated moisture-related issues despite regular maintenance.",
      "Repairs now involve structural members, not only surface boards.",
      "You need help forecasting replacement timing and budget planning.",
    ],
  },
  "best-fence-materials-seattle": {
    checklist: [
      "Define your privacy goals before comparing material options.",
      "Map slope changes, gates, and access routes on your property.",
      "Compare maintenance effort across cedar, chain link, and hybrid designs.",
      "Review how each material handles Seattle rain and shade conditions.",
      "Ask for material-specific repair strategy and expected service life.",
      "Select layout and gate plan before final estimate approval.",
    ],
    faq: [
      {
        question: "Is cedar still a good fence option for Seattle?",
        answer:
          "Yes, cedar remains a strong local option when installation details and maintenance are handled consistently.",
      },
      {
        question: "How do I choose between privacy and airflow?",
        answer:
          "Choose based on lot exposure, neighborhood visibility, and yard use. Many homeowners use mixed approaches across different fence lines.",
      },
      {
        question: "Do sloped yards limit fence material options?",
        answer:
          "Not necessarily. Most materials can work with the right layout and transition planning for grade changes.",
      },
      {
        question: "What usually causes early fence movement?",
        answer:
          "Post instability, poor drainage, and unaddressed soil conditions are common contributors to premature movement.",
      },
      {
        question: "Can I phase fence replacement by section?",
        answer:
          "Yes. Section-by-section planning can work well if structural priorities and gate alignment are handled carefully.",
      },
    ],
    introParagraphs: [
      "Fence material choice affects privacy, maintenance, and long-term durability, especially in Seattle's wet climate.",
      "Use this guide to compare practical options and avoid design decisions that look good initially but underperform over time.",
    ],
    localNotes: [
      "Seattle neighborhoods often combine tight property lines and varied lot shapes, which makes layout planning just as important as material selection.",
      "Wet-season post stability should be considered early, particularly in yards with uneven drainage.",
      "Shaded fence runs usually need more active maintenance scheduling than sun-exposed sides.",
    ],
    proSectionBullets: [
      "You are unsure how to balance privacy, budget, and long-term upkeep.",
      "Property slope or boundary complexity affects layout decisions.",
      "Gate placements require traffic-flow and clearance planning.",
      "You need phased replacement without compromising overall alignment.",
      "Current fence movement suggests structural footing issues.",
    ],
  },
  "rain-moisture-outdoor-wood": {
    checklist: [
      "Inspect damp-prone surfaces after extended rain periods.",
      "Remove debris from deck corners, stairs, and fence base lines.",
      "Track recurring algae growth and surface slipperiness.",
      "Review drainage paths and standing water points seasonally.",
      "Schedule sealing and small repairs before wet season peaks.",
      "Escalate persistent moisture issues to a structural review.",
    ],
    faq: [
      {
        question: "Is discoloration always a structural issue?",
        answer:
          "Not always, but recurring discoloration in the same area can indicate persistent moisture exposure that needs attention.",
      },
      {
        question: "What areas usually trap moisture first?",
        answer:
          "Corners, stair transitions, board seams, and post bases are common moisture-retention zones.",
      },
      {
        question: "How often should I clean algae or mildew?",
        answer:
          "As soon as buildup appears. Early cleaning helps protect traction and reduces deeper moisture problems.",
      },
      {
        question: "Can sealing alone solve moisture issues?",
        answer:
          "Sealing helps, but drainage, airflow, and structural detailing are equally important for long-term control.",
      },
      {
        question:
          "When should moisture concerns trigger professional inspection?",
        answer:
          "If moisture-related symptoms keep returning in the same locations or if movement appears in rails, stairs, or posts.",
      },
    ],
    introParagraphs: [
      "Rain exposure is normal in Seattle, but long wet periods can accelerate wear when airflow and drainage are weak.",
      "This guide explains how moisture behaves around decks and fences and what homeowners can do before damage becomes structural.",
    ],
    localNotes: [
      "Seattle's mild temperatures and frequent moisture create ideal conditions for algae and mildew in low-sun zones.",
      "Drainage direction around patios, planters, and grade transitions often affects how quickly wood dries.",
      "Moisture patterns can vary dramatically across one yard depending on shade and wind exposure.",
    ],
    proSectionBullets: [
      "Moisture symptoms repeat despite routine cleaning and sealing.",
      "Rail, stair, or fence movement appears alongside damp conditions.",
      "Deck-to-home connection areas show persistent moisture stress.",
      "You suspect hidden framing exposure in hard-to-access areas.",
      "You need a long-term moisture mitigation strategy, not quick fixes.",
    ],
  },
  "prepare-yard-fence-deck-project": {
    checklist: [
      "Clear access routes for materials, tools, and crew movement.",
      "Mark irrigation, utilities, and sensitive landscaping zones.",
      "Confirm fence lines, gate swing, and deck-use priorities.",
      "Define decision deadlines for materials and layout approvals.",
      "Prepare a staging area to reduce daily site disruption.",
      "Align household schedule with key project milestones.",
    ],
    faq: [
      {
        question: "What should I do before the crew arrives?",
        answer:
          "Clear pathways, move outdoor items, identify utility concerns, and confirm final scope decisions.",
      },
      {
        question: "Do I need to remove landscaping first?",
        answer:
          "Only where required for safe access and layout. Coordinate with your builder so removals are targeted and minimal.",
      },
      {
        question: "How early should material choices be finalized?",
        answer:
          "Before schedule lock whenever possible. Late material changes often cause avoidable delays.",
      },
      {
        question: "How can I reduce project downtime?",
        answer:
          "Finalize decisions early, keep access clear, and confirm communication cadence for change requests.",
      },
      {
        question: "Can poor prep affect quality?",
        answer:
          "Yes. Inadequate access and unclear scope can impact sequencing, efficiency, and final workmanship consistency.",
      },
    ],
    introParagraphs: [
      "Good site preparation keeps outdoor projects safer, faster, and less disruptive for your household.",
      "This guide shows exactly what to organize before installation so your fence or deck project starts with fewer surprises.",
    ],
    localNotes: [
      "Seattle projects often require prep for wet conditions, limited access corridors, and uneven yard grading.",
      "Early coordination around utility routes and drainage can prevent costly mid-project adjustments.",
      "Backyard prep in dense neighborhoods should also consider neighbor access and visibility concerns.",
    ],
    proSectionBullets: [
      "You are unsure about utility, irrigation, or underground constraints.",
      "Property slope or layout complexity affects staging and access.",
      "Scope includes multiple structures and phased work decisions.",
      "Weather and timeline constraints require coordinated sequencing.",
      "You need a pre-construction checklist tied to real schedule milestones.",
    ],
  },
  "seattle-permits-outdoor-projects": {
    checklist: [
      "Identify whether your project scope typically requires permit review.",
      "Confirm boundary, elevation, and structural details before submitting plans.",
      "Coordinate permit timing with material lead times.",
      "Plan for inspection windows in your project schedule.",
      "Document change process if field conditions differ from plan.",
      "Keep communication clear between homeowner, builder, and reviewers.",
    ],
    faq: [
      {
        question: "Do all deck and fence projects require permits?",
        answer:
          "Not all, but many do depending on structural scope, height, and site-specific conditions. Verify requirements early.",
      },
      {
        question: "What causes permit-related delays most often?",
        answer:
          "Incomplete scope details, late design changes, and poor coordination between permitting and procurement are common causes.",
      },
      {
        question: "How should I plan around inspections?",
        answer:
          "Build inspection checkpoints into the schedule upfront so crews and materials are ready when approvals occur.",
      },
      {
        question: "Can I start some work while permitting progresses?",
        answer:
          "Only when allowed and clearly scoped. Confirm boundaries carefully to avoid compliance issues.",
      },
      {
        question: "How does Seattle weather affect permit timing?",
        answer:
          "Weather can affect sequencing around approved work stages, especially when inspections and site readiness must align closely.",
      },
    ],
    introParagraphs: [
      "Permits and inspections can feel complicated, but early planning keeps your project timeline more predictable.",
      "This guide explains what homeowners should coordinate first to avoid avoidable delays during fence and deck work in Seattle.",
    ],
    localNotes: [
      "Seattle projects often involve slope, drainage, and proximity factors that influence permitting path and sequencing.",
      "Inspection timing should be considered alongside weather windows and site access conditions.",
      "Neighborhood context can affect design constraints, especially for boundary-adjacent work.",
    ],
    proSectionBullets: [
      "You are unclear on permit applicability for your exact scope.",
      "Project includes structural elements, elevation changes, or complex boundaries.",
      "Timeline is tight and requires coordinated review + install planning.",
      "Design may need revision based on site or inspection feedback.",
      "You need help sequencing procurement with permit milestones.",
    ],
  },
  "fence-posts-failing-signs": {
    checklist: [
      "Inspect post bases after heavy rain and freeze-thaw cycles.",
      "Check gate alignment and latch fit at least seasonally.",
      "Look for panel drift, seam gaps, and uneven top lines.",
      "Test post movement gently by hand at key intervals.",
      "Address localized movement before full-line instability spreads.",
      "Request structural review when movement appears in multiple zones.",
    ],
    faq: [
      {
        question: "What is the earliest warning sign of post failure?",
        answer:
          "Minor lean or gate misalignment often appears before obvious structural collapse.",
      },
      {
        question: "Can one bad post affect the whole fence line?",
        answer:
          "Yes. Movement can transfer load and alignment issues into neighboring sections over time.",
      },
      {
        question: "Is post movement always caused by age?",
        answer:
          "Not always. Drainage, soil condition, and installation method also strongly affect post stability.",
      },
      {
        question: "Can I just rehang a gate to fix alignment?",
        answer:
          "Sometimes temporarily, but recurring misalignment often points to underlying post movement that should be addressed directly.",
      },
      {
        question: "When should I replace instead of repair posts?",
        answer:
          "When movement is widespread, footing integrity is poor, or repeated repairs fail to hold alignment.",
      },
    ],
    introParagraphs: [
      "Fence post problems usually start small, then become expensive if ignored.",
      "This guide helps you identify early warning signs and choose practical next steps before full replacement is unavoidable.",
    ],
    localNotes: [
      "Seattle rain can soften soils around older footings, increasing risk of lean and alignment drift.",
      "Shaded boundary lines may hide early post deterioration longer than open-sun fence sections.",
      "Drainage path changes over time can create new pressure points on existing fence lines.",
    ],
    proSectionBullets: [
      "Multiple posts move under light pressure.",
      "Gate function fails repeatedly after adjustments.",
      "Fence line lean is increasing season over season.",
      "You suspect footing deterioration across several sections.",
      "Repair decisions now involve structural reset, not minor hardware.",
    ],
  },
  "spring-checklist-decks-fences": {
    checklist: [
      "Clean all horizontal surfaces before detailed inspection.",
      "Check rail, stair, and post stability after winter moisture.",
      "Inspect fasteners, connectors, and hardware for corrosion.",
      "Schedule sealing and targeted repairs during dry windows.",
      "Document recurring trouble areas to track year-over-year change.",
      "Set mid-season and pre-fall follow-up tasks in advance.",
    ],
    faq: [
      {
        question: "Why is spring the best time for inspection?",
        answer:
          "It reveals winter moisture impact and leaves enough dry-season time for proactive repair and sealing.",
      },
      {
        question: "What should I prioritize first each spring?",
        answer:
          "Safety-critical items: rail stability, stair condition, post integrity, and high-traffic surfaces.",
      },
      {
        question: "Can I delay maintenance until summer?",
        answer:
          "You can delay some finish work, but structural checks should happen early to catch hidden moisture issues.",
      },
      {
        question: "How detailed should my annual checklist be?",
        answer:
          "Detailed enough to track recurring issues, completed tasks, and pending repairs for future planning.",
      },
      {
        question: "When should spring maintenance trigger professional help?",
        answer:
          "If inspection shows structural movement, widespread rot, or repeated failures from prior fixes.",
      },
    ],
    introParagraphs: [
      "Spring maintenance is the easiest time to prevent expensive deck and fence repairs later in the year.",
      "This checklist-focused guide helps Seattle homeowners move from quick visual checks to practical, repeatable upkeep.",
    ],
    localNotes: [
      "Seattle spring often reveals moisture effects from long damp seasons that were not obvious during winter use.",
      "Dry windows can be short, so planning repair and sealing sequence early improves results.",
      "Shaded zones and drainage corners should be inspected with extra attention each spring cycle.",
    ],
    proSectionBullets: [
      "Spring inspection reveals structural movement in rails, stairs, or posts.",
      "Moisture-related symptoms persist in the same zones year after year.",
      "You find corrosion or deterioration in key connectors.",
      "Required repair scope exceeds routine homeowner maintenance.",
      "You need a multi-season maintenance and repair roadmap.",
    ],
  },
  "questions-before-hiring-deck-builder": {
    checklist: [
      "Prepare your project goals and must-have features before interviews.",
      "Request scope detail that separates structural work from finish upgrades.",
      "Ask how timeline changes are communicated and documented.",
      "Review material recommendations and maintenance implications.",
      "Confirm cleanup, closeout, and final walkthrough process.",
      "Compare proposals with matching assumptions before deciding.",
    ],
    faq: [
      {
        question: "What should I ask first in a contractor meeting?",
        answer:
          "Start with scope clarity: what is included, what is optional, and what assumptions are built into pricing.",
      },
      {
        question: "How can I avoid choosing on price alone?",
        answer:
          "Compare communication quality, structural approach, timeline transparency, and closeout standards alongside pricing.",
      },
      {
        question: "Should I ask about maintenance during bidding?",
        answer:
          "Yes. Long-term maintenance expectations should influence material and detail decisions before contract finalization.",
      },
      {
        question: "What indicates a strong proposal?",
        answer:
          "Specific scope language, realistic schedule assumptions, clear change-order process, and defined completion criteria.",
      },
      {
        question: "How important is local Seattle experience?",
        answer:
          "Very important. Local climate, drainage, and neighborhood conditions affect both design choices and execution strategy.",
      },
    ],
    introParagraphs: [
      "Choosing a builder is easier when you ask practical questions tied to scope, communication, quality, and long-term performance.",
      "This guide helps you run better project conversations and compare options without guesswork.",
    ],
    localNotes: [
      "Seattle project planning should account for moisture exposure, access limits, and schedule flexibility around weather.",
      "Contractor recommendations should reflect site-specific conditions, not only standard templates.",
      "Neighborhood privacy and slope factors often influence final layout more than homeowners expect.",
    ],
    proSectionBullets: [
      "You are receiving proposals with very different scope assumptions.",
      "Your project includes structural complexity or phased budgeting decisions.",
      "You need support evaluating lifecycle value, not only install price.",
      "Timeline, design, and cost priorities conflict and need mediation.",
      "You want pre-construction planning support before signing final scope.",
    ],
  },
};

export const blogArticles: BlogArticle[] = baseBlogArticles.map((article) => ({
  ...article,
  authorName: "Northwood Renovation Team",
  ...articleGuideBySlug[article.slug],
  ...articleSeoBySlug[article.slug],
}));

export const popularGuideSlugs = [
  "cedar-vs-composite-decking-everett",
  "fence-posts-failing-signs",
  "spring-checklist-decks-fences",
];

export const getBlogArticleBySlug = (slug: string) =>
  blogArticles.find((article) => article.slug === slug);
