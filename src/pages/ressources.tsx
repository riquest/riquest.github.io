import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

import "../style/basepage.less";
import { Link, useIntl } from "gatsby-plugin-react-intl";
import Title from "../components/Title";
import Links from "../components/Links";
import Articles from "../components/Articles";

const Ressources = function ({ data, className }: any) {
  const intl = useIntl();
  // const messages = defineMessages({
  //   title: {
  //     id: "ressources.title",
  //     defaultMessage: "",
  //   },
  //   description: {
  //     id: "ressources.description",
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
          id: "ressources.seo.title",
          defaultMessage: "Ressources",
        })}
        description={intl.formatMessage({
          id: "ressources.seo.description",
          defaultMessage: "Ressources de Riquest",
        })}
      />
      <section className="container">
        <Title
          text={intl.formatMessage({
            id: "ressources.title",
            defaultMessage: "Ressources",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "ressources.text",
              defaultMessage:
                "Riquest et ses membres publient ici régulièrement des documents d'orientation ou des études sur les lacunes de la législation française actuelle, et les moyens d’exercer le droit à l’information.{br}Cette section de notre site est en cours de construction et ambitionne d’être régulièrement nourrie. Si vous souhaitez ajouter une ressource pertinente (site internet utile, article académique pertinent, écritures juridiques,...) n’hésitez pas à {link}",
            },
            {
              br: (
                <>
                  <br />
                  <br />
                </>
              ),
              link: (
                <Link to="/contact" className="link">
                  {intl.formatMessage({ id: "index.ressources.contact", defaultMessage: "nous contacter" })}
                </Link>
              ),
            },
          )}
        </div>
        <div className="text-primary">
          <h2 className="title">
            {intl.formatMessage({
              id: "ressources.title.links",
              defaultMessage: "Liens utiles",
            })}
          </h2>
          <Links />
          <h2 className="title">
            {intl.formatMessage({
              id: "ressources.title.articles",
              defaultMessage: " Articles sur le droit à l’information et le secret",
            })}
          </h2>
          <Articles />
        </div>
      </section>
    </Layout>
  );
};

export default styled(Ressources)`
  h2.title {
    font-size: 1.8rem;
    margin-top: 2rem;
  }

  .link {
    color: var(--mainRed);
    text-decoration: underline;
  }
`;
