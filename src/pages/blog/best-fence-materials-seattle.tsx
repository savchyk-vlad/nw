import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("best-fence-materials-seattle");

if (!article) {
  throw new Error("Missing blog article: best-fence-materials-seattle");
}

const BestFenceMaterialsSeattlePage = () => (
  <BlogArticlePage article={article} />
);

export default BestFenceMaterialsSeattlePage;

export const Head: HeadFC = () => BlogArticleHead(article);
