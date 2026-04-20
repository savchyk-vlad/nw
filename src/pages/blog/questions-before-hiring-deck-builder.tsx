import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("questions-before-hiring-deck-builder");

if (!article) {
  throw new Error("Missing blog article: questions-before-hiring-deck-builder");
}

const QuestionsBeforeHiringDeckBuilderPage = () => (
  <BlogArticlePage article={article} />
);

export default QuestionsBeforeHiringDeckBuilderPage;

export const Head: HeadFC = () => BlogArticleHead(article);
