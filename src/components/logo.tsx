import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";
import { ColorModeContext } from "../context/colorMode";

export default function () {
  const intl = useIntl();
  const { colorMode } = useContext(ColorModeContext);
  const query = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          logo
          logoDark
        }
      }
    }
  `);

  const logo = colorMode === "dark" ? "logoDark" : "logo";

  return (
    <img className="logo" src={query.site.siteMetadata[logo]} alt={intl.formatMessage({ id: "default.seoTitle" })} />
  );
}
