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

type ReviewPlatform = "Google" | "Yelp" | "Facebook";
type ReviewService = "Decks" | "Fences" | "Repairs";

type ReviewItem = {
  id: string;
  initials: string;
  location: string;
  name: string;
  platform: ReviewPlatform;
  projectType: ReviewService;
  rating: number;
  text: string;
};

const reviews: ReviewItem[] = [
  {
    id: "r1",
    initials: "MT",
    location: "Seattle, WA",
    name: "Michael T.",
    platform: "Google",
    projectType: "Fences",
    rating: 5,
    text: "Great experience from the first estimate to the final walkthrough. The team explained our options clearly and built a fence that looks solid, clean, and professionally finished.",
  },
  {
    id: "r2",
    initials: "AL",
    location: "Bellevue, WA",
    name: "Andrea L.",
    platform: "Google",
    projectType: "Decks",
    rating: 5,
    text: "Our new deck feels sturdy, clean, and well planned. Communication stayed clear the whole time and the crew kept the work area organized every day.",
  },
  {
    id: "r3",
    initials: "JR",
    location: "Kirkland, WA",
    name: "Jason R.",
    platform: "Yelp",
    projectType: "Repairs",
    rating: 5,
    text: "We needed deck repairs and railing updates. They identified the right fixes quickly, gave a clear estimate, and delivered exactly what we discussed.",
  },
  {
    id: "r4",
    initials: "SN",
    location: "Seattle, WA",
    name: "Sofia N.",
    platform: "Facebook",
    projectType: "Fences",
    rating: 5,
    text: "Very professional and easy to work with. The new privacy fence looks great, and they were thoughtful about gate placement and cleanup.",
  },
  {
    id: "r5",
    initials: "DB",
    location: "Redmond, WA",
    name: "David B.",
    platform: "Yelp",
    projectType: "Decks",
    rating: 5,
    text: "From planning to final walkthrough, everything felt organized. They helped us choose materials and built a deck that works perfectly for our family.",
  },
  {
    id: "r6",
    initials: "KM",
    location: "Renton, WA",
    name: "Kelly M.",
    platform: "Facebook",
    projectType: "Repairs",
    rating: 5,
    text: "Our fence had multiple leaning sections. The team fixed the structural issues first, kept us updated, and the final result feels much more secure.",
  },
  {
    id: "r7",
    initials: "HP",
    location: "Seattle, WA",
    name: "Hannah P.",
    platform: "Google",
    projectType: "Decks",
    rating: 5,
    text: "They made the whole process easy to understand. The deck layout is practical, looks great, and was built with careful attention to detail.",
  },
  {
    id: "r8",
    initials: "CR",
    location: "Kent, WA",
    name: "Chris R.",
    platform: "Yelp",
    projectType: "Fences",
    rating: 5,
    text: "Clear communication, clean job site, and a strong finished fence. The team worked efficiently and made sure we were happy before closeout.",
  },
  {
    id: "r9",
    initials: "LP",
    location: "Shoreline, WA",
    name: "Lauren P.",
    platform: "Facebook",
    projectType: "Decks",
    rating: 5,
    text: "They helped us choose a deck option that fits Seattle weather and our maintenance goals. The workmanship is excellent and the project stayed on track.",
  },
];

const platformFilters = ["All Reviews", "Google", "Yelp", "Facebook"] as const;
const serviceFilters = ["All Projects", "Decks", "Fences", "Repairs"] as const;

type PlatformFilter = (typeof platformFilters)[number];
type ServiceFilter = (typeof serviceFilters)[number];

const renderStars = (count: number) => "★★★★★".slice(0, count);
const platformLogos: Record<ReviewPlatform, { alt: string; src: string }> = {
  Facebook: { alt: "Facebook Reviews", src: facebookLogo },
  Google: { alt: "Google Reviews", src: googleReviewLogo },
  Yelp: { alt: "Yelp Reviews", src: yelpLogo },
};

const ReviewsPage = () => {
  const [activePlatform, setActivePlatform] =
    React.useState<PlatformFilter>("All Reviews");
  const [activeService, setActiveService] =
    React.useState<ServiceFilter>("All Projects");
  const [activeCarouselIndex, setActiveCarouselIndex] = React.useState(0);

  const featuredReview = reviews[0];

  const visibleReviews = React.useMemo(() => {
    return reviews.filter((review) => {
      const platformMatch =
        activePlatform === "All Reviews" || review.platform === activePlatform;
      const serviceMatch =
        activeService === "All Projects" || review.projectType === activeService;
      return platformMatch && serviceMatch;
    });
  }, [activePlatform, activeService]);

  const carouselReview = visibleReviews[activeCarouselIndex] ?? featuredReview;

  React.useEffect(() => {
    setActiveCarouselIndex(0);
  }, [activePlatform, activeService]);

  const handleCarouselPrevious = () => {
    if (visibleReviews.length === 0) return;
    setActiveCarouselIndex((index) =>
      index === 0 ? visibleReviews.length - 1 : index - 1,
    );
  };

  const handleCarouselNext = () => {
    if (visibleReviews.length === 0) return;
    setActiveCarouselIndex((index) =>
      index === visibleReviews.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <SiteLayout>
      <main className="reviews-page">
        <section className="reviews-hero" aria-labelledby="reviews-hero-title">
          <div className="reviews-hero__copy">
            <p className="reviews-hero__eyebrow">Customer Reviews</p>
            <h1 id="reviews-hero-title">Reviews From Local Homeowners</h1>
            <p>
              {renderHighlightedText(
                "See what Seattle-area homeowners say about working with Northwood Renovation on fences, decks, and outdoor renovation projects.",
              )}
            </p>
            <div className="reviews-hero__actions">
              <Link to="/contact#contact-form" className="reviews-button reviews-button--primary">
                Request a Free Estimate
              </Link>
              <Link
                to="/projects"
                className="reviews-button reviews-button--secondary"
              >
                View Recent Work
              </Link>
            </div>
          </div>
          <div className="reviews-hero__media">
            <img
              src={testimonialsFamilyOutdoor}
              alt="Seattle-area homeowner enjoying finished outdoor deck project"
              loading="lazy"
            />
          </div>
        </section>

        <section className="reviews-platform-banner" aria-label="Review platforms">
          {[
            {
              label: "Google",
              rating: 4.9,
              text: "Trusted by local homeowners",
            },
            {
              label: "Yelp",
              rating: 4.7,
              text: "Fence & deck project feedback",
            },
            {
              label: "Facebook",
              rating: 4.4,
              text: "Community recommendations",
            },
          ].map((platform) => (
            <article className="reviews-platform-banner__item" key={platform.label}>
              <h2 className="reviews-platform-banner__logo-wrap">
                <img
                  src={platformLogos[platform.label as ReviewPlatform].src}
                  alt={platformLogos[platform.label as ReviewPlatform].alt}
                  className="reviews-platform-logo"
                  loading="lazy"
                />
              </h2>
              <p className="reviews-platform-banner__stars">
                <span className="reviews-stars">
                  {renderStars(Math.round(platform.rating))}
                </span>{" "}
                {platform.rating.toFixed(1)}
              </p>
              <p>{platform.text}</p>
            </article>
          ))}
        </section>

        <section className="reviews-featured" aria-label="Featured review">
          <div>
            <p className="reviews-featured__quote-mark" aria-hidden="true">
              “
            </p>
            <blockquote>{featuredReview.text}</blockquote>
          </div>
          <div className="reviews-featured__person">
            <p>{featuredReview.name}</p>
            <span>{renderHighlightedText(featuredReview.location)}</span>
            <span className="reviews-featured__platform">
              <img
                src={platformLogos[featuredReview.platform].src}
                alt={platformLogos[featuredReview.platform].alt}
                className="reviews-platform-logo reviews-platform-logo--small"
                loading="lazy"
              />
            </span>
          </div>
        </section>

        <section className="reviews-filters" aria-label="Review filters">
          <div className="reviews-filters__group">
            {platformFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activePlatform === filter
                    ? "reviews-filter reviews-filter--active"
                    : "reviews-filter"
                }
                onClick={() => setActivePlatform(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="reviews-filters__group">
            {serviceFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activeService === filter
                    ? "reviews-filter reviews-filter--active"
                    : "reviews-filter"
                }
                onClick={() => setActiveService(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="reviews-grid" aria-label="All customer reviews">
          {visibleReviews.length > 0 ? (
            visibleReviews.map((review) => (
              <article key={review.id} className="review-card">
                <div className="review-card__head">
                  <span className="review-card__initials">{review.initials}</span>
                  <div>
                    <h3>{review.name}</h3>
                    <p>{renderHighlightedText(review.location)}</p>
                  </div>
                </div>
                <p className="review-card__platform">
                  <img
                    src={platformLogos[review.platform].src}
                    alt={platformLogos[review.platform].alt}
                    className="reviews-platform-logo reviews-platform-logo--small"
                    loading="lazy"
                  />
                  <span className="reviews-stars">{renderStars(review.rating)}</span>
                </p>
                <span className="review-card__tag">{review.projectType}</span>
                <blockquote>{review.text}</blockquote>
              </article>
            ))
          ) : (
            <article className="reviews-grid__empty">
              <h3>No reviews match this filter</h3>
              <p>
                Try selecting <strong>All Reviews</strong> or{" "}
                <strong>All Projects</strong> to see more Seattle-area feedback.
              </p>
            </article>
          )}
        </section>

        <section className="reviews-carousel" aria-labelledby="reviews-carousel-title">
          <div className="reviews-carousel__header">
            <h2 id="reviews-carousel-title">What Homeowners Are Saying</h2>
            <div className="reviews-carousel__controls">
              <button
                type="button"
                onClick={handleCarouselPrevious}
                aria-label="Show previous review"
              >
                ←
              </button>
              <span>
                {Math.min(activeCarouselIndex + 1, visibleReviews.length)} /{" "}
                {visibleReviews.length || 1}
              </span>
              <button
                type="button"
                onClick={handleCarouselNext}
                aria-label="Show next review"
              >
                →
              </button>
            </div>
          </div>
          <article className="reviews-carousel__card">
            <p className="reviews-carousel__platform">
              <img
                src={platformLogos[carouselReview.platform].src}
                alt={platformLogos[carouselReview.platform].alt}
                className="reviews-platform-logo reviews-platform-logo--small"
                loading="lazy"
              />
            </p>
            <h3>{carouselReview.name}</h3>
            <span>{carouselReview.projectType}</span>
            <blockquote>{carouselReview.text}</blockquote>
          </article>
          <div className="reviews-carousel__dots" aria-hidden="true">
            {visibleReviews.map((review, index) => (
              <span
                className={
                  index === activeCarouselIndex
                    ? "reviews-carousel__dot reviews-carousel__dot--active"
                    : "reviews-carousel__dot"
                }
                key={review.id}
              />
            ))}
          </div>
        </section>

        <section className="reviews-platform-sections" aria-label="Platform sections">
          {(["Google", "Yelp", "Facebook"] as const).map((platform) => {
            const platformReviews = reviews.filter(
              (review) => review.platform === platform,
            );
            return (
              <article key={platform} className="reviews-platform-block">
                <div className="reviews-platform-block__head">
                  <h2>
                    <img
                      src={platformLogos[platform].src}
                      alt={platformLogos[platform].alt}
                      className="reviews-platform-logo"
                      loading="lazy"
                    />
                  </h2>
                  <p>
                    <span className="reviews-stars">{renderStars(5)}</span> from
                    Seattle-area project feedback
                  </p>
                </div>
                <div className="reviews-platform-block__grid">
                  {platformReviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="reviews-platform-block__item">
                      <p>{review.name}</p>
                      <span>{review.projectType}</span>
                      <blockquote>{review.text}</blockquote>
                    </div>
                  ))}
                </div>
                <a href="/contact">Read More {platform} Reviews</a>
              </article>
            );
          })}
        </section>

        <section className="reviews-service-highlights" aria-label="Review highlights">
          <h2>Reviews by Project Type</h2>
          <div className="reviews-service-highlights__grid">
            <article>
              <h3>Deck Projects</h3>
              <p>
                “The crew kept everything organized and delivered a deck that feels
                durable and cleanly finished.”
              </p>
              <Link to="/deck/custom-deck">Explore Deck Services</Link>
            </article>
            <article>
              <h3>Fence Projects</h3>
              <p>
                “From layout to final walkthrough, communication stayed clear and
                the fence quality is excellent.”
              </p>
              <Link to="/fence/cedar-wood-fence">Explore Fence Services</Link>
            </article>
            <article>
              <h3>Repair Projects</h3>
              <p>
                “They explained repair priorities clearly and fixed safety issues
                first without overcomplicating the scope.”
              </p>
              <Link to="/contact#contact-form">Talk About Repairs</Link>
            </article>
          </div>
        </section>

        <section className="reviews-trust-banner" aria-label="Reputation banner">
          <h2>Trusted for Clean Craftsmanship and Clear Communication</h2>
          <p>
            From the first estimate to the final walkthrough,{" "}
            <span className="brand-highlight">Northwood Renovation</span> focuses
            on making the process clear, organized, and easy to understand.
          </p>
          <ul>
            <li>Clear estimates</li>
            <li>Clean job sites</li>
            <li>Final walkthroughs</li>
            <li>Seattle-area service</li>
          </ul>
        </section>

        <section className="reviews-final-cta" aria-labelledby="reviews-final-cta-title">
          <h2 id="reviews-final-cta-title">Ready to Start Your Project?</h2>
          <p>
            Tell us about your deck, fence, or outdoor renovation project and
            we&apos;ll help you plan the next step.
          </p>
          <div className="reviews-final-cta__actions">
            <Link to="/contact#contact-form" className="reviews-final-cta__primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="reviews-final-cta__secondary">
              View Recent Work
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default ReviewsPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Customer Reviews | Northwood Renovation"
    description="Read Google, Yelp, and Facebook reviews from Seattle-area homeowners who worked with Northwood Renovation on deck, fence, and outdoor renovation projects."
    pathname={location.pathname}
  />
);
