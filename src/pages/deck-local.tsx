import * as React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/deck-local.css";
import logo from "../images/northwood-logo.svg";
import angiLogo from "../images/angi-logo.svg";
import bbbLogo from "../images/bbb-logo.svg";
import beforeDeckImage from "../images/cities/deck-local-before.png";
import afterDeckImage from "../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (5).jpg";
import beforePremiumDeckImage from "../images/cities/deck-local-carousel-before-weathered-deck.png";
import afterPremiumDeckImage from "../images/cities/deck-local-carousel-after-premium-deck.png";
import beforeLargeDeckImage from "../images/cities/deck-local-carousel-before-large-weathered-deck.png";
import afterLargeDeckImage from "../images/cities/deck-local-carousel-after-new-wood-deck.jpg";
import beforePnwDeckImage from "../images/cities/deck-local-carousel-before-pnw-deck.png";
import afterPnwDeckImage from "../images/cities/deck-local-carousel-after-pnw-deck.png";
import facebookLogo from "../images/facebook-logo.svg";
import googleReviewLogo from "../images/google-review-logo.png";
import workerImage from "../images/about/deck-installation-worker.jpg";
import yelpLogo from "../images/yelp-logo.png";

const CONTACT_PHONE_DISPLAY = "(000) 000-0000";
const CONTACT_PHONE_TEL = "+10000000000";
const CONTACT_EMAIL = "northwoodrenovation@gmail.com";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const trustCards = [
  {
    alt: "Google Reviews",
    label: "Google",
    quantity: "64+ reviews",
    rating: "4.9/5",
    showStars: true,
    src: googleReviewLogo,
  },
  {
    alt: "Yelp",
    label: "Yelp",
    quantity: "28+ reviews",
    rating: "4.7/5",
    showStars: true,
    src: yelpLogo,
  },
  {
    alt: "Facebook",
    label: "Facebook",
    quantity: "36+ reviews",
    rating: "4.8/5",
    showStars: true,
    src: facebookLogo,
  },
  {
    alt: "Better Business Bureau",
    label: "BBB",
    quantity: "Verified profile",
    rating: "A+",
    showStars: false,
    src: bbbLogo,
  },
  {
    alt: "Angi",
    label: "Angi",
    quantity: "22+ reviews",
    rating: "5/5",
    showStars: true,
    src: angiLogo,
  },
];

const trustBullets = [
  "Local Seattle-area deck contractor",
  "Wood, composite & covered decks",
  "Strong framing, stairs & railings",
  "Clear estimate and clean process",
];

const benefits = [
  {
    title: "Designed for Seattle Homes",
    text: "Layouts, stairs, railings, and materials planned around your home, yard, and how you want to use the space.",
  },
  {
    title: "Built for Northwest Weather",
    text: "Decks installed with moisture, drainage, ventilation, and long-term durability in mind.",
  },
  {
    title: "Clean Craftsmanship",
    text: "Straight boards, strong framing, safe stairs, clean railings, and a jobsite that feels organized from start to finish.",
  },
];

const includedServices = [
  {
    href: "/deck/custom-deck/",
    title: "Custom Decks",
  },
  {
    href: "/deck/wood-deck/",
    title: "Wood Decks",
  },
  {
    href: "/deck/composite-deck/",
    title: "Composite Decks",
  },
  {
    href: "/deck/outdoor-deck/",
    title: "Outdoor Decks",
  },
  {
    href: "/deck/covered-deck/",
    title: "Covered Decks",
  },
  {
    href: "/fence/cedar-wood-fence/",
    title: "Cedar Wood Fences",
  },
  {
    href: "/fence/chain-link-fence/",
    title: "Chain Link Fences",
  },
];

const processSteps = [
  {
    title: "Request an Estimate",
    text: "Tell us about your project.",
  },
  {
    title: "On-Site Review",
    text: "We check layout, access, materials, and details.",
  },
  {
    title: "Clear Plan",
    text: "You get scope, recommendations, and next steps.",
  },
  {
    title: "Installation",
    text: "We build cleanly and complete a final walkthrough.",
  },
];

const meetBullets = [
  "Deck and fence specialists",
  "Seattle-area residential projects",
  "Clean jobsite standards",
  "Practical material guidance",
  "Final walkthrough before completion",
];

const transformationSlides = [
  {
    afterAlt: "Finished wood deck with clean railings and usable outdoor space",
    afterImage: afterDeckImage,
    afterText: "Finished wood deck with clean railings",
    beforeAlt: "Old weathered deck boards and tired railing",
    beforeImage: beforeDeckImage,
    beforeText: "Weathered deck boards and tired railing",
    description:
      "A worn backyard deck was replaced with a cleaner, stronger outdoor space designed for Seattle weather.",
    label: "Seattle Deck Refresh",
    location: "Seattle, WA",
  },
  {
    afterAlt: "Updated backyard deck with black railings and outdoor seating",
    afterImage: afterPnwDeckImage,
    afterText: "Updated deck with black railings and outdoor seating",
    beforeAlt: "Weathered backyard deck behind a Pacific Northwest home",
    beforeImage: beforePnwDeckImage,
    beforeText: "Weathered boards, old railings, and tired outdoor seating",
    description:
      "An older backyard deck was upgraded into a cleaner, more comfortable outdoor living space with modern railings and room to gather.",
    label: "Pacific Northwest Deck Upgrade",
    location: "Seattle Area",
  },
  {
    afterAlt: "Finished backyard deck with black railings and outdoor seating",
    afterImage: afterPremiumDeckImage,
    afterText: "Finished deck with black railings and outdoor seating",
    beforeAlt: "Weathered backyard deck with worn boards and old railings",
    beforeImage: beforePremiumDeckImage,
    beforeText: "Weathered deck boards, tired railings, and worn stairs",
    description:
      "A weathered deck was rebuilt into a cleaner, safer outdoor living space with sharp railings, fresh boards, and room to gather.",
    label: "Backyard Deck Rebuild",
    location: "Seattle Area",
  },
  {
    afterAlt: "New elevated wood deck with fresh stairs and railings",
    afterImage: afterLargeDeckImage,
    afterText: "New elevated wood deck with fresh stairs and railings",
    beforeAlt: "Large weathered backyard deck with gray boards and old stairs",
    beforeImage: beforeLargeDeckImage,
    beforeText: "Large weathered deck with worn boards and aging stairs",
    description:
      "A large aging deck was rebuilt with fresh wood, safer stairs, and clean railings to make the backyard feel open and usable again.",
    label: "Large Wood Deck Replacement",
    location: "Seattle Area",
  },
];

const faqItems = [
  {
    question: "What deck material works best in Seattle?",
    answer:
      "Composite decking is a strong low-maintenance option for Seattle weather, while cedar and wood decks offer a warmer natural look. The best choice depends on your budget, maintenance preferences, and how you plan to use the space.",
  },
  {
    question: "Do you build both wood and composite decks?",
    answer:
      "Yes. Northwood Renovation builds wood, cedar, composite, custom, outdoor, and covered decks for Seattle-area homeowners.",
  },
  {
    question: "Can you build covered decks?",
    answer:
      "Yes. Covered deck planning can be part of the project conversation, including layout, structure, weather protection, and how the covered space connects to the home.",
  },
  {
    question: "Do you handle stairs and railings?",
    answer:
      "Yes. Stairs, landings, railings, transitions, and safety details can be included so the deck feels complete and practical for everyday use.",
  },
  {
    question: "How long does a deck project usually take?",
    answer:
      "Many deck projects take one to two weeks after materials and scheduling are confirmed. Timing depends on size, access, weather, materials, and project complexity.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Northwood Renovation offers free estimates and helps homeowners understand scope, material options, and practical next steps before work begins.",
  },
];

const serviceAreas = [
  "Seattle",
  "Bellevue",
  "Kirkland",
  "Redmond",
  "Shoreline",
  "Bothell",
  "Edmonds",
  "Renton",
  "West Seattle",
  "Capitol Hill",
  "Ballard",
];

const projectTypes = [
  "Custom Deck",
  "Wood Deck",
  "Composite Deck",
  "Outdoor Deck",
  "Covered Deck",
  "Not Sure Yet",
];

const DeckLocalPage = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);
  const [activeTransformationIndex, setActiveTransformationIndex] = React.useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = React.useState(false);
  const [isCarouselInView, setIsCarouselInView] = React.useState(false);
  const [carouselInteractionPause, setCarouselInteractionPause] = React.useState(0);
  const activeTransformation = transformationSlides[activeTransformationIndex];

  React.useEffect(() => {
    if (!isCarouselInView || isCarouselHovered || carouselInteractionPause > 0) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setActiveTransformationIndex((currentIndex) =>
        currentIndex === transformationSlides.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [
    activeTransformationIndex,
    carouselInteractionPause,
    isCarouselHovered,
    isCarouselInView,
  ]);

  React.useEffect(() => {
    const node = carouselRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsCarouselInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsCarouselInView(entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (carouselInteractionPause === 0) return undefined;

    const timer = window.setTimeout(() => {
      setCarouselInteractionPause(0);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [carouselInteractionPause]);

  const showTransformationSlide = (index: number, shouldPause = true) => {
    setActiveTransformationIndex(
      (index + transformationSlides.length) % transformationSlides.length,
    );
    if (shouldPause) setCarouselInteractionPause((pauseCount) => pauseCount + 1);
  };

  const showPreviousTransformation = () => {
    showTransformationSlide(activeTransformationIndex - 1);
  };

  const showNextTransformation = () => {
    showTransformationSlide(activeTransformationIndex + 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !phone || !email || !location || !message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _captcha: "false",
          _subject: "New deck landing page estimate request",
          email,
          location,
          message,
          name,
          phone,
          projectType: String(formData.get("projectType") ?? ""),
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const scrollToForm = () => {
    document.getElementById("deck-local-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="deck-local">
      <div className="deck-local__offer-bar">
        Seattle Deck Builder · Free Estimates · Built for Northwest Weather
      </div>

      <header className="deck-local-header">
        <div className="deck-local-header__inner">
          <a className="deck-local-header__brand" href="/" aria-label="Northwood Renovation home">
            <img src={logo} alt="Northwood Renovation" />
            <span>Northwood Renovation</span>
          </a>
          <nav className="deck-local-header__nav" aria-label="Deck landing navigation">
            <a href="#deck-local-reviews">Reviews</a>
            <a href="#deck-local-projects">Projects</a>
            <a href="#deck-local-benefits">Benefits</a>
            <a href="#deck-local-process">Process</a>
            <a href="#deck-local-faq">FAQ</a>
          </nav>
          <a className="deck-local-header__call" href={`tel:${CONTACT_PHONE_TEL}`}>
            Call {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <section className="deck-local-hero">
        <div className="deck-local-hero__copy">
          <p className="deck-local-hero__review">
            <span aria-hidden="true">★★★★★</span> Trusted by Seattle-area homeowners
          </p>
          <p className="deck-local-hero__label">✓ Fully Insured</p>
          <h1>
            Seattle&apos;s <span>Deck Builder</span>
            <br />
            Custom Composite &amp;
            <br />
            Wood Decks Built to Last
          </h1>
          <p className="deck-local-hero__subtitle">
            Northwood Renovation builds clean, durable decks for Seattle homes
            including custom layouts, covered deck options, safe stairs, and
            railings built for Northwest weather.
          </p>
          <p className="deck-local-hero__offer">FREE Estimate + Clear Project Plan</p>
          <ul className="deck-local-check-list">
            {trustBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <article className="deck-local-confidence-card">
            <span className="deck-local-confidence-card__icon" aria-hidden="true" />
            <div>
              <h2>Plan Your Project With Confidence</h2>
              <p>
                Review materials and options, then visualize your project before
                work begins.
              </p>
            </div>
          </article>
        </div>
        <div className="deck-local-hero__visual">
          <div className="deck-local-hero__media">
            <StaticImage
              src="../images/cities/lucid-origin_Create_a_realistic_professional_photo_of_a_Seattle-area_residential_home_with_a_-0 (4).jpg"
              alt="Finished Seattle backyard deck with wood railing and outdoor living space"
              imgClassName="deck-local-hero__media-image"
              placeholder="blurred"
              quality={72}
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <form className="deck-local-form deck-local-form--hero" id="deck-local-form" onSubmit={handleSubmit}>
            {status === "success" ? (
              <p className="deck-local-form__message" role="status">
                Thanks. Your request has been received and our team will follow up soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="deck-local-form__message deck-local-form__message--error" role="alert">
                Please complete the required fields and try again.
              </p>
            ) : null}
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>ZIP / City</span>
              <input name="location" type="text" autoComplete="postal-code" required />
            </label>
            <label>
              <span>Project Type</span>
              <select name="projectType" defaultValue="Custom Deck">
                {projectTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={2} required />
            </label>
            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
            </button>
          </form>
        </div>
      </section>

      <section className="deck-local-trust" id="deck-local-reviews" aria-label="Trust signals">
        {trustCards.map((card) => (
          <article key={card.label} className="deck-local-trust-card">
            <img src={card.src} alt={card.alt} loading="lazy" decoding="async" />
            {card.showStars ? (
              <p className="deck-local-trust-card__stars" aria-hidden="true">
                ★★★★★
              </p>
            ) : null}
            <strong>{card.rating}</strong>
            <em>{card.quantity}</em>
          </article>
        ))}
      </section>

      <section className="deck-local-transform" id="deck-local-projects">
        <div className="deck-local-section-copy">
          <p className="deck-local-kicker">Backyard Transformation</p>
          <h2>From Worn-Out Outdoor Spaces to Clean, Usable Backyards</h2>
          <p>
            See how new decks and fences can make a Seattle-area backyard feel
            safer, cleaner, more private, and ready for everyday use.
          </p>
          <button className="deck-local-button deck-local-button--secondary" type="button" onClick={scrollToForm}>
            Plan My Deck Project →
          </button>
        </div>
        <div
          ref={carouselRef}
          className="deck-local-before-after-carousel"
          aria-label="Before and after project carousel"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}>
          <div className="deck-local-before-after-carousel__meta">
            <span>
              Transformation {activeTransformationIndex + 1} of{" "}
              {transformationSlides.length}
            </span>
            <strong>{activeTransformation.location}</strong>
          </div>
          <div className="deck-local-before-after" key={activeTransformation.label}>
            <figure>
              <span>Before</span>
              <img
                src={activeTransformation.beforeImage}
                alt={activeTransformation.beforeAlt}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure>
              <span>After</span>
              <img
                src={activeTransformation.afterImage}
                alt={activeTransformation.afterAlt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="deck-local-before-after-carousel__copy">
            <div>
              <h3>{activeTransformation.label}</h3>
              <p>
                <strong>Before:</strong> {activeTransformation.beforeText}
              </p>
              <p>
                <strong>After:</strong> {activeTransformation.afterText}
              </p>
              <p>{activeTransformation.description}</p>
            </div>
            <div className="deck-local-before-after-carousel__controls" aria-label="Carousel controls">
              <button type="button" onClick={showPreviousTransformation} aria-label="Show previous transformation">
                ←
              </button>
              <button type="button" onClick={showNextTransformation} aria-label="Show next transformation">
                →
              </button>
            </div>
          </div>
          <div className="deck-local-before-after-carousel__dots" aria-label="Choose transformation">
            {transformationSlides.map((slide, index) => (
              <button
                aria-label={`Show ${slide.label}`}
                aria-current={index === activeTransformationIndex ? "true" : undefined}
                className={index === activeTransformationIndex ? "deck-local-before-after-carousel__dot deck-local-before-after-carousel__dot--active" : "deck-local-before-after-carousel__dot"}
                key={slide.label}
                type="button"
                onClick={() => showTransformationSlide(index)}
              />
            ))}
          </div>
          <div className="deck-local-before-after-carousel__cta">
            <p>Have a deck or fence that needs an upgrade?</p>
            <button className="deck-local-button" type="button" onClick={scrollToForm}>
              Plan My Project →
            </button>
          </div>
        </div>
      </section>

      <section className="deck-local-section" id="deck-local-benefits">
        <div className="deck-local-section-head">
          <h2>Your Deck, Built for Seattle Weather and Everyday Use</h2>
          <p>
            A good deck should look clean, feel solid, and hold up through wet
            seasons, daily traffic, and changing Northwest weather.
          </p>
        </div>
        <div className="deck-local-card-grid deck-local-card-grid--three">
          {benefits.map((benefit) => (
            <article className="deck-local-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <div className="deck-local-included-compact">
          <h3>Our Comprehensive Services</h3>
          <p>
            Explore Northwood Renovation services for decks, fences, materials,
            and outdoor upgrades built for Seattle-area homes.
          </p>
          <div className="deck-local-service-grid">
            {includedServices.map((service) => (
              <a href={service.href} key={service.title}>
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-local-process" id="deck-local-process">
        <div className="deck-local-section-head">
          <h2>How Your New Deck Project Gets Done</h2>
          <p>
            A simple process designed to keep your project clear, organized, and
            moving forward.
          </p>
        </div>
        <div className="deck-local-process__grid">
          {processSteps.map((step, index) => (
            <article key={step.title} className="deck-local-process-card">
              <span>Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deck-local-meet">
        <div className="deck-local-meet__media">
          <img
            src={workerImage}
            alt="Northwood Renovation worker on a Seattle-area residential deck project"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="deck-local-section-copy">
          <h2>Meet Northwood Renovation</h2>
          <p>
            Northwood Renovation builds decks, fences, and outdoor spaces for
            Seattle-area homeowners who want practical craftsmanship, clean
            communication, and work built for Northwest weather.
          </p>
          <ul className="deck-local-check-list">
            {meetBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-local-faq" id="deck-local-faq">
        <div className="deck-local-section-head">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you plan your deck with confidence.</p>
        </div>
        <div className="deck-local-faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            const panelId = `deck-local-faq-answer-${index}`;

            return (
            <article
              className={isOpen ? "deck-local-faq__item deck-local-faq__item--open" : "deck-local-faq__item"}
              key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="deck-local-faq__icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                className="deck-local-faq__answer"
                id={panelId}
                hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="deck-local-final-cta">
        <h2>Ready to Build a Deck You&apos;ll Actually Use?</h2>
        <p>
          Tell us about your outdoor project and Northwood Renovation will help
          you plan the next step with a clear estimate and practical
          recommendations.
        </p>
        <div>
          <button type="button" onClick={scrollToForm}>
            Request a Free Deck Estimate →
          </button>
          <a href={`tel:${CONTACT_PHONE_TEL}`}>Call Northwood Renovation</a>
        </div>
      </section>

      <div className="deck-local-mobile-cta" aria-label="Quick actions">
        <div className="deck-local-mobile-cta__card">
          <button type="button" onClick={scrollToForm}>
            Free Estimate
          </button>
          <a href={`tel:${CONTACT_PHONE_TEL}`}>Call</a>
        </div>
      </div>

      <footer className="deck-local-footer">
        <h2>Proudly Serving Seattle &amp; Nearby Areas</h2>
        <p>{serviceAreas.join(" · ")}</p>
      </footer>
    </main>
  );
};

export default DeckLocalPage;

export const Head: HeadFC = () => (
  <>
    <title>
      Seattle Deck Builder | Custom Wood &amp; Composite Decks | Northwood Renovation
    </title>
    <meta
      name="description"
      content="Northwood Renovation builds custom wood, composite, outdoor, and covered decks for Seattle-area homeowners. Request a free estimate for a deck built for Northwest weather."
    />
  </>
);
