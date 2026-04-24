import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("cedar-vs-composite-decking-everett");

if (!article) {
  throw new Error("Missing blog article: cedar-vs-composite-decking-everett");
}

const CedarVsCompositeDeckingEverettPage = () => (
  <BlogArticlePage article={article} />
);

export default CedarVsCompositeDeckingEverettPage;

export const Head: HeadFC = () => BlogArticleHead(article);
