import * as React from "react";
import renderHighlightedText from "../brand-text";

const TrustSection = () => (
  <section className="trust-section" aria-labelledby="trust-section-title">
    <div className="trust-container">
      <div className="trust-header">
        <h2 id="trust-section-title">
          Why Everett Homeowners Choose{" "}
          <span className="brand-highlight">Northwood Renovation</span>
        </h2>
        <p>
          {renderHighlightedText(
            "Northwood Renovation is an Everett-based deck and fence builder known for honest estimates, clear communication, and outdoor projects built to last through Pacific Northwest weather.",
          )}
        </p>
      </div>
      <div className="trust-grid">
        <article className="trust-card">
          <span className="trust-icon trust-icon--star">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.5L14.7 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.6 20.3l1-6.1-4.4-4.3L9.3 9 12 3.5z" />
            </svg>
          </span>
          <h3>4.9 Google Rating</h3>
          <p>
            Trusted by homeowners across Everett, Marysville, Mill Creek, Mukilteo,
            Lynnwood, and Greater Seattle for deck and fence work done right.
          </p>
          <span className="trust-note">
            Over 50 verified five-star reviews from Snohomish County homeowners.
          </span>
        </article>
        <article className="trust-card">
          <span className="trust-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 11a4 4 0 1 0-8 0" />
              <path d="M6 20v-1.5A4.5 4.5 0 0 1 10.5 14h3A4.5 4.5 0 0 1 18 18.5V20" />
              <path d="M18 12.5a3 3 0 0 0 0-6" />
              <path d="M20.5 20v-1a3.5 3.5 0 0 0-2.2-3.25" />
              <path d="M6 12.5a3 3 0 0 1 0-6" />
              <path d="M3.5 20v-1a3.5 3.5 0 0 1 2.2-3.25" />
            </svg>
          </span>
          <h3>{renderHighlightedText("Everett-Based Crew")}</h3>
          <p>
            Our deck and fence crew is based right here in Everett - not a
            franchise, not a company that subcontracts to strangers. We know
            Snohomish County neighborhoods, lot sizes, permit requirements, and
            Northwest weather.
          </p>
          <span className="trust-note">No pushy sales. Just honest recommendations.</span>
        </article>
        <article className="trust-card">
          <span className="trust-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5h6" />
              <path d="M9 5a3 3 0 0 1 6 0" />
              <path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 5H16" />
              <path d="M8 13l2.5 2.5L16 10" />
            </svg>
          </span>
          <h3>Free On-Site Estimates</h3>
          <p>
            We come to your property, review the space, and give you a clear
            written estimate - no phone guesses, no surprises. Fast response
            for deck builds, fence installation, and outdoor renovation
            projects in Everett and Snohomish County.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default TrustSection;
