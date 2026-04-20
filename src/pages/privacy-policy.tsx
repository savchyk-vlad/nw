import * as React from "react";
import { Link } from "gatsby";
import "../styles/legal.css";
import renderHighlightedText from "../components/brand-text";
import SiteLayout from "../components/site-layout";

const effectiveDate = "April 18, 2026";

const personalInfoItems = [
  "Name",
  "Phone number",
  "Email address",
  "Property address or project location",
  "Details about your fence, deck, siding, painting, or exterior renovation project",
  "Photos or files you choose to send us",
  "Preferred appointment times",
  "Any message or information you submit through our website",
];

const websiteInfoItems = [
  "Browser type",
  "Device type",
  "Pages visited",
  "Approximate location",
  "Website traffic and usage data",
];

const useItems = [
  "Contact you about your project",
  "Provide estimates and recommendations",
  "Schedule consultations or site visits",
  "Send project updates",
  "Improve our website and customer experience",
  "Follow up after an estimate or completed project",
  "Maintain business records",
];

const sharingItems = [
  "Team members working on your estimate or project",
  "Trusted service providers who help operate our website or business",
  "Payment, scheduling, or communication tools",
  "Legal or regulatory authorities if required by law",
];

const PrivacyPolicyPage = () => (
  <SiteLayout>
    <section className="policy-hero">
      <div className="policy-hero__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M7 11V8a5 5 0 0 1 10 0v3" />
          <path d="M6.5 11h11A1.5 1.5 0 0 1 19 12.5v7A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-7A1.5 1.5 0 0 1 6.5 11z" />
          <path d="M12 15v2" />
        </svg>
      </div>
      <p className="policy-hero__eyebrow">Last Updated: {effectiveDate}</p>
      <h1>Privacy Policy</h1>
      <p>
        At <span className="brand-highlight">Northwood Renovation</span>, we
        respect your privacy. This Privacy Policy explains how we collect, use,
        and protect the information you share with us when requesting estimates,
        contacting our team, or using our website.
      </p>
      <strong>Effective Date: {effectiveDate}</strong>
    </section>

    <section className="policy-content" aria-label="Privacy policy details">
      <article className="policy-card">
        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information when you contact us, request a
          free estimate, submit a form, call us, email us, or interact with our
          website.
        </p>
        <p>This information may include:</p>
        <ul>
          {personalInfoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>We may also collect basic website information such as:</p>
        <ul>
          {websiteInfoItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="policy-card">
        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to your questions,
          prepare estimates, schedule appointments, and provide construction or
          renovation services.
        </p>
        <p>We may use your information to:</p>
        <ul>
          {useItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="policy-card">
        <h2>3. Sharing Your Information</h2>
        <p>We do not sell your personal information.</p>
        <p>We may share information only when necessary, such as with:</p>
        <ul>
          {sharingItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="policy-card">
        <h2>4. Project Photos and Testimonials</h2>
        <p>
          With your permission, we may use project photos, reviews, or
          testimonials for our website, portfolio, social media, or marketing
          materials.
        </p>
        <p>
          We will not intentionally publish personal contact information or
          sensitive property details without permission.
        </p>
      </article>

      <article className="policy-card">
        <h2>5. Cookies and Website Tracking</h2>
        <p>
          Our website may use cookies or similar technologies to understand how
          visitors use the site and to improve performance.
        </p>
        <p>
          Cookies help us see which pages are useful, improve website speed, and
          make the browsing experience better. You can adjust cookie settings
          through your browser.
        </p>
      </article>

      <article className="policy-card">
        <h2>6. Data Protection</h2>
        <p>
          We take reasonable steps to protect the personal information you share
          with us. However, no website, email, or online system can be
          guaranteed completely secure.
        </p>
      </article>

      <article className="policy-card">
        <h2>7. Your Choices</h2>
        <p>
          You may contact us to request access, correction, or deletion of your
          personal information, subject to any business or legal recordkeeping
          requirements.
        </p>
      </article>

      <article className="policy-card">
        <h2>8. Third-Party Links</h2>
        <p>
          Our website may include links to third-party websites, such as review
          platforms, social media pages, or partner services. We are not
          responsible for the privacy practices of those websites.
        </p>
      </article>

      <article className="policy-card">
        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
      </article>

      <article className="policy-card policy-card--contact">
        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact us.
        </p>
        <address>
          <strong className="brand-highlight">Northwood Renovation</strong>
          <a href="tel:+10000000000">Phone: (000) 000-0000</a>
          <a href="mailto:northwoodrenovation@gmail.com">
            Email: northwoodrenovation@gmail.com
          </a>
          <span>{renderHighlightedText("Service Area: Seattle, WA and nearby areas")}</span>
        </address>
      </article>

      <aside className="policy-cta">
        <div>
          <p>Have questions about your project?</p>
          <h2>We’re happy to help before you share any details.</h2>
        </div>
        <Link to="/contact">
          Contact <span className="brand-highlight">Northwood Renovation</span>
        </Link>
      </aside>
    </section>
  </SiteLayout>
);

export default PrivacyPolicyPage;
