import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function BackyardFenceRefreshPage() {
  return <RecentWorkProjectDetail slug="backyard-fence-refresh" />;
}

export const Head = createRecentWorkProjectHead("backyard-fence-refresh");
