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
        title={intl.formatMessage({ id: "index.seo.title", defaultMessage: "Riquest" })}
        description={intl.formatMessage({
          id: "index.seo.description",
          defaultMessage:
            "La Plateforme pour l’accès à l’information. Nous proposons un soutien juridique pro-bono auprès d’activistes, de journalistes et d'ONGs. Riquest promeut la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique",
        })}
      />
      <div className="container">
        <Carousel />
        <div className="text-primary intro">
          {intl.formatMessage(
            {
              id: "index.textPrimary",
              defaultMessage:
                "Riquest est une organisation loi 1901 ayant pour objectif de proposer un soutien juridique pro-bono auprès d’activistes, de journalistes et d'ONGs et de promouvoir la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.{br}Notre objectif est  de travailler en étroite collaboration avec les acteurs de la société civile souhaitant faire valoir leur droit à l'accès à l'information pertinente et nécessaire à l’exercice de leur mission. Plus largement, notre objectif comprend la promotion des droits du public en matière d'information, complétant les actions devant les tribunaux par des activités de plaidoyer, de mobilisation de l’opinion publique, et de la formation des parties intéressées et du grand public à l’exercice du droit à l’accès à l’information.{br}Les restrictions indues pour l’accès à l’information impactent non seulement la liberté du public en France à recevoir les informations pertinentes pour l’existence d’un débat public et contrôle démocratique sur certains sujets, mais aussi obstacle pour l’accès à la justice, le droit à un procès équitable et le contrôle judiciaire dans les domaines de la santé publique, le respect des droits humains et du droit international humanitaire, ou encore les crimes économiques. {br}Au-delà de l’opacité disproportionnée qu’ils apportent à l’action publique et politiques, ces secrets peuvent entrainer dans leur sillage l’activité de nombre d’acteurs économiques majeurs favorisent l'impunité des multinationales et les obstacles à la justice pour les personnes affectées par des violations de droits humains causés par leurs activités.",
            },
            {
              br: (
                <>
                  <br />
                  <br />
                </>
              ),
            },
          )}
        </div>
        <MultiLangLink to="/about" className="btn">
          {intl.formatMessage({ id: "index.mainTextButton", defaultMessage: "Découvrir Riquest" })}
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
