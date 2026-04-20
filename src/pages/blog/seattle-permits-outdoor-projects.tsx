import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("seattle-permits-outdoor-projects");

if (!article) {
  throw new Error("Missing blog article: seattle-permits-outdoor-projects");
}

const SeattlePermitsOutdoorProjectsPage = () => (
  <BlogArticlePage article={article} />
);

export default SeattlePermitsOutdoorProjectsPage;

export const Head: HeadFC = () => BlogArticleHead(article);
