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

  return (
    <Layout className={className}>
      <SEO
        title={intl.formatMessage({
          id: "contact.seo.title",
          defaultMessage: "Contact",
        })}
        description={intl.formatMessage({
          id: "contact.seo.description",
          defaultMessage: "Contact Riquest et son équipe",
        })}
      />
      <section className="container">
        <Title
          text={intl.formatMessage({
            id: "contact.title",
            defaultMessage: "Contact",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "contact.text",
              defaultMessage:
                "Riquest est jeune, et a vocation à s’enrichir de perspectives et expertises variées sur le thème de la liberté d’expression et l’accès à l’information. {br}Contactez nous! Etant en cours de structuration, Riquest a pour ambition de réunir l’expertise de acteurs universitaires, des praticiens du droit, journalistes, lanceurs d’alerte ou militants pour l’accès à l’information aux fins de constituer un Board de direction et de conseil varié, donnant priorité à une réflexion interdisciplinaire et collégiale sur des problématiques essentielles et complexes.",
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
            id: "contact.title.team",
            defaultMessage: "L'équipe",
          })}
        />
        <article className="post">
          <div className="content row flex">
            <div className="col s4 m1 l1">
              <div className="img profile-pic">
                <Img className="teamPic" fluid={data.fileName.nodes[0].childImageSharp.fluid} />
              </div>
            </div>
            <div className="col s8 m5 l5 bio">
              <h1 className="title">
                {intl.formatMessage({
                  id: "contact.cannelle.title",
                  defaultMessage: "Cannelle Lavite",
                })}
              </h1>
              {intl.formatMessage({
                id: "contact.cannelle.description",
                defaultMessage: "Cofondatrice et coordinatrice de la plateforme",
              })}
              <a className="color-primary email" href="mailto:contact@riquest.org">
                contact@riquest.org
              </a>
            </div>
            <div className="col s4 m1 l1">
              <div className="img profile-pic">
                <Img className="teamPic" fluid={data.fileName.nodes[1].childImageSharp.fluid} />
              </div>
            </div>
            <div className="col s8 m5 l5 bio">
              <h1 className="title">
                {intl.formatMessage({
                  id: "contact.jp.title",
                  defaultMessage: "Jean-Philippe Foegle",
                })}
              </h1>
              {intl.formatMessage({
                id: "contact.jp.description",
                defaultMessage: "Cofondateur et coordinateur de la plateforme",
              })}
              <a className="color-primary email" href="mailto:contact@riquest.org">
                contact@riquest.org
              </a>
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
    /* margin-top: 0.1rem; */
  }

  .email {
    margin-top: 1rem;
    display: inline-block;
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
    /* overflow: inherit !important; */
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
