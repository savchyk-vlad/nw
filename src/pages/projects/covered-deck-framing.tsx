import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function CoveredDeckFramingPage() {
  return <RecentWorkProjectDetail slug="covered-deck-framing" />;
}

export const Head = createRecentWorkProjectHead("covered-deck-framing");
