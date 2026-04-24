import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "../styles/thank-you.css";
import SeoHead from "../components/seo";
import thankYouImage from "../images/thank-you-positive.png";

const nextSteps = [
  {
    title: "We Review Your Request",
    text: "Our team looks over your project details and service area.",
  },
  {
    title: "We Reach Out",
    text: "Someone from Northwood Renovation will contact you within one business day to discuss next steps.",
  },
  {
    title: "We Visit Your Property",
    text: "We schedule a free on-site estimate to review the yard, layout, and material options before anything begins.",
  },
];

const ThankYouPage: React.FC<PageProps> = () => {
  return (
    <main className="thank-you-page">
      <section className="thank-you-shell" aria-labelledby="thank-you-title">
        <div className="thank-you-media">
          <img
            src={thankYouImage}
            alt="Smiling Northwood Renovation contractor standing beside a finished cedar fence and deck project"
          />
        </div>

        <div className="thank-you-copy">
          <h1 id="thank-you-title">You&apos;re All Set — We&apos;ll Be in Touch Soon</h1>
          <p className="thank-you-text">
            We received your estimate request and will review the details shortly.
            Expect to hear from our team within one business day.
          </p>
          <p className="thank-you-text">
            We appreciate you reaching out to Northwood Renovation and look
            forward to helping you plan your outdoor project.
          </p>

          <section className="thank-you-next" aria-labelledby="thank-you-next-title">
            <h2 id="thank-you-next-title">What Happens Next</h2>
            <ol>
              {nextSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="thank-you-step-number">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <blockquote className="thank-you-review">
            <p className="thank-you-review__stars" aria-hidden="true">
              ★★★★★
            </p>
            <p>
              “Great communication from start to finish. Clean installation and
              everything was explained clearly before work began.”
            </p>
            <cite>— Everett homeowner, Deck Project</cite>
          </blockquote>

          <div className="thank-you-actions">
            <Link className="thank-you-button" to="/">
              Back to Home
            </Link>
            <Link className="thank-you-projects" to="/projects/">
              View Recent Work →
            </Link>
          </div>

          <p className="thank-you-trust">
            Northwood Renovation · Everett, WA · Fully Insured
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;

export const Head: HeadFC = ({ location }) => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <SeoHead
      title="Thank You | Northwood Renovation"
      description="Thank you for requesting an estimate from Northwood Renovation. Our team will review your project details and follow up soon."
      pathname={location.pathname}
      noindex
    />
  </>
);
