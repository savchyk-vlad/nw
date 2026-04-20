import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("prepare-yard-fence-deck-project");

if (!article) {
  throw new Error("Missing blog article: prepare-yard-fence-deck-project");
}

const PrepareYardFenceDeckProjectPage = () => (
  <BlogArticlePage article={article} />
);

export default PrepareYardFenceDeckProjectPage;

export const Head: HeadFC = () => BlogArticleHead(article);
