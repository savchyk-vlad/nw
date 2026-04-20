import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("cedar-vs-composite-seattle");

if (!article) {
  throw new Error("Missing blog article: cedar-vs-composite-seattle");
}

const CedarVsCompositeSeattlePage = () => <BlogArticlePage article={article} />;

export default CedarVsCompositeSeattlePage;

export const Head: HeadFC = () => BlogArticleHead(article);
