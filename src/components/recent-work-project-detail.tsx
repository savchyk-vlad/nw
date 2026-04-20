import * as React from "react";
import { Link } from "gatsby";
import "../styles/projects.css";
import renderHighlightedText from "./brand-text";
import SiteLayout from "./site-layout";
import {
  beforeAfterPreview,
  getRecentWorkProject,
  recentWorkProjects,
  type RecentWorkProject,
} from "../data/recent-work-projects";

type RecentWorkProjectDetailProps = {
  slug: string;
};

const isFenceProject = (project: RecentWorkProject) =>
  project.category === "Fences" || project.type.toLowerCase().includes("fence");

const getRelatedProjects = (project: RecentWorkProject) =>
  recentWorkProjects
    .filter(
      (relatedProject) =>
        relatedProject.slug !== project.slug &&
        relatedProject.category === project.category,
    )
    .slice(0, 3);

const RecentWorkProjectDetail = ({ slug }: RecentWorkProjectDetailProps) => {
  const project = getRecentWorkProject(slug);
  const [comparisonValue, setComparisonValue] = React.useState(54);

  if (!project) {
    return (
      <SiteLayout>
        <main className="project-detail-page">
          <section className="project-detail-not-found">
            <p>Project not found</p>
            <h1>This project detail page is not available.</h1>
            <Link to="/projects" className="recent-work-button">
              Back to Recent Work
            </Link>
          </section>
        </main>
      </SiteLayout>
    );
  }

  const quickInfo = [
    ["Project Type", project.type],
    ["Location", project.location],
    ["Project Size", project.squareFeet],
    ["Materials", project.materials],
    ["Timeline", project.timeline],
    ["Service", project.service],
  ];
  const relatedProjects = getRelatedProjects(project);

  return (
    <SiteLayout>
      <main className="project-detail-page">
        <section
          className="project-detail-hero project-detail-hero--case-study"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="project-detail-hero__overlay" />
          <div className="project-detail-hero__content">
            <Link to="/projects" className="project-detail-hero__back">
              Back to Recent Work
            </Link>
            <p>{project.type}</p>
            <h1>{renderHighlightedText(project.title)}</h1>
            <span className="project-detail-hero__location">
              {renderHighlightedText(project.location)}
            </span>
            <strong>{renderHighlightedText(project.description)}</strong>
            <Link to="/contact" className="project-detail-hero__button">
              Request a Similar Project
            </Link>
          </div>
        </section>

        <section className="project-quick-info" aria-label="Quick project details">
          {quickInfo.map(([label, value]) => (
            <article className="project-quick-info__card" key={label}>
              <p>{label}</p>
              <strong>{renderHighlightedText(value)}</strong>
            </article>
          ))}
        </section>

        <section className="project-overview-section">
          <div className="project-overview-section__header">
            <p className="project-detail-label">Project Overview</p>
            <h2>Built with planning, durable materials, and clean craftsmanship</h2>
          </div>
          <div className="project-overview-section__copy">
          <span>{renderHighlightedText(project.story)}</span>
          <span>{renderHighlightedText(project.challenge)}</span>
          <span>{renderHighlightedText(project.solution)}</span>
          <span>{renderHighlightedText(project.result)}</span>
          </div>
        </section>

        <section className="project-challenge-solution">
          <article>
            <div className="project-case-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 2.5 20h19L12 3z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <p className="project-detail-label">The Challenge</p>
            <h2>What needed to be solved</h2>
            <span>{renderHighlightedText(project.challenge)}</span>
          </article>
          <article>
            <div className="project-case-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="project-detail-label">Our Solution</p>
            <h2>How the work came together</h2>
            <span>{renderHighlightedText(project.solution)}</span>
          </article>
        </section>

        <section className="project-premium-gallery" aria-labelledby="project-gallery">
          <div className="recent-work-section-head">
            <p>Project Photos</p>
            <h2 id="project-gallery">Details from this recent project</h2>
          </div>
          <div className="project-premium-gallery__layout">
            <img
              className="project-premium-gallery__main"
              src={project.extraImages[0] ?? project.image}
              alt={`${project.title} main view`}
              loading="lazy"
              decoding="async"
            />
            <div className="project-premium-gallery__details">
              {(project.extraImages.length > 1
                ? project.extraImages.slice(1)
                : [project.image]
              ).map((image, index) => (
                <img
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  key={`${project.slug}-detail-${image}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="project-highlights-section">
          <div>
            <p className="project-detail-label">Project Highlights</p>
            <h2>What this project improved</h2>
          </div>
          <ul>
            {[
              ...project.highlights,
              isFenceProject(project)
                ? "Improved privacy and outdoor usability"
                : "Built to match the home's exterior style",
            ].map((highlight) => (
              <li key={highlight}>{renderHighlightedText(highlight)}</li>
            ))}
          </ul>
        </section>

        <section className="project-before-after-section">
          <div className="recent-work-section-head">
            <p>Before & After</p>
            <h2>Drag to compare the transformation</h2>
          </div>
          <div className="before-after-slider">
            <img
              className="before-after-slider__image"
              src={beforeAfterPreview.before}
              alt={`${project.title} before placeholder`}
              loading="lazy"
              decoding="async"
            />
            <div
              className="before-after-slider__after"
              style={{ clipPath: `inset(0 0 0 ${comparisonValue}%)` }}
            >
              <img
                src={beforeAfterPreview.after}
                alt={`${project.title} after placeholder`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="before-after-slider__label before-after-slider__label--before">
              Before
            </span>
            <span className="before-after-slider__label before-after-slider__label--after">
              After
            </span>
            <div
              className="before-after-slider__handle"
              style={{ left: `${comparisonValue}%` }}
              aria-hidden="true"
            >
              <span />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={comparisonValue}
              onChange={(event) => setComparisonValue(Number(event.target.value))}
              className="before-after-slider__range"
              aria-label="Drag to compare before and after project photos"
            />
          </div>
        </section>

        <section className="project-testimonial-section">
          <p className="project-detail-label">What the Homeowner Said</p>
          <div className="project-testimonial-card">
            <div className="project-testimonial-stars" aria-label="5 star review">
              ★★★★★
            </div>
            <blockquote>
              &ldquo;{renderHighlightedText(project.testimonial.quote)}&rdquo;
            </blockquote>
            <cite>
              {project.testimonial.name}
              <span>{renderHighlightedText(project.location)}</span>
            </cite>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="project-related-section">
            <div className="recent-work-section-head">
              <p>More Projects Like This</p>
              <h2>Explore similar recent work</h2>
            </div>
            <div className="project-related-grid">
              {relatedProjects.map((relatedProject) => (
                <article className="recent-project-card" key={relatedProject.slug}>
                  <Link
                    to={`/projects/${relatedProject.slug}/`}
                    className="recent-project-card__media"
                    aria-label={`View ${relatedProject.title}`}
                  >
                    <img
                      src={relatedProject.image}
                      alt={`${relatedProject.title} project`}
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <div className="recent-project-card__body">
                    <p className="recent-project-card__type">
                      {relatedProject.type}
                    </p>
                    <h3>{renderHighlightedText(relatedProject.title)}</h3>
                    <p className="recent-project-card__location">
                      {renderHighlightedText(relatedProject.location)}
                    </p>
                    <Link
                      to={`/projects/${relatedProject.slug}/`}
                      className="recent-project-card__link"
                    >
                      View Project
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="project-detail-final-cta">
          <div>
            <p>Start something similar</p>
            <h2>Want a Similar Project for Your Home?</h2>
            <span>
              {renderHighlightedText(
                "Tell us about your fence, deck, or outdoor renovation project and we’ll help you plan the next step.",
              )}
            </span>
          </div>
          <Link to="/contact" className="project-detail-final-cta__button">
            Request a Free Estimate
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
};

export default RecentWorkProjectDetail;
