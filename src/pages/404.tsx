import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "../styles/not-found.css";
import SeoHead from "../components/seo";
import notFoundImage from "../images/page-not-found.png";

const quickLinks = [
  { label: "Deck Services", to: "/decking/" },
  { label: "Fence Services", to: "/fencing/" },
  { label: "Recent Work", to: "/projects/" },
  { label: "Contact", to: "/contact/" },
];

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-frame">
        <section className="not-found-shell" aria-labelledby="not-found-title">
          <div className="not-found-media">
            <img
              src={notFoundImage}
              alt="Confused Northwood worker standing by a fence with a Page Not Found sign"
            />
          </div>

          <div className="not-found-copy">
            <p className="not-found-code">404</p>
            <h1 id="not-found-title">
              Looks Like This Page Fell Through the Fence
            </h1>
            <p className="not-found-text">
              We searched the cedar boards, checked the fence posts, and even
              asked the chain link — nobody&apos;s seen this page. The good news:
              your backyard is in good hands. Let&apos;s get you back on solid
              ground.
            </p>

            <div className="not-found-actions">
              <Link className="not-found-button" to="/">
                Back to Home
              </Link>
              <Link className="not-found-estimate" to="/contact/#contact-form">
                Request a Free Estimate →
              </Link>
            </div>

            <nav className="not-found-links" aria-label="Helpful pages">
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label} →
                </Link>
              ))}
            </nav>

            <p className="not-found-trust">
              We may not have found the page — but we always find a way to build
              a better backyard.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Page Not Found | Northwood Renovation"
    description="The page you were looking for could not be found. Return to Northwood Renovation deck and fence services based in Everett, WA."
    pathname={location.pathname}
    noindex
  />
);
