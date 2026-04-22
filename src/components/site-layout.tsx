import * as React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { cityServicePagePathByCity } from "../data/city-service-pages";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "../lib/site-metadata";
import renderHighlightedText from "./brand-text";
import angiLogo from "../images/angi-logo.svg";
import bbbLogo from "../images/bbb-logo.png";
import googleReviewLogo from "../images/google-review-logo.png";
import logo from "../images/northwood-logo.svg";
import yelpLogo from "../images/yelp-logo.png";

type SiteLayoutProps = {
  children: React.ReactNode;
};

type NavSubItem = {
  description?: string;
  group?: string;
  label: string;
  to: string;
};

type NavItem = {
  label: string;
  to: string;
  children?: NavSubItem[];
};

const renderNavGroups = (items: NavSubItem[]) => {
  const groups: Array<{ label: string; items: NavSubItem[] }> = [];

  items.forEach((item) => {
    const groupLabel = item.group ?? "Services";
    const existingGroup = groups.find((group) => group.label === groupLabel);

    if (existingGroup) {
      existingGroup.items.push(item);
      return;
    }

    groups.push({ label: groupLabel, items: [item] });
  });

  return groups;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Deck",
    to: "/deck/custom-deck",
    children: [
      {
        description: "Designed around your home, yard, and outdoor lifestyle.",
        group: "Deck Services",
        label: "Custom Deck Design",
        to: "/deck/custom-deck",
      },
      {
        description: "Natural wood decks with warm character and strong craftsmanship.",
        group: "Deck Services",
        label: "Wood Deck Builder",
        to: "/deck/wood-deck",
      },
      {
        description: "Low-maintenance decking built for Seattle weather.",
        group: "Deck Services",
        label: "Composite Deck Builder",
        to: "/deck/composite-deck",
      },
      {
        description: "More usable outdoor space with added protection from rain.",
        group: "Deck Services",
        label: "Covered Deck Builder",
        to: "/deck/covered-deck",
      },
      {
        description: "Open-air decks for relaxing, dining, and entertaining.",
        group: "Deck Services",
        label: "Outdoor Deck Installation",
        to: "/deck/outdoor-deck",
      },
      {
        description: "Browse recent deck, fence, and outdoor projects.",
        group: "Helpful Resources",
        label: "Recent Deck Work",
        to: "/projects",
      },
      {
        description: "Compare cedar, composite, maintenance, and value.",
        group: "Helpful Resources",
        label: "Deck Material Guide",
        to: "/blog/cedar-vs-composite-seattle",
      },
    ],
  },
  {
    label: "Fence",
    to: "/fence/cedar-wood-fence",
    children: [
      {
        description: "Warm, natural privacy fencing for Seattle-area homes.",
        group: "Fence Services",
        label: "Cedar Wood Fence Installation",
        to: "/fence/cedar-wood-fence",
      },
      {
        description: "Durable, practical fencing for security and visibility.",
        group: "Fence Services",
        label: "Chain Link Fence Installation",
        to: "/fence/chain-link-fence",
      },
      {
        description: "Browse recent fence, deck, and outdoor projects.",
        group: "Helpful Resources",
        label: "Recent Fence Work",
        to: "/projects",
      },
      {
        description: "Learn which fence materials fit Seattle homes.",
        group: "Helpful Resources",
        label: "Fence Material Guide",
        to: "/blog/best-fence-materials-seattle",
      },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const whyUsItems = [
  "Licensed & Insured Experts",
  "Fast Estimates & Transparent Pricing",
  "High-Quality Workmanship",
  "Family-Owned & Locally Trusted",
  "5-Star Rated Remodeling Team",
];

const serviceItems = [
  { label: "Custom Deck Design", to: "/deck/custom-deck" },
  { label: "Wood Deck Builder", to: "/deck/wood-deck" },
  { label: "Composite Deck Builder", to: "/deck/composite-deck" },
  { label: "Covered Deck Builder", to: "/deck/covered-deck" },
  { label: "Outdoor Deck Installation", to: "/deck/outdoor-deck" },
  { label: "Cedar Wood Fence Installation", to: "/fence/cedar-wood-fence" },
  { label: "Chain Link Fence Installation", to: "/fence/chain-link-fence" },
];

const areaItems = [
  "Seattle, WA",
  "Bellevue, WA",
  "Renton, WA",
  "Kirkland, WA",
  "Redmond, WA",
  "Kent, WA",
  "Shoreline, WA",
  "Burien, WA",
  "Tukwila, WA",
  "Mercer Island, WA",
];

const trustLogos = [
  { src: googleReviewLogo, alt: "Google Reviews", to: "/contact" },
  { src: bbbLogo, alt: "Better Business Bureau", to: "/contact" },
  { src: yelpLogo, alt: "Yelp", to: "/contact" },
  { src: angiLogo, alt: "Angi", to: "/contact" },
];

const MOBILE_NAV_BREAKPOINT = 900;
const isServiceNavItem = (item: NavItem) =>
  item.label === "Deck" || item.label === "Fence";

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = React.useState<
    Record<string, boolean>
  >({});
  const pathname = location.pathname || "/";
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/";
  const isServicePage =
    pathname.startsWith("/deck/") || pathname.startsWith("/fence/");
  const isCityServicePage =
    pathname.startsWith("/cities/") && pathname !== "/cities/";
  const showMobileStickyCta =
    isHomePage || isContactPage || isServicePage || isCityServicePage;
  const mobileMainNavItems = navItems.filter((item) => !isServiceNavItem(item));
  const mobileServiceNavItems = navItems.filter(isServiceNavItem);

  const toggleMobileGroup = (to: string) => {
    setMobileExpandedItems((expandedItems) => ({
      ...expandedItems,
      [to]: !expandedItems[to],
    }));
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileNav = React.useCallback(() => setMobileNavOpen(false), []);

  React.useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  React.useEffect(() => {
    if (!mobileNavOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileNavOpen]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main
      className={
        showMobileStickyCta
          ? "site-shell site-shell--has-mobile-cta"
          : "site-shell"
      }
    >
      <header className="site-header">
        <Link
          to="/"
          className="site-header__brand"
          aria-label="Northwood Renovation home">
          <img
            src={logo}
            alt="Northwood Renovation logo"
            className="site-header__logo"
          />
          <span className="site-header__brand-copy">
            <strong className="site-header__slogan">
              Your #1 Home Improvement Experts
            </strong>
            <span className="site-header__subline">
              {renderHighlightedText("Serving Seattle & Surrounding Areas")}
            </span>
          </span>
        </Link>

        <div className="site-header__actions">
          <a href={`tel:${BUSINESS_PHONE_TEL}`} className="site-header__phone">
            <span className="site-header__phone-text-full">{BUSINESS_PHONE_DISPLAY}</span>
            <span className="site-header__phone-text-short">Call</span>
          </a>
          <Link to="/contact#contact-form" className="site-header__button">
            <span className="site-header__button-text-full">
              Request Free Estimate
            </span>
            <span className="site-header__button-text-short">Estimate</span>
          </Link>
          <button
            type="button"
            className="site-nav__menu-toggle"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileNavOpen((open) => !open)}>
            <span className="site-nav__menu-toggle-bars" aria-hidden>
              <span className="site-nav__menu-toggle-bar" />
              <span className="site-nav__menu-toggle-bar" />
              <span className="site-nav__menu-toggle-bar" />
            </span>
            <span className="site-nav__menu-toggle-label">Menu</span>
          </button>
        </div>
      </header>

      {mobileNavOpen ? (
        <div className="site-drawer site-drawer--open" aria-hidden={false}>
        <button
          type="button"
          tabIndex={0}
          className="site-drawer__backdrop"
          aria-label="Close menu"
          onClick={closeMobileNav}
        />
        <aside
          className="site-drawer__panel"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="site-drawer-nav-heading">
          <div className="site-drawer__panel-inner">
            <div className="site-drawer__panel-head">
              <Link
                to="/"
                className="site-drawer__brand"
                id="site-drawer-nav-heading"
                onClick={closeMobileNav}
              >
                <img src={logo} alt="Northwood Renovation" />
                <span>
                  <span className="site-drawer__brand-primary">Northwood</span>{" "}
                  <span className="site-drawer__brand-accent">Renovation</span>
                </span>
              </Link>
              <button
                type="button"
                className="site-drawer__close"
                onClick={closeMobileNav}
                aria-label="Close menu">
                <span aria-hidden>×</span>
              </button>
            </div>

            <nav className="site-drawer__nav" aria-label="Primary navigation">
              <div className="site-drawer__section">
                <p className="site-drawer__section-label">Main</p>
                <ul className="site-drawer__list">
                  {mobileMainNavItems.map((item, index) => (
                    <li className="site-drawer__item" key={`drawer-main-${item.to}`}>
                      <Link
                        to={item.to}
                        className="site-drawer__link"
                        activeClassName="site-drawer__link--active"
                        partiallyActive={item.to !== "/"}
                        onClick={closeMobileNav}
                        style={{
                          animationDelay: `${index * 42}ms`,
                        }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-drawer__section">
                <p className="site-drawer__section-label">Services</p>
                <ul className="site-drawer__list">
                  {mobileServiceNavItems.map((item, index) => (
                    <li className="site-drawer__item" key={`drawer-service-${item.to}`}>
                      <button
                        type="button"
                        className={
                          mobileExpandedItems[item.to]
                            ? "site-drawer__link site-drawer__link--toggle site-drawer__link--toggle-open"
                            : "site-drawer__link site-drawer__link--toggle"
                        }
                        aria-expanded={Boolean(mobileExpandedItems[item.to])}
                        onClick={() => toggleMobileGroup(item.to)}
                        style={{
                          animationDelay: `${(mobileMainNavItems.length + index) * 42}ms`,
                        }}>
                        <span>{item.label}</span>
                        <span
                          className="site-drawer__toggle-icon"
                          aria-hidden="true">
                          <svg viewBox="0 0 20 20">
                            <path
                              d="M5 7.5 10 12.5l5-5"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={
                          mobileExpandedItems[item.to]
                            ? "site-drawer__sublinks site-drawer__sublinks--open"
                            : "site-drawer__sublinks"
                        }>
                        {renderNavGroups(item.children ?? []).map((group) => (
                          <div
                            className="site-drawer__subgroup"
                            key={`drawer-group-${item.to}-${group.label}`}>
                            {group.label === "Helpful Resources" ? (
                              <p className="site-drawer__subgroup-label">
                                {group.label}
                              </p>
                            ) : null}
                            {group.items.map((child) => (
                              <Link
                                key={`drawer-sub-${child.to}`}
                                to={child.to}
                                className="site-drawer__sublink"
                                activeClassName="site-drawer__sublink--active"
                                partiallyActive
                                onClick={closeMobileNav}>
                                <span className="site-drawer__sublink-title">
                                  {child.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="site-drawer__cta-block">
              <div className="site-drawer__cta-card">
                <Link
                  to="/contact#contact-form"
                  className="site-drawer__cta-button"
                  onClick={closeMobileNav}>
                  Request Free Estimate
                </Link>
                <a
                  href={`tel:${BUSINESS_PHONE_TEL}`}
                  className="site-drawer__cta-phone">
                  {`Call: ${BUSINESS_PHONE_DISPLAY}`}
                </a>
              </div>
            </div>
          </div>
        </aside>
        </div>
      ) : null}

      <div className="site-nav-wrap">
        <nav
          id="primary-navigation"
          className="site-nav site-nav--desktop"
          aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              key={item.to}
              className={
                item.children?.length
                  ? "site-nav__item site-nav__item--has-menu"
                  : "site-nav__item"
              }>
              <Link
                to={item.to}
                className="site-nav__link"
                activeClassName="site-nav__link--active"
                partiallyActive={item.to !== "/"}>
                {item.label}
              </Link>
              {item.children?.length ? (
                <div className="site-nav__submenu" aria-label={`${item.label} submenu`}>
                  {renderNavGroups(item.children).map((group) => (
                    <div
                      className="site-nav__submenu-group"
                      key={`desktop-group-${item.to}-${group.label}`}>
                      <p className="site-nav__submenu-label">{group.label}</p>
                      {group.items.map((child) => (
                        <Link
                          key={`desktop-sub-${child.to}`}
                          to={child.to}
                          className="site-nav__submenu-link"
                          activeClassName="site-nav__submenu-link--active"
                          partiallyActive>
                          <span className="site-nav__submenu-title">
                            {child.label}
                            <span
                              className="site-nav__submenu-arrow"
                              aria-hidden="true">
                              →
                            </span>
                          </span>
                          {child.description ? (
                            <span className="site-nav__submenu-description">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>

      <div className="site-content">{children}</div>

      {showMobileStickyCta ? (
        <div className="site-mobile-cta" aria-label="Quick actions">
          <div className="site-mobile-cta__card">
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="site-mobile-cta__button site-mobile-cta__button--secondary">
              Call
            </a>
            {isContactPage ? (
              <a
                href="#contact-form"
                className="site-mobile-cta__button site-mobile-cta__button--primary">
                Free Estimate
              </a>
            ) : (
              <Link
                to="/contact#contact-form"
                className="site-mobile-cta__button site-mobile-cta__button--primary">
                Free Estimate
              </Link>
            )}
          </div>
        </div>
      ) : null}

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__columns">
            <section className="site-footer__company" aria-label="Company">
              <Link to="/" aria-label="Northwood Renovation home">
                <img
                  src={logo}
                  alt="Northwood Renovation logo"
                  className="site-footer__logo"
                />
              </Link>
              <p className="site-footer__trust">Licensed &amp; Insured Contractor</p>

              <div className="site-footer__contact-group">
                <h2>Contact Us</h2>
                <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>
                <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
              </div>

              <div className="site-footer__contact-group">
                <h2>Location</h2>
                <p>{renderHighlightedText("Seattle, WA & Nearby Areas")}</p>
              </div>
            </section>

            <section className="site-footer__column">
              <h2>Why Us</h2>
              <ul className="site-footer__check-list">
                {whyUsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="site-footer__column">
              <h2>Our Services</h2>
              <ul className="site-footer__link-list">
                {serviceItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{renderHighlightedText(item.label)}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="site-footer__column">
              <h2>Areas Served</h2>
              <ul className="site-footer__link-list">
                {areaItems.map((item) => (
                  <li key={item}>
                    <Link to={cityServicePagePathByCity[item] ?? "/cities"}>
                      {renderHighlightedText(item)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/cities">View Full Service Area</Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="site-footer__trust-logos" aria-label="Trust logos">
            {trustLogos.map((trustLogo) => (
              <Link
                to={trustLogo.to}
                className="site-footer__trust-logo"
                key={trustLogo.alt}
                aria-label={`View ${trustLogo.alt} profile`}>
                <img src={trustLogo.src} alt={trustLogo.alt} loading="lazy" />
              </Link>
            ))}
          </div>

          <div className="site-footer__bottom">
            <p>
              © 2026 <span className="brand-highlight">Northwood Renovation</span>.
              All Rights Reserved. |{" "}
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link to="/terms-of-service">Terms of Service</Link>
            </p>
          </div>
        </div>

        <button
          type="button"
          className="site-footer__back-to-top"
          onClick={handleBackToTop}
          aria-label="Back to top">
          ↑
        </button>
      </footer>
    </main>
  );
};

export default SiteLayout;
