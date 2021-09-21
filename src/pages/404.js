import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useIntl } from "gatsby-plugin-react-intl";

const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section id="404" className="container" style={{ minHeight: "600px" }}>
        <div className="section-title">
          <SectionTitle title={intl.formatMessage({ id: "notfound.header", defaultMessage: "Not found" })} />
          <div className="text-primary">
            {" "}
            {intl.formatMessage({
              id: "notfound.description",
              defaultMessage: "You just hit a route that doesn't exist... the sadness.",
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
