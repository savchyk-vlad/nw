import * as React from "react";
import { HeadFC, Link } from "gatsby";
import "../styles/blog.css";
import renderHighlightedText from "./brand-text";
import SeoHead from "./seo";
import SiteLayout from "./site-layout";
import { blogArticles, type BlogArticle } from "../data/blog-articles";
import { SITE_NAME, SITE_URL } from "../lib/site-metadata";

type BlogArticlePageProps = {
  article: BlogArticle;
};

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

  const checklistHeading = article.checklistHeading ?? "Homeowner Checklist";
  const checklistIntro =
    article.checklistIntro ??
    "Use this checklist before starting your project so scope, budget, and expectations stay clear from the beginning.";
  const localNotesHeading = article.localNotesHeading ?? "Local Notes";
  const localNotesIntro = article.localNotesIntro;
  const proSectionHeading =
    article.proSectionHeading ?? "When to Call a Professional";
  const proSectionIntro =
    article.proSectionIntro ??
    "DIY can handle light upkeep, but these conditions usually benefit from professional assessment and structured repair planning.";

  const tocItems =
    article.tocItems ??
    [
      ...article.sections.map((section) => section.heading),
      checklistHeading,
      ...(article.localNotes.length ? [localNotesHeading] : []),
      proSectionHeading,
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
                <strong>Location:</strong> {renderHighlightedText("Everett, WA")}
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
              {section.level === 3 ? (
                <h3>{renderHighlightedText(section.heading)}</h3>
              ) : (
                <h2>{renderHighlightedText(section.heading)}</h2>
              )}
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
            id={slugifyHeading(checklistHeading)}
          >
            <h2>{checklistHeading}</h2>
            <p>{renderHighlightedText(checklistIntro)}</p>
            <ul>
              {article.checklist.map((item) => (
                <li key={item}>{renderHighlightedText(item)}</li>
              ))}
            </ul>
          </section>

          {article.localNotes.length ? (
            <section
              className="blog-article-block"
              id={slugifyHeading(localNotesHeading)}
            >
              <h2>{localNotesHeading}</h2>
              {localNotesIntro ? <p>{renderHighlightedText(localNotesIntro)}</p> : null}
              {article.localNotes.map((note) => (
                <p key={note}>{renderHighlightedText(note)}</p>
              ))}
            </section>
          ) : null}

          <section
            className="blog-article-block"
            id={slugifyHeading(proSectionHeading)}
          >
            <h2>{proSectionHeading}</h2>
            <p>{renderHighlightedText(proSectionIntro)}</p>
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
          <h2>{article.ctaTitle ?? "Need help planning a fence or deck project?"}</h2>
          {(article.ctaParagraphs ?? [
            "Northwood Renovation helps Everett-area and greater Puget Sound homeowners build durable fences, decks, railings, and outdoor structures. Tell us about your project and we'll help you understand the next step.",
          ]).map((paragraph) => (
            <p key={paragraph}>{renderHighlightedText(paragraph)}</p>
          ))}
          <div className="blog-final-cta__actions">
            <Link
              to={article.ctaPrimaryTo ?? "/contact#contact-form"}
              className="blog-button blog-button--primary"
            >
              {article.ctaPrimaryLabel ?? "Request a Free Estimate"}
            </Link>
            {article.ctaSecondaryLabel && article.ctaSecondaryTo ? (
              <Link to={article.ctaSecondaryTo} className="blog-button blog-button--secondary">
                {article.ctaSecondaryLabel}
              </Link>
            ) : null}
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
    const articlePath = `/blog/${article.slug}/`;
    const articleUrl = `${SITE_URL}${articlePath}`;
    const keywords = [article.primaryKeyword, ...article.secondaryKeywords];
    const ogTitle = article.seoTitle ?? article.title;
    const ogDescription = article.metaDescription ?? article.excerpt;
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      articleSection: article.category,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      dateModified: article.dateModifiedIso,
      datePublished: article.datePublishedIso,
      description: ogDescription,
      headline: article.title,
      image: [`${SITE_URL}${article.image}`],
      inLanguage: "en-US",
      keywords: [article.primaryKeyword, ...article.secondaryKeywords],
      mainEntityOfPage: articleUrl,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
      },
      about: [
        {
          "@type": "Thing",
          name: article.searchIntent,
        },
        {
          "@type": "Place",
          name: "Everett, WA",
        },
      ],
    };
    const faqJsonLd = article.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

    return (
      <>
        <SeoHead
          title={ogTitle}
          description={ogDescription}
          pathname={articlePath}
          image={article.image}
          imageAlt={article.imageAlt}
          keywords={keywords}
          ogType="article"
          schema={faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd}
        />
        <meta name="search-intent" content={article.searchIntent} />
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
      </>
    );
  })();
