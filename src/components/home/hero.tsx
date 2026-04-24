import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import renderHighlightedText from "../brand-text";
import { submitLeadForm } from "../../lib/lead-form";
import googleReviewLogo from "../../images/google-review-logo.png";

const Hero = () => {
  const [quoteStep, setQuoteStep] = React.useState(1);
  const [zipCode, setZipCode] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [zipTouched, setZipTouched] = React.useState(false);
  const [nameTouched, setNameTouched] = React.useState(false);
  const [phoneTouched, setPhoneTouched] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const isZipValid = /^\d{5}$/.test(zipCode.trim());
  const isNameValid = name.trim().length > 1;
  const isPhoneValid = phone.replace(/\D/g, "").length >= 10;
  const isContactValid = isNameValid && isPhoneValid;
  const shouldShowZipError = zipTouched && !isZipValid;
  const shouldShowNameError = nameTouched && !isNameValid;
  const shouldShowPhoneError = phoneTouched && !isPhoneValid;

  const resetForm = () => {
    setZipCode("");
    setName("");
    setPhone("");
    setZipTouched(false);
    setNameTouched(false);
    setPhoneTouched(false);
    setQuoteStep(1);
  };

  const handleQuoteSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitStatus === "submitting") return;

    if (quoteStep === 1) {
      setSubmitStatus("idle");
      setZipTouched(true);

      if (isZipValid) {
        setQuoteStep(2);
      }

      return;
    }

    setNameTouched(true);
    setPhoneTouched(true);

    if (!isContactValid) {
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");

    try {
      await submitLeadForm("New home hero quick quote request", {
        name,
        phone,
        zipCode,
        source: "Home hero quick quote form",
      });

      window.location.assign("/thank-you/");
      setSubmitStatus("success");
      resetForm();
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleQuoteBack = () => {
    setQuoteStep(1);
    setNameTouched(false);
    setPhoneTouched(false);
    setSubmitStatus("idle");
  };

  return (
    <section
      className="home-quote-hero"
      style={{ overflow: "hidden", position: "relative" }}>
      <StaticImage
        src="../../images/deck-hero-background.jpg"
        alt=""
        aria-hidden="true"
        className="home-quote-hero__media"
        imgClassName="home-quote-hero__image"
        layout="fullWidth"
        loading="eager"
        placeholder="blurred"
        quality={72}
        formats={["auto", "webp", "avif"]}
        style={{
          display: "block",
          inset: 0,
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
        }}
        imgStyle={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        className="home-quote-hero__overlay"
        style={{ position: "relative", zIndex: 1 }}>
        <div
          className="home-quote-hero__content"
          style={{ position: "relative", zIndex: 1 }}>
          <div className="home-quote-hero__copy">
            <div
              className="home-quote-hero__rating"
              aria-label="Google rating 4.9 stars, number one local exterior experts">
              <img
                src={googleReviewLogo}
                alt=""
                className="home-quote-hero__google-review-logo"
                aria-hidden="true"
              />
              <span className="home-quote-hero__stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg viewBox="0 0 24 24" key={index}>
                    <path d="M12 3.5L14.7 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.6 20.3l1-6.1-4.4-4.3L9.3 9 12 3.5z" />
                  </svg>
                ))}
              </span>
              <strong>4.9 | #1 Local Exterior Experts</strong>
            </div>

            <h1>
              Everett&apos;s Trusted{" "}
              <span className="hero-accent">Deck &amp; Fence Builders</span>
            </h1>
            <p>
              {renderHighlightedText(
                "Serving Snohomish County, Greater Seattle, and the Puget Sound area. Locally based in Everett — honest estimates, clear communication, craftsmanship built for Northwest homes.",
              )}
            </p>
          </div>

          <form
            className="home-quote-form"
            onSubmit={handleQuoteSubmit}
          >
            <span className="sr-only">{`Step ${quoteStep} of 2`}</span>
            <div className="home-quote-form__accent" aria-hidden="true">
              <span
                className={
                  quoteStep === 1 ? "home-quote-form__step--active" : ""
                }
              />
              <span
                className={
                  quoteStep === 2 ? "home-quote-form__step--active" : ""
                }
              />
            </div>
            <div className="home-quote-form__header">
              <p>{quoteStep === 1 ? "Step 1 of 2" : "Step 2 of 2"}</p>
              <h2>
                {quoteStep === 1
                  ? "Start with your ZIP"
                  : "Enter your details"}
              </h2>
            </div>
            {quoteStep === 1 ? (
              <>
                <label className="home-quote-form__label" htmlFor="zip-code">
                  Enter your ZIP code
                </label>
                <input
                  id="zip-code"
                  name="zipCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  aria-invalid={shouldShowZipError}
                  aria-describedby={
                    shouldShowZipError ? "zip-code-error" : undefined
                  }
                  onChange={(event) => {
                    setZipCode(event.target.value);
                    setZipTouched(true);
                    setSubmitStatus("idle");
                  }}
                  onFocus={() => setZipTouched(true)}
                  onBlur={() => setZipTouched(true)}
                />
                <p
                  className={`home-quote-form__error${shouldShowZipError ? "" : " home-quote-form__error--hidden"}`}
                  id="zip-code-error">
                  Please enter a valid 5-digit ZIP code.
                </p>
                <button type="submit">Get a quick quote →</button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="home-quote-form__back"
                  onClick={handleQuoteBack}>
                  ← Back
                </button>
                <label className="home-quote-form__label" htmlFor="quote-name">
                  Your name
                </label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  aria-invalid={shouldShowNameError}
                  aria-describedby={
                    shouldShowNameError ? "quote-name-error" : undefined
                  }
                  onChange={(event) => {
                    setName(event.target.value);
                    setNameTouched(true);
                    setSubmitStatus("idle");
                  }}
                  onFocus={() => setNameTouched(true)}
                  onBlur={() => setNameTouched(true)}
                />
                <p
                  className={`home-quote-form__error${shouldShowNameError ? "" : " home-quote-form__error--hidden"}`}
                  id="quote-name-error">
                  Please enter your name.
                </p>
                <label className="home-quote-form__label" htmlFor="quote-phone">
                  Phone number
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Phone number"
                  value={phone}
                  aria-invalid={shouldShowPhoneError}
                  aria-describedby={
                    shouldShowPhoneError ? "quote-phone-error" : undefined
                  }
                  onChange={(event) => {
                    setPhone(event.target.value);
                    setPhoneTouched(true);
                    setSubmitStatus("idle");
                  }}
                  onFocus={() => setPhoneTouched(true)}
                  onBlur={() => setPhoneTouched(true)}
                />
                <p
                  className={`home-quote-form__error${shouldShowPhoneError ? "" : " home-quote-form__error--hidden"}`}
                  id="quote-phone-error">
                  Please enter a valid phone number.
                </p>
                <button type="submit" disabled={submitStatus === "submitting"}>
                  {submitStatus === "submitting" ? "Sending..." : "Submit"}
                </button>
              </>
            )}
            <p
              className={`home-quote-form__status home-quote-form__status--${submitStatus}${submitStatus === "idle" ? " home-quote-form__status--hidden" : ""}`}
              role={submitStatus === "error" ? "alert" : "status"}>
              {submitStatus === "success"
                ? "Thanks. Your request was sent to Northwood Renovation."
                : submitStatus === "error"
                  ? "We couldn't send your request. Please check the fields and try again."
                  : "Sending your request..."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
