import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function SunsetFenceLinePage() {
  return <RecentWorkProjectDetail slug="sunset-fence-line" />;
}

export const Head = createRecentWorkProjectHead("sunset-fence-line");
