import * as React from "react";
import { HeadFC } from "gatsby";
import logo from "../images/deck-local-logo.svg";
import deckHeroImage from "../images/gallery/deck-with-railing-house.jpg";
import beforeDeckImage from "../images/gallery/deck-bench-shovel.jpg";
import afterDeckImage from "../images/gallery/modern-backyard-deck.jpg";
import workerImage from "../images/about/deck-installation-worker.jpg";

const CONTACT_PHONE_DISPLAY = "(000) 000-0000";
const CONTACT_PHONE_TEL = "+10000000000";
const CONTACT_EMAIL = "northwoodrenovation@gmail.com";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const trustCards = [
  ["Google Reviews", "Homeowner feedback"],
  ["Yelp", "Local project reviews"],
  ["Facebook", "Community updates"],
  ["Fully Insured", "Residential deck work"],
  ["Seattle Area", "Built for Northwest homes"],
];

const trustBullets = [
  "Local Seattle-area deck contractor",
  "Wood, composite, custom, outdoor & covered decks",
  "Strong framing, safe stairs, clean railings",
  "Clear communication from estimate to final walkthrough",
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
  "Custom Decks",
  "Wood Decks",
  "Composite Decks",
  "Outdoor Decks",
  "Covered Decks",
  "Deck Framing",
  "Railings & Stairs",
  "Deck Replacement",
  "Deck Lighting",
  "Material Guidance",
  "Layout Planning",
  "Final Walkthrough",
];

const processSteps = [
  {
    title: "Request an Estimate",
    text: "Tell us about your deck project, location, and what you want to improve.",
  },
  {
    title: "On-Site Review",
    text: "We look at your yard, access, layout, stairs, railings, and material options.",
  },
  {
    title: "Clear Plan & Estimate",
    text: "You receive a straightforward scope, practical recommendations, and clear next steps.",
  },
  {
    title: "Professional Installation",
    text: "Our crew builds cleanly, communicates clearly, and completes a final walkthrough.",
  },
];

const meetBullets = [
  "Deck and fence specialists",
  "Seattle-area residential projects",
  "Clean jobsite standards",
  "Practical material guidance",
  "Final walkthrough before completion",
];

const reviewCards = [
  {
    title: "Clear Estimates",
    text: "Know what is included before work begins.",
  },
  {
    title: "Clean Installation",
    text: "A professional crew, organized jobsite, and careful finish details.",
  },
  {
    title: "Built for Daily Use",
    text: "Decks planned for real life: stairs, railings, seating, pets, weather, and maintenance.",
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
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);

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
        Deck Builder: $1,500 OFF · Offer Ends May 31
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
          <p className="deck-local-hero__review">★★★★★ Trusted by Seattle-area homeowners</p>
          <p className="deck-local-hero__label">Fully insured deck &amp; fence contractor</p>
          <h1>Seattle Deck Builder for Custom Wood, Composite &amp; Covered Decks</h1>
          <p className="deck-local-hero__subtitle">
            Northwood Renovation builds clean, durable decks designed for
            Seattle homes, rainy Northwest weather, and everyday outdoor living.
          </p>
          <p className="deck-local-hero__offer">Free estimate + clear project plan</p>
          <button className="deck-local-button" type="button" onClick={scrollToForm}>
            Request a Free Deck Estimate →
          </button>
          <ul className="deck-local-check-list">
            {trustBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="deck-local-hero__media">
          <img
            src={deckHeroImage}
            alt="Finished Seattle backyard deck with wood railing and outdoor living space"
          />
        </div>
      </section>

      <section className="deck-local-trust" aria-label="Trust signals">
        {trustCards.map(([title, text]) => (
          <article key={title} className="deck-local-trust-card">
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="deck-local-transform" id="deck-local-projects">
        <div className="deck-local-section-copy">
          <p className="deck-local-kicker">Backyard Transformation</p>
          <h2>From Weathered Outdoor Space to a Backyard You&apos;ll Actually Use</h2>
          <p>
            See how a well-built deck can make a Seattle backyard feel more
            finished, private, and ready for everyday living.
          </p>
          <button className="deck-local-button deck-local-button--secondary" type="button" onClick={scrollToForm}>
            Plan My Deck Project →
          </button>
        </div>
        <div className="deck-local-before-after" aria-label="Before and after deck transformation">
          <figure>
            <span>Before</span>
            <img src={beforeDeckImage} alt="Backyard deck area before a finished deck update" />
          </figure>
          <figure>
            <span>After</span>
            <img src={afterDeckImage} alt="Finished backyard deck ready for outdoor living" />
          </figure>
        </div>
      </section>

      <section className="deck-local-section" id="deck-local-benefits">
        <div className="deck-local-section-head">
          <p className="deck-local-kicker">Why It Works</p>
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
      </section>

      <section className="deck-local-included">
        <div className="deck-local-section-copy">
          <p className="deck-local-kicker">Included Services</p>
          <h2>Everything You Need for a Better Deck</h2>
          <p>
            No need to juggle multiple contractors or guess what comes next.
            Northwood Renovation helps with planning, materials, and installation
            from start to finish.
          </p>
          <button className="deck-local-button" type="button" onClick={scrollToForm}>
            Get My Free Deck Estimate →
          </button>
        </div>
        <div className="deck-local-service-grid">
          {includedServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="deck-local-process" id="deck-local-process">
        <div className="deck-local-section-head">
          <p className="deck-local-kicker">Simple Process</p>
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
          />
        </div>
        <div className="deck-local-section-copy">
          <p className="deck-local-kicker">Local Contractor</p>
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

      <section className="deck-local-section" id="deck-local-reviews">
        <div className="deck-local-section-head">
          <p className="deck-local-kicker">Homeowner Confidence</p>
          <h2>Beautiful Decks, Clear Communication, Happy Homeowners</h2>
          <p>
            Homeowners choose Northwood Renovation for clean work, practical
            advice, and finished outdoor spaces that feel ready to use.
          </p>
        </div>
        <div className="deck-local-card-grid deck-local-card-grid--three">
          {reviewCards.map((card) => (
            <article className="deck-local-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deck-local-faq" id="deck-local-faq">
        <div className="deck-local-section-head">
          <p className="deck-local-kicker">Planning Answers</p>
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

      <section className="deck-local-estimate" id="deck-local-form">
        <div className="deck-local-estimate__copy">
          <p className="deck-local-kicker">Free Deck Estimate</p>
          <h2>Tell Us About Your Deck Project</h2>
          <p>
            Share a few details and Northwood Renovation will help you plan the
            next step with a clear estimate and practical recommendations.
          </p>
        </div>
        <form className="deck-local-form" onSubmit={handleSubmit}>
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
            <span>Project ZIP / City</span>
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
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
          </button>
        </form>
      </section>

      <section className="deck-local-final-cta">
        <h2>Ready to Build a Better Deck?</h2>
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
