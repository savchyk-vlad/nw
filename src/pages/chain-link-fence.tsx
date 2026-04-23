import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../components/service-landing-page";
import { getServicePage } from "../data/service-pages";

const service = getServicePage("chain-link-fence");

const ChainLinkFencePage = () => <ServiceLandingPage service={service} />;

export default ChainLinkFencePage;

export const Head = createServicePageHead(service);
