import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function HorizontalWoodFencePage() {
  return <RecentWorkProjectDetail slug="horizontal-wood-fence" />;
}

export const Head = createRecentWorkProjectHead("horizontal-wood-fence");
