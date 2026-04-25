import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/blog.css";
import renderHighlightedText from "../components/brand-text";
import SeoHead from "../components/seo";
import SiteLayout from "../components/site-layout";
import { blogArticles, featuredGuideSlug, popularGuideSlugs } from "../data/blog-articles";
import positivePicture from "../images/blog/positive-picture.png";

const seoTitle =
  "Deck & Fence Tips for Everett and Snohomish County Homeowners | Northwood Renovation Blog";
const seoDescription =
  "Practical guides on deck building, fence installation, material comparisons, permits, and maintenance from Northwood Renovation - Everett's local deck and fence builder. Written for Pacific Northwest homeowners.";

const filterCategories = [
  "All",
  "Decks",
  "Fences",
  "Materials",
  "Maintenance",
  "Planning",
] as const;

type FilterCategory = (typeof filterCategories)[number];

const displayCategoryBySlug: Record<string, string> = {
  "best-fence-materials-everett": "Fence Materials",
  "cedar-vs-composite-decking-everett": "Deck Materials",
  "fence-posts-failing-signs": "Fence Repairs",
  "prepare-yard-fence-deck-project": "Fence Planning",
  "questions-before-hiring-deck-builder": "Project Planning",
  "rain-moisture-outdoor-wood": "Northwest Weather",
  "replace-your-deck-or-fence": "Repair vs Replace",
  "seattle-permits-outdoor-projects": "Local Planning",
  "spring-checklist-decks-fences": "Deck Maintenance",
  "wood-deck-lifespan-pnw": "Deck Maintenance",
};

const excerptBySlug: Record<string, string> = {
  "cedar-vs-composite-decking-everett":
    "The most common question we get from homeowners planning a new deck. Cedar or composite? This guide gives an honest comparison specific to Everett's wet climate - maintenance, cost over time, how each material ages in shade, and which one fits which type of homeowner.",
  "wood-deck-lifespan-pnw":
    "A cedar deck in Everett can last fifteen to twenty-five years - or eight years, depending on how it was built and maintained. This guide covers the variables that actually affect lifespan and how to tell if your deck is aging well or approaching the end.",
  "best-fence-materials-everett":
    "Cedar, chain link, vinyl, or composite - compared honestly for Pacific Northwest conditions. Includes how each material handles moisture, what maintenance each requires, and which situation each one suits best in a Snohomish County yard.",
  "rain-moisture-outdoor-wood":
    "Everett gets rain from October through May. This guide covers how sustained moisture affects cedar decks and fences specifically - what fails first, how to slow the process, and what the warning signs look like before a small problem becomes a large one.",
  "prepare-yard-fence-deck-project":
    "Small preparation steps before a crew shows up make a real difference to how a project runs. This guide covers what to do the week before installation starts - access, utilities, landscaping, and what to communicate to the builder.",
  "seattle-permits-outdoor-projects":
    "When do you need a permit for a fence or deck in Everett? What about Marysville, Mukilteo, or unincorporated Snohomish County? This guide covers the thresholds, the process, and what happens if you build without one.",
  "fence-posts-failing-signs":
    "Post failure is the most common reason fences lean, sag, or fall in Pacific Northwest yards. This guide shows you what to look for at the base of fence posts - the signs that mean repair, and the ones that mean the post is already gone.",
  "spring-checklist-decks-fences":
    "What to check, clean, and address on your deck and fence every spring after the wet season. A practical checklist for cedar decks and wood fences in Everett - nothing complicated, but the steps that keep small issues from becoming expensive ones.",
  "questions-before-hiring-deck-builder":
    "Most homeowners hire the first builder who seems reasonable and gives a decent price. This guide covers the questions that reveal whether a builder actually knows what they're doing - licensing, permits, post depth, warranty, and what a written estimate should include. Useful before talking to anyone, including us.",
  "replace-your-deck-or-fence":
    "The most common question we hear from homeowners with an aging deck or fence isn't what material to use - it's whether the structure can be repaired or needs to be rebuilt. This guide walks through the signs that point toward repair, the ones that point toward replacement, and how to tell the difference in your own yard.",
};

const filterBySlug: Record<string, Exclude<FilterCategory, "All">> = {
  "cedar-vs-composite-decking-everett": "Materials",
  "wood-deck-lifespan-pnw": "Maintenance",
  "best-fence-materials-everett": "Materials",
  "rain-moisture-outdoor-wood": "Maintenance",
  "prepare-yard-fence-deck-project": "Planning",
  "seattle-permits-outdoor-projects": "Planning",
  "fence-posts-failing-signs": "Fences",
  "spring-checklist-decks-fences": "Maintenance",
  "questions-before-hiring-deck-builder": "Planning",
  "replace-your-deck-or-fence": "Planning",
};

const filterDescriptions: Record<Exclude<FilterCategory, "All">, string> = {
  Decks:
    "Articles in this category cover deck building decisions, material comparisons, structural questions, and what to expect from a deck build in Everett's climate. If you're planning a new deck or trying to understand what's wrong with an existing one, start here.",
  Fences:
    "Fence guides cover cedar, chain link, and other fence materials, installation decisions, post failure signs, and how to plan a fence project on a Snohomish County residential property. Includes articles on sloped yards, gate planning, and permit requirements.",
  Materials:
    "Material comparison articles cover cedar vs. composite decking, the best fence materials for Pacific Northwest weather, and how different materials hold up in Everett's wet seasons. Most material questions come down to maintenance preference and budget - these guides help you think through both.",
  Maintenance:
    "Seasonal maintenance guides for cedar decks, wood fences, and outdoor structures in the Pacific Northwest. What to check in spring, how to clean a cedar fence, when to reseal, and how to spot problems early before they become expensive repairs.",
  Planning:
    "Planning guides cover permit requirements, how to prepare your yard for a project, questions to ask a builder before hiring, and what the installation process looks like from start to finish. Useful before you call anyone for an estimate.",
};

const areaLinks = [
  { label: "Everett", to: "/cities/everett-wa/" },
  { label: "Marysville", to: "/cities/marysville-wa/" },
  { label: "Snohomish", to: "/cities/snohomish-wa/" },
  { label: "Mill Creek", to: "/cities/mill-creek-wa/" },
  { label: "Mukilteo", to: "/cities/mukilteo-wa/" },
  { label: "Lynnwood", to: "/cities/lynnwood-wa/" },
  { label: "Edmonds", to: "/cities/edmonds-wa/" },
  { label: "Bothell", to: "/cities/bothell-wa/" },
  { label: "Kenmore", to: "/cities/kenmore-wa/" },
  { label: "Shoreline", to: "/cities/shoreline-wa/" },
  { label: "Kirkland", to: "/cities/kirkland-wa/" },
  { label: "Redmond", to: "/cities/redmond-wa/" },
  { label: "Bellevue", to: "/cities/bellevue-wa/" },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Northwood Renovation - Deck & Fence Tips",
  description:
    "Practical guides on deck building, fence installation, material comparisons, permits, and maintenance for Everett and Snohomish County homeowners.",
  url: "https://northwoodrenovation.com/blog/",
  publisher: {
    "@type": "Organization",
    name: "Northwood Renovation",
    url: "https://northwoodrenovation.com",
    logo: {
      "@type": "ImageObject",
      url: "https://northwoodrenovation.com/favicon.png",
    },
  },
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] =
    React.useState<FilterCategory>("All");
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
            (post) => filterBySlug[post.slug] === activeCategory,
          );

    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return categoryFilteredPosts;
    }

    return categoryFilteredPosts.filter((post) => {
      const searchableText = [
        post.title,
        excerptBySlug[post.slug] ?? post.excerpt,
        displayCategoryBySlug[post.slug] ?? post.category,
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
            <p className="blog-hero__eyebrow">Northwood Renovation Blog</p>
            <h1 id="blog-hero-title">
              Deck and Fence Guides for Everett and Snohomish County Homeowners
            </h1>
            <p>
              Practical articles on deck building, fence installation, material choices, Pacific Northwest maintenance, and local permit requirements - written by the Northwood Renovation team based in Everett, WA.
            </p>
            <p>
              These guides are written to answer the questions homeowners in Everett and Snohomish County actually ask before, during, and after a deck or fence project. Not generic national content repurposed for a local audience - guides written with the specific conditions, materials, and requirements of the Pacific Northwest in mind.
            </p>
            <p>
              If a question comes up repeatedly during estimate visits, it usually ends up here.
            </p>
          </div>
          <div className="blog-hero__media" aria-hidden="true">
            <img
              src={positivePicture}
              alt="Northwood Renovation builder standing beside a cedar fence in Everett, WA"
              loading="lazy"
            />
          </div>
        </section>

        <section className="blog-featured" aria-labelledby="blog-about-title">
          <article className="blog-featured__card blog-featured__card--stacked">
            <div className="blog-featured__body">
              <p className="blog-featured__label">About the Blog</p>
              <h2 id="blog-about-title">Why We Write These Guides</h2>
              <p>
                Most homeowners who call us for an estimate have already spent time online trying to understand what they need. They&apos;ve read about cedar vs. composite, wondered whether they need a permit for a new fence, tried to figure out if the soft spot on their deck is serious or not.
              </p>
              <p>
                A lot of what&apos;s online is either too generic to apply to the Pacific Northwest specifically, or it&apos;s written by people who haven&apos;t actually installed fences and decks in this climate. We try to fill that gap with content that&apos;s genuinely useful for Everett-area homeowners.
              </p>
              <p>
                These articles won&apos;t replace an on-site estimate - every property is different and the right answers for your yard depend on what&apos;s actually there. But they give you a foundation for making informed decisions before you call anyone, including us.
              </p>
            </div>
          </article>
        </section>

        <section className="blog-featured" aria-labelledby="blog-featured-title">
          <article className="blog-featured__card">
            <img
              src={featuredGuide.image}
              alt="Deck and fence repair versus replacement guide for Everett homeowners"
              loading="lazy"
            />
            <div className="blog-featured__body">
              <p className="blog-featured__label">Featured Guide</p>
              <h2 id="blog-featured-title">
                Start Here: When to Repair vs. Replace Your Deck or Fence
              </h2>
              <p>
                The most common question we hear from homeowners with an aging deck or fence isn&apos;t &quot;what material should I use?&quot; - it&apos;s &quot;do I need to replace the whole thing, or can I repair it?&quot;
              </p>
              <p>
                The answer depends on what&apos;s actually failing and where. A deck with worn surface boards but solid framing is a candidate for resurfacing. A deck where the posts are rotting at grade and the ledger is leaking at the house is usually better rebuilt. A fence with a few bad boards and a leaning section or two might just need post replacement and new boards in the affected area. A fence where every post is soft at the base needs to come out.
              </p>
              <p>
                This guide walks through the signs that point toward repair, the ones that point toward replacement, and how to tell the difference when you&apos;re standing in your yard trying to figure out what you&apos;re actually looking at.
              </p>
              <Link to={`/blog/${featuredGuide.slug}`}>
                Read the full guide: How to Know When It&apos;s Time to Replace Your Deck or Fence →
              </Link>
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
                placeholder="Search deck and fence guides"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>

            <div className="blog-filters" role="toolbar" aria-label="Blog categories">
              {filterCategories.map((category) => (
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

            {activeCategory !== "All" ? (
              <section className="blog-category-context" aria-labelledby="blog-category-context-title">
                <h3 id="blog-category-context-title">{activeCategory}</h3>
                <p>{filterDescriptions[activeCategory]}</p>
              </section>
            ) : null}

            <h2 id="blog-grid-title" className="blog-grid__title">
              Practical Deck and Fence Resources
            </h2>
            <p className="blog-grid__subtitle">
              Use the filters to narrow in on deck building, fence installation, materials, maintenance, and planning guides written for Everett and Snohomish County homeowners.
            </p>

            <div className="blog-grid">
              {visiblePosts.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="blog-card__link"
                    aria-label={`Read guide: ${post.title}`}
                  >
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                    <div className="blog-card__body">
                      <p className="blog-card__category">
                        {displayCategoryBySlug[post.slug] ?? post.category}
                      </p>
                      <h3>{renderHighlightedText(post.title)}</h3>
                      <p>{renderHighlightedText(excerptBySlug[post.slug] ?? post.excerpt)}</p>
                      <div className="blog-card__meta">
                        <span>{displayCategoryBySlug[post.slug] ?? post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="blog-card__meta blog-card__meta--secondary">
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
                No guides found for &quot;{searchQuery}&quot;. Try a different keyword or select another category.
              </p>
            ) : null}

            <section className="blog-cards-cta" aria-labelledby="blog-estimate-title">
              <h3 id="blog-estimate-title">Not Sure What You Need? Start With the Estimate.</h3>
              <p>
                Reading these guides is a good way to get oriented before a project. But the fastest way to understand what your specific deck or fence actually needs is an on-site visit. We come to your property, look at what&apos;s there, and give you a straight answer about what the project involves and what it costs.
              </p>
              <p>
                The visit is free. There&apos;s no obligation to move forward with anything.
              </p>
              <p>
                If you&apos;ve read a guide here and have a specific question about how it applies to your yard, bring it to the estimate visit - that&apos;s exactly the kind of conversation we&apos;re set up for.
              </p>
              <p>Call <strong>(425) 683-2024</strong> or fill out the request form.</p>
              <Link to="/contact#contact-form">Request a Free Estimate</Link>
            </section>

            <section className="blog-mobile-cta" aria-label="Most read guides">
              <h3>Most Read Guides</h3>
              <p>
                These are the articles Everett and Snohomish County homeowners read most. If you&apos;re not sure where to start, these three cover the questions that come up most often before a project.
              </p>
              <ul className="blog-popular-list">
                {popularGuideSlugs.map((slug, index) => {
                  const post = blogArticles.find((item) => item.slug === slug);
                  if (!post) return null;
                  return (
                    <li key={slug}>
                      <Link to={`/blog/${slug}`}>
                        <span className="blog-popular-list__index" aria-hidden="true">
                          {index + 1}
                        </span>
                        <span className="blog-popular-list__content">
                          <span className="blog-popular-list__title">
                            {renderHighlightedText(post.title)}
                          </span>
                          <span className="blog-popular-list__meta">
                            {displayCategoryBySlug[post.slug] ?? post.category} · {post.readTime}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>

          <aside className="blog-sidebar" aria-label="Blog sidebar">
            <div className="blog-sidebar__popular">
              <h3>Most Read Guides</h3>
              <p className="blog-sidebar__intro">
                These are the articles Everett and Snohomish County homeowners read most. If you&apos;re not sure where to start, these three cover the questions that come up most often before a project.
              </p>
              <ul className="blog-sidebar__popular-list">
                {popularGuideSlugs.map((slug, index) => {
                  const post = blogArticles.find((item) => item.slug === slug);
                  if (!post) return null;
                  return (
                    <li key={slug}>
                      <Link to={`/blog/${slug}`}>
                        <span className="blog-sidebar__popular-index" aria-hidden="true">
                          {index + 1}
                        </span>
                        <span className="blog-sidebar__popular-copy">
                          <span>{renderHighlightedText(post.title)}</span>
                          <small>
                            {displayCategoryBySlug[post.slug] ?? post.category} · {post.readTime}
                          </small>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="blog-sidebar__cta">
              <h3>Not Sure Where to Start?</h3>
              <p>
                If you&apos;ve read a guide here and want help applying it to your yard, bring that question to the estimate visit. That&apos;s exactly what the visit is for.
              </p>
              <Link to="/contact#contact-form">Request a Free Estimate</Link>
            </div>
          </aside>
        </section>

        <section className="blog-newsletter" aria-labelledby="blog-newsletter-title">
          <div>
            <p className="blog-newsletter__eyebrow">Get New Guides When We Publish Them</p>
            <h2 id="blog-newsletter-title">Get New Guides When We Publish Them</h2>
            <p>
              We publish new articles when a topic comes up enough times during estimate visits that it&apos;s worth writing down properly. That&apos;s usually two to four times a year - no newsletter schedule, no promotional emails, just guides when there&apos;s something worth saying.
            </p>
            <p>
              If you&apos;d like to receive them when they go up, add your email below. We don&apos;t share the list with anyone.
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
              placeholder="you@example.com"
              required
            />
            <button type="submit">Send me the guides</button>
          </form>
        </section>

        <section className="blog-popular-strip" aria-labelledby="blog-popular-strip-title">
          <h2 id="blog-popular-strip-title">Most Read Guides</h2>
          <p>
            These are the articles Everett and Snohomish County homeowners read most. If you&apos;re not sure where to start, these three cover the questions that come up most often before a project.
          </p>
          <div className="blog-popular-strip__links">
            {popularGuideSlugs.map((slug) => {
              const post = blogArticles.find((item) => item.slug === slug);
              if (!post) return null;
              return (
                <Link key={slug} to={`/blog/${slug}`}>
                  {renderHighlightedText(post.title)}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="blog-final-cta" aria-labelledby="blog-final-cta-title">
          <h2 id="blog-final-cta-title">Have Questions About Your Deck or Fence?</h2>
          <p>
            Practical guides can get you oriented, but an on-site visit is still the fastest way to understand what your specific yard needs. Bring the questions you picked up here and we&apos;ll talk through them with the project in front of us.
          </p>
          <div className="blog-final-cta__actions">
            <Link to="/contact#contact-form" className="blog-button blog-button--primary">
              Request a Free Estimate
            </Link>
          </div>
        </section>

        <footer className="blog-service-area-strip" aria-labelledby="blog-service-area-title">
          <h2 id="blog-service-area-title">Deck and Fence Guides Written for Homeowners in:</h2>
          <p>
            {areaLinks.map((area, index) => (
              <React.Fragment key={area.to}>
                <Link to={area.to}>{area.label}</Link>
                {index < areaLinks.length - 1 ? " · " : null}
              </React.Fragment>
            ))}
          </p>
        </footer>
      </main>
    </SiteLayout>
  );
};

export default BlogPage;

export const Head: HeadFC = ({ location }) => (
  <SeoHead
    title={seoTitle}
    description={seoDescription}
    pathname={location.pathname}
    schema={blogSchema}
  />
);
