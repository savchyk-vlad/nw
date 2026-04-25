import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/reviews-areas.css";
import renderHighlightedText from "../components/brand-text";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import facebookLogo from "../images/facebook-logo.svg";
import googleReviewLogo from "../images/google-review-logo.png";
import testimonialsFamilyOutdoor from "../images/testimonials-family-outdoor.avif";
import yelpLogo from "../images/yelp-logo.png";

const seoTitle =
  "Deck and Fence Builder Reviews — Everett, WA | Northwood Renovation";
const seoDescription =
  "Read reviews from Everett and Snohomish County homeowners who hired Northwood Renovation for deck builds, fence installation, and outdoor renovation projects. 4.9 Google rating. Call (425) 683-2024.";

type ReviewPlatform = "Google" | "Yelp" | "Facebook";

type PlatformBadge = {
  href?: string;
  label: string;
  logo: string;
  ratingNumber: string;
  stars: string;
};

type ReviewCard = {
  contextLabel: string;
  location: string;
  name: string;
  platform: ReviewPlatform;
  projectLabel: string;
  quote: string;
};

const GOOGLE_BUSINESS_PROFILE_URL = "https://share.google/hEzXTLWamjiIJ8qNG";

const platformBadges: PlatformBadge[] = [
  {
    href: GOOGLE_BUSINESS_PROFILE_URL,
    label: "Google Reviews",
    logo: googleReviewLogo,
    ratingNumber: "4.9",
    stars: "★★★★★",
  },
  {
    label: "Yelp Reviews",
    logo: yelpLogo,
    ratingNumber: "4.7",
    stars: "★★★★★",
  },
  {
    label: "Facebook Reviews",
    logo: facebookLogo,
    ratingNumber: "4.4",
    stars: "★★★★",
  },
];

const reviewCards: ReviewCard[] = [
  {
    contextLabel: "Cedar fence installation — Everett, WA",
    location: "Everett, WA",
    name: "Michael T.",
    platform: "Google",
    projectLabel: "Cedar Privacy Fence",
    quote:
      "Great experience from the first estimate to the final walkthrough. The team explained our options clearly and built a fence that looks solid, clean, and professionally finished.",
  },
  {
    contextLabel: "Backyard deck installation — Bellevue, WA",
    location: "Bellevue, WA",
    name: "Andrea L.",
    platform: "Google",
    projectLabel: "Backyard Deck Build",
    quote:
      "Our new deck feels sturdy, clean, and well planned. Communication stayed clear the whole time and the crew kept the work area organized every day.",
  },
  {
    contextLabel: "Deck repair and railing replacement — Kirkland, WA",
    location: "Kirkland, WA",
    name: "Jason R.",
    platform: "Yelp",
    projectLabel: "Deck Repair and Railing Update",
    quote:
      "We needed deck repairs and railing updates. They identified the right fixes quickly, gave a clear estimate, and delivered exactly what we discussed.",
  },
  {
    contextLabel: "Cedar privacy fence — Mill Creek, WA",
    location: "Mill Creek, WA",
    name: "Sofia N.",
    platform: "Facebook",
    projectLabel: "Privacy Fence Installation",
    quote:
      "Very professional and easy to work with. The new privacy fence looks great, and they were thoughtful about gate placement and cleanup.",
  },
  {
    contextLabel: "Custom deck installation — Redmond, WA",
    location: "Redmond, WA",
    name: "David B.",
    platform: "Yelp",
    projectLabel: "Custom Deck Build",
    quote:
      "From planning to final walkthrough, everything felt organized. They helped us choose materials and built a deck that works perfectly for our family.",
  },
  {
    contextLabel: "Fence post repair and realignment — Renton, WA",
    location: "Renton, WA",
    name: "Kelly M.",
    platform: "Facebook",
    projectLabel: "Fence Repair",
    quote:
      "Our fence had multiple leaning sections. The team fixed the structural issues first, kept us updated, and the final result feels much more secure.",
  },
  {
    contextLabel: "Backyard deck build — Marysville, WA",
    location: "Marysville, WA",
    name: "Hannah P.",
    platform: "Google",
    projectLabel: "Backyard Deck Build",
    quote:
      "They made the whole process easy to understand. The deck layout is practical, looks great, and was built with careful attention to detail.",
  },
  {
    contextLabel: "Cedar fence installation — Kent, WA",
    location: "Kent, WA",
    name: "Chris R.",
    platform: "Yelp",
    projectLabel: "Cedar Fence Installation",
    quote:
      "Clear communication, clean job site, and a strong finished fence. The team worked efficiently and made sure we were happy before closeout.",
  },
  {
    contextLabel: "Composite deck installation — Shoreline, WA",
    location: "Shoreline, WA",
    name: "Lauren P.",
    platform: "Facebook",
    projectLabel: "Composite Deck Installation",
    quote:
      "They helped us choose a deck option that fits Northwest weather and our maintenance goals. The workmanship is excellent and the project stayed on track.",
  },
];

const projectSummaryCards = [
  {
    body: "Reviews from deck build homeowners consistently mention: material guidance that helped them choose between cedar and composite, clear estimates that matched the final cost, and finished decks that held up through the first Pacific Northwest winter without issues.",
    ctaLabel: "Explore Deck Services",
    ctaTo: "/decking/",
    title: "What Deck Project Reviews Say",
  },
  {
    body: "Cedar fence and chain link reviews mention straight fence lines, gate hardware that works correctly after installation, and cleanup after the project. Several reviews specifically call out the estimate process — being given options rather than a single quote.",
    ctaLabel: "Explore Fence Services",
    ctaTo: "/fencing/",
    title: "What Fence Project Reviews Say",
  },
  {
    body: "Repair reviews tend to be the most specific — homeowners describe the diagnostic conversation, what was found, what was fixed, and why. The consistent theme: repairs were scoped honestly without upselling work that didn't need to be done.",
    ctaLabel: "Talk About Your Repair Project",
    ctaTo: "/contact#contact-form",
    title: "What Repair Project Reviews Say",
  },
];

const areaLinks = [
  { label: "Everett", to: "/cities/everett-wa/" },
  { label: "Marysville", to: "/cities/marysville-wa/" },
  { label: "Snohomish", to: "/cities/snohomish-wa/" },
  { label: "Mill Creek", to: "/cities/mill-creek-wa/" },
  { label: "Mukilteo", to: "/cities/mukilteo-wa/" },
  { label: "Lynnwood", to: "/cities/lynnwood-wa/" },
  { label: "Edmonds", to: "/cities/edmonds-wa/" },
  { label: "Bothell", to: "/cities/bothell-wa/" },
  { label: "Kenmore", to: "/cities/kenmore-wa/" },
  { label: "Shoreline", to: "/cities/shoreline-wa/" },
  { label: "Kirkland", to: "/cities/kirkland-wa/" },
  { label: "Redmond", to: "/cities/redmond-wa/" },
  { label: "Bellevue", to: "/cities/bellevue-wa/" },
];

const platformLogoByReviewPlatform: Record<ReviewPlatform, { alt: string; src: string }> = {
  Google: { alt: "Google Reviews", src: googleReviewLogo },
  Yelp: { alt: "Yelp Reviews", src: yelpLogo },
  Facebook: { alt: "Facebook Reviews", src: facebookLogo },
};

const renderPlatformBadge = ({
  href,
  label,
  logo,
  ratingNumber,
  stars,
}: PlatformBadge) => {
  const content = (
    <>
      <img src={logo} alt={label} className="reviews-platform-logo" loading="lazy" />
      <div className="reviews-platform-summary-card__rating">
        <span className="reviews-stars">{stars}</span>
        <strong>{ratingNumber}</strong>
      </div>
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="reviews-platform-summary-card"
      aria-label={`View ${label} profile`}>
      {content}
    </a>
  ) : (
    <article className="reviews-platform-summary-card">{content}</article>
  );
};

const ReviewsPage = () => (
  <SiteLayout>
    <main className="reviews-page reviews-page--editorial">
      <section className="reviews-hero reviews-hero--editorial" aria-labelledby="reviews-hero-title">
        <div className="reviews-hero__copy">
          <p className="reviews-hero__eyebrow">Reviews</p>
          <h1 id="reviews-hero-title">
            Reviews From Everett and Snohomish County Homeowners
          </h1>
          <p>
            {renderHighlightedText(
              "What local homeowners say about working with Northwood Renovation on deck builds, cedar fence installations, and outdoor renovation projects across Everett, Marysville, Mill Creek, Kirkland, and the greater Snohomish County area.",
            )}
          </p>
        </div>
        <div className="reviews-hero__media">
          <img
            src={testimonialsFamilyOutdoor}
            alt="Everett and Snohomish County homeowners enjoying a finished outdoor renovation project by Northwood Renovation"
            loading="lazy"
          />
        </div>
      </section>

      <section className="reviews-platform-banner reviews-platform-banner--editorial" aria-label="Review platforms">
        {platformBadges.map((platform) => (
          <React.Fragment key={platform.label}>
            {renderPlatformBadge(platform)}
          </React.Fragment>
        ))}
      </section>

      <section className="reviews-trust-note" aria-label="Review trust statement">
        <p>Reviews are from verified customers across our service area.</p>
        <p>We do not edit or filter what homeowners submit.</p>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-context-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">Context</p>
          <h2 id="reviews-context-title">Why We Share Reviews From Multiple Platforms</h2>
        </div>
        <div className="reviews-editorial-copy">
          <p>
            A lot of companies cherry-pick their best reviews and display them on their own website. We show the full picture — Google, Yelp, and Facebook — because we think homeowners deserve to see feedback from different sources, not just the ones we selected.
          </p>
          <p>
            Across all three platforms, the consistent themes in our reviews are the same ones we try to deliver on every project: clear estimates before work starts, organized crews that respect the property, and a final walkthrough before we consider the job done. When those things go right consistently, the reviews reflect it. When something goes wrong on a project — and occasionally things do — we address it directly rather than hiding it.
          </p>
          <p>
            The 4.9 Google rating comes from real Everett-area homeowners with real projects. We think that&apos;s worth more than a perfect score with ten reviews.
          </p>
        </div>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-categories-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">Project Types</p>
          <h2 id="reviews-categories-title">What Homeowners Have Hired Us to Build</h2>
        </div>
        <div className="reviews-topic-grid">
          <article className="reviews-topic-card">
            <h3>Deck Projects</h3>
            <p>
              Deck builds are our most reviewed service category. Projects range from straightforward cedar backyard decks to composite installations, covered deck and pergola builds, and multi-level custom layouts. Most deck reviews mention the estimate process, material decisions, and how the finished deck looks and functions after the first season.
            </p>
            <p>
              If you&apos;re planning a deck and want to hear from homeowners who have been through the process with us, the deck project reviews are the most relevant place to start.
            </p>
          </article>
          <article className="reviews-topic-card">
            <h3>Fence Projects</h3>
            <p>
              Fence reviews cover cedar privacy fence installations, horizontal wood fences, chain link, and fence replacement projects. Common themes in fence reviews: straight fence lines, gate hardware that works correctly after installation, and how the fence holds up through the first Pacific Northwest winter.
            </p>
          </article>
          <article className="reviews-topic-card">
            <h3>Repair Projects</h3>
            <p>
              Repair and refresh reviews are often the most specific — homeowners who hired us to fix a leaning fence section, replace rotted deck boards, update railings, or address a structural issue with an existing outdoor structure. These reviews tend to describe the diagnostic process as much as the repair itself, which gives a clear picture of how we approach problem-solving on existing structures.
            </p>
          </article>
        </div>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-grid-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">Customer Feedback</p>
          <h2 id="reviews-grid-title">What Local Homeowners Said About the Work</h2>
        </div>
        <div className="reviews-grid reviews-grid--editorial">
          {reviewCards.map((review) => (
            <article key={`${review.name}-${review.location}`} className="review-card review-card--editorial">
              <div className="review-card__meta">
                <span className="review-card__project-label">{review.projectLabel}</span>
                <span className={`review-card__platform-badge review-card__platform-badge--${review.platform.toLowerCase()}`}>
                  <img
                    src={platformLogoByReviewPlatform[review.platform].src}
                    alt={platformLogoByReviewPlatform[review.platform].alt}
                    className="reviews-platform-logo reviews-platform-logo--small"
                    loading="lazy"
                  />
                  <span className="reviews-stars">★★★★★</span>
                </span>
              </div>
              <div className="review-card__head review-card__head--editorial">
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.location}</p>
                </div>
              </div>
              <blockquote>"{review.quote}"</blockquote>
              <p className="review-card__context">{review.contextLabel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-themes-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">Patterns</p>
          <h2 id="reviews-themes-title">What Homeowners Consistently Mention</h2>
        </div>
        <div className="reviews-topic-grid">
          <article className="reviews-topic-card">
            <h3>The Estimate Process</h3>
            <p>
              Homeowners across multiple reviews mention that the estimate was clear and that what was quoted is what was built and charged. This is something we take seriously — we don&apos;t give verbal estimates that change when work starts, and we don&apos;t add scope without discussion. If something unexpected comes up during a project, we stop and talk through it before moving forward.
            </p>
          </article>
          <article className="reviews-topic-card">
            <h3>Communication During the Project</h3>
            <p>
              A lot of reviews mention communication specifically — being kept informed, having questions answered, knowing what to expect each day. Outdoor projects interrupt daily life. The crew is in your backyard, there&apos;s noise, there may be limited access to part of your property. We try to make that as predictable and straightforward as possible by keeping homeowners informed rather than leaving them to wonder what&apos;s happening.
            </p>
          </article>
          <article className="reviews-topic-card">
            <h3>The Final Walkthrough</h3>
            <p>
              Several reviews mention the walkthrough at the end of the project. We do this on every build — we walk the finished deck or fence with the homeowner, check the details, and address anything that isn&apos;t right before we leave. This step is not standard with every fence or deck builder in the area. We think it should be.
            </p>
          </article>
          <article className="reviews-topic-card">
            <h3>Clean Job Sites</h3>
            <p>
              Respecting the property during a build is something the reviews mention in different ways — organized crews, cleanup at the end of each day, no debris left in the yard. It doesn&apos;t sound like a significant thing until you&apos;ve had a project where the crew left a mess and you had to deal with it yourself. We try to make sure that&apos;s never the experience here.
            </p>
          </article>
        </div>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-reading-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">How To Read Reviews</p>
          <h2 id="reviews-reading-title">What to Look For When Reading Contractor Reviews</h2>
        </div>
        <div className="reviews-editorial-copy">
          <p>
            Hiring a fence or deck builder is a meaningful decision. You&apos;re inviting a crew onto your property for days or weeks, committing to a significant cost, and trusting that the finished structure will be built correctly and hold up over time. Reviews are one of the most useful tools for evaluating whether a company actually delivers on what it promises.
          </p>
          <p>
            Here&apos;s what we&apos;d suggest looking for when reading reviews for any fence or deck builder in the Everett area — including ours:
          </p>
          <p>
            <strong>Specificity.</strong> Generic five-star reviews that say "great work" without any detail don&apos;t tell you much. Reviews that describe the estimate process, a specific decision that was made during the project, or how a problem was handled are more useful because they show what the experience actually looked like.
          </p>
          <p>
            <strong>City and project type.</strong> A review from a Marysville homeowner about a cedar fence replacement tells you more than a review with no location. It confirms the company actually works in your area and on your type of project.
          </p>
          <p>
            <strong>Consistency across platforms.</strong> A company with strong reviews on one platform and weak reviews on another is worth looking into. Consistent feedback across Google, Yelp, and Facebook suggests the reviews reflect the actual experience rather than a managed reputation.
          </p>
          <p>
            <strong>Response to negative reviews.</strong> How a company responds to a critical review tells you more about their character than any five-star review. If they address the issue directly and professionally, that&apos;s a good sign. If they argue or dismiss it, that&apos;s useful information too.
          </p>
          <p>
            We&apos;re not perfect. Every company has projects that don&apos;t go exactly as planned. What we try to do is be honest about that and fix it — and the reviews reflect when that approach works and when it needs improvement.
          </p>
        </div>
      </section>

      <section className="reviews-editorial-section" aria-labelledby="reviews-areas-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">Locations</p>
          <h2 id="reviews-areas-title">Where Our Reviewed Projects Are Located</h2>
        </div>
        <div className="reviews-editorial-copy">
          <p>
            Reviews on this page come from homeowners across Everett, Bellevue, Kirkland, Mill Creek, Redmond, Renton, Marysville, Kent, and Shoreline. That reflects where we work — Snohomish County is our home base, and we serve projects across Greater Seattle and the Eastside regularly.
          </p>
          <p>
            If you&apos;re in one of those communities and want to know what homeowners in your area specifically say about working with us, filtering the reviews by city or checking Google for reviews that mention your neighborhood is the most direct way to get that information.
          </p>
          <p>
            We serve Everett, Marysville, Snohomish, Mill Creek, Mukilteo, Lynnwood, Edmonds, Bothell, Kenmore, Woodinville, Shoreline, Kirkland, Redmond, Bellevue, Renton, Kent, and surrounding Snohomish County communities.
          </p>
        </div>
      </section>

      <section className="reviews-service-highlights reviews-service-highlights--editorial" aria-labelledby="reviews-summary-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">By Project Type</p>
          <h2 id="reviews-summary-title">What the Reviews Say by Project Type</h2>
        </div>
        <div className="reviews-service-highlights__grid">
          {projectSummaryCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link to={card.ctaTo}>{card.ctaLabel} →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="reviews-trust-banner reviews-trust-banner--editorial" aria-labelledby="reviews-trust-title">
        <div className="reviews-section-intro">
          <p className="reviews-section-intro__eyebrow">What We Aim For</p>
          <h2 id="reviews-trust-title">What We Try to Deliver on Every Project</h2>
        </div>
        <p>
          The reviews on this page reflect what we aim for on every build. Not all of it is complicated — most of it comes down to things homeowners should reasonably expect from any deck or fence builder but don&apos;t always get:
        </p>
        <ul>
          <li>A written estimate that matches the final cost</li>
          <li>A crew that shows up when they said they would</li>
          <li>Clear communication when something unexpected comes up</li>
          <li>A clean job site throughout the project</li>
          <li>A final walkthrough before the project is closed out</li>
        </ul>
        <p className="reviews-trust-banner__closing">
          We&apos;re a small, Everett-based operation. The people who give you the estimate are the people who build the project. We don&apos;t subcontract the work or hand off a homeowner to a crew they&apos;ve never met. That consistency is part of why the reviews look the way they do — the planning conversation and the installation stay connected because the same people are doing both.
        </p>
      </section>

      <section className="reviews-final-cta reviews-final-cta--editorial" aria-labelledby="reviews-final-cta-title">
        <h2 id="reviews-final-cta-title">Ready to Start Your Project?</h2>
        <p>
          If you&apos;ve read through the reviews and want to talk through your own project, the first step is a free on-site estimate. We come to your property in Everett or the surrounding area, look at the space, and give you a clear written estimate with materials, scope, and timeline.
        </p>
        <p>No phone guesses. No pressure to commit on the spot.</p>
        <p>
          Call <strong>(425) 683-2024</strong> or fill out the estimate request form and we&apos;ll get back to you within one business day.
        </p>
        <div className="reviews-final-cta__actions">
          <Link to="/contact#contact-form" className="reviews-final-cta__primary">
            Request a Free Estimate
          </Link>
          <Link to="/projects/" className="reviews-final-cta__secondary">
            View Recent Work
          </Link>
        </div>
      </section>

      <footer className="reviews-service-area-strip" aria-labelledby="reviews-service-area-title">
        <h2 id="reviews-service-area-title">
          Deck and Fence Builder Serving Everett, WA and Nearby Cities:
        </h2>
        <p>
          {areaLinks.map((area, index) => (
            <React.Fragment key={area.to}>
              <Link to={area.to}>{area.label}</Link>
              {index < areaLinks.length - 1 ? " · " : null}
            </React.Fragment>
          ))}
        </p>
      </footer>
    </main>
  </SiteLayout>
);

export default ReviewsPage;

export const Head: HeadFC = ({ location }) => {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Northwood Renovation",
    telephone: "+14256832024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Everett",
      addressRegion: "WA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael T.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Great experience from the first estimate to the final walkthrough. The team explained our options clearly and built a fence that looks solid, clean, and professionally finished.",
        datePublished: "2026-01-01",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Andrea L.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Our new deck feels sturdy, clean, and well planned. Communication stayed clear the whole time and the crew kept the work area organized every day.",
        datePublished: "2026-01-01",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Hannah P.",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "They made the whole process easy to understand. The deck layout is practical, looks great, and was built with careful attention to detail.",
        datePublished: "2026-01-01",
      },
    ],
  };

  return (
    <SeoHead
      title={seoTitle}
      description={seoDescription}
      pathname={location.pathname}
      image={testimonialsFamilyOutdoor}
      imageAlt="Deck and fence builder reviews from Everett and Snohomish County homeowners"
      schema={reviewsSchema}
    />
  );
};
