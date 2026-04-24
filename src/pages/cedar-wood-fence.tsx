import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import gardenFenceTrees from "../images/gallery/garden-fence-trees.jpeg";

const seoTitle =
  "Cedar Wood Fence Installation in Everett, WA — Privacy Fence Builder | Northwood Renovation";
const seoDescription =
  "Northwood Renovation installs cedar wood fences in Everett, WA and Snohomish County. Board-on-board privacy fences, horizontal cedar, dog-ear, and custom styles. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Board-on-board, horizontal, dog-ear, and custom cedar styles",
    text: "We build around the actual property and the privacy level you want instead of forcing every yard into one default fence layout.",
  },
  {
    title: "Concrete-set posts planned for Snohomish County soil conditions",
    text: "Post depth, spacing, and footing decisions are made for the fence height, style, and soil on site so the line stays straight and the gates stay aligned.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get a real property walkthrough, style guidance, and a written estimate before making a decision.",
  },
];

const fenceStyles = [
  {
    title: "Board-on-Board Privacy Fence",
    text: "Board-on-board is the most common privacy fence style in Snohomish County. Boards are installed on alternating sides of the rail, overlapping slightly, so there are no gaps between them. This gives full privacy from any angle — unlike a standard picket fence where gaps appear when you view it from the side.",
    extra:
      "Board-on-board also handles seasonal wood movement well. The overlapping boards can shift slightly with moisture changes without the fence developing obvious gaps or tight spots. It's a forgiving design that holds up well in a wet climate.",
  },
  {
    title: "Dog-Ear Privacy Fence",
    text: "Dog-ear fencing is the traditional style — boards installed side-by-side with the top corners clipped. It's a clean, classic residential look that works on most Everett home styles. Unlike board-on-board, dog-ear boards are installed flush to each other without overlap, which means gaps can appear between boards over time as wood dries and contracts.",
    extra:
      "For a fully enclosed backyard where complete privacy is the goal, board-on-board performs better in the long term. For a boundary fence or side yard where some visibility isn't a problem, dog-ear is a cost-effective and clean-looking option.",
  },
  {
    title: "Horizontal Cedar Fence",
    text: "Horizontal cedar fencing has become popular in Everett over the past several years, particularly on newer homes and modern exterior styles. Boards run horizontally rather than vertically, creating a contemporary look that suits craftsman and modern farmhouse homes well.",
    extra:
      "The installation requires more attention to post sizing and spacing than a vertical fence because horizontal boards put more lateral load on the posts. We use appropriate post dimensions and deeper footings on horizontal fencing to account for that load difference. A horizontal fence built with undersized posts will start to lean within a few years in Pacific Northwest soil — this is one of the most common failure modes we see on horizontal fences built by less experienced crews.",
  },
  {
    title: "Shadowbox Fence",
    text: "Shadowbox fencing is a variation on board-on-board where the board spacing is wider and the alternating pattern is more visible. It provides partial privacy — enough to define the yard clearly without fully enclosing it — while allowing air circulation through the fence.",
    extra:
      "It's a good option for front yard fencing where a full privacy fence would feel out of place, or for a property boundary where the neighbor relationship is friendly and full enclosure isn't needed.",
  },
  {
    title: "Custom Cedar Layouts",
    text: "Some projects don't fit neatly into a standard style. A yard that slopes across the fence run needs racked or stepped panels. A property with a decorative garden fence that transitions into a privacy fence at the back needs different heights and styles joined cleanly. A fence that needs to work around an existing tree or structure requires adjusted bay spacing.",
    extra:
      "We handle custom cedar layouts regularly across Everett and Snohomish County. The estimate visit is where those details get worked out — we look at the property, identify the constraints, and plan a layout that addresses them rather than ignoring them.",
  },
];

const materials = [
  {
    title: "Western Red Cedar Boards",
    text: "We use Western red cedar for fence boards — not hemlock, not pine, not whatever species is cheapest at the lumber yard that week. Western red cedar is specifically suited to outdoor exposure in wet climates. It has natural tannins that resist moisture and decay without treatment, a stable grain that handles seasonal movement better than many alternatives, and a warm reddish tone that develops character as it ages.",
    extra:
      "Cedar boards are available in several grades. Clear cedar has minimal knots and a cleaner appearance — it costs more but is worth considering for a fence that runs along the street or a visible side yard. Tight-knot cedar has more knot character and handles weather just as well — it's the standard choice for backyard privacy fencing where appearance from the neighbors' side matters less than performance.",
  },
  {
    title: "Posts: Pressure-Treated or Cedar",
    text: "Fence posts are the most critical structural element and the part most likely to fail first. We always use pressure-treated posts for cedar fencing in Everett — not cedar posts, despite what some homeowners expect.",
    extra:
      "Cedar is excellent for above-ground fence boards but is not rated for ground contact. Fence posts are buried in soil that holds moisture year-round in the Pacific Northwest. A cedar post in the ground will rot at the soil line within five to eight years in this climate. Pressure-treated posts are specifically manufactured for ground contact and direct soil exposure — they'll outlast cedar posts significantly in a wet climate.",
    extraTwo:
      "We set posts in concrete to the appropriate depth for the soil conditions and fence height. A 6-foot privacy fence typically requires posts set at 24 to 36 inches depth. Horizontal fences and taller installations may require deeper footings.",
  },
  {
    title: "Rails and Fasteners",
    text: "Horizontal rails that connect the posts and support the boards are either pressure-treated lumber or cedar, depending on the fence style and exposure. Fasteners — screws, nails, and hardware — are always galvanized or stainless steel.",
    extra:
      "Standard fasteners rust quickly in Everett's wet climate, leave rust stains on the cedar boards around them, and eventually lose their grip. Corrosion-resistant hardware is not optional on outdoor cedar fencing in this climate — it's the difference between a fence that holds together for fifteen years and one that starts looking rough in five.",
  },
  {
    title: "Gate Hardware",
    text: "Gate hardware takes more abuse than any other part of the fence. Hinges, latches, and cane bolts need to be sized correctly for the gate weight, mounted on properly reinforced posts, and made from corrosion-resistant materials.",
    extra:
      "We use heavy-duty galvanized or powder-coated hardware on cedar gates — not the lightweight hardware that comes in a bag at the hardware store and will fail within a few years of daily use.",
  },
];

const ownershipPoints = [
  "Sealing and staining: A cedar fence left completely untreated will gray out over time — some homeowners like the silver-gray patina, others prefer to hold the original warm tone. If you want to maintain the color, an application of cedar-specific sealer or semi-transparent stain every two to three years is the standard schedule. The fence should be cleaned first so the new coat bonds properly.",
  "Mildew: Cedar fences in shaded Everett backyards, or on north-facing exposures, develop surface mildew during the wet season. This is a surface condition that washes off with a deck cleaner or light pressure rinse. It's not damaging the wood structurally — it's just a cosmetic condition that responds to basic cleaning.",
  "Post bases and ground clearance: The most important maintenance check on a cedar fence is the bottom of the boards, not the surface. Boards that sit close to the soil or mulch retain moisture at the base and begin to rot from the bottom up. Keeping a few inches of clearance between board bottoms and the ground extends the life of the boards significantly.",
  "Gate alignment: Gates are the hardest-working part of a fence. After a few seasons, check that hinges are still tight, the gate swings cleanly, and the latch aligns without forcing. A loose hinge caught early is a five-minute fix. A gate post that has shifted is a more involved repair.",
];

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Property Walkthrough",
    text: "We come to your property and walk the full fence line. We look at the grade, note any slope transitions that affect panel layout, identify gate locations, check for tree roots or buried obstacles along the run, and measure the total fence length.",
    extra:
      "We also look at neighboring fences, setback requirements, and how the fence will connect to the house or any existing structures. These details affect both the design and the permit requirements — and it's better to know about them before work starts than during installation.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Style Discussion",
    text: "After the walkthrough we put together a written estimate with the fence style, post specifications, gate locations, and total scope. We walk you through the board-on-board vs. dog-ear vs. horizontal decision in the context of your yard and goals — not as a general overview but as a specific recommendation for your property.",
    extra:
      "If the project requires a building permit — which cedar fences in Everett often do above a certain height — we confirm that during the estimate and handle the application as part of the project.",
  },
  {
    label: "Step 3",
    title: "Scheduling and Material Order",
    text: "Once you approve the estimate we lock in the schedule and confirm material orders. Cedar availability and grade selection can affect lead time — we tell you honestly if there's a wait rather than booking a start date that depends on uncertain delivery.",
  },
  {
    label: "Step 4",
    title: "Post Setting",
    text: "Post setting is the most important step in the entire installation. We set posts at correct spacing with concrete footings at the depth appropriate for the fence height and soil conditions. Posts are checked for plumb and alignment before the concrete sets.",
    extra:
      "This step takes more time than simply driving posts into the ground — and it's why our fence lines stay straight and our gates stay aligned. We allow concrete to cure before attaching rails and boards.",
  },
  {
    label: "Step 5",
    title: "Rails, Boards, and Gate Fitting",
    text: "Once posts are set and cured, rails go on followed by cedar boards. Board spacing, height, and alignment are checked throughout the run. Gates are fitted with correct hinge placement, latch alignment, and hardware appropriate for the gate width and weight.",
    extra:
      "We check the full fence line from both sides before moving to the next section — not at the end when corrections are harder to make.",
  },
  {
    label: "Step 6",
    title: "Walkthrough and Cleanup",
    text: "When the installation is complete we walk the full fence line with you. We check post stability, board alignment, top-line consistency, gate swing and latch, and hardware condition. If anything needs adjustment before we leave, we handle it.",
    extra:
      "We clean the site completely — no post hole debris, no lumber offcuts, no hardware packaging left in the yard.",
  },
];

const faqItems = [
  {
    question: "How long does a cedar fence last in the Pacific Northwest?",
    answer:
      "A well-built cedar fence in the Everett area typically lasts fifteen to twenty-five years. The variables that affect lifespan most are post quality and depth, concrete footing strength, board clearance from the soil, and how consistently the fence is maintained. Fences that fail early in this climate almost always have one of those factors wrong from the start — undersized posts, posts without adequate concrete, or boards sitting in contact with soil or mulch.",
  },
  {
    question: "What height cedar fence can I build in Everett without a permit?",
    answer:
      "In most Everett residential zones, fences up to six feet in the rear yard can be built without a permit. Front yard fences and fences within certain setbacks from the street typically have lower height limits. The specific rules depend on your zoning designation and property location. We check permit requirements during the estimate visit and handle the application if one is needed.",
  },
  {
    question: "Board-on-board or dog-ear — which is better for privacy?",
    answer:
      "Board-on-board provides better privacy because boards overlap and there are no gaps visible from any angle. Dog-ear boards are installed flush to each other, which means small gaps appear between boards over time as cedar dries and moves with the seasons. For a fully enclosed backyard where complete visual privacy is the goal, board-on-board is the stronger choice. For a property boundary where some visibility isn't a concern, dog-ear is a cost-effective option.",
  },
  {
    question: "Do cedar fence posts need to be cedar?",
    answer:
      "No — and we don't recommend cedar posts for ground contact. Western red cedar is excellent for fence boards above the ground but is not rated for soil contact. Posts buried in Everett's wet soil need to be pressure-treated lumber designed for ground contact. Cedar posts in the ground will rot at the soil line within five to eight years in this climate. We use pressure-treated posts as a standard on every cedar fence installation.",
  },
  {
    question: "Can you build a cedar fence on a sloped yard?",
    answer:
      "Yes. Sloped yards require either racked panels — where the fence follows the grade and panels slope with the terrain — or stepped panels — where the fence drops in horizontal increments that follow the grade in steps. Which approach is right depends on the slope angle, the fence style, and what looks right alongside the house. We discuss the options during the estimate visit and recommend the approach that fits the property.",
  },
  {
    question: "How much does a cedar fence cost in Everett?",
    answer:
      "Fence length, height, style, gate count, and site conditions all affect the price. A straightforward board-on-board fence along a flat rear yard costs less than a horizontal cedar fence on a sloped lot with two gates and custom post caps. The most accurate number comes from an on-site visit where we measure the run and look at what's actually there. The estimate is free and there's no obligation to proceed.",
  },
  {
    question: "How soon can I stain or seal a new cedar fence?",
    answer:
      "New cedar needs time to dry and acclimate before a finish bonds properly — usually four to six weeks after installation, depending on the weather. Applying sealer too soon traps moisture in the wood and can cause the finish to peel. We advise on timing during the project walkthrough so you know when to apply the first coat and what products work well in the Pacific Northwest climate.",
  },
];

const recentProjectsConfig = [
  {
    slug: "privacy-fence-installation",
    label: "Board-on-Board Privacy Fence — Bellevue, WA",
    description:
      "A 6-foot board-on-board cedar privacy fence along the rear and side property lines. Pressure-treated posts set in concrete, Western red cedar boards, and a self-closing walk gate with heavy-duty latch hardware.",
  },
  {
    slug: "horizontal-wood-fence",
    label: "Horizontal Cedar Fence — Redmond, WA",
    description:
      "A horizontal cedar fence installed to complement a modern craftsman exterior. Reinforced post footings for the lateral board load, tight spacing, and clean post-top caps. Powder-coated gate hardware throughout.",
  },
  {
    slug: "backyard-fence-refresh",
    label: "Cedar Fence Repair and Refresh — Kent, WA",
    description:
      "Partial fence replacement on an existing cedar run — rotted posts pulled and replaced with concrete-set pressure-treated posts, new cedar boards matched to the existing style, and gate hardware replaced with corrosion-resistant fittings.",
  },
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
  { label: "Kenmore", city: "Kenmore, WA" },
  { label: "Woodinville", city: "Woodinville, WA" },
  { label: "Shoreline", city: "Shoreline, WA" },
  { label: "Kirkland", city: "Kirkland, WA" },
  { label: "Redmond", city: "Redmond, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
];

const relatedProjects = recentProjectsConfig
  .map((item) => {
    const project = recentWorkProjects.find((entry) => entry.slug === item.slug);
    return project ? { ...project, ...item } : null;
  })
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const cedarFenceSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cedar Wood Fence Installation in Everett, WA",
  provider: {
    "@type": "LocalBusiness",
    name: "Northwood Renovation",
    telephone: "+14256832024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Everett",
      addressRegion: "WA",
    },
  },
  areaServed: "Everett, WA and Snohomish County",
  description:
    "Cedar wood fence installation for Everett and Snohomish County homeowners. Board-on-board privacy fences, horizontal cedar, dog-ear, and custom styles. Free on-site estimates.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free on-site estimate",
  },
  url: buildCanonicalUrl(pathname),
});

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

const CedarWoodFencePage = () => (
  <SiteLayout>
    <main className="service-page cedar-wood-fence-page">
      <section
        className="service-hero"
        aria-labelledby="cedar-fence-hero-title"
        style={{ backgroundImage: `url(${gardenFenceTrees})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Fence Services</p>
          <h1 id="cedar-fence-hero-title">
            Cedar Wood Fence Installation in Everett, WA
          </h1>
          <p>
            Privacy fencing, boundary fences, and custom cedar installations
            for Everett and Snohomish County homeowners — built with straight
            posts, natural materials, and the kind of planning that keeps a
            cedar fence looking right after the first few Pacific Northwest
            winters.
          </p>
          <div className="service-hero__actions">
            <Link
              to="/contact#contact-form"
              className="service-button service-button--primary">
              Request a Free Estimate
            </Link>
            <Link
              to="/projects"
              className="service-button service-button--secondary">
              View Recent Work
            </Link>
          </div>
        </div>
      </section>

      <section className="service-trust" aria-label="Quick cedar fence points">
        {trustPoints.map((point) => (
          <article className="service-trust__card" key={point.title}>
            <span className="service-trust__icon">
              <CheckIcon />
            </span>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">About the Service</p>
          <h2>Why Cedar Is Still the Most Popular Fence Material in Everett</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Cedar has been the default fence material in the Pacific Northwest
            for a long time, and it earns that position. Western red cedar is
            naturally resistant to moisture, rot, and insects without chemical
            treatment — which matters when you're building something that will
            sit in the ground and deal with Everett rain for fifteen or twenty
            years.
          </p>
          <p>
            The look of a cedar fence also fits most Northwest homes in a way
            that vinyl or metal fencing simply doesn't. It's warm, it ages
            naturally, and it reads as residential rather than industrial. A
            well-built cedar privacy fence along the back of an Everett yard
            looks like it belongs there.
          </p>
          <p>
            At Northwood Renovation, we install cedar fences across Everett and
            Snohomish County — board-on-board privacy fences, horizontal cedar
            designs, dog-ear fencing, and custom layouts planned around the
            specific property. Every installation starts with understanding what
            the fence needs to do, not just what it needs to look like.
          </p>
        </div>
      </section>

      <section className="service-split">
        <article className="service-card">
          <p className="service-label">Fence Styles</p>
          <h2>Cedar Fence Styles We Build in Everett</h2>
          <p className="service-card__intro">
            Cedar fencing comes in several distinct styles and the choice
            affects appearance, privacy level, maintenance, and cost. Here's
            how the main options compare:
          </p>
          <div className="service-options service-options--stacked">
            {fenceStyles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.extra ? <p>{item.extra}</p> : null}
              </article>
            ))}
          </div>
        </article>

        <article className="service-card service-card--sage">
          <p className="service-label">Materials</p>
          <h2>Cedar Fence Materials and Why the Details Matter</h2>
          <div className="service-options service-options--stacked">
            {materials.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.extra ? <p>{item.extra}</p> : null}
                {item.extraTwo ? <p>{item.extraTwo}</p> : null}
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Ownership</p>
          <h2>Honest Expectations for a Cedar Fence in Everett</h2>
          <p>
            Cedar fencing doesn't require a complicated maintenance schedule,
            but it does require some. Here's what realistic cedar fence
            ownership looks like in the Pacific Northwest:
          </p>
        </div>
        <div className="service-benefits__grid">
          {ownershipPoints.map((item) => (
            <article className="service-benefit-card" key={item}>
              <span className="service-benefit-card__icon">
                <CheckIcon />
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-process">
        <p className="service-label">Our Process</p>
        <h2>How a Cedar Fence Installation Works With Northwood Renovation</h2>
        <div className="service-process__grid">
          {processSteps.map((step) => (
            <article className="service-process-card" key={step.title}>
              <p className="service-process-card__number">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {step.extra ? <p>{step.extra}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="service-overview">
        <div>
          <p className="service-label">Local Experience</p>
          <h2>Cedar Fence Installation Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Most of our cedar fence work is in Everett and the surrounding
            Snohomish County communities — Marysville, Snohomish, Mill Creek,
            Mukilteo, Lynnwood, and Edmonds. We also install cedar fences
            regularly in Bothell, Kenmore, Woodinville, Shoreline, Kirkland,
            and Redmond.
          </p>
          <p>
            Working consistently in this area means we know the conditions that
            affect cedar fences here specifically. The soils near the Everett
            waterfront and along low-lying areas near the Snohomish River
            drainage hold moisture differently than the well-drained soils on
            the hillside neighborhoods above Highway 99. Post depth requirements
            and concrete mix decisions account for the specific soil conditions
            at the installation site.
          </p>
          <p>
            We're also familiar with the setback requirements and permit
            processes across different Snohomish County jurisdictions. Cedar
            privacy fences above a certain height often require a permit in
            Everett, Marysville, and Mukilteo. Unincorporated Snohomish County
            has different thresholds. We know the local requirements and handle
            the permit process as part of the project.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation on Cedar Fences</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We specialize in fences, decks, and outdoor structures — not a long
            list of general services. That focus means the situations that come
            up on cedar fence installations are ones we've worked through
            before: a sloped fence run that needs racked panels, a horizontal
            fence that needs properly sized posts, a gate that has to work
            reliably on soft soil, a fence that needs to connect cleanly to a
            neighbor's existing installation.
          </p>
          <p>
            The crew that gives you the estimate builds the fence. The post
            spacing, grade transitions, and gate locations discussed during the
            planning visit make it to the installation because the same people
            are doing both.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners tend to mention after working with us</p>
          <ul className="service-check-list">
            <li>
              <CheckIcon />
              <span>
                The estimate is written and specific — no verbal range that
                changes at the start date
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Post setting and concrete footings are done correctly the first
                time
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                The permit process doesn't fall back on the homeowner to manage
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>The crew respects the property and cleans up completely</span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Gates work smoothly and stay aligned — not just on day one but
                after a few seasons
              </span>
            </li>
          </ul>
          <p>
            We'll also tell you honestly if a different fence type would serve
            you better. If the yard layout calls for chain link in one section
            and cedar in another, or if a repair makes more sense than a full
            replacement, we say so during the estimate. If you're weighing
            cedar against a lower-maintenance option, our{" "}
            <Link to="/chain-link-fence/">chain link fence page</Link> covers
            how that comparison works for different yard situations.
          </p>
        </div>
      </section>

      <section className="service-related">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2>Recent Cedar Fence Projects in Everett and Nearby Areas</h2>
        </div>
        <div className="service-related__grid">
          {relatedProjects.map((project) => (
            <article className="service-project-card" key={project.slug}>
              <Link to={`/projects/${project.slug}/`}>
                <img src={project.image} alt={project.label} loading="lazy" />
                <div>
                  <p>{project.type}</p>
                  <h3>{project.label}</h3>
                  <span>{project.location}</span>
                  <small>{project.description}</small>
                  <strong>View Project →</strong>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="service-faq">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2>Common Questions About Cedar Fence Installation in Everett</h2>
        </div>
        <div className="service-faq__list">
          {faqItems.map((item) => (
            <article className="service-faq__item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-final-cta">
        <div>
          <h2>Get a Free Cedar Fence Estimate in Everett, WA</h2>
          <p>
            If you're planning a cedar privacy fence, boundary fence, or
            custom cedar installation for your Everett-area property, the
            first step is a free on-site visit. We walk the fence line, measure
            the run, discuss style options, and put together a clear written
            estimate with materials, scope, and timeline.
          </p>
          <p>No phone guesses. No pressure to commit on the spot.</p>
          <p>
            Call <strong>{BUSINESS_PHONE_DISPLAY}</strong> or fill out the
            estimate request form and we'll get back to you within one business
            day.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Kenmore, Woodinville, Shoreline,
            Kirkland, Redmond, Bellevue, and surrounding Snohomish County
            communities.
          </p>
        </div>
        <div className="service-final-cta__actions">
          <Link to="/contact#contact-form" className="service-final-cta__primary">
            Request a Free Estimate
          </Link>
          <Link to="/projects" className="service-final-cta__secondary">
            View Recent Work
          </Link>
        </div>
      </section>

      <footer className="service-area-strip">
        <h2>Cedar Fence Installation in Everett, WA and Nearby Cities:</h2>
        <p>
          {serviceAreaLinks.map((item, index) => (
            <React.Fragment key={item.city}>
              <Link to={cityServicePagePathByCity[item.city]}>{item.label}</Link>
              {index < serviceAreaLinks.length - 1 ? " · " : null}
            </React.Fragment>
          ))}
        </p>
      </footer>
    </main>
  </SiteLayout>
);

export default CedarWoodFencePage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={gardenFenceTrees}
    imageAlt="Cedar wood fence installation in Everett, WA by Northwood Renovation"
    schema={[cedarFenceSchema(location.pathname)]}
  />
);
