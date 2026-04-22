import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/blog.css";
import renderHighlightedText from "../components/brand-text";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import {
  blogArticles,
  blogCategories,
  featuredGuideSlug,
  popularGuideSlugs,
  type BlogCategory,
} from "../data/blog-articles";

const cardCategoryBySlug: Record<string, string> = {
  "best-fence-materials-seattle": "Fence Materials",
  "cedar-vs-composite-seattle": "Deck Materials",
  "fence-posts-failing-signs": "Fence Repairs",
  "prepare-yard-fence-deck-project": "Fence Planning",
  "questions-before-hiring-deck-builder": "Project Planning",
  "rain-moisture-outdoor-wood": "Seattle Weather",
  "replace-your-deck-or-fence": "Repair vs Replace",
  "seattle-permits-outdoor-projects": "Seattle Planning",
  "spring-checklist-decks-fences": "Deck Maintenance",
  "wood-deck-lifespan-pnw": "Deck Maintenance",
};

const getCardCategory = (slug: string, fallbackCategory: string) =>
  cardCategoryBySlug[slug] ?? fallbackCategory;

const BlogPage = () => {
  const [activeCategory, setActiveCategory] =
    React.useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const featuredGuide = React.useMemo(
    () => blogArticles.find((article) => article.slug === featuredGuideSlug),
    [],
  );

  const visibleArticleCards = React.useMemo(
    () => blogArticles.filter((article) => article.slug !== featuredGuideSlug),
    [],
  );

  const visiblePosts = React.useMemo(() => {
    const categoryFilteredPosts =
      activeCategory === "All"
        ? visibleArticleCards
        : visibleArticleCards.filter(
            (post) => post.category === activeCategory,
          );

    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return categoryFilteredPosts;
    }

    return categoryFilteredPosts.filter((post) => {
      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.primaryKeyword,
        ...post.secondaryKeywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, searchQuery, visibleArticleCards]);

  if (!featuredGuide) {
    return null;
  }

  return (
    <SiteLayout>
      <main className="blog-page">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Blog</span>
        </nav>

        <section className="blog-hero" aria-labelledby="blog-hero-title">
          <div className="blog-hero__content">
            <p className="blog-hero__eyebrow">
              <span className="brand-highlight">Northwood Renovation</span> Blog
            </p>
            <h1 id="blog-hero-title">
              Deck & Fence Tips for Seattle Homeowners
            </h1>
            <p>
              Helpful guides, project ideas, and maintenance advice from the{" "}
              <span className="brand-highlight">Northwood Renovation</span>{" "}
              team.
            </p>
            <div className="blog-hero__actions">
              <Link to="/contact#contact-form" className="blog-button blog-button--primary">
                Request a Free Estimate
              </Link>
              <Link
                to="/projects"
                className="blog-button blog-button--secondary"
              >
                View Recent Work
              </Link>
            </div>
          </div>
          <div className="blog-hero__media" aria-hidden="true">
            <img
              src={featuredGuide.image}
              alt={featuredGuide.imageAlt}
              loading="lazy"
            />
          </div>
        </section>

        <section
          className="blog-featured"
          aria-labelledby="blog-featured-title"
        >
          <article className="blog-featured__card">
            <img
              src={featuredGuide.image}
              alt="Outdoor deck and fence replacement planning guide"
              loading="lazy"
            />
            <div className="blog-featured__body">
              <p className="blog-featured__label">Featured Guide</p>
              <p className="blog-featured__category">
                {featuredGuide.category}
              </p>
              <p className="blog-featured__meta">
                <span>{featuredGuide.readTime}</span>
              </p>
              <h2 id="blog-featured-title">
                {renderHighlightedText(featuredGuide.title)}
              </h2>
              <p>{renderHighlightedText(featuredGuide.excerpt)}</p>
              <Link to={`/blog/${featuredGuide.slug}`}>Read Guide</Link>
            </div>
          </article>
        </section>

        <section className="blog-content" aria-labelledby="blog-grid-title">
          <div className="blog-main-column">
            <div className="blog-search">
              <label htmlFor="blog-search-main">Search</label>
              <input
                id="blog-search-main"
                type="search"
                placeholder="Search deck and fence tips"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>

            <div
              className="blog-filters"
              role="toolbar"
              aria-label="Blog categories"
            >
              {blogCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "blog-filter blog-filter--active"
                      : "blog-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <h2 id="blog-grid-title" className="blog-grid__title">
              Practical Deck & Fence Resources
            </h2>
            <p className="blog-grid__subtitle">
              Helpful guides for Seattle homeowners planning deck, fence, and
              outdoor renovation projects.
            </p>

            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <article
                  className="blog-card"
                  key={post.slug}
                  id={`blog-article-${post.slug}`}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-card__link"
                    aria-label={`Read guide: ${post.title}`}
                  >
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div className="blog-card__body">
                      <p className="blog-card__category">
                        {getCardCategory(post.slug, post.category)}
                      </p>
                      <h3>{renderHighlightedText(post.title)}</h3>
                      <p>{renderHighlightedText(post.excerpt)}</p>
                      <div className="blog-card__meta">
                        <span>{post.readTime}</span>
                        <span className="blog-card__read-guide">
                          Read Guide <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {visiblePosts.length === 0 ? (
              <p className="blog-no-results">
                No guides found for &quot;{searchQuery}&quot;. Try a different
                keyword or select another category.
              </p>
            ) : null}

            <section
              className="blog-cards-cta"
              aria-label="Blog follow-up action"
            >
              <h3>Not sure where to start?</h3>
              <p>
                Tell us about your deck or fence project and we&apos;ll help you
                understand your options.
              </p>
              <Link to="/contact#contact-form">Request a Free Estimate</Link>
            </section>

            <section className="blog-mobile-cta" aria-label="Planning support">
              <h3>Planning a Project?</h3>
              <p>
                Tell us about your deck, fence, or outdoor renovation project
                and we&apos;ll help you plan the next step.
              </p>
              <Link to="/contact#contact-form">Request a Free Estimate</Link>
            </section>
          </div>

          <aside className="blog-sidebar" aria-label="Blog sidebar">
            <div className="blog-sidebar__popular">
              <h3>Popular Guides</h3>
              <ul>
                {popularGuideSlugs.map((slug) => {
                  const post = blogArticles.find((item) => item.slug === slug);
                  if (!post) return null;
                  return (
                    <li key={slug}>
                      <Link to={`/blog/${slug}`}>
                        {renderHighlightedText(post.title)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="blog-sidebar__cta">
              <h3>Planning a Project?</h3>
              <p>
                Tell us about your deck, fence, or outdoor renovation project
                and we&apos;ll help you plan the next step.
              </p>
              <Link to="/contact#contact-form">Request a Free Estimate</Link>
            </div>
          </aside>
        </section>

        <section
          className="blog-newsletter"
          aria-labelledby="blog-newsletter-title"
        >
          <div>
            <p className="blog-newsletter__eyebrow">Helpful Updates</p>
            <h2 id="blog-newsletter-title">Get Outdoor Project Tips</h2>
            <p>
              Receive occasional deck, fence, and maintenance tips for
              Seattle-area homeowners.
            </p>
          </div>
          <form
            className="blog-newsletter__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email">Email</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="northwoodrenovation@gmail.com"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <section
          className="blog-final-cta"
          aria-labelledby="blog-final-cta-title"
        >
          <h2 id="blog-final-cta-title">
            Have Questions About Your Deck or Fence?
          </h2>
          <p>
            Our team can help you understand your options and plan a project
            that fits your home, budget, and outdoor space.
          </p>
          <div className="blog-final-cta__actions">
            <Link to="/contact#contact-form" className="blog-button blog-button--primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="blog-button blog-button--secondary">
              View Recent Work
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default BlogPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title="Blog | Northwood Renovation Deck & Fence Tips"
    description="Explore practical deck, fence, materials, maintenance, and Seattle planning guides from Northwood Renovation."
    pathname={location.pathname}
  />
);
