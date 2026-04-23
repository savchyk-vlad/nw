import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../components/service-landing-page";
import { getServicePage } from "../data/service-pages";

const service = getServicePage("cedar-wood-fence");

const CedarWoodFencePage = () => <ServiceLandingPage service={service} />;

export default CedarWoodFencePage;

export const Head = createServicePageHead(service);
