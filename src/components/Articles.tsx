import React from "react";
import styled from "styled-components";
import { defineMessages, useIntl } from "gatsby-plugin-react-intl";

interface Props {
  className?: string;
}

const Articles = ({ className }: Props) => {
  const intl = useIntl();
  const articles: Record<string, any> = defineMessages({
    "/articles/La-transparence-face-a-ses-limites.pdf": {
      id: "ressources.article2",
      defaultMessage: "La transparence face à ses limites (francais)",
    },
    "/articles/Le-droit-a-l-information-un-droit-humain.pdf": {
      id: "ressources.article3",
      defaultMessage: "Le droit à l’information : un droit de l’Homme (francais)",
    },
    "/articles/Le-secret-défense-obstacle-majeur-au-droit-a-l-information.pdf": {
      id: "ressources.article4",
      defaultMessage: "Le secret-défense, obstacle majeur au droit à l'information (francais)",
    },
    "/articles/EU-Directive-on-trade-secrets-and-whistleblowing.pdf": {
      id: "ressources.article1",
      defaultMessage: "Directive européenne sur le secret des affaires et lanceurs d’alerte (anglais)",
    },
  });

  return (
    <ul className={className}>
      {Object.keys(articles).map((link: string) => (
        <li className="puce">
          {intl.formatMessage(articles[link])}{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {intl.formatMessage({
              id: "ressources.articles",
              defaultMessage: "Lire l'article",
            })}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default styled(Articles)`
  li.puce {
    margin: 2rem 2rem;

    a {
      color: var(--mainRed);
      text-decoration: underline;
    }
  }
`;
