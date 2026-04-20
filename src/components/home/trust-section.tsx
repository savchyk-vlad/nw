import * as React from "react";
import renderHighlightedText from "../brand-text";

const TrustSection = () => (
  <section className="trust-section" aria-labelledby="trust-section-title">
    <div className="trust-container">
      <div className="trust-header">
        <h2 id="trust-section-title">
          Why Homeowners Choose{" "}
          <span className="brand-highlight">Northwood Renovation</span>
        </h2>
        <p>
          {renderHighlightedText(
            "Northwood Renovation provides reliable exterior remodeling from a local crew that values honest work, clear estimates, and lasting results.",
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
            Local homeowners trust our careful exterior work, clear
            communication, and dependable results.
          </p>
          <span className="trust-note">
            {renderHighlightedText("Trusted by homeowners across the Seattle area.")}
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
          <h3>{renderHighlightedText("Local Seattle Area Team")}</h3>
          <p>
            Work with a small local crew that understands Northwest homes,
            weather, materials, and neighborhoods.
          </p>
          <span className="trust-note">
            No pushy sales process — just honest guidance.
          </span>
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
          <h3>Free Project Estimates</h3>
          <p>
            Get practical advice, clear pricing direction, and project
            recommendations before you commit.
          </p>
          <span className="trust-note">
            {renderHighlightedText(
              "Fast response for decks, siding, fences, painting, and exterior work.",
            )}
          </span>
        </article>
      </div>
    </div>
  </section>
);

export default TrustSection;
