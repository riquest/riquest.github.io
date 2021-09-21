import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import { useIntl, Link as MultiLangLink } from "gatsby-plugin-react-intl";
import styled from "styled-components";

const IndexPage = ({ className }: { className?: string }): JSX.Element => {
  const intl = useIntl();

  return (
    <Layout placeholder={true} className={className}>
      <SEO
        title={intl.formatMessage({ id: "index.seo.title", defaultMessage: "Reclaim your right to information" })}
        description={intl.formatMessage({
          id: "index.seo.description",
          defaultMessage: "The right to information is very...",
        })}
      />
      <div className="container">
        <Carousel />
        <div className="text-primary intro">
          {intl.formatMessage(
            {
              id: "index.textPrimary",
              defaultMessage: `La Plateforme pour l’accès à l’information est une organisation loi 1901 ayant pour objectif de proposer un soutien juridique pro-bono auprès d’activistes, de journalistes et d'ONGs et de promouvoir la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.{br}{br}La Plateforme travaille en étroite collaboration avec les acteurs de la société civile souhaitant faire valoir leur droit à l'accès à l'information pertinente et nécessaire à l’exercice de leur mission. Plus largement, notre objectif comprend la promotion des droits du public en matière d'information, complétant les actions devant les tribunaux par des activités de plaidoyer, de mobilisation de l’opinion publique, du conseil juridique, ainsi que la formation des parties intéressées et du grand public à l’exercice du droit à l’accès à l’information.`,
            },
            { br: <br /> },
          )}
        </div>
        {/* <p className="tag-line text-secondary">
          {intl.formatMessage({
            id: "index.textSecondary",
            defaultMessage: "We are here to help you regain your right to information",
          })}
        </p>
        <p className="caption text-tertiary">
          {intl.formatMessage({
            id: "index.textTertiary",
            defaultMessage: "Reclaim your right to information because...",
          })}
        </p> */}
        <MultiLangLink to="/about" className="btn">
          {intl.formatMessage({ id: "index.mainTextButton", defaultMessage: "A propos de nous" })}
        </MultiLangLink>
      </div>
      {/* <PortfolioList /> */}
    </Layout>
  );
};

export default styled(IndexPage)`
  .intro {
    margin-top: 1rem;
  }
`;
