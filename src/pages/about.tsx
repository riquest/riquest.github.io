import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import styled from "styled-components";

import "../style/basepage.less";
import { useIntl } from "gatsby-plugin-react-intl";
import Title from "../components/Title";

const About = function ({ data, className }: any) {
  const intl = useIntl();
  // const messages = defineMessages({
  //   title: {
  //     id: "about.title",
  //     defaultMessage: "",
  //   },
  //   description: {
  //     id: "about.description",
  //     defaultMessage: "",
  //     values: {
  //       newline: <br />,
  //     },
  //   },
  // });

  return (
    <Layout className={className}>
      <SEO
        title={intl.formatMessage({
          id: "about.seo.title",
          defaultMessage: "A Propos",
        })}
        description={intl.formatMessage({
          id: "about.seo.description",
          defaultMessage: "A propos de Riquest et son équipe...",
        })}
      />
      <section className="container">
        <Title
          text={intl.formatMessage({
            id: "about.title",
            defaultMessage: "A Propos",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.text",
              defaultMessage:
                "La Plateforme pour l’accès à l’information est une organisation loi 1901 ayant pour objectif de proposer un soutien juridique pro-bono auprès d’activistes, de journalistes et d'ONGs et de promouvoir la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.{br}La Plateforme travaille en étroite collaboration avec les acteurs de la société civile souhaitant faire valoir leur droit à l'accès à l'information pertinente et nécessaire à l’exercice de leur mission. Plus largement, notre objectif comprend la promotion des droits du public en matière d'information, complétant les actions devant les tribunaux par des activités de plaidoyer, de mobilisation de l’opinion publique, du conseil juridique, ainsi que la formation des parties intéressées et du grand public à l’exercice du droit à l’accès à l’information.",
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
        <Title
          text={intl.formatMessage({
            id: "about.title.whyriquest",
            defaultMessage: "Pourquoi Riquest ?",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.text.whyriquest",
              defaultMessage:
                "Les lois sur la liberté de l'information contribuent à assurer la transparence de l’action politique et privée, en soutenant le droit à la liberté d'expression et le droit de libre association. De même, la possibilité pour le juge judiciaire et administratif et constitutionnel d’opérer son contrôle se trouve largement affaiblie par le développement de secrets aux contours poreux et étendus, en particulier concernant les pratiques relevant de la « sécurité nationale ».{br} A ce jour, la France ne bénéficie pas de loi solide et unique garantissant aux citoyens l’accès à l’information d’intérêt public. Alors que la directive européenne de protection des lanceurs d’alertes[1] reste à transposer en droit français, le renforcement du secret commercial à l'échelle de l'UE et sa transposition dans l’ordre interne français jettent une ombre noire sur l'avenir de la liberté de l'information. La loi sur l'accès aux documents administratifs ainsi que la loi sur le secret d'Etat en France prévoient de nombreux régimes spéciaux aux contours larges.{br}Les restrictions indues pour l’accès à l’information impactent non seulement la liberté du public en France à recevoir les informations pertinentes pour l’existence d’un débat public et contrôle démocratique sur certains sujets, mais elles représentent également un obstacle pour l’accès à la justice, le droit à un procès équitable et le contrôle judiciaire dans les domaines de la santé publique, le respect des droits humains et du droit international humanitaire, ou encore les crimes économiques. Au-delà de l’opacité disproportionnée qu’ils apportent à l’action publique et politiques, ces secrets – y compris le secret défense nationale classiquement applicable à l’Etat – peuvent entrainer dans leur sillage l’activité de nombre d’acteurs économiques majeurs. De la même manière, le secret commercial applicable aux acteurs commerciaux pourrait être invoqué dans le cadre d’actions visant à clarifier le rôle de la France dans certains conflits armés, les informations relatives à l’exportation de matériel d’armement rentrant dans la définition large du secret d’affaire.",
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
        <Title
          text={intl.formatMessage({
            id: "about.title.what",
            defaultMessage: "Nos activités",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.text.what",
              defaultMessage: `Riquest vise à concevoir avec les organisations de la société civile, des militants pour les droits humains ou journalistes des stratégies de contentieux et de plaidoyer juridique visant l’obtention d’une information d’intérêt public.
                {br}Riquest est une organisation jeune dont l’ambition est de développer un réseau institutionnalisé d’experts et utilisateurs de la liberté d'information et le droit à recevoir l’information, afin de permettre un soutien juridique adéquat, une réflexion collégiale et experte sur les problématiques les plus complexes d’accès à l’information.
                {br}{br}Ces stratégies contentieuses pourront par exemple :
                {br}`,
            },
            { br: <br /> },
          )}
        </div>
        <ul>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.what.puce1",
              defaultMessage:
                "contester les limites et la conventionalité des lois sur l'accès à l'information en France devant les tribunaux nationaux et régionaux tels que la Cour Européenne des droits de l’Homme lorsque cela est pertinent;",
            })}
          </li>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.what.puce2",
              defaultMessage:
                "porter dans le débat public, le débat politique et juridique l’importance de l’accès à l’information pour l’exercice de multiples protections, au-delà de la liberté d’expression : la santé publique, la sécurité publique, l’accès à la justice pour les personnes affectées par des violations de droits humains, y compris lorsqu’elles sont causées par les activités des multinationales.",
            })}
          </li>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.what.puce3",
              defaultMessage:
                "faciliter et faire connaître le recours aux mécanismes juridiques permettant l’accès à l’information : publication de guides à l'intention des citoyens et acteurs de la société civile qui souhaitent déposer une demande d'accès à l'information, organisation avec l'aide de praticiens et d'universitaires de premier plan de formations juridiques à l'intention des journalistes, organisations de la société civile ou citoyens concernés sur ce thème.",
            })}
          </li>
        </ul>
        <Title
          text={intl.formatMessage({
            id: "about.title.team",
            defaultMessage: "L'équipe",
          })}
        />
        <article className="post">
          <div className="content row flex">
            <div className="col s4 m2 l2">
              <div className="img profile-pic">
                <Img className="teamPic" fluid={data.fileName.nodes[0].childImageSharp.fluid} />
              </div>
            </div>
            <div className="col s8 m4 l4 bio">
              <h1 className="title">
                {intl.formatMessage({
                  id: "about.cannelle.title",
                  defaultMessage: "Cannelle Lavite",
                })}
              </h1>
              {intl.formatMessage({
                id: "about.cannelle.description",
                defaultMessage: "Cofondatrice et coordinatrice de la plateforme",
              })}
            </div>
            <div className="col s4 m2 l2">
              <div className="img profile-pic">
                <Img className="teamPic" fluid={data.fileName.nodes[1].childImageSharp.fluid} />
              </div>
            </div>
            <div className="col s8 m4 l4 bio">
              <h1 className="title">
                {intl.formatMessage({
                  id: "about.jp.title",
                  defaultMessage: "Jean-Philippe Foegle",
                })}
              </h1>
              {intl.formatMessage({
                id: "about.jp.description",
                defaultMessage: "Cofondateur et coordinateur de la plateforme",
              })}
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default styled(About)`
  .profile-pic img {
    border-radius: 50%;
    margin-top: 0.1rem;
  }

  .content {
    margin-top: 0;
  }

  h1.title {
    font-size: 2rem;
    margin-top: 0.1rem;
  }

  .bio {
    padding: 0 2rem 2rem 2rem;
  }

  li.puce {
    margin: 2rem 2rem;
  }

  .teamPic {
    overflow: inherit !important;
  }
`;

export const query = graphql`
  {
    fileName: allFile(filter: { relativeDirectory: { eq: "profile-pic" } }, sort: { fields: name }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
