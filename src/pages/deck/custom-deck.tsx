import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("custom-deck");

const CustomDeckPage = () => <ServiceLandingPage service={service} />;

export default CustomDeckPage;

export const Head = createServicePageHead(service);
