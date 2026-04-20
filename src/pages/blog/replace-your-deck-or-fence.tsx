import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("replace-your-deck-or-fence");

if (!article) {
  throw new Error("Missing blog article: replace-your-deck-or-fence");
}

const ReplaceDeckOrFencePage = () => <BlogArticlePage article={article} />;

export default ReplaceDeckOrFencePage;

export const Head: HeadFC = () => BlogArticleHead(article);
