import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("composite-deck");

const CompositeDeckPage = () => <ServiceLandingPage service={service} />;

export default CompositeDeckPage;

export const Head = createServicePageHead(service);
