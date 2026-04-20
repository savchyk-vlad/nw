import * as React from "react";
import { HeadFC } from "gatsby";
import ServiceLandingPage from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("composite-deck");

const CompositeDeckPage = () => <ServiceLandingPage service={service} />;

export default CompositeDeckPage;

export const Head: HeadFC = () => (
  <>
    <title>{service.titleTag}</title>
    <meta name="description" content={service.metaDescription} />
  </>
);
