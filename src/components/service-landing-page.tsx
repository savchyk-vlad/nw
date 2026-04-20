import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/service-pages.css";
import renderHighlightedText from "./brand-text";
import SeoHead, { buildCanonicalUrl, buildLocalBusinessReference } from "./seo";
import SiteLayout from "./site-layout";
import type { ServicePageData } from "../data/service-pages";
import { recentWorkProjects } from "../data/recent-work-projects";

type ServiceLandingPageProps = {
  service: ServicePageData;
};

export const createServicePageHead =
  (service: ServicePageData): HeadFC =>
  ({ location }) => {
    const pathname = location.pathname;

    return (
      <SeoHead
        title={service.titleTag}
        description={service.metaDescription}
        pathname={pathname}
        image={service.heroImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.h1,
          description: service.metaDescription,
          serviceType: service.serviceName,
          areaServed: "Seattle, WA and nearby communities",
          provider: buildLocalBusinessReference(),
          url: buildCanonicalUrl(pathname),
        }}
      />
    );
  };

const processSteps = [
  {
    label: "Step 1",
    title: "Book Appointment",
    text: "Reach out by phone or online form so we can learn about your goals, property, and preferred timing.",
  },
  {
    label: "Step 2",
    title: "On-Site Estimate",
    text: "We review the space, discuss materials, take measurements, and provide clear practical recommendations.",
  },
  {
    label: "Step 3",
    title: "Schedule Installation",
    text: "After approval, we confirm materials, timeline, access, and installation details so expectations are clear.",
  },
  {
    label: "Step 4",
    title: "Work Begins",
    text: "Our crew arrives prepared, completes the work with care, and reviews the finished details with you.",
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

const ServiceLandingPage = ({ service }: ServiceLandingPageProps) => {
  const relatedProjects = service.relatedProjectSlugs
    .map((slug) => recentWorkProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    )
    .slice(0, 3);

  return (
    <SiteLayout>
      <main className="service-page">
        <section
          className="service-hero"
          aria-labelledby="service-hero-title"
          style={{ backgroundImage: `url(${service.heroImage})` }}>
          <div className="service-hero__overlay" />
          <div className="service-hero__content">
            <p className="service-hero__eyebrow">{service.categoryLabel}</p>
            <h1 id="service-hero-title">
              {renderHighlightedText(service.h1)}
            </h1>
            <p>{renderHighlightedText(service.subtitle)}</p>
            <div className="service-hero__actions">
              <Link to="/contact" className="service-button service-button--primary">
                Request a Free Estimate
              </Link>
              <Link
                to="/projects"
                className="service-button service-button--secondary">
                View Recent Work
              </Link>
            </div>
          </div>
        </section>

        <section className="service-trust" aria-label="Quick trust points">
          {service.trustPoints.map((point) => (
            <article className="service-trust__card" key={point.title}>
              <span className="service-trust__icon">
                <CheckIcon />
              </span>
              <h2>{renderHighlightedText(point.title)}</h2>
              <p>{renderHighlightedText(point.text)}</p>
            </article>
          ))}
        </section>

        <section className="service-overview">
          <div>
            <p className="service-label">Service Overview</p>
            <h2>About Our {renderHighlightedText(service.serviceName)} Service</h2>
          </div>
          <div className="service-overview__copy">
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
            ))}
          </div>
        </section>

        <section className="service-split">
          <div className="service-card service-card--sage">
            <p className="service-label">Best Fit</p>
            <h2>Is This Service Right for Your Home?</h2>
            <ul className="service-check-list">
              {service.bestFit.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{renderHighlightedText(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="service-card">
            <p className="service-label">Options</p>
            <h2>Materials and Details We Can Discuss</h2>
            <div className="service-options">
              {service.materials.map((material) => (
                <article key={material.title}>
                  <h3>{renderHighlightedText(material.title)}</h3>
                  <p>{renderHighlightedText(material.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-section-head">
            <p className="service-label">Practical Benefits</p>
            <h2>
              Why Homeowners Choose{" "}
              {renderHighlightedText(service.serviceName)}
            </h2>
          </div>
          <div className="service-benefits__grid">
            {service.benefits.map((benefit) => (
              <article className="service-benefit" key={benefit}>
                <CheckIcon />
                <p>{renderHighlightedText(benefit)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-process" aria-labelledby="service-process-title">
          <div className="service-section-head">
            <p className="service-label">How It Works</p>
            <h2 id="service-process-title">Our Simple 4-Step Process</h2>
            <span>{renderHighlightedText(service.processIntro)}</span>
          </div>
          <div className="service-process__grid">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                <article className="service-process-card">
                  <span className="service-process-card__number">
                    {step.label}
                  </span>
                  <h3>{renderHighlightedText(step.title)}</h3>
                  <p>{renderHighlightedText(step.text)}</p>
                </article>
                {index < processSteps.length - 1 ? (
                  <span className="service-process__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="service-related" aria-labelledby="service-related-title">
          <div className="service-section-head">
            <p className="service-label">Recent Work</p>
            <h2 id="service-related-title">
              Recent {renderHighlightedText(service.serviceName)} Projects
            </h2>
            <span>
              Browse related outdoor projects completed for Seattle-area
              homeowners.
            </span>
          </div>
          <div className="service-related__grid">
            {relatedProjects.map((project) => (
              <article className="service-project-card" key={project.slug}>
                <Link to={`/projects/${project.slug}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div>
                    <p>{project.type}</p>
                    <h3>{renderHighlightedText(project.title)}</h3>
                    <span>{renderHighlightedText(project.location)}</span>
                    <small>{renderHighlightedText(project.description)}</small>
                    <strong>View Project →</strong>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="service-faq" aria-labelledby="service-faq-title">
          <div className="service-section-head">
            <p className="service-label">Helpful Answers</p>
            <h2 id="service-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="service-faq__list">
            {service.faq.map((item) => (
              <article className="service-faq__item" key={item.question}>
                <h3>{renderHighlightedText(item.question)}</h3>
                <p>{renderHighlightedText(item.answer)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-final-cta">
          <div>
            <p className="service-label">Ready When You Are</p>
            <h2>
              Ready to Start Your{" "}
              {renderHighlightedText(service.finalCtaServiceName)} Project?
            </h2>
            <p>
              Tell us about your outdoor project and{" "}
              <span className="brand-highlight">Northwood Renovation</span> will
              help you plan the next step with a clear estimate and practical
              recommendations.
            </p>
          </div>
          <div className="service-final-cta__actions">
            <Link to="/contact" className="service-final-cta__primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="service-final-cta__secondary">
              View Recent Work
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default ServiceLandingPage;
