import * as React from "react";
import { HeadFC } from "gatsby";
import {
  BlogArticleHead,
  BlogArticlePage,
} from "../../components/blog-article-page";
import { getBlogArticleBySlug } from "../../data/blog-articles";

const article = getBlogArticleBySlug("rain-moisture-outdoor-wood");

if (!article) {
  throw new Error("Missing blog article: rain-moisture-outdoor-wood");
}

const RainMoistureOutdoorWoodPage = () => <BlogArticlePage article={article} />;

export default RainMoistureOutdoorWoodPage;

export const Head: HeadFC = () => BlogArticleHead(article);
