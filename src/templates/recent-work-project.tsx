import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import RecentWorkProjectDetail from "../components/recent-work-project-detail";
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

export const Head: HeadFC<unknown, ProjectPageContext> = ({ pageContext }) => {
  const project = getRecentWorkProject(pageContext.slug);
  const title = project
    ? `${project.title} | Recent Work | Northwood Renovation`
    : "Project Detail | Northwood Renovation";

  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content={
          project
            ? project.description
            : "Recent fence, deck, and outdoor renovation project details from Northwood Renovation."
        }
      />
    </>
  );
};
