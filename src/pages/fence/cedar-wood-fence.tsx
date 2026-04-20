import * as React from "react";
import { HeadFC } from "gatsby";
import ServiceLandingPage from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("cedar-wood-fence");

const CedarWoodFencePage = () => <ServiceLandingPage service={service} />;

export default CedarWoodFencePage;

export const Head: HeadFC = () => (
  <>
    <title>{service.titleTag}</title>
    <meta name="description" content={service.metaDescription} />
  </>
);
