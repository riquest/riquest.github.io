import React from "react";
import styled from "styled-components";
import { defineMessages, useIntl } from "gatsby-plugin-react-intl";

interface Props {
  className?: string;
}

const Links = ({ className }: Props) => {
  const intl = useIntl();
  const messages: Record<string, any> = defineMessages({
    "https://www.cada.fr": {
      id: "ressources.usefulLink1",
      defaultMessage: "Site de la Commission d’Accès aux Documents Administratifs",
    },
    "https://ouvre-boite.org": {
      id: "ressources.usefulLink2",
      defaultMessage: "Association l’ouvre boite",
    },
    "https://catalystsforcollaboration.org": {
      id: "ressources.usefulLink3",
      defaultMessage: "Le projet Catalysts for Collaboration sur la collaboration dans le contentieux stratégique",
    },
  });

  return (
    <ul className={className}>
      {Object.keys(messages).map((link: string) => (
        <li className="puce">
          {intl.formatMessage(messages[link])}
          <br />
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default styled(Links)`
  li.puce {
    margin: 2rem 2rem;

    a {
      color: var(--mainRed);
      text-decoration: underline;
    }
  }
`;
