import * as React from "react";
import { Link } from "gatsby";
import renderBrandText from "../brand-text";
import testimonialsFamilyOutdoor from "../../images/testimonials-family-outdoor.avif";

const testimonials = [
  {
    initials: "BF",
    name: "Bryce F",
    source: "Google",
    projectType: "Fence Installation",
    text: "Northwood Renovation did an amazing job on our new fence. The team was professional, communicated clearly, and completed the work with great attention to detail.",
  },
  {
    initials: "AR",
    name: "Amanda R",
    source: "Google",
    projectType: "Deck Builder",
    text: "We hired Northwood Renovation for a deck project and the result turned out better than we expected. The crew was respectful, organized, and easy to work with from start to finish.",
  },
  {
    initials: "MT",
    name: "Michael T",
    source: "Google",
    projectType: "Cedar Fence",
    text: "Great experience from the estimate to the final walkthrough. They explained our options clearly and built a fence that looks solid, clean, and professionally finished.",
  },
  {
    initials: "SL",
    name: "Sarah L",
    source: "Google",
    projectType: "Composite Deck",
    text: "Our backyard feels completely different after the new deck. Northwood Renovation delivered quality work, stayed communicative, and made the whole process simple.",
  },
];

const TestimonialsSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(0);
  const activeTestimonial = testimonials[activeTestimonialIndex];

  const handleTestimonialPrevious = () => {
    setActiveTestimonialIndex(
      (currentIndex) =>
        (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleTestimonialNext = () => {
    setActiveTestimonialIndex(
      (currentIndex) => (currentIndex + 1) % testimonials.length,
    );
  };

  return (
    <section
      id="reviews"
      className="testimonials-section"
      aria-labelledby="testimonials-title">
      <div className="testimonials-section__visual">
        <div className="testimonials-section__image-wrap">
          <img
            src={testimonialsFamilyOutdoor}
            alt="Family enjoying an outdoor deck and backyard living space"
            loading="lazy"
          />
          <div
            className="testimonials-section__image-badge"
            role="status"
            aria-label="4.9 Google rating">
            <span
              className="testimonials-section__badge-stars"
              aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg viewBox="0 0 24 24" key={index}>
                  <path d="M12 3.5L14.7 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.6 20.3l1-6.1-4.4-4.3L9.3 9 12 3.5z" />
                </svg>
              ))}
            </span>
            <span className="testimonials-section__badge-label">
              4.9 Google Rating
            </span>
          </div>
        </div>
      </div>

      <div className="testimonials-section__content">
        <div className="testimonials-section__header">
          <div>
            <p className="testimonials-section__eyebrow">Customer Reviews</p>
            <h2 id="testimonials-title">
              Hear From Our Satisfied Customers
            </h2>
            <span className="testimonials-section__subtitle">
              See what local homeowners say about working with{" "}
              <span className="brand-highlight">Northwood Renovation</span>.
            </span>
          </div>

          <div
            className="testimonials-section__controls"
            aria-label="Testimonial navigation">
            <button
              type="button"
              className="testimonials-section__nav-btn"
              onClick={handleTestimonialPrevious}
              aria-label="Show previous testimonial">
              <svg
                className="testimonials-section__nav-icon"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>
            <span className="testimonials-section__counter">
              {activeTestimonialIndex + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              className="testimonials-section__nav-btn"
              onClick={handleTestimonialNext}
              aria-label="Show next testimonial">
              <svg
                className="testimonials-section__nav-icon"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 18l6-6-6-6"
                />
              </svg>
            </button>
          </div>
        </div>

        <article className="testimonial-card">
          <div className="testimonial-card__top">
            <span className="testimonial-card__avatar">
              {activeTestimonial.initials}
            </span>
            <div>
              <h3>{activeTestimonial.name}</h3>
              <p>
                {activeTestimonial.source}
                <span
                  className="testimonial-card__stars"
                  aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg viewBox="0 0 24 24" key={index} aria-hidden="true">
                      <path d="M12 3.5L14.7 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.6 20.3l1-6.1-4.4-4.3L9.3 9 12 3.5z" />
                    </svg>
                  ))}
                </span>
              </p>
            </div>
          </div>
          <span className="testimonial-card__project">
            {activeTestimonial.projectType}
          </span>
          <blockquote>{renderBrandText(activeTestimonial.text)}</blockquote>
          <div className="testimonial-card__cta">
            <span>Ready for a similar result?</span>
            <Link to="/contact">Request a Free Estimate</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TestimonialsSection;
