import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Carousel from "../components/carousel";
import { useIntl, Link as MultiLangLink } from "gatsby-plugin-react-intl";
import styled from "styled-components";
import { respondTo } from "../components/util/mediaVar";

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
        <Carousel className="caroussel" />
        <div className="text-primary intro">
          {intl.formatMessage(
            {
              id: "index.textPrimary",
              defaultMessage:
                "Riquest est une organisation loi 1901 ayant pour objectif de proposer un soutien juridique auprès d’activistes, de journalistes et d'ONGs afin de  promouvoir la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.{br}Notre objectif est  de travailler en collaboration avec les acteurs de la société civile souhaitant faire valoir leur droit à l'accès à l'information fiable, diversifiée et pertinente pour l’exercice de leur mission ou la tenue d’un débat public libre. Plus largement, notre objectif comprend la promotion des droits du public en matière d'information, combinant  lorsque nécessaire les actions devant les tribunaux par des activités de plaidoyer, de mobilisation de l’opinion publique, et de formation des parties intéressées et du grand public à l’exercice du droit à l’accès à l’information.{br}Les restrictions indues à l’accès à l’information fragilisent  le recours à un débat public libre et limitent le contrôle démocratique sur certains sujets d’intérêt général. Elles représentent aussi un obstacle pour l’accès à la justice en cas d’atteintes à la santé publique, l’environnement, ou encore les droits humains.{br}Les secrets, comme le secret d’affaire, peuvent entraîner dans leur sillage l’activité de nombre d’acteurs économiques majeurs et ainsi favoriser l'impunité des multinationales et les obstacles à la justice pour les personnes affectées par des violations de droits humains causés par leurs activités.",
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
    </Layout>
  );
};

export default styled(IndexPage)`
  .intro {
    margin-top: 1rem;
  }

  .caroussel {
    ${respondTo.tablet`
      display: none;
    `}
  }
`;
