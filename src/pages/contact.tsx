import * as React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/contact.css";
import renderHighlightedText from "../components/brand-text";
import SiteLayout from "../components/site-layout";

const CONTACT_PHONE_DISPLAY = "(000) 000-0000";
const CONTACT_PHONE_TEL = "+10000000000";
const CONTACT_EMAIL = "northwoodrenovation@gmail.com";
const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const AsideIconPhone = () => (
  <svg
    className="contact-aside-panel__glyph"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AsideIconMail = () => (
  <svg
    className="contact-aside-panel__glyph"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <rect fill="none" height={14} rx={2} ry={2} width={18} x={3} y={5} />
    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AsideIconPin = () => (
  <svg
    className="contact-aside-panel__glyph"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} fill="none" r={3} stroke="currentColor" />
  </svg>
);

const AsideIconClock = () => (
  <svg
    className="contact-aside-panel__glyph"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden
  >
    <circle cx={12} cy={12} fill="none" r={10} />
    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const projectTypes = [
  { value: "", label: "Select service" },
  { value: "deck-build", label: "Deck Build" },
  { value: "fence-installation", label: "Fence Installation" },
  { value: "deck-repair", label: "Deck Repair" },
  { value: "fence-repair", label: "Fence Repair" },
  { value: "railings-stairs", label: "Railings / Stairs" },
  { value: "not-sure-yet", label: "Not Sure Yet" },
];

const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const phoneValid = (raw: string) => raw.replace(/\D/g, "").length >= 10;

const CONTACT_HERO_VIDEO_RATE = 0.55;
const CONTACT_HERO_VIDEO_MOBILE_BREAKPOINT = 768;

const ContactPage = () => {
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.innerWidth <= CONTACT_HERO_VIDEO_MOBILE_BREAKPOINT) {
      return undefined;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => setShouldLoadHeroVideo(true),
        { timeout: 1200 },
      );
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => setShouldLoadHeroVideo(true), 700);
    return () => window.clearTimeout(timeoutId);
  }, []);

  React.useEffect(() => {
    if (!shouldLoadHeroVideo) return undefined;
    const el = heroVideoRef.current;
    if (!el) return;
    const applySlowPlayback = () => {
      el.playbackRate = CONTACT_HERO_VIDEO_RATE;
    };
    applySlowPlayback();
    el.addEventListener("loadedmetadata", applySlowPlayback);
    return () => el.removeEventListener("loadedmetadata", applySlowPlayback);
  }, [shouldLoadHeroVideo]);

  const [name, setName] = React.useState("");
  const [contactMethod, setContactMethod] = React.useState("");
  const [projectType, setProjectType] = React.useState("");
  const [timeline, setTimeline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameOk = name.trim().length > 0;
    const contactValue = contactMethod.trim();
    const contactOk = emailValid(contactValue) || phoneValid(contactValue);
    const projectTypeOk = projectType.length > 0;
    const descriptionOk = description.trim().length > 0;

    if (!nameOk || !contactOk || !projectTypeOk || !descriptionOk) {
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
          _subject: "New estimate request from website",
          description: description.trim(),
          contact: contactValue,
          name: name.trim(),
          preferredTimeline: timeline.trim(),
          projectType,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setName("");
      setContactMethod("");
      setProjectType("");
      setTimeline("");
      setDescription("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero__media" aria-hidden="true">
            <StaticImage
              src="../images/about/deck-installation-worker.jpg"
              alt=""
              aria-hidden="true"
              className="contact-hero__poster"
              imgClassName="contact-hero__poster-image"
              placeholder="blurred"
              quality={70}
              formats={["auto", "webp", "avif"]}
            />
            {shouldLoadHeroVideo ? (
              <video
                ref={heroVideoRef}
                className="contact-hero__video"
                src="/videos/vecteezy_person-sanding-wooden-plank-with-sander-on-workbench-in_78821674.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            ) : null}
            <div className="contact-hero__overlay" />
          </div>
          <div className="contact-hero__inner">
            <h1 className="contact-hero__title" id="contact-page-heading">
              Let&apos;s Bring Your{" "}
              <span className="contact-hero__accent">Dream Project</span> to Life
            </h1>
            <p className="contact-hero__lead">
              {renderHighlightedText(
                "Our team helps homeowners transform outdoor spaces with durable fences, custom decks, and exterior renovation work built to last.",
              )}
            </p>
          </div>
        </section>

        <section className="contact-body" id="contact">
          <div className="contact-body__header">
            <h2>Ready to Plan Your Fence or Deck Project?</h2>
            <p>
              {renderHighlightedText(
                "Tell us a little about your outdoor project and the Northwood Renovation team will help you take the next step.",
              )}
            </p>
          </div>

          <div className="contact-body__panel">
          <aside className="contact-aside">
            <h2 className="contact-aside-panel__title">
              {renderHighlightedText("Contact Northwood Renovation")}
            </h2>
            <p className="contact-aside-panel__city">
              {renderHighlightedText("Seattle, WA")}
            </p>
            <p className="contact-aside-panel__intro">
              Have questions about a deck, fence, railing, repair, or outdoor
              upgrade? Reach out and we&apos;ll help you understand your options.
            </p>

            <ul className="contact-aside-panel__rows">
              <li className="contact-aside-panel__row">
                <span className="contact-aside-panel__icon-wrap">
                  <AsideIconPhone />
                </span>
                <div className="contact-aside-panel__row-text">
                  <span className="contact-aside-panel__label">Phone</span>
                  <a
                    className="contact-aside-panel__value contact-aside-panel__value--link"
                    href={`tel:${CONTACT_PHONE_TEL}`}
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="contact-aside-panel__row">
                <span className="contact-aside-panel__icon-wrap">
                  <AsideIconMail />
                </span>
                <div className="contact-aside-panel__row-text">
                  <span className="contact-aside-panel__label">Email</span>
                  <a
                    className="contact-aside-panel__value contact-aside-panel__value--link"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="contact-aside-panel__row">
                <span className="contact-aside-panel__icon-wrap">
                  <AsideIconPin />
                </span>
                <div className="contact-aside-panel__row-text">
                  <span className="contact-aside-panel__label">Service Area</span>
                  <span className="contact-aside-panel__value">
                    {renderHighlightedText("Seattle, WA and nearby communities")}
                  </span>
                </div>
              </li>
              <li className="contact-aside-panel__row">
                <span className="contact-aside-panel__icon-wrap">
                  <AsideIconClock />
                </span>
                <div className="contact-aside-panel__row-text">
                  <span className="contact-aside-panel__label">
                    Business Hours
                  </span>
                  <span className="contact-aside-panel__value">
                    Mon–Sat: 8 AM – 6 PM
                  </span>
                </div>
              </li>
            </ul>

            <ul className="contact-aside-panel__trust-points">
              <li>Free estimates</li>
              <li>Clear communication</li>
              <li>Fence &amp; deck specialists</li>
            </ul>

            <div className="contact-aside-panel__rating-banner" role="note">
              <p>Trusted by Seattle-area homeowners</p>
              <span>4.9 average rating on Google, Yelp, and Facebook</span>
            </div>
          </aside>

          <form
            id="contact-form"
            className="contact-form"
            aria-labelledby="contact-form-heading"
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="contact-form__title" id="contact-form-heading">
              Request a Free Estimate
            </h2>
            <p className="contact-form__helper">
              Most homeowners hear back with clear next steps.
            </p>

            {status === "success" ? (
              <p
                className="contact-form__message contact-form__message--success"
                role="status"
              >
                Thanks — your request has been received. Our team will contact
                you shortly.
              </p>
            ) : null}

            {status === "error" ? (
              <p
                className="contact-form__message contact-form__message--error"
                role="alert"
              >
                Please check the required fields (including a valid phone or
                email) and try again. If this persists, email us directly at{" "}
                {CONTACT_EMAIL}.
              </p>
            ) : null}

            <div className="contact-form__fields">
              <label className="contact-field">
                <span className="contact-field__label">
                  Name{" "}
                  <span className="contact-field__req" aria-hidden>
                    *
                  </span>
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="contact-field__input"
                  placeholder="Your name"
                  value={name}
                  onChange={(ev) => {
                    setName(ev.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                />
              </label>

              <label className="contact-field">
                <span className="contact-field__label">
                  Phone or Email{" "}
                  <span className="contact-field__req" aria-hidden>
                    *
                  </span>
                </span>
                <input
                  type="text"
                  name="contactMethod"
                  autoComplete="off"
                  className="contact-field__input"
                  placeholder="(000) 000-0000 or your@email.com"
                  value={contactMethod}
                  onChange={(ev) => {
                    setContactMethod(ev.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                />
              </label>

              <label className="contact-field contact-field--full">
                <span className="contact-field__label">
                  Project Type{" "}
                  <span className="contact-field__req" aria-hidden>
                    *
                  </span>
                </span>
                <select
                  name="projectType"
                  className="contact-field__input contact-field__select"
                  value={projectType}
                  onChange={(ev) => {
                    setProjectType(ev.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                >
                  {projectTypes.map((opt) => (
                    <option key={opt.value || "placeholder"} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-field contact-field--full">
                <span className="contact-field__label">Preferred Timeline</span>
                <input
                  type="text"
                  name="timeline"
                  className="contact-field__input"
                  placeholder="Optional (e.g. Within 1 month)"
                  value={timeline}
                  onChange={(ev) => {
                    setTimeline(ev.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                />
              </label>

              <label className="contact-field contact-field--details">
                <span className="contact-field__label">
                  Project Details{" "}
                  <span className="contact-field__req" aria-hidden>
                    *
                  </span>
                </span>
                <textarea
                  name="description"
                  className="contact-field__textarea"
                  rows={6}
                  placeholder="Tell us what you’re planning — fence, deck, materials, size, timeline, or anything important."
                  value={description}
                  onChange={(ev) => {
                    setDescription(ev.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Sending..."
                : "Request Free Estimate"}
            </button>

            <p className="contact-form__trust-line">
              No pressure. No obligation. We&apos;ll respond with clear next
              steps.
            </p>

            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="contact-form__call-mobile"
            >
              Call us
            </a>
          </form>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <title>Free Estimate | Northwood Renovation</title>
    <meta
      name="description"
      content="Request a free estimate from Northwood Renovation — fences, decks, and exterior projects in Seattle. Clear next steps, local crew."
    />
  </>
);
