import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("spring-checklist-decks-fences");

if (!article) {
  throw new Error("Missing blog article: spring-checklist-decks-fences");
}

const SpringChecklistDecksFencesPage = () => (
  <BlogArticlePage article={article} />
);

export default SpringChecklistDecksFencesPage;

export const Head: HeadFC = () => BlogArticleHead(article);
