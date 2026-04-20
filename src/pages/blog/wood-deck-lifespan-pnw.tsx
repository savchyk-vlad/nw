import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("wood-deck-lifespan-pnw");

if (!article) {
  throw new Error("Missing blog article: wood-deck-lifespan-pnw");
}

const WoodDeckLifespanPnwPage = () => <BlogArticlePage article={article} />;

export default WoodDeckLifespanPnwPage;

export const Head: HeadFC = () => BlogArticleHead(article);
