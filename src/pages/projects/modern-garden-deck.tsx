import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function ModernGardenDeckPage() {
  return <RecentWorkProjectDetail slug="modern-garden-deck" />;
}

export const Head = createRecentWorkProjectHead("modern-garden-deck");
