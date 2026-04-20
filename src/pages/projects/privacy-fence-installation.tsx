import * as React from "react";
import RecentWorkProjectDetail, {
  createRecentWorkProjectHead,
} from "../../components/recent-work-project-detail";

export default function PrivacyFenceInstallationPage() {
  return <RecentWorkProjectDetail slug="privacy-fence-installation" />;
}

export const Head = createRecentWorkProjectHead("privacy-fence-installation");
