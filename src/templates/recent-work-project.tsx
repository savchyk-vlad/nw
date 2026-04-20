import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import RecentWorkProjectDetail from "../components/recent-work-project-detail";
import SeoHead from "../components/seo";
import { getRecentWorkProject } from "../data/recent-work-projects";

type ProjectPageContext = {
  slug: string;
};

const RecentWorkProjectTemplate = ({
  pageContext,
}: PageProps<unknown, ProjectPageContext>) => (
  <RecentWorkProjectDetail slug={pageContext.slug} />
);

export default RecentWorkProjectTemplate;

export const Head: HeadFC<unknown, ProjectPageContext> = ({
  pageContext,
  location,
}) => {
  const project = getRecentWorkProject(pageContext.slug);

  return (
    <SeoHead
      title={
        project
          ? `${project.title} | Recent Work | Northwood Renovation`
          : "Project Detail | Northwood Renovation"
      }
      description={
        project?.description ??
        "Recent fence, deck, and outdoor renovation project details from Northwood Renovation."
      }
      pathname={location.pathname}
      image={project?.image}
    />
  );
};
