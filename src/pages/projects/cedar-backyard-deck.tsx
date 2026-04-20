import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function CedarBackyardDeckPage() {
  return <RecentWorkProjectDetail slug="cedar-backyard-deck" />;
}

export const Head = createRecentWorkProjectHead("cedar-backyard-deck");
