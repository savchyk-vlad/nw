import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function DeckStairsLandingPage() {
  return <RecentWorkProjectDetail slug="deck-stairs-landing" />;
}

export const Head = createRecentWorkProjectHead("deck-stairs-landing");
