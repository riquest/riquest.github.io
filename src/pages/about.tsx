import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

import "../style/basepage.less";
import { useIntl } from "gatsby-plugin-react-intl";
import Title from "../components/Title";

const About = function ({ className }: any) {
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
                "Riquest est une organisation loi 1901 ayant pour objectif de proposer un soutien juridique, collaboratif et stratégique pro-bono auprès d’activistes, de journalistes et d'ONGs pour l’exercice de la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.{br}Riquest travaille en étroite collaboration avec les acteurs de la société civile souhaitant faire valoir leur droit à l'accès à l'information pertinente et nécessaire à l’exercice de leur mission. Plus largement, notre objectif comprend la promotion des droits du public en matière d'information, complétant les actions devant les tribunaux par des activités de plaidoyer, de mobilisation de l’opinion publique, du conseil juridique, ainsi que la formation des parties intéressées et du grand public à l’exercice du droit à l’accès à l’information.",
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
                "Les lois sur la liberté de l'information contribuent à assurer la transparence de l’action politique et privée, en soutenant le droit à la liberté d'expression et le droit de libre association. {br}A ce jour, la France ne bénéficie pas de loi solide et unique garantissant aux citoyens l’accès à l’information d’intérêt public. Alors que la directive européenne de protection des lanceurs d’alertes reste à transposer en droit français, le renforcement du secret commercial à l'échelle de l'UE et sa transposition dans l’ordre interne français jettent une ombre noire sur l'avenir de la liberté de l'information. La loi sur l'accès aux documents administratifs ainsi que la loi sur le secret d'Etat en France prévoient de nombreux régimes spéciaux aux contours larges.  De même, la possibilité pour le juge judiciaire et administratif et constitutionnel d’opérer son contrôle se trouve largement affaiblie par le développement de secrets aux contours poreux et étendus, en particulier concernant les pratiques relevant de la « sécurité nationale ».{br}Les restrictions indues pour l’accès à l’information impactent non seulement la liberté du public en France à recevoir les informations pertinentes pour l’existence d’un débat public et contrôle démocratique sur certains sujets, mais elles représentent également un obstacle pour l’accès à la justice, le droit à un procès équitable et le contrôle judiciaire dans les domaines de la santé publique, le respect des droits humains et du droit international humanitaire, ou encore les crimes économiques. Au-delà de l’opacité disproportionnée qu’ils apportent à l’action publique et politique, ces secrets – y compris le secret défense nationale classiquement applicable à l’Etat – peuvent entraîner dans leur sillage l’activité de nombre d’acteurs économiques majeurs. {br}De la même manière, le secret - tel que le secret des affaires - est parfois invoqué par des acteurs commerciaux dans le cadre d’actions juridiques concernant des violations graves de droits humains ou crimes environnementaux. Ce recours parfois disproportionné au secret rend difficile l’accès à la justice et à la réparation pour les personnes affectées par ces violations, et réduit la possibilité pour toutes les parties prenantes de tirer les leçons dans une optique de prévention de violations futures.",
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
            id: "about.title.mission",
            defaultMessage: "Notre mission",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.text.mission",
              defaultMessage:
                "Riquest est une organisation jeune dont l’ambition est de rendre plus accessible l’exercice du droit à l’accès à l’information. Au delà du travail de vulgarisation des lois et procédures applicables et de la mise à disposition de ressources pertinentes, nous souhaitons développer un réseau institutionnalisé d’expert.e.s et bénéficiaires de la liberté d'information de différents horizons, afin de permettre un soutien juridique adéquat, une réflexion collégiale et collaborative sur les problématiques les plus complexes d’accès à l’information.{br}Riquest vise à concevoir avec les organisations de la société civile, des militants pour les droits humains ou journalistes des stratégies de contentieux et de plaidoyer juridique visant l’obtention d’une information d’intérêt public.{br}Ces stratégies pourront par exemple :",
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
        <ul>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.mission.puce1",
              defaultMessage:
                "contester les limites et la conventionalité des lois sur l'accès à l'information en France devant les tribunaux nationaux et régionaux tels que la Cour européenne des droits de l’Homme lorsque cela est pertinent;",
            })}
          </li>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.mission.puce2",
              defaultMessage:
                "porter dans le débat public, le débat politique et juridique l’importance de l’accès à l’information pour l’exercice de multiples protections, au-delà de la liberté d’expression : la santé publique, la sécurité publique, l’accès à la justice pour les personnes affectées par des violations de droits humains, y compris lorsqu’elles sont causées par les activités des multinationales.",
            })}
          </li>
          <li className="puce">
            {intl.formatMessage({
              id: "about.text.mission.puce3",
              defaultMessage:
                "faciliter et faire connaître le recours aux mécanismes juridiques permettant l’accès à l’information : publication de guides à l'intention des citoyens et acteurs de la société civile qui souhaitent déposer une demande d'accès à l'information, organisation avec l'aide de praticiens et d'universitaires de premier plan de formations juridiques à l'intention des journalistes, organisations de la société civile ou citoyens concernés sur ce thème.",
            })}
          </li>
        </ul>
        <Title
          text={intl.formatMessage({
            id: "about.title.collaboration",
            defaultMessage: "Nos collaborations actuelles",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.text.collaboration",
              defaultMessage:
                "Depuis 2020, Riquest accompagne Amnesty International, le Centre Européen pour les droits humains et Constitutionnels (ECCHR) et le média d’investigation Disclose dans l’obtention d’informations relatives aux exportations françaises d’armement militaire vers l’Arabie Saoudite et les Emirats Arabes Unis. {br}Riquest accompagne par ailleurs d’autres organisations dela société civile françaises et étrangères dans l’exercice de leur droit à l’information en France, sur des problématiques de transferts de technologie dans les zones de conflit armé. {br}Riquest collabore avec l’organisation The Signals Network, une organisation de protection des lanceurs d’alete de d’investigation basée aux Etats-Unis et active in France des problématiques d’accès à l’information en France relatives à la santé publique.{br}Riquest est enfin en avec La Maison des Lanceurs d’Alertes, une organisation de la société civile, mise en place à l’initiative de 17 organisations s’engageant à œuvrer conjointement à la protection des lanceurs d’alerte en les accompagnant au quotidien et à plaider pour une amélioration de leur protection en France.",
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
      </section>
    </Layout>
  );
};

export default styled(About)`
  .content {
    margin-top: 0;
  }

  h1.title {
    font-size: 2rem;
    margin-top: 0.1rem;
  }

  li.puce {
    margin: 2rem 2rem;
  }
`;
