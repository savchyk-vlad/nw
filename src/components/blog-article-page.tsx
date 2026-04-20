import * as React from "react";
import { HeadFC, Link } from "gatsby";
import renderHighlightedText from "./brand-text";
import SiteLayout from "./site-layout";
import { blogArticles, type BlogArticle } from "../data/blog-articles";

type BlogArticlePageProps = {
  article: BlogArticle;
};

const SITE_URL = "https://northwoodrenovation.com";
const BRAND_NAME = "Northwood Renovation";

const slugifyHeading = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const formatDateLabel = (isoDate: string) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const BlogArticlePage = ({ article }: BlogArticlePageProps) => {
  const relatedArticles = blogArticles.filter((item) =>
    article.relatedSlugs.includes(item.slug),
  );
  const introParagraphs = [article.excerpt, ...article.introParagraphs];

  const tocItems = [
    ...article.sections.map((section) => section.heading),
    "Homeowner Checklist",
    "Seattle Notes",
    "When to Call a Professional",
    "Frequently Asked Questions",
  ];

  return (
    <SiteLayout>
      <main className="blog-article-page">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{article.title}</span>
        </nav>

        <section className="blog-article-hero" aria-labelledby="article-title">
          <div className="blog-article-hero__copy">
            <p className="blog-article-hero__category">{article.category}</p>
            <h1 id="article-title">{renderHighlightedText(article.title)}</h1>
            <div className="blog-article-intro">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
              ))}
            </div>
            <p className="blog-article-hero__meta">
              <span>
                <strong>Category:</strong> {article.category}
              </span>
              <span>
                <strong>Read time:</strong> {article.readTime}
              </span>
              <span>
                <strong>
                  {article.dateLabel.includes("Updated") ? "Updated" : "Date"}:
                </strong>{" "}
                {article.dateLabel.replace("Updated ", "")}
              </span>
              <span>
                <strong>Location:</strong> {renderHighlightedText("Seattle, WA")}
              </span>
            </p>
          </div>
          <div className="blog-article-hero__media">
            <img src={article.image} alt={article.imageAlt} loading="lazy" />
          </div>
        </section>

        <nav className="blog-article-toc" aria-label="Table of contents">
          <p>In this guide</p>
          <ol>
            {tocItems.map((item) => (
              <li key={item}>
                <a href={`#${slugifyHeading(item)}`}>
                  {renderHighlightedText(item)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="blog-article-content">
          {article.sections.map((section) => (
            <section
              className="blog-article-block"
              key={section.heading}
              id={slugifyHeading(section.heading)}
            >
              <h2>{renderHighlightedText(section.heading)}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
              ))}
              {section.bullets ? (
                <>
                  <h3>Key points</h3>
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{renderHighlightedText(bullet)}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </section>
          ))}

          <section
            className="blog-article-block"
            id={slugifyHeading("Homeowner Checklist")}
          >
            <h2>Homeowner Checklist</h2>
            <p>
              Use this checklist before starting your project so scope, budget,
              and expectations stay clear from the beginning.
            </p>
            <ul>
              {article.checklist.map((item) => (
                <li key={item}>{renderHighlightedText(item)}</li>
              ))}
            </ul>
          </section>

          <section
            className="blog-article-block"
            id={slugifyHeading("Seattle Notes")}
          >
            <h2>Seattle Notes</h2>
            {article.localNotes.map((note) => (
              <p key={note}>{renderHighlightedText(note)}</p>
            ))}
          </section>

          <section
            className="blog-article-block"
            id={slugifyHeading("When to Call a Professional")}
          >
            <h2>When to Call a Professional</h2>
            <p>
              DIY can handle light upkeep, but these conditions usually benefit
              from professional assessment and structured repair planning.
            </p>
            <ul>
              {article.proSectionBullets.map((item) => (
                <li key={item}>{renderHighlightedText(item)}</li>
              ))}
            </ul>
          </section>

          <section
            className="blog-article-block blog-article-faq"
            id={slugifyHeading("Frequently Asked Questions")}
          >
            <h2>Frequently Asked Questions</h2>
            {article.faq.map((faq) => (
              <div key={faq.question}>
                <h3>{renderHighlightedText(faq.question)}</h3>
                <p>{renderHighlightedText(faq.answer)}</p>
              </div>
            ))}
          </section>
        </article>

        <section className="blog-article-end-cta">
          <h2>Need help planning a fence or deck project in Seattle?</h2>
          <p>
            <span className="brand-highlight">Northwood Renovation</span> helps
            Seattle-area homeowners build durable fences, decks, railings, and
            outdoor structures. Tell us about your project and we&apos;ll help
            you understand the next step.
          </p>
          <div className="blog-final-cta__actions">
            <Link to="/contact" className="blog-button blog-button--primary">
              Request a Free Estimate
            </Link>
            <Link to="/projects" className="blog-button blog-button--secondary">
              View Recent Work
            </Link>
          </div>
        </section>

        <section
          className="blog-related"
          aria-labelledby="related-guides-title"
        >
          <h2 id="related-guides-title">Related Articles</h2>
          <div className="blog-related__grid">
            {relatedArticles.map((relatedArticle) => (
              <article className="blog-related__card" key={relatedArticle.slug}>
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.imageAlt}
                  loading="lazy"
                />
                <div>
                  <p>{relatedArticle.category}</p>
                  <p className="blog-related__byline">
                    <span>{relatedArticle.authorName}</span>
                    <span aria-hidden="true">•</span>
                    <span>
                      {formatDateLabel(relatedArticle.datePublishedIso)}
                    </span>
                  </p>
                  <h3>{renderHighlightedText(relatedArticle.title)}</h3>
                  <Link to={`/blog/${relatedArticle.slug}`}>Read Article</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export const BlogArticleHead = (article: BlogArticle): ReturnType<HeadFC> =>
  (() => {
    const articleUrl = `${SITE_URL}/blog/${article.slug}`;
    const keywords = [
      article.primaryKeyword,
      ...article.secondaryKeywords,
    ].join(", ");
    const ogTitle = `${article.title} | ${BRAND_NAME} Blog`;
    const ogDescription = article.excerpt;
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      articleSection: article.category,
      author: {
        "@type": "Organization",
        name: `${BRAND_NAME} Team`,
      },
      dateModified: article.dateModifiedIso,
      datePublished: article.datePublishedIso,
      description: article.excerpt,
      headline: article.title,
      image: [`${SITE_URL}${article.image}`],
      inLanguage: "en-US",
      keywords: [article.primaryKeyword, ...article.secondaryKeywords],
      mainEntityOfPage: articleUrl,
      publisher: {
        "@type": "Organization",
        name: BRAND_NAME,
      },
      about: [
        {
          "@type": "Thing",
          name: article.searchIntent,
        },
        {
          "@type": "Place",
          name: "Seattle, WA",
        },
      ],
    };

    return (
      <>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="search-intent" content={article.searchIntent} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={BRAND_NAME} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={`${SITE_URL}${article.image}`} />
        <meta property="article:section" content={article.category} />
        <meta
          property="article:published_time"
          content={article.datePublishedIso}
        />
        <meta
          property="article:modified_time"
          content={article.dateModifiedIso}
        />
        {article.secondaryKeywords.slice(0, 8).map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={`${SITE_URL}${article.image}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </>
    );
  })();
