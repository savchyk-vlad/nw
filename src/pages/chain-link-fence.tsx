import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import SeoHead, { buildCanonicalUrl } from "../components/seo";
import SiteLayout from "../components/site-layout";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import { BUSINESS_PHONE_DISPLAY } from "../lib/site-metadata";
import chainLinkBoundarySnohomish from "../images/chain-link-fence/chain-link-boundary-snohomish.png";
import chainLinkDetail from "../images/chain-link-fence/chain-link-detail.png";
import chainLinkGateYard from "../images/chain-link-fence/chain-link-gate-yard.png";
import chainLinkSideYardMarysville from "../images/chain-link-fence/chain-link-side-yard-marysville.png";
import chainLinkYardEverett from "../images/chain-link-fence/chain-link-yard-everett.png";

const seoTitle =
  "Chain Link Fence Installation in Everett, WA — Residential Fence Builder | Northwood Renovation";
const seoDescription =
  "Northwood Renovation installs chain link fences in Everett, WA and Snohomish County. Residential and commercial chain link for yards, pets, side yards, and property boundaries. Free on-site estimate. Call (425) 683-2024.";

const trustPoints = [
  {
    title: "Galvanized and vinyl-coated chain link options",
    text: "We help you choose between plain galvanized and vinyl-coated mesh based on how much appearance matters and what the fence needs to do.",
  },
  {
    title: "Gates sized for walk access, pets, or equipment entry",
    text: "Walk gates, double gates, and utility access gates are planned around real use instead of being treated like an afterthought.",
  },
  {
    title: "Free on-site estimate with clear written scope",
    text: "You get the actual fence spec in writing — post type, mesh, coating, gates, and timeline — before you decide anything.",
  },
];

const chainLinkOptions = [
  {
    title: "Galvanized vs. Vinyl-Coated Chain Link",
    text: "Standard chain link fence mesh is hot-dip galvanized — coated in zinc to resist rust and corrosion. Galvanized chain link is the most common residential choice in the Everett area. It's reliable, holds up well in Pacific Northwest rain and moisture, and requires almost no maintenance beyond the occasional rinse.",
    extra:
      "Vinyl-coated chain link has a PVC coating over the galvanized wire, available in black, green, and brown. The coating adds a layer of corrosion protection and gives the fence a cleaner, less industrial appearance — black vinyl-coated chain link in particular blends into the background in a way that standard galvanized doesn't. It costs more than plain galvanized and the coating can chip or scratch over time, but for residential front yards or anywhere appearance matters, the visual difference is worth considering.",
  },
  {
    title: "Mesh Gauge and Opening Size",
    text: "Chain link mesh is available in different wire gauges and diamond opening sizes. The gauge affects the wire thickness — heavier gauge means thicker, stronger wire. For residential fencing in Everett, 11-gauge wire is a common standard. Lighter gauge options exist but feel flimsy over long fence runs and are better suited for temporary applications.",
    extra:
      "Mesh opening size — the diamond pattern — affects how the fence functions. Standard 2-inch openings are the most common residential choice. Smaller openings (1.75 or 1-inch mesh) are worth considering if you have small dogs or pets that could push through or get stuck in standard mesh. We discuss mesh sizing during the estimate visit based on what the fence needs to contain or exclude.",
  },
  {
    title: "Fence Height",
    text: "Residential chain link fences in Everett are typically installed at four, five, or six feet. Four-foot chain link defines a property line cleanly without creating a heavy visual barrier. Five or six-foot chain link is the standard for a yard enclosure where keeping a dog in is the primary goal.",
    extra:
      "Height also affects post sizing requirements — taller fences need heavier posts and deeper footings to stay plumb over time. We spec the post diameter and footing depth based on the fence height rather than using the same specification for everything.",
  },
  {
    title: "Privacy Slats",
    text: "Chain link fencing can be fitted with privacy slats — plastic or aluminum inserts threaded through the mesh that reduce visibility while keeping the structural benefits of chain link. Slats come in various colors and provide partial privacy without the cost or weight of a wood fence.",
    extra:
      "This is a good option for homeowners who want more privacy than open chain link provides but prefer the lower maintenance of metal over a wood fence. The slats do collect debris and need cleaning periodically, and they add wind load to the fence which requires adequate post depth to handle. We discuss slat options during the estimate when they're relevant to the project.",
  },
];

const materials = [
  {
    title: "Line Posts and Terminal Posts",
    text: "Chain link fence systems use two types of posts: line posts along the fence run and terminal posts at corners, ends, and gate openings. Terminal posts carry more load and need to be heavier gauge and set deeper than line posts. A fence where terminal posts are the same specification as line posts will pull, lean, or distort at the corners and gate openings over time.",
    extra:
      "We use appropriately sized terminal posts at every corner, end, and gate — not a uniform post spec applied to everything. This sounds like a minor detail but it's one of the most common reasons chain link fences look sloppy or lean at the corners after a few years.",
  },
  {
    title: "Concrete-Set Footings",
    text: "All posts are set in concrete. Post depth depends on fence height — taller fences require deeper footings to stay plumb against wind load and soil movement. In Everett and Snohomish County, where soil moisture is high and ground frost can shift footings, getting the depth right from the start matters more than it does in a drier climate.",
    extra:
      "We do not drive posts into the ground without concrete. Driven posts shift, lean, and pull out of alignment in Pacific Northwest soil conditions. Concrete-set footings are the only approach that holds long-term.",
  },
  {
    title: "Top Rails, Tension Bars, and Fabric Tension",
    text: "The top rail connects the posts along the fence run and provides structural support for the mesh. Tension bars are inserted at the ends and corners of the mesh to anchor it to the terminal posts. Fabric tension — how tightly the mesh is stretched across the run — affects how the finished fence looks and how well it holds up over time.",
    extra:
      "A properly tensioned chain link fence has consistent diamond openings across the full run and sits flush to the posts without sagging or bowing. Over-tensioning can distort the mesh. Under-tensioning leaves the fence looking loose and can create areas where animals push through. We tension the fabric correctly — not too tight, not too loose — and check the full run before finishing.",
  },
  {
    title: "Gate Hardware",
    text: "Gates are the most used part of any fence and the part most likely to cause problems if the hardware is undersized or improperly installed. We size gate hardware — hinges, latches, and any closer or drop rod hardware — to the gate width and weight. A single walk gate gets different hardware than a double drive gate.",
    extra:
      "Gate posts are set deeper and with more concrete than line posts because they carry the cantilevered load of the gate itself. A gate post that shifts over time is the most common cause of a gate that won't latch or drags on the ground.",
  },
];

const practicalFitPoints = [
  "A side yard or utility area where visibility matters more than privacy",
  "A backyard enclosure for a dog that needs a secure perimeter without the visual weight of a solid privacy fence",
  "A property boundary where you want a clear line without blocking light, views, or airflow between properties",
  "A sloped yard where following the terrain with chain link is simpler and more cost-effective than stepped wood panels",
  "A rental property or accessory dwelling unit where low maintenance and durability are the priority over aesthetics",
];

const applications = [
  {
    title: "Dog Runs and Pet Enclosures",
    text: "A secure yard enclosure for a dog is one of the most common chain link fence projects we do in Everett. Chain link is well-suited for this because it's visible — you can see your dog through it, they can see out, and you can monitor the enclosure from the house or patio. It doesn't rot or get chewed through, and a properly installed chain link fence with adequate height and the right mesh size is very difficult for a dog to escape.",
    extra:
      "For dogs that dig, we discuss either burying the bottom of the fence fabric six to twelve inches below grade or adding a gravel apron along the fence line. For dogs that climb, we discuss height and whether a top overhang is appropriate.",
  },
  {
    title: "Side Yard and Utility Area Boundaries",
    text: "Side yards in Everett are often narrow and deal with foot traffic, utility access, and drainage. Chain link defines a side yard cleanly without blocking light or making the space feel more enclosed than it already is. It can be combined with a gate that locks for utility access and keeps children or pets from wandering into a hazard area.",
  },
  {
    title: "Property Boundary Fencing",
    text: "A property boundary where two neighbors want a clear line without a full privacy fence is a common chain link application. Chain link defines the boundary, keeps everyone honest about where the property line sits, and doesn't create the blocked-light or overshadowing issues that a tall privacy fence can create on a tight lot.",
  },
  {
    title: "Sloped and Uneven Terrain",
    text: "Chain link fabric can be racked — stretched diagonally to follow a sloped grade — in a way that solid wood panels cannot. On a lot with a significant grade change across the fence run, chain link follows the terrain more smoothly and cost-effectively than stepped wood panels. The mesh stays close to the ground along the slope, which is important for pet containment.",
    extra:
      "We review the grade change during the estimate visit and discuss whether racking, stepping, or a combination approach is the right call for the specific slope.",
  },
];

const processSteps = [
  {
    label: "Step 1",
    title: "Free On-Site Visit",
    text: "We come to your Everett-area property, walk the fence line, and look at what we're working with. Grade changes, gate locations, soil conditions, existing fencing that needs to be removed, and any structures the fence needs to connect to — all of it affects the layout and the specification.",
    extra:
      "For pet enclosures specifically, we ask about the dog's size, breed, and any history of digging or climbing. That informs mesh size, fence height, and whether a bottom apron or anti-dig measure is worth adding.",
  },
  {
    label: "Step 2",
    title: "Written Estimate and Specification Discussion",
    text: "After the visit we put together a written estimate with the fence specification — post gauge, mesh gauge and opening, coating type, gate hardware — and the total scope. We walk you through the galvanized vs. vinyl-coated decision, mesh size options, and gate sizing based on your specific situation.",
    extra:
      "If the project requires a permit — chain link fences above certain heights in Everett typically do — we confirm that during the estimate and handle the application as part of the project.",
  },
  {
    label: "Step 3",
    title: "Scheduling and Material Order",
    text: "Once you approve the estimate we lock in the schedule and confirm material orders. Chain link material lead times are generally shorter than wood, but specific mesh gauges, vinyl coatings, or custom gate sizes can take additional time. We tell you honestly if anything affects the start date.",
  },
  {
    label: "Step 4",
    title: "Post Setting",
    text: "Terminal posts at corners, ends, and gate openings are set first in concrete footings at the appropriate depth for the fence height and local soil conditions. Line posts follow. We check alignment and plumb on every post before the concrete sets — a post that's slightly off at this stage will be visibly off when the mesh goes on.",
    extra:
      "Concrete cure time varies with weather. We allow adequate cure time before tensioning the mesh — pulling fabric tight against posts that haven't fully cured can shift them out of alignment.",
  },
  {
    label: "Step 5",
    title: "Rails, Mesh, and Gate Fitting",
    text: "Top rails are connected across the post run, tension bars are attached at terminal posts, and the mesh is stretched and tensioned across the full fence run. We check tension consistency and diamond uniformity before fastening. Gates are hung on correctly sized hardware, adjusted for smooth swing and clean latch alignment, and tested through several cycles before we consider them done.",
  },
  {
    label: "Step 6",
    title: "Walkthrough and Cleanup",
    text: "When installation is complete we walk the full fence with you — checking post stability, mesh tension, fabric clearance from the ground, gate function, and hardware tightness. We clean the site completely, removing any post hole spoil, wire offcuts, and packaging. If anything needs adjustment, we handle it before we leave.",
  },
];

const faqItems = [
  {
    question: "How long does chain link fencing last in the Pacific Northwest?",
    answer:
      "Hot-dip galvanized chain link fence installed with concrete-set posts typically lasts twenty-five to forty years in the Pacific Northwest. The main failure modes are post rust at or below grade — which happens when posts aren't galvanized properly or when the footing doesn't seal the post against soil moisture — and gate hardware corrosion from poor-quality fittings. A fence built with quality materials and properly set posts will outlast most cedar fences in a wet climate without any maintenance beyond occasional rinsing.",
  },
  {
    question: "Does chain link need maintenance in Everett's climate?",
    answer:
      "Very little. Galvanized chain link doesn't rust under normal conditions and doesn't need painting, sealing, or regular treatment. An occasional rinse to remove debris and algae is about all it needs. Gate hardware should be checked periodically — a loose hinge is a simple fix when caught early. If vinyl-coated mesh develops chips or scratches that expose the underlying wire, touch-up paint extends the life of the coating at that point.",
  },
  {
    question: "Can chain link fence keep my dog in the yard?",
    answer:
      "Yes, with the right specification. The key variables are fence height, mesh opening size, and whether your dog is a digger or a climber. A standard 5-foot chain link with 2-inch mesh contains most dogs reliably. For larger or more athletic breeds, 6-foot height is a better choice. For small dogs, 1.75-inch or 1-inch mesh prevents them from pushing through or getting stuck. For diggers, burying the bottom of the mesh below grade or adding a concrete or gravel apron at the fence line eliminates that problem. We discuss the specifics for your dog during the estimate visit.",
  },
  {
    question: "What's the difference between galvanized and vinyl-coated chain link?",
    answer:
      "Both are galvanized steel wire — vinyl-coated mesh has an additional PVC layer over the galvanized wire. Galvanized is the standard, lower-cost option that performs reliably outdoors. Vinyl-coated is more expensive and has a cleaner appearance — black vinyl-coated chain link in particular is less visually obtrusive than silver galvanized mesh. The coating adds minor additional corrosion protection but the main reason most homeowners choose it is appearance, not performance.",
  },
  {
    question: "Do I need a permit for a chain link fence in Everett?",
    answer:
      "It depends on the fence height and your property's zoning designation. In most Everett residential zones, fences up to six feet in the rear yard can be built without a permit. Front yard fences and taller installations have different thresholds. We confirm permit requirements during the estimate visit and handle the application as part of the project if one is needed.",
  },
  {
    question: "Can chain link be installed on a sloped yard?",
    answer:
      "Yes. Chain link mesh can be racked — pulled diagonally to follow the slope — in a way that keeps the fabric close to the ground along the grade change. This is one of chain link's practical advantages over wood fencing on sloped terrain, where stepped wood panels leave gaps at the bottom that don't work well for pet containment. We look at the grade during the estimate visit and discuss the racking approach that fits the slope.",
  },
  {
    question: "How much does chain link fence installation cost in Everett?",
    answer:
      "Fence length, height, mesh specification, coating type, number of gates, and site conditions all affect the price. Chain link is typically more cost-effective per linear foot than cedar for the same fence run, though the total project cost depends more on scope than material choice. The most accurate number comes from an on-site visit — the estimate is free and there's no obligation attached to it.",
  },
];

const recentProjects = [
  {
    label: "Chain Link Yard Enclosure — Everett, WA",
    type: "Dog Fence",
    location: "Everett, WA",
    description:
      "A 5-foot galvanized chain link fence installed around a backyard for a large-breed dog. Concrete-set posts, 2-inch mesh, and a self-closing walk gate with a latch the dog can't operate. Grade racking at the rear where the yard slopes toward the back.",
    image: chainLinkYardEverett,
  },
  {
    label: "Chain Link Side Yard Boundary — Marysville, WA",
    type: "Side Yard Fence",
    location: "Marysville, WA",
    description:
      "A side yard chain link installation with a double drive gate for equipment access. Vinyl-coated black mesh for a cleaner appearance alongside the home's exterior. Terminal posts set deeper for the wider gate span.",
    image: chainLinkSideYardMarysville,
  },
  {
    label: "Chain Link Property Boundary — Snohomish County",
    type: "Property Boundary",
    location: "Snohomish County",
    description:
      "A property boundary chain link fence installed along the full rear lot line. Standard galvanized mesh, concrete-set posts at correct spacing, and a single walk gate positioned for access to the adjoining trail easement.",
    image: chainLinkBoundarySnohomish,
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
  { label: "Shoreline", city: "Shoreline, WA" },
  { label: "Kirkland", city: "Kirkland, WA" },
  { label: "Redmond", city: "Redmond, WA" },
  { label: "Kent", city: "Kent, WA" },
  { label: "Renton", city: "Renton, WA" },
  { label: "Bellevue", city: "Bellevue, WA" },
];

const chainLinkFenceSchema = (pathname: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chain Link Fence Installation in Everett, WA",
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
    "Chain link fence installation for Everett and Snohomish County homeowners. Galvanized and vinyl-coated options for yards, pets, side yards, and property boundaries. Free on-site estimates.",
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

const ChainLinkFencePage = () => (
  <SiteLayout>
    <main className="service-page chain-link-fence-page">
      <section
        className="service-hero"
        aria-labelledby="chain-link-fence-hero-title"
        style={{ backgroundImage: `url(${chainLinkGateYard})` }}>
        <div className="service-hero__overlay" />
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">Fence Services</p>
          <h1 id="chain-link-fence-hero-title">
            Chain Link Fence Installation in Everett, WA
          </h1>
          <p>
            Practical, durable chain link fence installation for Everett and
            Snohomish County properties — yards, pet enclosures, side yard
            boundaries, and property lines that need a reliable fence without
            the upkeep that wood requires.
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

      <section className="service-trust" aria-label="Quick chain link points">
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
          <h2>When Chain Link Is the Right Fence for the Job</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            Chain link gets underestimated. A lot of homeowners think of it as
            a temporary or industrial solution — something for construction
            sites or commercial properties — and overlook it for residential
            use. But for the right situation, chain link is genuinely the
            better option, and choosing it over cedar or vinyl isn't a
            compromise. It's a practical decision.
          </p>
          <p>
            The situations where chain link makes the most sense in Everett and
            Snohomish County are usually straightforward:
          </p>
          <ul className="service-check-list">
            {practicalFitPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p>
            If any of those describe your situation, chain link is worth
            considering seriously. We install chain link fences for
            Everett-area homeowners regularly, and most of them chose it for
            practical reasons — not because it was the only option, but because
            it was the right one.
          </p>
        </div>
      </section>

      <section className="service-split">
        <article className="service-card">
          <p className="service-label">Specifications</p>
          <h2>Chain Link Fence Options and Specifications</h2>
          <div className="service-options service-options--stacked">
            {chainLinkOptions.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.extra ? <p>{item.extra}</p> : null}
              </article>
            ))}
          </div>
        </article>

        <article className="service-card service-card--sage">
          <p className="service-label">Materials and Hardware</p>
          <h2>What Goes Into a Well-Built Chain Link Fence</h2>
          <div className="service-options service-options--stacked">
            {materials.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.extra ? <p>{item.extra}</p> : null}
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Common Uses</p>
          <h2>Common Chain Link Fence Applications in Everett and Snohomish County</h2>
        </div>
        <div className="service-options service-options--stacked">
          {applications.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.extra ? <p>{item.extra}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="service-process">
        <div className="service-section-head">
          <p className="service-label">Our Process</p>
          <h2>How a Chain Link Fence Installation Works With Northwood Renovation</h2>
        </div>
        <div className="service-process__grid">
          {processSteps.map((step) => (
            <article className="service-process-card" key={step.label}>
              <span className="service-process-card__number">{step.label}</span>
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
          <h2>Chain Link Fence Installation Across Everett and Snohomish County</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We install chain link fences throughout Everett and the surrounding
            Snohomish County area — Marysville, Snohomish, Mill Creek,
            Mukilteo, Lynnwood, Edmonds, and Bothell. We also work in
            Shoreline, Kenmore, Kirkland, Redmond, Kent, and Renton.
          </p>
          <p>
            Chain link in this area deals with consistent moisture, high soil
            saturation through the wet season, and periodic ground movement
            from freeze-thaw cycles in colder winters. Post depth and concrete
            mix decisions account for those conditions specifically. A post
            depth adequate for a dry-climate installation may not hold as well
            in the clay-heavy soils common in lower-lying Everett
            neighborhoods.
          </p>
          <p>
            We know the permit requirements across the different jurisdictions
            in Snohomish County. Chain link fences above a certain height in
            Everett require a permit, and the threshold varies between the
            city limits and unincorporated Snohomish County. We confirm
            requirements at the estimate and handle the application — you don't
            need to manage that process separately.
          </p>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-section-head">
          <p className="service-label">Why Choose Us</p>
          <h2>Why Everett Homeowners Work With Northwood Renovation on Chain Link Fences</h2>
        </div>
        <div className="service-overview__copy">
          <p>
            We install both cedar and chain link fencing — which means we can
            give you an honest comparison between the two for your specific
            situation rather than steering you toward whatever we happen to
            build more of. If chain link is the right call for your yard, we'll
            say so. If cedar would serve you better, we'll say that instead.
          </p>
          <p>
            Chain link and fences in general are a core part of what we do.
            We're not a deck builder who takes fence work as a secondary
            service. The crew that gives you the estimate installs the fence —
            the post spacing, gate locations, and mesh specifications from the
            planning conversation carry through to the installation.
          </p>
        </div>
        <div className="service-card service-card--sage">
          <p className="service-label">What homeowners who've worked with us tend to mention</p>
          <ul className="service-check-list">
            <li>
              <CheckIcon />
              <span>
                The estimate is written and specific — gauge, coating, post
                spec, gate hardware — not a vague verbal description
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>Post setting and concrete footings are done correctly, not rushed</span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Gates work smoothly and stay aligned after a few seasons, not
                just on day one
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>The permit process doesn't come back to the homeowner to manage</span>
            </li>
            <li>
              <CheckIcon />
              <span>The site is cleaned up completely when the job is done</span>
            </li>
          </ul>
          <p>
            We're also honest about what chain link won't do. It doesn't
            provide privacy unless slats are added, and it has a functional
            look rather than a decorative one. If your primary goal is curb
            appeal or full visual privacy, cedar is probably the better fit —
            and we'll tell you that at the estimate visit. If you're weighing
            chain link against a cedar privacy fence, our{" "}
            <Link to="/cedar-wood-fence/">cedar fence page</Link> covers how
            that comparison works for different yard situations.
          </p>
        </div>
      </section>

      <section className="service-related">
        <div className="service-section-head">
          <p className="service-label">Recent Projects</p>
          <h2>Recent Chain Link Projects in Everett and Nearby Areas</h2>
        </div>
        <div className="service-related__grid">
          {recentProjects.map((project) => (
            <article className="service-project-card" key={project.label}>
              <img src={project.image} alt={project.label} loading="lazy" />
              <div>
                <p>{project.type}</p>
                <h3>{project.label}</h3>
                <span>{project.location}</span>
                <small>{project.description}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-faq">
        <div className="service-section-head">
          <p className="service-label">FAQ</p>
          <h2>Common Questions About Chain Link Fence Installation in Everett</h2>
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
          <h2>Get a Free Chain Link Fence Estimate in Everett, WA</h2>
          <p>
            If you're planning a chain link fence for your Everett-area yard,
            the first step is a free on-site visit. We walk the fence line,
            look at the grade and soil conditions, discuss gate placement and
            mesh options, and put together a clear written estimate with the
            full specification and timeline.
          </p>
          <p>No phone guesses. No pressure to decide on the spot.</p>
          <p>
            Call <strong>{BUSINESS_PHONE_DISPLAY}</strong> or fill out the
            estimate request form and we'll get back to you within one business
            day.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo,
            Lynnwood, Edmonds, Bothell, Kenmore, Shoreline, Kirkland, Redmond,
            Bellevue, Kent, Renton, and surrounding Snohomish County
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
        <h2>Chain Link Fence Installation in Everett, WA and Nearby Cities:</h2>
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

export default ChainLinkFencePage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    image={chainLinkDetail}
    imageAlt="Chain link fence installation in Everett, WA by Northwood Renovation"
    schema={[chainLinkFenceSchema(location.pathname)]}
  />
);
