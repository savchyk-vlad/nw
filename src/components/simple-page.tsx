import * as React from "react";
import { Link } from "gatsby";
import renderHighlightedText from "./brand-text";
import SiteLayout from "./site-layout";

type SimplePageProps = {
  title: string;
  eyebrow: string;
  description: string;
  highlights?: string[];
};

const SimplePage = ({
  title,
  eyebrow,
  description,
  highlights = [
    "Add page-specific content",
    "Add photos or project examples",
    "Add a clear call to action",
  ],
}: SimplePageProps) => {
  return (
    <SiteLayout>
      <section className="page-hero">
        <p className="page-hero__eyebrow">{renderHighlightedText(eyebrow)}</p>
        <h1>{renderHighlightedText(title)}</h1>
        <p>{renderHighlightedText(description)}</p>
        <Link to="/contact" className="page-hero__button">
          Request a Free Estimate
        </Link>
      </section>

      <section className="page-content">
        <h2>Page Starter</h2>
        <p>
          This is a simple boilerplate page for{" "}
          <span className="brand-highlight">Northwood Renovation</span>. Replace
          this starter copy with service details, customer benefits, photos,
          testimonials, and project examples.
        </p>
        <div className="page-card-grid">
          {highlights.map((highlight) => (
            <article className="page-card" key={highlight}>
              <h3>{highlight}</h3>
              <p>
                Use this section to explain the value of this page and guide
                homeowners toward contacting the team.
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default SimplePage;
