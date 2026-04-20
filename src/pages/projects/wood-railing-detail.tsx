import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function WoodRailingDetailPage() {
  return <RecentWorkProjectDetail slug="wood-railing-detail" />;
}

export const Head = createRecentWorkProjectHead("wood-railing-detail");
