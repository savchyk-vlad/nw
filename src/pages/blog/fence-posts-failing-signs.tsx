import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("fence-posts-failing-signs");

if (!article) {
  throw new Error("Missing blog article: fence-posts-failing-signs");
}

const FencePostsFailingSignsPage = () => <BlogArticlePage article={article} />;

export default FencePostsFailingSignsPage;

export const Head: HeadFC = () => BlogArticleHead(article);
