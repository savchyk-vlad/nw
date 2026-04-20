import * as React from "react";
import { HeadFC, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/projects.css";
import renderHighlightedText from "../components/brand-text";
import SiteLayout from "../components/site-layout";
import {
  beforeAfterPreview,
  recentWorkFilters,
  recentWorkProjects,
  type ProjectFilter,
} from "../data/recent-work-projects";

const trustPoints = [
  "Custom-built for each home",
  "Clear communication from start to finish",
  "Clean, durable exterior work",
];

const RecentWorkPage = () => {
  const [activeFilter, setActiveFilter] =
    React.useState<ProjectFilter>("All Projects");
  const [comparisonValue, setComparisonValue] = React.useState(52);

  const visibleProjects = React.useMemo(
    () =>
      activeFilter === "All Projects"
        ? recentWorkProjects
        : recentWorkProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <SiteLayout>
      <main className="recent-work-page">
        <section
          className="recent-work-hero"
          style={{ overflow: "hidden", position: "relative" }}>
          <StaticImage
            src="../images/deck-hero-background.jpg"
            alt=""
            aria-hidden="true"
            className="recent-work-hero__media"
            imgClassName="recent-work-hero__image"
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
            className="recent-work-hero__overlay"
            style={{ position: "absolute", inset: 0, zIndex: 1 }}
          />
          <div
            className="recent-work-hero__content"
            style={{ position: "relative", zIndex: 1 }}>
            <p className="recent-work-hero__eyebrow">Recent Work</p>
            <h1>
              {renderHighlightedText("Recent Fence & Deck and outdoor Projects")}
            </h1>
            <p>
              {renderHighlightedText(
                "Explore recent decks, fences, and outdoor renovation work completed for local homeowners.",
              )}
            </p>
            <div className="recent-work-hero__actions">
              <Link to="/contact" className="recent-work-button">
                Request a Free Estimate
              </Link>
              <Link
                to="/#services"
                className="recent-work-hero__secondary-link"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="recent-work-intro" aria-label="Project standards">
          <p>
            {renderHighlightedText(
              "From privacy fences to custom decks, every project is built with careful planning, durable materials, and clean craftsmanship.",
            )}
          </p>
          <div className="recent-work-intro__trust">
            {trustPoints.map((point) => (
              <span key={point}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5 9.3 17 19 7" />
                </svg>
                {renderHighlightedText(point)}
              </span>
            ))}
          </div>
        </section>

        <section className="recent-work-projects" aria-labelledby="projects">
          <div className="recent-work-section-head">
            <p>Portfolio</p>
            <h2 id="projects">
              {renderHighlightedText("Completed fence, deck, and outdoor work")}
            </h2>
          </div>

          <div className="recent-work-tabs" aria-label="Project filters">
            {recentWorkFilters.map((filter) => (
              <button
                type="button"
                className={
                  activeFilter === filter
                    ? "recent-work-tab recent-work-tab--active"
                    : "recent-work-tab"
                }
                onClick={() => setActiveFilter(filter)}
                key={filter}
              >
                {renderHighlightedText(filter)}
              </button>
            ))}
          </div>

          <div className="recent-work-grid">
            {visibleProjects.map((project) => (
              <article className="recent-project-card" key={project.slug}>
                <Link
                  to={`/projects/${project.slug}/`}
                  className="recent-project-card__media"
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="recent-project-card__body">
                  <p className="recent-project-card__type">
                    {renderHighlightedText(project.type)}
                  </p>
                  <h3>{renderHighlightedText(project.title)}</h3>
                  <p className="recent-project-card__location">
                    {renderHighlightedText(project.location)}
                  </p>
                  <p>{renderHighlightedText(project.description)}</p>
                  <Link
                    to={`/projects/${project.slug}/`}
                    className="recent-project-card__link"
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="recent-work-featured">
          <div className="recent-work-featured__media">
            <StaticImage
              src="../images/gallery/horizontal-wood-fence.jpg"
              alt="Finished custom privacy fence installation"
              imgClassName="recent-work-featured__image"
              placeholder="blurred"
              quality={72}
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="recent-work-featured__content">
            <p className="recent-work-featured__label">Featured Project</p>
            <h2>{renderHighlightedText("Custom Privacy Fence Installation")}</h2>
            <p>
              {renderHighlightedText(
                "This project focused on adding privacy, structure, and curb appeal to a residential backyard while keeping the final look clean and natural.",
              )}
            </p>
            <ul>
              <li>{renderHighlightedText("Custom fence layout")}</li>
              <li>Durable exterior materials</li>
              <li>Clean installation and final walkthrough</li>
            </ul>
            <Link to="/contact" className="recent-work-button">
              Start a Similar Project
            </Link>
          </div>
        </section>

        <section className="recent-work-before-after">
          <div className="recent-work-section-head">
            <p>Before & After</p>
            <h2>Drag to compare the project transformation</h2>
          </div>
          <div className="before-after-slider">
            <img
              className="before-after-slider__image"
              src={beforeAfterPreview.before}
              alt="Deck project before completion"
              loading="lazy"
              decoding="async"
            />
            <div
              className="before-after-slider__after"
              style={{ clipPath: `inset(0 0 0 ${comparisonValue}%)` }}
            >
              <img
                src={beforeAfterPreview.after}
                alt="Finished backyard deck after completion"
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
          <p className="recent-work-before-after__copy">
            A weathered deck was replaced with a cleaner, more durable outdoor
            space designed to feel safer, brighter, and more usable for everyday
            backyard living.
          </p>
        </section>

        <section className="recent-work-cta">
          <div>
            <p>Ready when you are</p>
            <h2>{renderHighlightedText("Ready to Start Your Outdoor Project?")}</h2>
            <span>
              {renderHighlightedText(
                "Tell us about your fence, deck, or exterior renovation project and we’ll help you plan the next step.",
              )}
            </span>
          </div>
          <Link to="/contact" className="recent-work-button">
            Request a Free Estimate
          </Link>
        </section>
      </main>
    </SiteLayout>
  );
};

export default RecentWorkPage;

export const Head: HeadFC = () => (
  <>
    <title>Recent Work | Northwood Renovation</title>
    <meta
      name="description"
      content="Explore recent fence, deck, railing, and outdoor renovation projects completed by Northwood Renovation for local homeowners."
    />
  </>
);
